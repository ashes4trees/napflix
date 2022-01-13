import React from "react";
import { Link } from "react-router-dom";

class BrowseHeader extends React.Component {
    constructor(props) {
        super(props)
        const bool = props.history.location.pathname.startsWith('/search') ?
            true : false
        this.state = {
            search: '',
            searching: bool
        }
        this.openSearch = this.openSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.update = this.update.bind(this);
    }

    handleSwitch() {
      this.props.resetProfile();
      if (this.props.history.location.pathname.startsWith('/search')) {
          this.props.history.push('/') 
        } else {
          window.location.reload();
          } 
    }

    handleManage() {
        this.props.resetProfile();
        this.props.history.push('/manageprofiles')
    }

    update(e) {
        this.setState({ search: e.currentTarget.value });
        this.props.searchTitles(e.currentTarget.value);
        this.props.searchGenres(e.currentTarget.value);
        // this.props.updateSearch(e.currentTarget.value)
    }

    openSearch() {
        this.props.history.push('/search')
        this.setState({searching: true});
    }

    closeSearch() {
        // console.log('close')
        // this.setState({searching: false});
        if (this.props.history.location.pathname.startsWith('/search')) {
            this.props.history.push('/browse');
        } else {
            return;
        }
    }

    render () {
        
        const searchFn = this.state.searching ?
            null : this.openSearch;
        const filled = this.state.search === '' ? '' : 'search-filled';
        const exitVisible = this.state.search === '' ? 'exit-hidden' : 'exit-search';
        const searchImage = this.state.searching ?
            (
                <div className='search-bar'>
                    < img
                        id='search-bar-icon'
                        src={window.searchIcon}
                    />
                    <input
                        autoFocus
                        className='search-input'
                        type="text"
                        onChange={this.update}
                    />
                    <label id={filled}>Title</label>
                    <p
                        className={exitVisible}
                        onClick={this.closeSearch}
                    >X</p>
                </div>
            ) :
            ( < img
                className = 'search-icon'
                src = { window.searchIcon }
                onClick = { searchFn }
            /> ) 
           
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
                    {searchImage}
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