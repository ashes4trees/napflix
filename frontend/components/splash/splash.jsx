import React from "react";
import SplashHeader from './splash_header';
import SignupBar from './signup_bar';

export default props => (
    <div className='splash-main'>
        <SplashHeader />
        <SignupBar history={props.history} />
    </div>
)