import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import LoginFormContainer from './splash/login_form_container';
import BrowseContainer from "./browse/browse_container";
import SignupFormContainer from './splash/signup_form_container';
import Splash from "./splash/splash";

const App = () => (
    <div>

        <ProtectedRoute exact path='/browse' component={BrowseContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path='/' component={Splash} />
    </div>
);

export default App;