import { connect } from "react-redux";
import Search from './search';
import { resetCurrentProfile } from "../../actions/profile_actions";


const mSTP = state => ({
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    tags: Object.values(state.entities.tags),
    currentProfileId: state.session.profileId,
    myList: Object.values(state.entities.myList)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetProfile: () => dispatch(resetCurrentProfile()),
    createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId)),
    deleteListItem: listId => dispatch(deleteListItem(listId))
});

export default connect(mSTP, mDTP)(Search);