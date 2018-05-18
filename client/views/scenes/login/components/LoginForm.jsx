import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import axios from 'axios';
import { getLoggedInStart } from '../../../../data/login/actions/index';
import { setCookie } from '../../../../services/helper/cookie';
import postLogin from '../../../../services/api/auth/postLogin';
import errHandler from '../../../../services/helper/error';

const propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
    getLoggedInStart: PropTypes.func.isRequired,
    routeProps: PropTypes.shape({
        location: PropTypes.shape.isRequired,
    }).isRequired,
    reset: PropTypes.func.isRequired,
};

const defaultProps = {
    email: '',
    password: '',
};

class LoginForm extends React.Component {
    constructor() {
        super();
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    submitLoginForm() {
        const { email, password } = this.props;
        axios(postLogin(email, password))
            .then((res) => {
                if (!res.data.token) {
                    const err = new Error();
                    err.message = res.data.error;
                    err.res = res;
                    throw err;
                }
                setCookie('access_token', res.data.token);
            })
            .then(() => {
                this.props.getLoggedInStart();
            })
            .catch((err) => {
                errHandler(err);
            });
    }

    render() {
        const { from } = this.props.routeProps.location.state || { from: { pathname: '/' } };
        const { reset } = this.props;
        if (this.props.isLoggedIn) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div>
                <p>Come from the route: {from.pathname}</p>
                <form>
                    <Field name="email" component="input" type="email" />
                    <br /><br />
                    <Field name="password" component="input" type="password" />
                    <br /><br />
                    <button type="button" onClick={this.submitLoginForm} className="form-btn">Submit</button>
                    <button type="button" onClick={reset} className="form-btn">Reset</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownState) => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    routeProps: ownState.routeProps,
});

const mapDispatchToProps = dispatch => ({
    getLoggedInStart: () => dispatch(getLoggedInStart()),
});

// Bind PropTypes
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

// Bind with redux-form.
let LoginFormWithReduxForm = reduxForm({
    form: 'loginForm',
})(LoginForm);

// When you need to access data in your component.
const selector = formValueSelector('loginForm');
LoginFormWithReduxForm = connect((state) => {
    const { email, password } = selector(state, 'email', 'password');
    return {
        email,
        password,
    };
})(LoginFormWithReduxForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormWithReduxForm);
