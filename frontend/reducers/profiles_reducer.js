import { RECEIVE_USER_PROFILES, RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_PROFILES:
            return action.profiles;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default profilesReducer;