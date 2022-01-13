import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div className='splash-header'>
        <Link to='/' className='home-button'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
        <Link className="signin-btn" to="/login">Sign In</Link>
    </div>
);