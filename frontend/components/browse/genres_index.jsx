import React from "react";
import BrowseHeader from "./browse_header";
import GenreList from './genre_list';
import DetailsModal from "./details_modal";
import { Link } from "react-router-dom";

class GenresIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: true,
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.soundOff = this.soundOff.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    soundOff(e) {
      
        const bool = this.state.sound ? false : true;
        this.setState({ sound: bool });
    }

    toggleModal() {
        const bool = this.state.showModal ? false : true;
        this.setState({ showModal: bool });
    }

    onEnd(e) {
        e.currentTarget.classList.toggle('hidden');
        // e.currentTarget.parentElement.nextElementSibling.classList.toggle('bump')
        e.currentTarget.parentElement.previousElementSibling.classList.toggle('hidden');

    }

    convertLength(minutes) {
        const h = parseInt(minutes / 60);
        const m = minutes % 60;
        return `${h} h ${m} m`
    }

    movieGenres() {
        const selectedTags = this.props.tags.filter(tag => tag.movie_id === this.props.topMovie.id);
        const selectedGenres = selectedTags.map(tag => this.props.genres[tag.genre_id - 1]);
        return selectedGenres;
    }



    render() {
        const tags = this.movieGenres();
        const display = tags.map(tag => <p key={tag.id}>{tag.genre}</p>)
        
        const genres = this.props.genres.map(genre =>
            <div key={genre.id} className='genre-name'>
                <h1>{genre.genre}</h1>
                <GenreList 
                    movies={this.props.movies}
                    genreId={genre.id}
                    genres={this.props.genres}
                    tags={this.props.tags}
                    />
            </div>
        )

        const displayLength = this.convertLength(this.props.topMovie.length);

        const modal = this.state.showModal ? 
            <DetailsModal 
                movie={this.props.topMovie}
                toggleModal={this.toggleModal}
                onEnd={this.onEnd}
                soundOff={this.soundOff}
                display={display}
                sound={this.state.sound}
            /> : null
    
        const soundBtn = this.state.sound ? window.volumeOff : window.volumeOn;

        return (
            <div className='browse-main'>
                <BrowseHeader
                    history={this.props.history} 
                    logout={this.props.logout} 
                    resetProfile={this.props.resetProfile}/>
                <div className='top-movie'>
                    <img src={this.props.topMovie.photoUrl}/>
                    <h1>{this.props.topMovie.title}</h1>
                    <div className='top-movie-btns'>
                        <Link to={`/watch/${this.props.topMovie.id}`} className='modal-play'>&#9658; Play</Link>
                        <button 
                        className='top-info'
                        onClick={this.toggleModal}
                        >&#9432; More info</button>
                    </div>
                    <img src={soundBtn}
                        id='top-sound-off'
                        className='hidden'
                        onClick={this.soundOff} />
                </div>
                <div className='genres-browse'>
                    {genres}
                </div>
                
                   
                {modal}
                
                
            </div>
        )
        
        

    }
}

export default GenresIndex;