import React from "react";

class ShowMovie extends React.Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this);
    }

    showControls() {
        const arrow = document.getElementById('back-arrow')
        arrow.classList.remove('hidden');
        setTimeout(() => arrow.classList.add('hidden'), 5000);
    }

    goBack() {
        this.props.history.push('/browse');
    }

    render() {
        
        return(
            <div 
                className='movie-container'
                onMouseMove={this.showControls}
                >
                <p id='back-arrow' 
                    className='hidden'
                    onClick={this.goBack}
                    >&#8592;</p>
                <video
                    // onMouseOver={this.fullScreen}
                    className='show-movie'
                    src={window.movie}
                    autoPlay
                    muted
                    controls width='1000'></video>
            </div>
            
        )
    }
}

export default ShowMovie;