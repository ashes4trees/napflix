import React from "react";
import { connect } from "react-redux";
import GenresIndex from './genres_index';
import { logout } from '../../actions/session_actions';
import { resetCurrentProfile } from "../../actions/profile_actions";
import { fetchMovies, createListItem } from "../../actions/movie_actions";

const mSTP = state => ({
    movies: state.entities.movies,
    genres: Object.values(state.entities.genres),
    tags: Object.values(state.entities.tags),
    topMovie: Object.values(state.entities.movies)[3],
    currentUserId: state.session.profileId,
    myList: Object.values(state.entities.myList)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetProfile: () => dispatch(resetCurrentProfile()),
    fetchMovies: () => dispatch(fetchMovies()),
    createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId))
});

export default connect(mSTP, mDTP)(GenresIndex);