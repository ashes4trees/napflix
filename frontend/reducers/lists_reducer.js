import { RECEIVE_CURRENT_PROFILE} from "../actions/profile_actions";

const listsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            const nextState = action.currentProfile.myList ? 
                action.currentProfile.myList : null;
            return nextState;
        default:
            return state;
    }
}

export default listsReducer;