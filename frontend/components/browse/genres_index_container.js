
import { connect } from "react-redux";
import GenresIndex from './genres_index';
import { logout } from '../../actions/session_actions';
import { resetCurrentProfile } from "../../actions/profile_actions";
import { fetchMovies, createListItem, deleteListItem } from "../../actions/movie_actions";


const mSTP = state => {
    return {
    movies: state.entities.movies,
    genres: Object.values(state.entities.genres),
    tags: Object.values(state.entities.tags),
    topMovie: Object.values(state.entities.movies)[3],
    currentProfileId: state.session.profileId,
    myList: Object.values(state.entities.myList)
}};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetProfile: () => dispatch(resetCurrentProfile()),
    fetchMovies: () => dispatch(fetchMovies()),
    createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId)),
    deleteListItem: listId => dispatch(deleteListItem(listId))
});

export default connect(mSTP, mDTP)(GenresIndex);