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

export const updateProfile = profile => (
    $.ajax({
        method: 'PATCH',
        url: `api/profiles/${profile.id}`,
        data: { profile }
    })
);

export const deleteProfile = profileId => (
    $.ajax({
        method: 'DELETE',
        url: `api/profiles/${profileId}`
    })
)
