import React from "react";

class GenreList extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const genres = this.props.genres.map(genre => 
            <h1 key={genre.id}>{genre.genre}</h1>
        );

        return (
            <div className='genres-browse'>
                {genres}
            </div>
        );
    }
};


export default GenreList;
