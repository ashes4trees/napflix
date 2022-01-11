import React from "react";
import { Link } from "react-router-dom";

class DetailsModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: this.props.sound
        }
        this.modalAutoplay = this.modalAutoplay.bind(this);
    }

    modalAutoplay(e) {
        const video = e.currentTarget.children[2].children[2];
        this.state.sound ? video.volume = 1 : video.volume = 0;
        video.currentTime = 0;
        video.play();

    }

    soundOff() {
        const bool = this.state.sound ? false : true;
        this.setState({ sound: bool });
    }


    convertLength(minutes) {
        const h = parseInt(minutes / 60);
        const m = minutes % 60;
        return `${h} h ${m} m`
    }

    onEnd(e) {
        e.currentTarget.classList.toggle('hide');
        e.currentTarget.parentElement.previousElementSibling.classList.toggle('hide');

    }

    onList() {
        const match = this.props.myList.filter(listItem => listItem.movie_id === this.props.movie.id);
        return match.length > 0
    }

    render() {
        const displayLength = this.convertLength(this.props.movie.length);
        const soundBtn = this.state.sound ? window.volumeOff : window.volumeOn;
        const listButton = this.onList() ? '-' : '+';
        return (
        <div onMouseOver={this.modalAutoplay} className='modal'>
            <button onClick={this.props.toggleModal} className='exit-modal'>X</button>
            <img className='modal-thumbnail hide' src={this.props.movie.photoUrl} alt="" />
            <div className='modal-vid-container'>
                <p className='modal-title'>{this.props.movie.title}</p>
                <div className='modal-btns'>
                    <Link to={`/watch/${this.props.movie.id}`}className='modal-play'>&#9658; Play</Link>
                    <button 
                        id='modal-add-list'
                        onClick={() =>
                            this.props.createListItem(this.props.movie.id, this.props.currentUserId)
                        }
                        >{listButton}</button>
                </div>

                <video
                    id='modal-vid'
                    src={window.movie}
                    onEnded={this.onEnd}
                ></video>


                <img src={soundBtn}
                    className='modal-sound-off'
                    onClick={this.props.soundOff} />
            </div>

            <div className='modal-details'>
                <div className='left-details'>
                    <div>
                        <p>{this.props.movie.year}</p>
                        <p className='modal-rating'>{this.props.movie.rating}</p>
                        <p>{displayLength}</p>
                    </div>
                    <p>{this.props.movie.summary}</p>
                </div>

                <div className='modal-tags' >
                    <p>Genres:</p>
                    {this.props.display}
                </div>

            </div>
        </div>
        )
    
    }
}

export default DetailsModal;
    
