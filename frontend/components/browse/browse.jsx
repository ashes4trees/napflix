import React from "react";
import ProfilesIndex from "../profiles/profiles_index";
import GenresIndexContainer from "./genres_index_container";

class Browse extends React.Component {
    constructor(props) {
        super(props)
        const bool = this.props.currentProfile ? false : true;
        this.state = {
            showProfiles: bool
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({showProfiles: false})
        this.props.switchProfile(e.currentTarget.id);
    }

    render () {

        const display = this.state.showProfiles ? 
            
                <ProfilesIndex
                    show={this.state.show}
                    profiles={this.props.profiles}
                    userId={this.props.currentUserId}
                    fetchProfiles={this.props.fetchProfiles}
                    handleClick={this.handleClick}
                />  
             : 
            <div>
                <GenresIndexContainer history={this.props.history}/>
                {/* <SplashHeader />
                <button onClick={this.props.logout}>LOGOUT</button>
                <h1>MOVIES GO HERE...</h1> */}
            </div>
           
        
        
        return (
        
            display
                // <div className='profiles-index-main'>
                // <ProfilesIndex
                //     show={this.state.show}
                //     userId={this.props.currentUserId}
                //     fetchProfiles={this.props.fetchProfiles}
                //     profiles={this.props.profiles}
                //     switchProfile={this.props.switchProfile}
                // />
                // <SplashHeader/>
                // <button onClick={this.props.logout}>LOGOUT</button>
                // <h1>MOVIES GO HERE...</h1>
                // </div>
                
        )
    }
}

export default Browse;

