import { RECEIVE_ALL_MOVIES } from "../actions/movie_actions";

const genresReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies.genres;
        default:
            return state;
    }
}

export default genresReducer;