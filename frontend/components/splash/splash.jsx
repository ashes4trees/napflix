import React from "react";
import SplashHeader from './splash_header';
import SignupBar from './signup_bar';
import SignupFooter from  './signup_footer';

export default props => (
    <div>
        <div className='splash-main'>
            <SplashHeader />
            <SignupBar history={props.history} />

        </div>
        <footer>
            <SignupFooter />
        </footer>
    </div>
    
)