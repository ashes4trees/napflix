import React from 'react';
import { connect } from 'react-redux';
import ShowMovie from './show_movie';

const mSTP = (state, ownProps) => ({
    currentMovie: Object.values(state.entities.movies)[ownProps.match.params.movieId],
    history: ownProps.history
});

export default connect(mSTP, null)(ShowMovie);