import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Header from '../../../modules/header/components/Index';
import Footer from '../../../modules/footer/components/Index';
import UserCard from './UserCard';
import indexStyle from '../styles/index.less';
import { getUserListStart } from '../../../../data/user/actions/index';

const propTypes = {
    userList: PropTypes.array.isRequired,
    getUserListStart: PropTypes.func.isRequired,
};

class UserScene extends React.Component {
    componentDidMount() {
        this.props.getUserListStart();
    }

    render() {
        const { userList } = this.props;
        return (
            <div>
                <Header />
                <div className="outer-ctn">
                    <div className="inner-ctn" styleName="user-ctn">
                        <h4>Demo for calling an fake api to create fake users.</h4>
                        <p>
                            Fake users will created in this section.
                        </p>
                        <div styleName="card-list-ctn">
                            {userList.map(el => (
                                <UserCard
                                    key={el.id}
                                    firstName={el.first_name}
                                    lastName={el.last_name}
                                    avatar={el.avatar}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userList: state.userReducer.userList,
});
const mapDispatchToProps = dispatch => ({
    getUserListStart: () => dispatch(getUserListStart()),
});

UserScene.propTypes = propTypes;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CSSModules(UserScene, indexStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' }));
