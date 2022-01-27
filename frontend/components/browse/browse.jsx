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
        this.setState({showProfiles: false});
        this.props.switchProfile(e.currentTarget.id);
    }

    render () {

        const display = this.state.showProfiles ? 
            
                <ProfilesIndex
                    fetchMovies={this.props.fetchMovies}
                    show={this.state.show}
                    profiles={this.props.profiles}
                    userId={this.props.currentUserId}
                    fetchProfiles={this.props.fetchProfiles}
                    handleClick={this.handleClick}
                />  
             : 
            <div>
                <GenresIndexContainer history={this.props.history}/>
        
            </div>
           
        
        
        return (
        
            display
        
                
        )
    }
}

export default Browse;

