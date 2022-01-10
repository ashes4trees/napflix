import React from "react";
import DetailsModal from "./details_modal";
import { Link } from "react-router-dom";

class MovieDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: true,
            showModal: false
        }
    this.autoplay = this.autoplay.bind(this);
    this.soundOff = this.soundOff.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    }

    movieGenres() {
        const selectedTags = this.props.tags.filter(tag => tag.movie_id === this.props.movie.id);
        const selectedGenres = selectedTags.map(tag => this.props.genres[tag.genre_id-1]);
        return selectedGenres;
    }

    autoplay(e) {
        
        const video = e.currentTarget.children[1].children[1];
        this.state.sound ? video.volume = 1 : video.volume = 0
        video.classList.remove('idle');
        // video.parentElement.previousElementSibling.classList.toggle('hidden');
        video.previousElementSibling.classList.remove('invisible');
        video.nextElementSibling.classList.remove('invisible');
        video.currentTime = 0;
        video.play();
    }

    stop(e) {
        const video = e.currentTarget.children[1].children[1];
        video.classList.add('idle')
        video.previousElementSibling.classList.add('invisible');
        video.nextElementSibling.classList.add('invisible');
        video.pause();
    }

    stopAll() {
        // debugger
        const videos = Object.values(document.querySelectorAll('video'));
        videos.forEach(video => {
            video.pause;
            video.classList.add('idle');
            video.previousElementSibling.classList.add('invisible');
            video.nextElementSibling.classList.add('invisible');
        }
        )
    }

    soundOff() {
        const bool = this.state.sound ? false : true;
        this.setState({ sound: bool });
    }

    toggleModal() {
        
        const bool = this.state.showModal ?  false : true;
        this.setState({showModal: bool});
        
    }

    onEnd(e) {
        e.currentTarget.classList.toggle('idle');
        // e.currentTarget.parentElement.nextElementSibling.classList.toggle('bump')
        e.currentTarget.parentElement.previousElementSibling.classList.toggle('hidden');

    }


    render() {

        if (this.state.showModal) {
            this.stopAll()
        }
        const tags = this.movieGenres();
        const display = tags.map(tag => <p key={tag.id}>{tag.genre}</p> )
        const modal = this.state.showModal ? 
            <DetailsModal 
                movie={this.props.movie} 
                toggleModal={this.toggleModal}
                soundOff={this.soundOff}
                display={display}
                sound={this.state.sound}
                /> 
                : null
        const soundBtn = this.state.sound ? window.volumeOff : window.volumeOn;
        return (
    
            <div onMouseEnter={this.autoplay}
                onMouseLeave={this.stop}
                className='list-item'>
                <img className='thumbnail' src={this.props.movie.photoUrl} alt="" />
                <div className='details-vid-container'
                    
                >
                    <p className='details-title invisible'>{this.props.movie.title}</p>
                    <video
                        className='thumbnail-vid idle'
                        src={window.movie}
                        // onEnded={this.onEnd}
                    ></video>

                    
                    <img src={soundBtn} 
                        className='sound-off invisible'
                        onClick={this.soundOff} />
                </div>
                
                {/* <img src={window.volume} className='sound-off invisible' /> */}
                
                
                <div className='movie-details hidden'>
                    <div className='details-btns'>
                        <div className='details-left-btns'>
                            <Link to={`/watch/${this.props.movie.id}`} id='details-play'>&#9658;</Link>
                            <button id='details-add-list'>+</button>
                        </div>
                        <button onClick={this.toggleModal} id='details-info-btn'>
                            <p>&#8964;</p>
                        </button>
                    
                        {/* <button className='details-info-btn'>╲╱</button> */}
                    </div>
                    <p className='details-rating'>{this.props.movie.rating}</p>
                    <div className='details-tags' >
                        {display}
                    </div>
                
                </div>
                {modal}
            </div>
        
        )
    }
}

export default MovieDetail;