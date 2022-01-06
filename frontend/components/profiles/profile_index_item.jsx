import React from "react";


class ProfileIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const dark = this.props.darken === 'yes' ? 'dark' : '';
        return (
            <li
                id={this.props.profile.id}
                name={this.props.profile.name}
                onClick={e => this.props.handleClick(e)}
                className='profile-item'>
                <img src={window.avatar} className={dark} />
                <img 
                    src={window.editPencil} 
                    className={this.props.pencil === 'hidden' ?
                    'pencil hidden' : 'pencil'} />
                <p>{this.props.profile.name}</p>
            </li>
        )
    }
}

export default ProfileIndexItem;
 