import React from 'react';

class SignupBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'Email address',
            password: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState( {[field]: e.currentTarget.value})
    };

    handleClick(e) {
        return e => this.setState({ [email]: ''} )
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        this.props.history.push({ pathname: `/signup`, email: email })
    }
    
    render() {
        return (
            <div className='signup-container'>   
                <section className='signup-text'>
                    <h2>Unlimited movies, TV shows, and more.</h2>
                    <p>Watch anywhere. Cancel anytime.</p> 
                    <p>Ready to watch? Enter your email to create or restart your membership. </p>   
                </section>
                  
                <form className='signup-bar-form' onSubmit={this.handleSubmit}>
                    <input
                        className='email-input'
                        type="text"
                        value={this.state.email}
                        onClick={this.handleClick()}
                        onChange={this.update('email')}
                    />
                        
                    <button className='signup-bar-btn' type='submit'>Get Started &gt;</button>
                </form>
            </div>
            
        )
    }
}

export default SignupBar;