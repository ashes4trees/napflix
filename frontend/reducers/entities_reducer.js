import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profilesReducer from './profiles_reducer';
import currentProfileReducer from "./current_profile_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    currentProfile: currentProfileReducer
});

export default entitiesReducer;