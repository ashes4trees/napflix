import React from "react";
import { Link } from "react-router-dom";


class EditProfile extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.props.fetchProfile(props.profileId)
    }
    

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.updateProfile(this.state);
    }

    render () {
        
        return (
            <div className='edit-profile-main'>
                
                <Link to='/' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
                
                <div className='edit-profile-content'>
                    <div className='edit-profile-text'>
                        <h1>Edit Profile</h1>
                    </div>

                    <form className='edit-profile-form' onSubmit={this.handleSubmit}>
                        <img src={window.avatar} />
                        <input
                            type="text"
                            value={this.props.editProfile.name}
                            onChange={this.update('name')} />
                    </form>

                    <div className='edit-buttons-container'>
                        <button className='save-btn'>Save</button>
                        <button className='cancel-btn'>Cancel</button>
                    </div>
                </div>
                
               
            </div>
           
        )
    }
}

export default EditProfile;