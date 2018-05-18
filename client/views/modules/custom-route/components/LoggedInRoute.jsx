import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};

const LoggedInRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props => (
                rest.isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            )
        }
    />
);

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
});

LoggedInRoute.propTypes = propTypes;

export default connect(mapStateToProps)(LoggedInRoute);
