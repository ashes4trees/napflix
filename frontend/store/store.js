import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['entities', 'session']
};


const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}



const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = (preloadedState = {}) => {
    const store = createStore(
        persistedReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
    const persistor = persistStore(store);
    return { store, persistor};
}

export default configureStore;