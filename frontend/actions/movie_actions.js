import * as MovieApiUtil from '../util/movie_api_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';

const receiveAllMovies = movies => ({
    type: RECEIVE_ALL_MOVIES,
    movies
});

export const fetchMovies = () => dispatch =>
    MovieApiUtil.fetchMovies()
        .then(movies => dispatch(receiveAllMovies(movies)));