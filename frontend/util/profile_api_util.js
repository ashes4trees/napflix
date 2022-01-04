export const fetchProfiles = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}/profiles`
    })
);

export const fetchProfile = profileId => (
    $.ajax({
        method: 'GET',
        url: `api/profiles/${profileId}`
    })
);

export const createProfile = profile => (
    $.ajax({
        method: 'POST',
        url: `api/users/${profile.user_id}/profiles`,
        data: { profile }
    })
);
