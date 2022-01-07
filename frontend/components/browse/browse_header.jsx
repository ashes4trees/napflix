import React from "react";
import { Link } from "react-router-dom";

class BrowseHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSwitch() {
      this.props.resetProfile();
      window.location.reload();
    }

    handleManage() {
        this.props.resetProfile();
        this.props.history.push('/manageprofiles')
    }

    render () {
        return (
            <div className='browse-header'>
                <Link to='/' className='home-button'><img id="logo" src={window.logoURL} alt="Napflix" /></Link>
                <div className='left-nav'>
                    <Link to='/browse/'><p>Home</p></Link>
                    <Link to='/browse/my-list'><p>My List</p></Link>
                    <a href='https://github.com/ashes4trees/napflix' target='_blank'>GitHub</a>
                    <a href='https://linkedin.com/in/steph-soni' target='_blank'>LinkedIn</a>

                </div>
                <div className='right-nav'>
                    <img src={window.searchIcon} />
                    <div className='profiles-dropdown'>

                        <div className='dropdown-btn'>
                            <img id='profiles-avatar' src={window.avatar} />
                            <p id='profiles-arrow'>&#9663;</p>
                        </div>

                        <div className='profiles-dropdown-content'>
                            <p 
                                onClick={() => this.handleSwitch()}>
                                Switch Profiles
                            </p>
                            <p 
                                onClick={() => this.handleManage()}>
                                Manage Profiles
                            </p>
                            <p 
                                onClick={() => this.props.logout()}>
                                Sign Out of Napflix
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
 
};

export default BrowseHeader;