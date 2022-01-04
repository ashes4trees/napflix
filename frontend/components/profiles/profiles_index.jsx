
import React from 'react';
import ProfileIndexItem from './profile_index_item';
import { Link } from 'react-router-dom';


class ProfilesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProfiles(this.props.userId)
        
    }

    handleClick(e) {
        this.props.switchProfile(e.currentTarget.id);
        this.setState({show: false})
    }

    render() {
        const profiles = this.props.profiles.map(profile => (
            <ProfileIndexItem 
            key={profile.id} 
            profile={profile}
            handleClick={this.handleClick}
            />
        ))
        const display = !this.state.show ? null : 
            <div>
            <Link to='./' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

            <div className='profiles-container'>
                <h1>Who's Watching?</h1>
                <ul className='profiles-list'>
                    {profiles}
                    <li className='add-profile-container'>
                        <img id='add-profile' src={window.addProfile}/>
                        <p>Add Profile</p>
                    </li>
                </ul> 
                <p className='manage'>Manage Profiles</p>
            </div>

            
            </div>
        if (!this.props.show) {
            return null;
        }
        return display
         
        
    }
}

export default ProfilesIndex;