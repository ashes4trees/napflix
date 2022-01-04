import { RECEIVE_USER_PROFILES, RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_PROFILES:
            return action.profiles;
        default:
            return state;
    }
};

export default profilesReducer;