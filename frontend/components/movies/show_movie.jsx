import React from "react";

class ShowMovie extends React.Component {
    constructor(props) {
        super(props)
    }

    fullScreen(e) {
        const video = e.currentTarget;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }

    render() {
        
        return(
            <div className='movie-container'>
                <video
                    onLoad={this.fullScreen}
                    className='show-movie'
                    src={window.movie}
                    autoPlay
                    muted
                    controls width='1000'></video>
            </div>
            
        )
    }
}

export default ShowMovie;