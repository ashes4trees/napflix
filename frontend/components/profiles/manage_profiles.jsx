import React from "react";
import ProfileIndexItem from './profile_index_item';
import { Link } from "react-router-dom";
import EditProfile from "./edit_profile";

class ManageProfiles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'profiles',
            profileId: null
        }
        this.handleProfileClick = this.handleProfileClick.bind(this)
    }

    handleProfileClick(e) {
        this.setState({show: 'edit form', profileId: e.currentTarget.id });
        // location.reload();
    }

    render () {
        const profiles = this.props.profiles.map(profile => (
            <ProfileIndexItem
                key={profile.id}
                profile={profile}
                handleClick={this.handleProfileClick}
                darken={'yes'}
            />
        ));

        const display = this.state.show === 'profiles' ? (
            <div>
                <Link to='/' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

                <div className='edit-profiles-container'>
                    <h1>Manage Profiles:</h1>
                    <ul className='edit-profiles-list'>
                        {profiles}
                        <li className='edit-profile-container' onClick={() => this.handleClick()}>
                            <img id='edit-profile' src={window.addProfile} />
                            <p>Add Profile</p>
                        </li>
                    </ul>
                    <Link to='/browse' className='done-link'><p className='done-btn'>Done</p></Link>
                </div>
            </div> 
        ) : (
            <EditProfile profileId={this.state.profileId}/>
        )
        
            return (
               display
            )
    }

    }

    export default ManageProfiles;
  