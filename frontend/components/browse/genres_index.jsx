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
                <div className='genres-browse'>
                    <h1>Genre1</h1>
                    <h1>Genre2</h1>
                    <h1>Genre3</h1>
                    <h1>Genre4</h1>
                </div>
                
            </div>
        )
        
        

    }
}

export default GenresIndex;