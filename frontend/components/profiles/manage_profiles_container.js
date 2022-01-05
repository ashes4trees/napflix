import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile_actions';
import ManageProfiles from './manage_profiles';

const mSTP = state => ({
    profiles: Object.values(state.entities.profiles)
});

const mDTP = dispatch => ({
    updateProfile: profile => dispatch(updateProfile(profile))
});

export default connect(mSTP, mDTP)(ManageProfiles);