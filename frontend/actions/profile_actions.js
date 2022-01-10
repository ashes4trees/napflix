import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE';
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES';
export const RECEIVE_NEW_PROFILE = 'RECEIVE_NEW_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const RESET_CURRENT_PROFILE = 'RESET_CURRENT_PROFILE';


const receiveUserProfiles = profiles => ({
    type: RECEIVE_USER_PROFILES,
    profiles
});

export const resetCurrentProfile = () => ({
    type: RESET_CURRENT_PROFILE
});

export const receiveCurrentProfile = currentProfile => ({
    type: RECEIVE_CURRENT_PROFILE,
    currentProfile
});

const receiveNewProfile = profile => ({
    type: RECEIVE_NEW_PROFILE,
    profile
});

const removeProfile = profile => ({
    type: REMOVE_PROFILE,
    profile
});

export const deleteProfile = profileId => dispatch => (
    ProfileApiUtil.deleteProfile(profileId)
        .then((profile) => dispatch(removeProfile(profile)))
)

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

export const fetchCurrentProfile = profileId => dispatch => (
    ProfileApiUtil.fetchProfile(profileId)
        .then(profile => dispatch(receiveCurrentProfile(profile)))
);



