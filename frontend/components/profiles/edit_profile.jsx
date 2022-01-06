import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";


class EditProfile extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = { id: this.props.profile.id,
            name: this.props.profile.name }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

  

    handleSubmit(e) {
        e.preventDefault()
        const updatedProfile = Object.assign({}, this.state)
        this.props.updateProfile(updatedProfile);
        location.reload()
    }

    render () {
        debugger
        return (
            <div className='edit-profile-main'>
                
                <Link to='/' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
                
                <div className='edit-profile-content'>
                    <div className='edit-profile-text'>
                        <h1>Edit Profile</h1>
                    </div>

                    <form className='edit-profile-form' onSubmit={this.handleSubmit}>
                        <div className='img-input-container'>
                            <img src={window.avatar} />
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                 />
                        </div>
                       

                        <div className='edit-buttons-container'>
                            <button className='save-btn' type='submit'>Save</button>
                            <button 
                                className='cancel-btn' 
                                onClick={() => this.props.handleCancel()}
                                >Cancel</button>
                            <button
                                className='cancel-btn' 
                                onClick={() => this.props.handleDelete(this.state.id)}
                            >Delete Profile</button>
                        </div>
                    </form>

                    
                </div>
                
               
            </div>
           
        )
    }
}

export default EditProfile;