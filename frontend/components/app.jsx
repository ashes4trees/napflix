import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import LoginFormContainer from './splash/login_form_container';
import BrowseContainer from "./browse/browse_container";
import SignupFormContainer from './splash/signup_form_container';
import Splash from "./splash/splash";
import ManageProfilesContainer from '../components/profiles/manage_profiles_container';
import ShowMovieContainer from '../components/movies/show_movie_container';

const App = () => (
    <div>

        <ProtectedRoute exact path='/watch/:movieId' component={ShowMovieContainer} />
        <ProtectedRoute exact path='/browse' component={BrowseContainer} />
        <ProtectedRoute exact path='/manageprofiles' component={ManageProfilesContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path='/' component={Splash} />
    </div>
);

export default App;