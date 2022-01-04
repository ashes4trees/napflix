import { RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";

const currentProfileReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            return action.currentProfile.id
        default:
            return state;
    }
};


export default currentProfileReducer;