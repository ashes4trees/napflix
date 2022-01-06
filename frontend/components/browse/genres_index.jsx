import React from "react";
import BrowseHeader from "./browse_header";
import GenreList from './genre_list';

class GenresIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='browse-main'>
                <BrowseHeader logout={this.props.logout} />
                <div className='random-movie'>
                    <h1>RANDOM MOVIE HERE</h1>
                </div>
                <div className='genres-browse'>
                    {/* <GenreList /> */}
                </div>
            </div>
        )
        
        

    }
}

export default GenresIndex;