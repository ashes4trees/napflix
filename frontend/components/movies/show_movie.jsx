import React from "react";

class ShowMovie extends React.Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this);
        this.showControls = this.showControls.bind(this);
        
    }

    showControls() {
        this.clearTimers();
        const arrow = document.getElementById('back-arrow')
        arrow.classList.remove('hidden');
        setTimeout(() => arrow.classList.add('hidden'), 5000);
    }

    clearTimers() {
        let id = window.setTimeout(() => { }, 0);

        while (id--) {
            window.clearTimeout(id);
            console.log('clear')
        }
    }

    goBack() {
        this.props.history.goBack();
        // this.props.history.push('/browse');
    }

    render() {
        
        // const movie = this.props.movies.filter(movie => 
        //     movie.id === this.props.match.params.movieId)
        // const video = currenmovie.videoUrl
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
                    // onLoad={this.unmute}
                    className='show-movie'
                    src={this.props.currentMovie.videoUrl}
                    controls width='1000'></video>
            </div>
            
        )
    }
}

export default ShowMovie;