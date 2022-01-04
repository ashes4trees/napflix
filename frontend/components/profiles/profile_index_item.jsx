import React from "react";


export default props => (
        <li 
        id={props.profile.id}
        onClick={e => props.handleClick(e)}
        className='profile-item'>
            <img src={window.avatar} />
            <p>{props.profile.name}</p>
        </li>
)