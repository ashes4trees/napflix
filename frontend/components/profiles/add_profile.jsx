import React from "react";
import { createProfile} from '../../actions/profile_actions';
import { Link } from "react-router-dom";


class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.userId,
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
       return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        debugger
        dispatch(createProfile(profile));
        location.reload()
 
    }

    render () {
        return (
            <div className='add-profile-main'>
                <header>
                    <Link to='/' className='home-button'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
                </header>
                <div className='add-profile-content'>
                    <div className='add-profile-text'>
                        <h1>Add Profile</h1>
                        <p>Add a profile for another person watching Netflix.</p>
                    </div>
                    <div className='add-profile-middle'>
                        <img src={window.avatar} />
                        <div className='add-profile-input-container'>
                            <input
                                className='profile-name-input'
                                type="text"
                                onChange={this.update('name')}
                            />
                            <label className='name-label'>Name</label>
                        </div>
                        
                    </div>
                    <form className='add-profile-btns' onSubmit={this.handleSubmit}>
                        <button type='submit' className='save-btn'>Continue</button>
                        <button onClick={this.props.handleCancel} className='cancel-btn'>Cancel</button>
                    </form>
                </div>
                
                
            </div>
        )
    }
}

export default AddProfile;