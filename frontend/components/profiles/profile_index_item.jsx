import React from "react";


export default props => (
        <li className='profile-item'>
            <img src={window.avatar} />
            <p>{props.profile.name}</p>
        </li>
)