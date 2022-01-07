import React from "react";
import { connect } from "react-redux";
import GenresIndex from './genres_index';
import { logout } from '../../actions/session_actions';
import { resetCurrentProfile } from "../../actions/profile_actions";

const mSTP = state => ({
    // genres: state.entities.genres
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetProfile: () => dispatch(resetCurrentProfile())
});

export default connect(null, mDTP)(GenresIndex);