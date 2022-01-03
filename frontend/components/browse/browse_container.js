import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';
import { fetchProfiles } from '../../actions/profile_actions';

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProfiles: userId => dispatch(fetchProfiles(userId))
});

const mSTP = state => ({
    currentUserId: state.session.id,
    profiles: Object.values(state.entities.profiles)
});

export default connect(mSTP, mDTP)(Browse);