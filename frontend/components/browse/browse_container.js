import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';
import { fetchProfiles, fetchProfile } from '../../actions/profile_actions';

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProfiles: userId => dispatch(fetchProfiles(userId)),
    switchProfile: profileId => dispatch(fetchProfile(profileId))
});

const mSTP = state => ({
    currentUserId: state.session.id,
    profiles: Object.values(state.entities.profiles),
    currentProfile: state.entities.currentProfile
});

export default connect(mSTP, mDTP)(Browse);