import React from "react";
import ProfileIndexItem from './profile_index_item';
import { Link } from "react-router-dom";
import EditProfile from "./edit_profile";
import AddProfile from "./add_profile";
import { resolvePath } from "react-router";

class ManageProfiles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'profiles',
            profile: {
                id: null,
                name: ''
            }
        }
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleProfileClick(e) {
        this.setState({show: 'edit form', profile:  {
            id: e.currentTarget.id, 
            name: e.currentTarget.attributes.name.value
        }});
    }

    handleAddClick() {
        this.setState({ show: 'add profile'});
    }

    handleCancel() {
        this.setState({ show: 'profiles'});
    }

    componentDidMount () {
        this.props.fetchProfiles(this.props.userId);
    }

    async handleDelete(profileId) {
        await this.props.deleteProfile(profileId);
        await this.props.fetchProfiles(this.props.userId);
        this.setState({show: 'profiles'});
        // setTimeout(() => this.setState({ show: 'profiles' }), 4000);
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

        const addProfile = this.props.profiles.length === 4 ? null :
            <li className='edit-profile-container' onClick={() => this.handleAddClick()}>
                <img id='edit-profile' src={window.addProfile} />
                <p>Add Profile</p>
            </li>
    

        const profileDisplay = (
            <div>
                <Link to='/' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>

                <div className='edit-profiles-container'>
                    <h1>Manage Profiles:</h1>
                    <ul className='edit-profiles-list'>
                        {profiles}
                        {addProfile}
                    </ul>
                    <Link to='/browse' className='done-link'><p className='done-btn'>Done</p></Link>
                </div>
            </div> 
        )
        
        const editDisplay = (
            <EditProfile
            handleCancel={this.handleCancel}
            profile={this.state.profile}
            handleDelete={this,this.handleDelete}
            updateProfile={this.props.updateProfile}
            />
        )

        const addDisplay = (
            <div>
                <AddProfile
                    userId={this.props.userId}
                    handleCancel={this.handleCancel} />

            </div>
        )

    let display;
    switch (this.state.show) {
        case 'profiles':
            display = profileDisplay
            return display
        case 'edit form':
            display = editDisplay
            return display
        case 'add profile':
            display = addDisplay
            return display
        default:
            display = profileDisplay
    }
            return (
               display
            )
    }

    }

    export default ManageProfiles;
  