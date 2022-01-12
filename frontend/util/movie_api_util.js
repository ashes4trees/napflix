

export const fetchMovies = () => (
    $.ajax({
        method: 'GET',
        url: `api/movies`
    })
);

export const fetchMovie = movieId => (
    $.ajax({
        method: 'GET',
        url: `api/movies/${movieId}`
    })
);

export const createListItem = (movieId, profileId) => (
    $.ajax({
        method: 'POST',
        url: `api/lists`,
        data: {list: {
            movie_id: movieId, 
            profile_id: profileId
        }
        }
    })
);

export const deleteListItem = (listId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/lists/${listId}`
    })
);