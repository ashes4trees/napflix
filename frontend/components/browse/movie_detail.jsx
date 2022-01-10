import React from "react";
import getStorage from "redux-persist/es/storage/getStorage";

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

        const video = e.currentTarget.children[1];
        
        this.state.sound ? video.volume = 1 : video.volume = 0
        video.previousElementSibling.classList.toggle('invisible');
        video.nextElementSibling.classList.toggle('invisible');
        video.currentTime = 0;
        video.classList.toggle('idle');
        // ('.sound-off').classList.toggle('invisible');
        video.play()
    }

    soundOff() {
        this.setState({sound: false});
    }

    toggleModal() {
        const bool = this.state.showModal ?  false : true;
        this.setState({showModal: bool});
    }

    render() {
        const tags = this.movieGenres();
        const display = tags.map(tag => <p key={tag.id}>{tag.genre}</p> )
        const modal = this.state.showModal ? (
            <div className='modal'>
                <img className='modal-thumbnail' src={this.props.movie.photoUrl} alt="" />
                <div className='modal-vid-container'
                    // onMouseOver={this.autoplay}
                    // onMouseOut={this.autoplay}
                >
                    <p className='modal-title'>{this.props.movie.title}</p>
                    <button className='top-play'>&#9658; Play</button>
                    <button id='details-add-list'>+</button>
                    <video
                        className='modal-vid'
                        src={window.movie}

                    ></video>


                    <img src={window.volume}
                        className='modal-sound-off'
                        onClick={this.soundOff} />
                </div>

                <div className='modal-details'>
                    <p>{this.props.movie.summary}</p>
                    <p className='modal-rating'>{this.props.movie.rating}</p>
                    <div className='modal-tags' >
                        {display}
                    </div>

                </div>
            </div>
        ) : null
        return (
           
            <div className='list-item'>
                <img className='thumbnail' src={this.props.movie.photoUrl} alt="" />
                <div className='details-vid-container'
                    onMouseOver={this.autoplay}
                    onMouseOut={this.autoplay}
                >
                    <p className='details-title invisible'>{this.props.movie.title}</p>
                    <video
                        className='thumbnail-vid idle'
                        src={window.movie}
                        
                    ></video>

                    
                    <img src={window.volume} 
                        className='sound-off invisible'
                        onClick={this.soundOff} />
                </div>
                
                {/* <img src={window.volume} className='sound-off invisible' /> */}
                
                
                <div className='movie-details hidden'>
                    <div className='details-btns'>
                        <div className='details-left-btns'>
                            <button id="details-play">&#9658;</button>
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