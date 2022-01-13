import React from "react";
import BrowseHeader from "../browse/browse_header";
import MovieDetail from "../browse/movie_detail";

class MyList extends React.Component {
    constructor(props) {
        super(props)
        
    }

    selectMovies() {
        const selectedMovies = this.props.myList.map(item =>
            this.props.movies[item.movie_id]);
        return selectedMovies;
    }
    
    
    render() {
        const renderMovies = this.selectMovies();
        const display = renderMovies ? renderMovies.map(movie =>
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
            <div className='my-list-container'>
                <BrowseHeader
                    history={this.props.history}
                    logout={this.props.logout}
                    resetProfile={this.props.resetProfile} />
                <div key={this.props.currentProfileId} className='my-list-browse'>
                    <h1>My List</h1>
                    <div className='my-list-list'>
                        {display}
                    </div>
                </div>

            </div>
           
        );
    }
}

export default MyList;
