
import React from 'react';
import ProfileIndexItem from './profile_index_item';
import { Link } from 'react-router-dom';


class ProfilesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProfiles(this.props.userId)
        
    }

    render() {
        const profiles = this.props.profiles.map(profile => (
            <ProfileIndexItem key={profile.id} profile={profile}/>
        ))
        const display = !this.props.show ? null : 
            <div>
            <Link to='./' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

            <div className='profiles-container'>
                <h1>Who's Watching?</h1>
                <ul className='profiles-list'>
                    {profiles}
                </ul> 
            </div>
            </div>
        if (!this.props.show) {
            return null;
        }
        return display
         
        
    }
}

export default ProfilesIndex;