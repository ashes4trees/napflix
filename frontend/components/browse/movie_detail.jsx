import React from "react";
import getStorage from "redux-persist/es/storage/getStorage";

class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
    
    }

    movieGenres() {
        const selectedTags = this.props.tags.filter(tag => tag.movie_id === this.props.movie.id);
        const selectedGenres = selectedTags.map(tag => this.props.genres[tag.genre_id-1]);
        return selectedGenres;
    }

    autoplay(e) {

        const video = e.currentTarget;
        // debugger
        video.classList.toggle('idle')
        video.play()
    }

    delayPlay() {
        return setTimeout(() => this.autoplay, 1000)
    }

    render() {
        const tags = this.movieGenres();
        const display = tags.map(tag => <p key={tag.id}>{tag.genre}</p> )
        
        return (
            <div className='list-item'>
                <img className='thumbnail' src={this.props.movie.photoUrl} alt="" />
                <video 
                    className='thumbnail-vid idle' 
                    src={window.movie}
                    onMouseEnter={this.autoplay}
                    onMouseLeave={this.autoplay}
                    ></video>
                
                <div className='movie-details hidden'>
                    <div className='details-btns'>
                        <div className='details-left-btns'>
                            <button id="details-play">&#9658;</button>
                            <button id='details-add-list'>+</button>
                        </div>
                        <button id='details-info-btn'>
                            <p>&#8964;</p>
                        </button>
                    
                        {/* <button className='details-info-btn'>╲╱</button> */}
                    </div>
                    <p className='details-rating'>{this.props.movie.rating}</p>
                    <div className='details-tags' >
                        {display}
                    </div>
                
                </div>
            </div>
        
        )
    }
}

export default MovieDetail;