import React from "react";
import SplashHeader from "./splash_header";


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.email,
            password: 'Password'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
            // .then(() => this.props.history.push('/browse'))
    }

    render() {

        const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)
        
        return (
            <div className='signup-main'>
                <SplashHeader />
                <div className='signup-form-container'>
                    <h2>Create a password to start your membership</h2>
                    <p>We hate paperwork, too.</p>

                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        
                            <input
                                className='signup-input'
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                       

                        
                            <input
                                className='signup-input'
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        
                        <ul className='error-list'>{errors}</ul>
                        <button className='signup-btn' type='submit'>Sign Up</button>
                        {/* <button onClick={this.demoUser}>Login as Demo User</button> */}
                    </form>
                </div>
                
            </div>
        );
    }

}

export default SignupForm;