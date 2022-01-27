import React from "react";

class ShowMovie extends React.Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this);
        this.showControls = this.showControls.bind(this);
        this.unmute = this.unmute.bind(this);
    }

    showControls() {
        this.clearTimers();
        const arrow = document.getElementById('back-arrow');
        arrow.classList.remove('hidden');
        setTimeout(() => arrow.classList.add('hidden'), 3000);
    }

    clearTimers() {
        let id = window.setTimeout(() => { }, 0);

        while (id--) {
            window.clearTimeout(id);
           
        }
    }

    unmute(e) {
        e.currentTarget.muted = false;
    }

    goBack() {
        this.props.history.goBack();
       
    }

    render() {
        
    
        return(
            <div 
                className='movie-container'
                onMouseMove={this.showControls}
                >
                <p id='back-arrow' 
                    className='hidden'
                    onClick={this.goBack}
                    >&#8592;</p>
                <video
                    autoPlay
                    muted
                    className='show-movie'
                    src={this.props.currentMovie.videoUrl}
                    controls width='1000'></video>
            </div>
            
        )
    }
}

export default ShowMovie;