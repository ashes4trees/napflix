import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mSTP = state => ({
    errors: Object.values(state.errors.session),
    email: state.email
});

const mDTP = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
});

export default connect(mSTP, mDTP)(SignupForm);