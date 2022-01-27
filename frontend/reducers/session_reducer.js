
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_CURRENT_PROFILE, RESET_CURRENT_PROFILE } from "../actions/profile_actions";
import { RECEIVE_MOVIE } from '../actions/movie_actions';

const _nullSession = {
    id: null,
    profileId: null
};


const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState['id'] = action.currentUser.id;
            return nextState;
        case RECEIVE_CURRENT_PROFILE:
            nextState['profileId'] = action.currentProfile.id;
            return nextState;
        case RESET_CURRENT_PROFILE:
            nextState['profileId'] = null;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;