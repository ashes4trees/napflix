import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profilesReducer from './profiles_reducer';
import moviesReducer from "./movies_reducer";
import genresReducer from "./genres_reducer";
import tagsReducer from "./tagsReducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    movies: moviesReducer,
    genres: genresReducer,
    tags: tagsReducer 
});

export default entitiesReducer;