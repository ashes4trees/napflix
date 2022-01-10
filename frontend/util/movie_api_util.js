

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