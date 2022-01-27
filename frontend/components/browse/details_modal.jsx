import React from "react";
import { Link } from "react-router-dom";

class DetailsModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: this.props.sound
        }
        this.modalAutoplay = this.modalAutoplay.bind(this);
        this.toggleListItem = this.toggleListItem.bind(this);
        this.soundOff = this.soundOff.bind(this);
       
    }

    modalAutoplay(e) {
        
        this.clearTimers();
        const video = e.currentTarget.children[2].children[2];
        video.classList.remove('idle');
        video.previousElementSibling.classList.remove('invisible');
        this.state.sound ? video.muted = false : video.muted = true;
        video.play();
    }

    clearTimers() {
        let id = window.setTimeout(() => { }, 0);

        while (id--) {
            window.clearTimeout(id);
           
        }
    }

    soundOff(e) {
        const bool = this.state.sound ? false : true;
        const opposite = bool ? false : true;
        e.currentTarget.previousElementSibling.muted = opposite;
        this.setState({ sound: bool });
    }


    convertLength(minutes) {
        const h = parseInt(minutes / 60);
        const m = minutes % 60;
        return `${h} h ${m} m`;
    }

    onEnd(e) {
        e.currentTarget.classList.add('hide');
        e.currentTarget.parentElement.previousElementSibling.classList.remove('hide');

    }

    onList() {
        const match = this.props.myList.filter(listItem => listItem.movie_id === this.props.movie.id);
        return match.length > 0;
    }

    toggleListItem() {
        if (this.onList()) {
            const item = this.props.myList.filter(listItem =>
                listItem.movie_id === this.props.movie.id
            );
            return this.props.deleteListItem(item[0].id);
        } else {
            return this.props.createListItem(this.props.movie.id, this.props.currentProfileId);
        }
    }



    render() {
        const displayLength = this.convertLength(this.props.movie.length);
        const soundBtn = this.state.sound ? window.volumeOff : window.volumeOn;
        const listButton = this.onList() ? '✓' : '+';
        return (
        <div onMouseEnter={this.modalAutoplay} className='modal'>
            <button onClick={this.props.toggleModal} className='exit-modal'>X</button>
            <img className='modal-thumbnail hide' src={this.props.movie.photoUrl} alt="" />
            <div className='modal-vid-container'>
                <p className='modal-title'>{this.props.movie.title}</p>
                <div className='modal-btns'>
                    <Link to={`/watch/${this.props.movie.id}`}className='modal-play'>&#9658; Play</Link>
                    <button 
                        id='modal-add-list'
                        
                        onClick={ this.toggleListItem }
                        >{listButton}</button>
                </div>

                <video
                    id='modal-vid'
                    src={this.props.movie.videoUrl}
                    onEnded={this.onEnd}
                ></video>


                <img src={soundBtn}
                    className='modal-sound-off'
                    onClick={this.soundOff} />
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
    
