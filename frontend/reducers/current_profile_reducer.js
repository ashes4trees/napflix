import { RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullProfile = {
    id: null
}

const currentProfileReducer = (state = _nullProfile, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            return Object.assign({}, { id: action.currentProfile.id })
        case LOGOUT_CURRENT_USER:
            return _nullProfile;
        default:
            return state;
    }
};


export default currentProfileReducer;