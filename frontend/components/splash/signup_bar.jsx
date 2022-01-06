import React from 'react';

class SignupBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
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
        const filled = this.state.email === '' ? '' : 'filled';
        return (
            <div className='signup-container'>   
                <section className='signup-text'>
                    <h2>Unlimited movies, TV shows, and more.</h2>
                    <p>Watch anywhere. Cancel anytime.</p> 
                    <p>Ready to watch? Enter your email to create or restart your membership. </p>   
                </section>
                  
                <form className='signup-bar-form' onSubmit={this.handleSubmit}>
                    <div className='input-container'>
                        <input
                            className='email-input'
                            type="text"
                            onClick={this.handleClick()}
                            onChange={this.update('email')}
                        />
                        <label id={filled}>Email address</label>
                    </div>
                    
                        
                    <button className='signup-bar-btn' type='submit'>Get Started &gt;</button>
                </form>
            </div>
            
        )
    }
}

export default SignupBar;