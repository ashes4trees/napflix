import { RECEIVE_CURRENT_PROFILE} from "../actions/profile_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const listsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            const nextState = action.currentProfile.myList ? 
                action.currentProfile.myList : {}
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default listsReducer;