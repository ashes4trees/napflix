import React from "react";
import BrowseHeader from "./browse_header";
import GenreList from './genre_list';

class GenresIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
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

        return (
            <div className='browse-main'>
                <BrowseHeader
                    history={this.props.history} 
                    logout={this.props.logout} 
                    resetProfile={this.props.resetProfile}/>
                <div className='top-movie'>
                    <img src={window.eternal}/>
                    <h1>Eternal Sunshine of the Spotless Mind</h1>
                    <div className='top-movie-btns'>
                        <button className='top-play'>&#9658; Play</button>
                        <button className='top-info'>&#9432; More info</button>
                    </div>
                    
                </div>
                <div className='genres-browse'>
                    {genres}
                </div>
                
                   
                
                
                
            </div>
        )
        
        

    }
}

export default GenresIndex;