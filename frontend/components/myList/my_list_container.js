
import { connect } from "react-redux";
import { createListItem, deleteListItem } from "../../actions/movie_actions";
import { logout } from "../../actions/session_actions";
import { resetCurrentProfile } from "../../actions/profile_actions";
import MyList from "./my_list";


const mSTP = state => {
    const list = state.entities.myList ? 
        Object.values(state.entities.myList) : null;
    return {
        movies: state.entities.movies,
            genres: Object.values(state.entities.genres),
                tags: Object.values(state.entities.tags),
                    myList: list,
                        currentProfileId: state.session.profileId
    }
}


const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetProfile: () => dispatch(resetCurrentProfile()),
    createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId)),
    deleteListItem: listId => dispatch(deleteListItem(listId))
})

export default connect(mSTP, mDTP)(MyList);