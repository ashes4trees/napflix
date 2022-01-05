import { RECEIVE_PROFILE } from "../actions/profile_actions";


const _nullProfile = {
    id: null,
    name: ''
}

const editReducer = (state = _nullProfile, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE:
            return action.profile
        default:
            return state;
    }
};


export default editReducer;