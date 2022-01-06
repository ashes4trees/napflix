import { RECEIVE_USER_PROFILES, RECEIVE_NEW_PROFILE, REMOVE_PROFILE } from "../actions/profile_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_PROFILES:
            return action.profiles;
        case RECEIVE_NEW_PROFILE:
            return Object.assign({}, state, { [action.profile.id]: action.profile})
        case REMOVE_PROFILE:
            let nextState = Object.assign({}, state)
            delete nextState[action.profileId]
            return nextState
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default profilesReducer;