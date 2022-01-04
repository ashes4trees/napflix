import React from "react";
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let init;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        init = configureStore(preloadedState);
        
        delete window.currentUser;
    } else {
        init = configureStore();
        
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={init.store} persistor={init.persistor}/>, root);

    // delete later!!
    window.getState = init.store.getState;
    window.dispatch = init.store.dispatch;
    window.logout = logout;
});