import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE';
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES';

const receiveUserProfiles = profiles => ({
    type: RECEIVE_USER_PROFILES,
    profiles
});

const receiveCurrentProfile = currentProfile => ({
    type: RECEIVE_CURRENT_PROFILE,
    currentProfile
});

export const fetchProfiles = userId => dispatch => (
    ProfileApiUtil.fetchProfiles(userId)
        .then(profiles => dispatch(receiveUserProfiles(profiles)))
);

export const fetchCurrentProfile = profileId => dispatch => (
    ProfileApiUtil.fetchProfile(profileId)
        .then(profile => dispatch(receiveCurrentProfile(profile)))
);
