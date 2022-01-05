import React from 'react';
import { connect } from 'react-redux';
import { updateProfile, fetchProfile } from '../../actions/profile_actions';
import ManageProfiles from './manage_profiles';

const mSTP = state => ({
    profiles: Object.values(state.entities.profiles),
    editProfile: state.edit
});

const mDTP = dispatch => ({
    updateProfile: profile => dispatch(updateProfile(profile)),
    fetchProfile: profileId => dispatch(fetchProfile(profileId))

});

export default connect(mSTP, mDTP)(ManageProfiles);