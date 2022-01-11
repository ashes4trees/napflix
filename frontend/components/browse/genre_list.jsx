import React from "react";
import MovieDetail from './movie_detail';


class GenreList extends React.Component {
    constructor(props) {
        super(props);
        
    };

    selectMovies() {
        
        if (!this.props.genreId) {
            const selectedMovies = this.props.myList.map(item => 
                this.props.movies[item.movie_id]);
            return selectedMovies;
        } else {
            const selectedTags = this.props.tags.filter(tag =>
                tag.genre_id === this.props.genreId
            );

            const selectedMovies = selectedTags.map(tag =>
                this.props.movies[tag.movie_id]
            );

            return selectedMovies;
        }
      
    }

    leftScroll(e) {
        e.target.parentElement.scrollLeft += 200;
    };

    rightScroll(e) {
        e.target.parentElement.scrollLeft -= 200;
    };

    render() {
        const renderMovies = this.selectMovies();
        const display = renderMovies ? renderMovies.map(movie => 
            <MovieDetail 
                myList={this.props.myList}
                currentUserId={this.props.currentUserId}
                createListItem={this.props.createListItem} 
                key={movie.id}
                movie={movie}
                tags={this.props.tags}
                genres={this.props.genres}
                />
            ) : null;
        return (
    
            <div className='genre-list'>
                {display}
                {/* <button id='left-btn' onClick={this.rightScroll}>{'<'}</button>
                <button id='right-btn' onClick={this.leftScroll}>{'>'}</button> */}
            </div>
          
           
        );
    }
};


export default GenreList;
