import React from "react";
import ProfilesIndex from "../profiles/profiles_index";

class Browse extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            show: true
        }
        // this.showProfiles = this.showProfiles.bind(this);
    }

    // showProfiles() {
    //     const bool = this.props.currentProfileId ? false : true;
    //     this.setState({ show: bool});
    // }

    // componentDidMount() {
    //     this.showProfiles();
    // }

    render () {
        
        return (
            <ProfilesIndex 
                show={this.state.show} 
                userId={this.props.currentUserId} 
                fetchProfiles={this.props.fetchProfiles}
                profiles={this.props.profiles}
                switchProfile={this.props.switchProfile}
                />
        )
    }
}

export default Browse;

