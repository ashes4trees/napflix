import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { fetchProfiles } from '../../actions/profile_actions';

const mSTP = state => ({
    errors: Object.values(state.errors.session),
});

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(mSTP, mDTP)(LoginForm);