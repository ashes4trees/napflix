import React from "react";
import SplashHeader from "./splash_header";
import SignupFooter from './signup_footer';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        const passedEmail = (typeof props.location.email === 'undefined' ? '' :
            props.location.email) 
        this.state = {
            email: passedEmail,
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        props.resetSessionErrors();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.resetSessionErrors();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
           
    }

 

    render() {
       
        const emailFilled = this.state.email === '' ? '' : 'filled';
        const passFilled = this.state.password === '' ? '' : 'filled';
        const passError = this.props.errors.filter(error => error.includes('Password'));
        const emailError = this.props.errors.filter(error => error.includes('Email'));
 
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
                            <p className='signup-error'>{emailError[0]}</p>
                       

                            <div className='signup-input-container'>
                                <input
                                    className='signup-input'
                                    type="password"
                                    onChange={this.update('password')}
                                />
                                <label id={passFilled}>Add a password</label>
                            </div>
                            <p className='signup-error'>{passError}</p>
                       
                        <button className='signup-btn' type='submit'>Sign Up</button>
                        
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