import React from "react";
import { createProfile} from '../../actions/profile_actions';


class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
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
        createProfile(profile);
    }

    render () {
        return (
            <div>
                <div className='add-profile-text'>
                    <h1>Add Profile</h1>
                    <p>Add a profile for another person watching Netflix.</p>
                </div>
                <div className='add-profile-input-cont'>
                    <img src={window.avatar} />
                    <input
                        type="text"
                        onChange={this.update('name')}
                    />
                    <label>Name</label>
                </div>
                <form className='add-profile-btns' onSubmit={this.handleSubmit}>
                    <button type='submit'>Continue</button>
                    <button onClick={this.props.handleCancel}>Cancel</button>
                </form>
                
            </div>
        )
    }
}

export default AddProfile;