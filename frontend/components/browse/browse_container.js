import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mDTP)(Browse);