import React from "react";
import SplashHeader from "./splash_header";
import SignupFooter from './signup_footer';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.email,
            password: ''
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
        const emailFilled = this.state.email === '' ? '' : 'filled';
        const passFilled = this.state.password === '' ? '' : 'filled';
        const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)
        
        return (
            <div className='signup-main'>
                <SplashHeader />
                
                <div className='signup-form-container'>
                    <h2>Create a password to start your membership</h2>
                    <p>We hate paperwork, too.</p>

                    <form className='signup-form' onSubmit={this.handleSubmit}>

                            <div className='signup-input-container'>
                                <input
                                    className='signup-input'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                                <label id={emailFilled}>Email</label>
                            </div>
                            
                       

                            <div className='signup-input-container'>
                                <input
                                    className='signup-input'
                                    type="password"
                                    onChange={this.update('password')}
                                />
                                <label id={passFilled}>Add a password</label>
                            </div>
                        
                        <ul className='error-list'>{errors}</ul>
                        <button className='signup-btn' type='submit'>Sign Up</button>
                        {/* <button onClick={this.demoUser}>Login as Demo User</button> */}
                    </form>
                </div>
                <div className='signup-footer'>
                    <a href="mailto:stephsoni18@gmail.com" target='_blank'>Questions? Email me!</a>
                    <a href='https://github.com/ashes4trees/napflix' target='_blank'>GitHub</a>
                    <a href='https://linkedin.com/in/steph-soni' target='_blank'>LinkedIn</a>

                </div>
            </div>
        );
    }

}

export default SignupForm;