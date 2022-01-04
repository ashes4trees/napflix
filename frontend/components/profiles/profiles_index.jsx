
import React from 'react';
import ProfileIndexItem from './profile_index_item';
import { Link } from 'react-router-dom';
import AddProfile from './add_profile';


class ProfilesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'profiles'
        }
        this.props.fetchProfiles(this.props.userId);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClick() {
        this.setState({show: 'add profile'})
    }

    handleCancel() {
        this.setState({ show: 'profiles'})
    }

    render() {
        const profiles = this.props.profiles.map(profile => (
            <ProfileIndexItem 
            key={profile.id} 
            profile={profile}
            handleClick={this.props.handleClick}
            />
        ))
        const display = this.state.show === 'profiles' ?
           ( <div>
            <Link to='./' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

            <div className='profiles-container'>
                <h1>Who's Watching?</h1>
                <ul className='profiles-list'>
                    {profiles}
                    <li className='add-profile-container' onClick={() => this.handleClick()}>
                        <img id='add-profile' src={window.addProfile}/>
                        <p>Add Profile</p>
                    </li>
                </ul> 
                <p className='manage'>Manage Profiles</p>
            </div>
            </div> ) :

            <div>
                <AddProfile 
                userId={this.props.userId}
                handleCancel={this.handleCancel}/>
               
            </div>

        return display
         
        
    }
}

export default ProfilesIndex;