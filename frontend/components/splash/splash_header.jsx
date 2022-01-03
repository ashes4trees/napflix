import React from "react";
import { Link } from "react-router-dom";
import logo  from '../../../app/assets/images/napflix_logo.png';

export default () => (
    <div className='splash-header'>
        <Link to='./' className='home-button'><img id="logo" src={logo} alt="Napflix" /></Link>
        <Link className="btn" to="/login">Sign In</Link>
    </div>
);