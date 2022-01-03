import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../app/assets/images/napflix_logo.png';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "Email address",
            password: "Password"
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
            <div className='login-main'>
                <header className='login-header'>
                    <Link to='./' className='home-button'><img id="logo" src={logo} alt="Napflix" /></Link>
                </header>
                <div className='login-container'>
                    <div className='login-form'>
                        <h2>Sign In</h2>
                        <ul className='error-list'>{errors}</ul>
                        <form className='form-content'>
                            
                                <input
                                    className='login-input'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                />
                            
                                <input
                                    className='login-input'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                />
                            

                            <button className='login-btn' onClick={this.handleSubmit}>Sign In</button>
                        </form>

                        <span>New to Napflix? <Link to={`/signup`} className='link-text'>Sign up now.</Link></span>

                    </div>
                </div>
               
            </div>
            
        );
    }

}

export default LoginForm;