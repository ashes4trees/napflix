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
    this.toggleListItem = this.toggleListItem.bind(this);
    this.clearTimers = this.clearTimers.bind(this);
    this.stop = this.stop.bind(this);
    this.stopAll = this.stopAll.bind(this);
    }

    movieGenres() {
        const selectedTags = this.props.tags.filter(tag => tag.movie_id === this.props.movie.id);
        const selectedGenres = selectedTags.map(tag => this.props.genres[tag.genre_id-1]);
        return selectedGenres;
    }

    autoplay(e) {
        const video = e.currentTarget.children[1].children[1];
        video.currentTime = 0;
        setTimeout(() => {
            video.classList.remove('idle');
            video.nextElementSibling.classList.remove('invisible');
            video.previousElementSibling.classList.remove('invisible');
            this.state.sound ? video.muted = false : video.muted = true;
            video.play();
        }, 2000);
    }

    stop(e) {
        this.clearTimers();
        const video = e.currentTarget.children[1].children[1];
        video.pause();
        video.classList.add('idle');
        video.parentElement.previousElementSibling.classList.remove('invisible');
        video.previousElementSibling.classList.add('invisible');
        video.nextElementSibling.classList.add('invisible');
        
    }

    clearTimers() {
        let id = window.setTimeout(() => { }, 0);

        while (id--) {
            window.clearTimeout(id);

        } 
    }

    stopAll() {
        this.clearTimers();
        const videos = Object.values(document.querySelectorAll('.thumbnail-vid'));
        videos.forEach(video => {
            video.pause();
            video.classList.add('idle');
            video.parentElement.previousElementSibling.classList.remove('invisible');
            video.previousElementSibling.classList.add('invisible');
            video.nextElementSibling.classList.add('invisible');
        }
        )
    }

    soundOff(e) {
        const bool = this.state.sound ? false : true;
        this.setState({ sound: bool });
        const opposite = bool ? false : true;
        e.currentTarget.previousElementSibling.muted = opposite;
    }

    toggleModal() {
        const bool = this.state.showModal ?  false : true;
        this.setState({showModal: bool});
    }

    onEnd(e) {
        e.currentTarget.classList.add('idle');
        e.currentTarget.parentElement.previousElementSibling.classList.remove('invisible');

    }

    onList() {
        const match = this.props.myList.filter(listItem => listItem.movie_id === this.props.movie.id);
        return match.length > 0;
    }

    toggleListItem() {
        
        if (this.onList()) {
            const item = this.props.myList.filter(listItem => 
                listItem.movie_id === this.props.movie.id
                );

            return this.props.deleteListItem(item[0].id);
        } else {
            return this.props.createListItem(this.props.movie.id, this.props.currentProfileId);
        }
    }


    render() {
     
        if (this.state.showModal) {
            this.stopAll();
        }
        const tags = this.movieGenres();
        const display = tags.map(tag => <p key={tag.id}>{tag.genre}</p> );
        const modal = this.state.showModal ? 
            <DetailsModal 
                myList={this.props.myList}
                createListItem={this.props.createListItem}
                deleteListItem={this.props.deleteListItem}
                clearTimers={this.clearTimers}
                currentProfileId={this.props.currentProfileId}
                movie={this.props.movie} 
                toggleModal={this.toggleModal}
                soundOff={this.soundOff}
                display={display}
                sound={this.state.sound}
                /> 
                : null
        const soundBtn = this.state.sound ? window.volumeOff : window.volumeOn;
        const listButton = this.onList() ? '✓' : '+';
        
        return (
    
                <div className='list-item'
                    onMouseEnter={this.autoplay}
                    onMouseLeave={this.stop}
                >
                    <img className='thumbnail' 
                        src={this.props.movie.thumbnailUrl} 
                        />

                    <div className='details-vid-container'>
                        <p className='details-title invisible'>{this.props.movie.title}</p>
                        <video
                            id={this.props.movie.id}
                            className='thumbnail-vid idle'
                            src={this.props.movie.videoUrl}
                            type='video/mp4'
                            onEnded={this.onEnd}
                        ></video>

                        
                        <img src={soundBtn} 
                            className='sound-off invisible'
                            onClick={this.soundOff} />
                    </div>
                
                
                    <div className='movie-details hidden'>
                        <div className='details-btns'>
                            <div className='details-left-btns'>
                                <Link to={`/watch/${this.props.movie.id}`} id='details-play'>&#9658;</Link>
                                <button 
                                    id='details-add-list'
                                    onClick={this.toggleListItem}
                            >{listButton}</button>
                            </div>
                            <button 
                                
                                title='More Info'
                                onClick={this.toggleModal} 
                                id='details-info-btn'>
                                <p>&#8964;</p>
                            </button>
                        
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