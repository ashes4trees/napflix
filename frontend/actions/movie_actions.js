import * as MovieApiUtil from '../util/movie_api_util';
import { receiveCurrentProfile } from './profile_actions';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveAllMovies = movies => ({
    type: RECEIVE_ALL_MOVIES,
    movies
});

export const fetchMovies = () => dispatch =>
    MovieApiUtil.fetchMovies()
        .then(movies => dispatch(receiveAllMovies(movies)));

export const createListItem = (movieId, profileId) => dispatch =>
    MovieApiUtil.createListItem(movieId, profileId)
        .then(profile => dispatch(receiveCurrentProfile(profile)))

export const deleteListItem = (listId) => dispatch => 
    MovieApiUtil.deleteListItem(listId)
        .then(profile => dispatch(receiveCurrentProfile(profile)))