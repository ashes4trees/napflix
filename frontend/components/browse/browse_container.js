
import { connect } from 'react-redux';
import Browse from './browse';
import { fetchProfiles, fetchCurrentProfile, createProfile } from '../../actions/profile_actions';
import { fetchMovies } from '../../actions/movie_actions';

const mDTP = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchProfiles: userId => dispatch(fetchProfiles(userId)),
    switchProfile: profileId => dispatch(fetchCurrentProfile(profileId)),
    createProfile: profile => dispatch(createProfile(profile))
});

const mSTP = state => ({
    currentUserId: state.session.id,
    profiles: Object.values(state.entities.profiles),
    currentProfile: state.session.profileId
});

export default connect(mSTP, mDTP)(Browse);