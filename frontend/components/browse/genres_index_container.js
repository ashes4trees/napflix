import React from "react";
import { connect } from "react-redux";
import GenresIndex from './genres_index';

const mSTP = state => ({
    // genres: state.entities.genres
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mDTP)(GenresIndex);