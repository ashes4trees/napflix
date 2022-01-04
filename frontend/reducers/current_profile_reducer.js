import { RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";

const _nullProfile = {
    id: null
}

const currentProfileReducer = (state = _nullProfile, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            return action.currentProfile
        default:
            return state;
    }
};


export default currentProfileReducer;