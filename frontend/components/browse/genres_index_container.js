import React from "react";
import { connect } from "react-redux";
import GenresIndex from './genres_index';
import { logout } from '../../actions/session_actions';
import { resetCurrentProfile } from "../../actions/profile_actions";
import { fetchMovies } from "../../actions/movie_actions";

const mSTP = state => ({
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    tags: Object.values(state.entities.tags)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetProfile: () => dispatch(resetCurrentProfile()),
    fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mSTP, mDTP)(GenresIndex);