import React from "react";
import { Link } from "react-router-dom";


class EditProfile extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = { id: this.props.profile.id,
            name: this.props.profile.name,
            error: '' }
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleEditSubmit(e) {
        e.preventDefault();
        if (this.state.name.length === 0) {
            this.setState({ error: "Name can't be blank." });
        } else {
            const updatedProfile = Object.assign({}, 
                {id: this.state.id,
                name:this.state.name
            });
            this.props.updateProfile(updatedProfile);
            window.location.reload();
        }
    }

    render () {
        return (
            <div className='edit-profile-main'>
                
                <Link to='/' className='profiles-home-btn'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
                
                <div className='edit-profile-content'>
                    <div className='edit-profile-text'>
                        <h1>Edit Profile</h1>
                    </div>

                    <form className='edit-profile-form' >
                        <div className='img-input-container'>
                            <img src={window.avatar} />
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                 />
                        </div>
                       
                        <div className='edit-profile-bottom'>  
                            <p className='profile-error'>{this.state.error}</p>
                            <div className='edit-buttons-container'>
                                <button
                                    className='save-btn'
                                    onClick={this.handleEditSubmit}>Save</button>
                                <button
                                    className='cancel-btn'
                                    onClick={() => this.props.handleCancel()}
                                >Cancel</button>
                                <button
                                    className='cancel-btn'
                                    onClick={() => this.props.handleDelete(this.state.id)}
                                >Delete Profile</button>
                            </div>
                        </div>
                        
                    </form>

                    
                </div>
                
               
            </div>
           
        )
    }
}

export default EditProfile;