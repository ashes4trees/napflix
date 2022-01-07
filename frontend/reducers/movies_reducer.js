import { RECEIVE_ALL_MOVIES } from "../actions/movie_actions";

const moviesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies.movies;
        default:
            return state;
    }
}

export default moviesReducer;
