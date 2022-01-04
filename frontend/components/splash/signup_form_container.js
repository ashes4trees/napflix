import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    email: ownProps.email
});

const mDTP = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
});

export default connect(mSTP, mDTP)(SignupForm);