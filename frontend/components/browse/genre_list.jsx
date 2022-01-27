import React from "react";
import MovieDetail from './movie_detail';


class GenreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xoffset: 75,
            yoffset: 0,
            delta: 200,
            leftArrow: -100,
            rightArrow: 75,
        };

        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        
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

    scrollLeft(e) {
        const lastItem = e.currentTarget.parentElement.lastElementChild.previousElementSibling
        const coord = lastItem.getBoundingClientRect();
        if (window.innerWidth - coord.right >= 20) {
            return false;
        } else {
            const leftArrow = document.getElementById('left-arrow');
            const rightArrow = document.getElementById('right-arrow');
            this.setState({xoffset: this.state.xoffset -= this.state.delta});
            this.setState({leftArrow: this.state.leftArrow += this.state.delta});
            this.setState({ rightArrow: this.state.rightArrow -= this.state.delta });
        }
    }

    scrollRight(e) {
        if (this.state.xoffset === 75) {
            return false;
        } else {
            const rightArrow = document.getElementById('right-arrow');
            const leftArrow = document.getElementById('left-arrow');
            this.setState({ xoffset: this.state.xoffset += this.state.delta });
            this.setState({ rightArrow: this.state.rightArrow += this.state.delta });
            this.setState({ leftArrow: this.state.leftArrow -= this.state.delta });
        }
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
                <div className='genre-list' 
                    style ={{
                        position: "relative",
                        left: `${this.state.xoffset}px`}}
                    >
                    <p id='left-arrow' 
                        style={{ left: `${this.state.leftArrow}px` }}
                        onClick={this.scrollRight}>&#8249;</p>

                        {display}

                    <p id='right-arrow' 
                        onClick={this.scrollLeft}
                        style={{ right: `${this.state.rightArrow}px` }}
                        >&#8250;</p>
                    
                </div>
            
           
        );
    }
};


export default GenreList;
