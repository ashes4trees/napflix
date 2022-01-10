import { RECEIVE_ALL_MOVIES } from "../actions/movie_actions";

const tagsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies.tags;
        default:
            return state;
    }
}

export default tagsReducer;