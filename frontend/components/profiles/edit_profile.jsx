import React from "react";


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
            <div className='edit-profiles-main'>
                <h1>Edit Profile</h1>
                <form className='edit-profiles-form' onSubmit={this.handleSubmit}>
                    <img src={window.avatar} />
                    <input 
                    type="text" 
                    value={this.props.editProfile.name}
                    onChange={this.update('name')}/>
                </form>
                <div className='buttons-container'>
                    <button className='save-btn'>Save</button>
                    <button className='cancel-btn'>Cancel</button>
                </div>
               
            </div>
           
        )
    }
}

export default EditProfile;