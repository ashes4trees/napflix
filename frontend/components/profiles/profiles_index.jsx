
import React from 'react';
import ProfileIndexItem from './profile_index_item';
import { Link } from 'react-router-dom';
import AddProfile from './add_profile';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class ProfilesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'profiles'
        }
        this.props.fetchProfiles(this.props.userId);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    handleClick() {
        this.setState({show: 'add profile'})
    }

    handleCancel() {
        this.setState({ show: 'profiles'})
    }

    render() {
        debugger
        const addProfile = this.props.profiles.length === 4 ? null : 
            <li className='add-profile-container' onClick={() => this.handleClick()}>
                <img id='add-profile' src={window.addProfile} />
                <p>Add Profile</p>
            </li>
        
        const profiles = this.props.profiles.map(profile => (
            <ProfileIndexItem 
            key={profile.id} 
            profile={profile}
            handleClick={this.props.handleClick}
            pencil={'hidden'}
            />
        ))
        const display = this.state.show === 'profiles' ?
           ( <div>
            <Link to='/' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

            <div className='profiles-container'>
                <h1>Who's Watching?</h1>
                <ul className='profiles-list'>
                    {profiles}
                    {addProfile}
                    {/* <li className='add-profile-container' onClick={() => this.handleClick()}>
                        <img id='add-profile' src={window.addProfile}/>
                        <p>Add Profile</p>
                    </li> */}
                </ul> 
                <Link className='manage-link' to='/manageprofiles'>
                    <p className='manage'>Manage Profiles</p>
                </Link>
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