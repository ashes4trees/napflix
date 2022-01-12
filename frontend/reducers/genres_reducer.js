import { RECEIVE_ALL_MOVIES } from "../actions/movie_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const genresReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies.genres;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default genresReducer;