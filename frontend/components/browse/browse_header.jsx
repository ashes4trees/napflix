import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
    <div className='browse-header'>
        <Link to='/' className='home-button'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
        <div className='left-nav'>
            <Link to='/browse/'><p>Home</p></Link>
            <Link to='/browse/my-list'><p>My List</p></Link>
        </div>
        <div className='right-nav'>
            <img src={window.searchIcon}/>
            <div className='profiles-nav'>
                <img src={window.avatar} />
                <p>&#9663;</p>
            </div>
            <button onClick={props.logout}>LOGOUT</button>
        </div>
    </div>
);