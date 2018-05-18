import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import indexStyle from '../styles/index.less';
import { postLogoutStart } from '../../../../data/login/actions/index';

const propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    postLogoutStart: PropTypes.func.isRequired,
};

class Header extends React.PureComponent {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <header className="outer-ctn">
                <div className="inner-ctn" styleName="header-ctn">
                    <div styleName="header-top">
                        <Link to="/">REACT-REDUX-BOILERPLATE</Link>
                    </div>
                    <nav styleName="header-bottom">
                        <NavLink to="/" exact activeClassName="nav-active">Home</NavLink>
                        <NavLink to="/user" activeClassName="nav-active">User</NavLink>
                        <NavLink to="/lang" activeClassName="nav-active">Lang</NavLink>
                        <NavLink to="/setting" activeClassName="nav-active">Setting</NavLink>
                        { isLoggedIn ?
                            <button styleName="logout-btn" onClick={this.props.postLogoutStart}>Logout</button> :
                            <NavLink to="/login" activeClassName="nav-active">Login</NavLink>
                        }
                    </nav>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    postLogoutStart: () => dispatch(postLogoutStart()),
});

Header.propTypes = propTypes;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CSSModules(Header, indexStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' }));
