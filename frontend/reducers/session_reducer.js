import { RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {
    id: null
};

const _nullCurrentProfile ={
    currentProfileId: null
};


const sessionReducer = (state = { _nullSession, _nullCurrentProfile}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_CURRENT_PROFILE:
            return Object.assign({}, { currentProfileId: action.currentProfile.id})
        default:
            return state;
    }
};

export default sessionReducer;