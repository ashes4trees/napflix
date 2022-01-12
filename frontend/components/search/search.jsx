import React from "react";
import BrowseHeader from "../browse/browse_header";
import MovieDetail from "../browse/movie_detail";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            searchString: '',
            matches: []
        }
        // this.updateSearch = this.updateSearch.bind(this);
        this.searchTitles = this.searchTitles.bind(this);
    }

    searchTitles(string) {
        // const matchString = string
        const matchingMovies = this.props.movies.filter(movie => 
            movie.title.toLowerCase().indexOf(string.toLowerCase()) > -1) 
        this.setState({ matches: matchingMovies, searchString: string })
      
    // debugger
    }
    
    // componentDidUpdate() {
    //     this.searchTitles();
    // }

    render() {
        debugger
        const header = (this.state.searchString.length > 0 && this.state.matches.length === 0) ? 
            `Your search for '${this.state.searchString}' did not have any matches.` : '';
        const display = this.state.matches.length ? this.state.matches.map(movie =>
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