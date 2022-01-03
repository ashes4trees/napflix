import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../app/assets/images/napflix_logo.png';
import SignupFooter from "./signup_footer";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {

        const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)

        return (
            <div>

            
            <div className='login-main'>
                <header className='login-header'>
                    <Link to='./' className='home-button'><img id="logo" src={logo} alt="Napflix" /></Link>
                </header>
                <div className='login-container'>
                        <h2>Sign In</h2>
                        
                        <form className='form-content'>
                                <div className='login-input-container'>
                                <input
                                    className='login-input'
                                    type="text"
                                    
                                    onChange={this.handleInput('email')}
                                />
                                <label>Email address</label>

                                </div>
                                
                                <div className='login-input-container'>
                                    <input
                                        className='login-input'
                                        type="password"
                                        onChange={this.handleInput('password')}
                                    />
                                    <label>Password</label>
                                </div>
                                
                            <ul className='error-list'>{errors}</ul>

                            <button className='login-btn' onClick={this.handleSubmit}>Sign In</button>
                        </form>

                        <span>New to Napflix? <Link to={`/signup`} className='link-text'>Sign up now.</Link></span>

                </div>
              
               
                
               
            </div>
                <SignupFooter />
            </div>
        );
    }

}

export default LoginForm;