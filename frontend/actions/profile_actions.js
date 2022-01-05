import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE';
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES';
export const RECEIVE_NEW_PROFILE = 'CREATE_NEW_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


const receiveUserProfiles = profiles => ({
    type: RECEIVE_USER_PROFILES,
    profiles
});

const receiveCurrentProfile = currentProfile => ({
    type: RECEIVE_CURRENT_PROFILE,
    currentProfile
});

const receiveNewProfile = profile => ({
    type: RECEIVE_NEW_PROFILE,
    profile
});

export const updateProfile = profile => dispatch => (
    ProfileApiUtil.updateProfile(profile)
        .then(updatedProfile => dispatch(receiveNewProfile(updatedProfile)))
)

export const createProfile = profile => dispatch => (
    ProfileApiUtil.createProfile(profile)
        .then(profile => dispatch(receiveNewProfile(profile)))
);

export const fetchProfiles = userId => dispatch => (
    ProfileApiUtil.fetchProfiles(userId)
        .then(profiles => dispatch(receiveUserProfiles(profiles)))
);

export const fetchProfile = profileId => dispatch => (
    ProfileApiUtil.fetchProfile(profileId)
        .then(profile => dispatch(receiveCurrentProfile(profile)))
);
