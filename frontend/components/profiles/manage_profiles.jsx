import React from "react";

class ManageProfiles extends React.Component {


    render () {
        const profiles = this.props.profiles.map(profile => (
            <ProfileIndexItem
                key={profile.id}
                profile={profile}
                handleClick={this.props.handleClick}
            />
        ))
        
            return (
                <div>
                    <Link to='./' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

                    <div className='profiles-container'>
                        <h1>Who's Watching?</h1>
                        <ul className='profiles-list'>
                            {profiles}
                            <li className='add-profile-container' onClick={() => this.handleClick()}>
                                <img id='add-profile' src={window.addProfile} />
                                <p>Add Profile</p>
                            </li>
                        </ul>
                        <p className='manage'>Manage Profiles</p>
                    </div>
                </div>
            )
    }

    }

    export default ManageProfiles;
  