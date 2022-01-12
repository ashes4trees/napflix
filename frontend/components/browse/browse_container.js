import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';
import { fetchProfiles, fetchCurrentProfile } from '../../actions/profile_actions';
import { fetchMovies } from '../../actions/movie_actions';

const mDTP = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchProfiles: userId => dispatch(fetchProfiles(userId)),
    switchProfile: profileId => dispatch(fetchCurrentProfile(profileId))
});

const mSTP = state => ({
    currentUserId: state.session.id,
    profiles: Object.values(state.entities.profiles),
    currentProfile: state.session.profileId
});

export default connect(mSTP, mDTP)(Browse);