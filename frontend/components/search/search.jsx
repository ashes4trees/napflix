import React from "react";
import BrowseHeader from "../browse/browse_header";
import MovieDetail from "../browse/movie_detail";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            searchString: '',
            movieMatches: [],
            genreMatches: []
        }
        this.searchTitles = this.searchTitles.bind(this);
        this.searchGenres = this.searchGenres.bind(this);
    }

    searchTitles(string) {
        if (string === '') {
            this.setState({movieMatches: [], searchString: string});
        } else {
            const matchingMovies = [];
            matchingMovies.push(this.props.movies.filter(movie =>
                movie.title.toLowerCase().indexOf(string.toLowerCase()) > -1));
            matchingMovies.push(this.props.movies.filter(movie =>
                movie.summary.toLowerCase().indexOf(string.toLowerCase()) > -1));
            
            this.setState({ movieMatches: matchingMovies, searchString: string });
        }
    }

    searchGenres(string) {
        
        if (string === '') {
            this.setState({ genreMatches: [], searchString: string });
        } else {
            const matchingGenres = this.props.genres.filter(genre => 
                genre.genre.toLowerCase().indexOf(string.toLowerCase()) > -1);
            
            const genreIds = matchingGenres.map(genre => genre.id);
            
            const matchingTags = [];
            genreIds.forEach(id => 
                matchingTags.push(this.props.tags.filter(tag => tag.genre_id === id)));
            
            const movieIds = matchingTags.flat().map(tag => tag.movie_id);
            
            const matchingMovies = [];
            movieIds.forEach(id => 
                matchingMovies.push(this.props.movies.filter(movie => 
                movie.id === id)));
        
            this.setState({ genreMatches: matchingMovies, searchString: string });
            
        }
    }
    


    render() {
        
        const movieSet = new Set(this.state.movieMatches.flat().concat(this.state.genreMatches.flat()));
        const displayMovies = Array.from(movieSet);
        const header = (this.state.searchString.length > 0 && displayMovies.length === 0) ?
            `Your search for '${this.state.searchString}' did not have any matches.` : '';
        const display = displayMovies.length ? displayMovies.map(movie =>
            <MovieDetail
                myList={this.props.myList}
                currentProfileId={this.props.currentProfileId}
                createListItem={this.props.createListItem}
                deleteListItem={this.props.deleteListItem}
                key={movie.id}
                movie={movie}
                tags={this.props.tags}
                genres={this.props.genres}
            />
        ) : null;

        return (
            <div className='search-main'>
                <BrowseHeader
                    searchGenres={this.searchGenres}
                    searchTitles={this.searchTitles}
                    updateSearch={this.updateSearch}
                    history={this.props.history}
                    logout={this.props.logout}
                    resetProfile={this.props.resetProfile} />
                <div key={this.props.currentProfileId} className='search-list-browse'>
                    <h1 className='search-title'>{header}</h1>
                    <div className='search-list'>
                        {display}
                    </div>
                </div>
                
            </div>
        )
       
    }
}

export default Search;