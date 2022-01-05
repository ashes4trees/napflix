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

const persistedReducer = persistReducer(persistConfig, rootReducer)


const configureStore = (preloadedState = {}) => {
    const store = createStore(
        persistedReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
    const persistor = persistStore(store)
    return { store, persistor}
}

export default configureStore;