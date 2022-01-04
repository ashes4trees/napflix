import React from "react";
import ProfilesIndex from "../profiles/profiles_index";
import SplashHeader from '../splash/splash_header';

class Browse extends React.Component {
    constructor(props) {
        super(props)
        const bool = this.props.currentProfile.id ? false : true;
        this.state = {
            show: bool
        }
    }

    render () {

        // const display = this.state.show ? 
        //     <div className='profiles-index-main'>
        //         <ProfilesIndex
        //             show={this.state.show}
        //             userId={this.props.currentUserId}
        //             fetchProfiles={this.props.fetchProfiles}
        //             profiles={this.props.profiles}
        //             switchProfile={this.props.switchProfile}
        //         />  
        //     </div> : 
        //     <div>
        //         <SplashHeader />
        //         <button onClick={this.props.logout}>LOGOUT</button>
        //         <h1>MOVIES GO HERE...</h1>
        //     </div>
           
        
        
        return (
        

                <div className='profiles-index-main'>
                <ProfilesIndex
                    show={this.state.show}
                    userId={this.props.currentUserId}
                    fetchProfiles={this.props.fetchProfiles}
                    profiles={this.props.profiles}
                    switchProfile={this.props.switchProfile}
                />
                <SplashHeader/>
                <button onClick={this.props.logout}>LOGOUT</button>
                <h1>MOVIES GO HERE...</h1>
                </div>
                
        )
    }
}

export default Browse;

