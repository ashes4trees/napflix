
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, resetSessionErrors } from '../../actions/session_actions';


const mSTP = state => ({
    errors: Object.values(state.errors.session),
});

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(LoginForm);