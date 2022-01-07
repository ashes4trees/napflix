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
                        <button className='top-play'>Play</button>
                        <button className='top-info'>More info</button>
                    </div>
                    
                </div>
                <GenreList 
                    movies={this.props.movies}
                    genres={this.props.genres}
                    tags={this.props.tags}
                />
                
                
            </div>
        )
        
        

    }
}

export default GenresIndex;