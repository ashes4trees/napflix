import React from 'react';

class SignupBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState( {[field]: e.currentTarget.value});
    };

    handleClick(e) {
        e => this.setState({ [email]: '' });
       
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        
        if (valid.test(email)) {
            this.props.history.push({ pathname: `/signup`, email: email });
        } else {
            this.setState({error: 'Please enter a valid email.'});
        }
    }
    
    render() {
        const filled = this.state.email === '' ? '' : 'filled';
        return (
            <div className='signup-container'>   
                <section className='signup-text'>
                    <h2>Literally dozens of sleepy, dreamy movies.</h2>
                    <p>Watch on the couch. Watch in bed.</p> 
                    <p>Ready to watch? Enter your (real or fake) email to create an account.</p>   
                </section>
                  
                <form className='signup-bar-form' onSubmit={this.handleSubmit}>
                    <div className='input-container'>
                        <input
                            className='email-input'
                            type="email"
                            onChange={this.update('email')}
                        />
                        <label id={filled}>Email address</label>
                    </div>
                    
                        
                    <button className='signup-bar-btn' type='submit'>Get Started &gt;</button>
                    
                </form>
                <p className='splash-error'>{this.state.error}</p>
            </div>
            
        )
    }
}

export default SignupBar;