import * as MovieApiUtil from '../util/movie_api_util';
import { receiveCurrentProfile } from './profile_actions';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveAllMovies = movies => ({
    type: RECEIVE_ALL_MOVIES,
    movies
});

// const receiveMovie = movie => ({
//     type: RECEIVE_ALL_MOVIES,
//     movie
// });

export const fetchMovies = () => dispatch =>
    MovieApiUtil.fetchMovies()
        .then(movies => dispatch(receiveAllMovies(movies)));

// export const fetchMovie = movieId => dispatch => 
//     MovieApiUtil.fetchMovie(movieId)
//         .then(movie => dispatch(receiveMovie(movie)));

export const createListItem = (movieId, profileId) => dispatch =>
    MovieApiUtil.createListItem(movieId, profileId)
        .then(profile => dispatch(receiveCurrentProfile(profile)))