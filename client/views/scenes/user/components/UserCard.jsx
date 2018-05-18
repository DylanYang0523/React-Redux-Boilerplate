import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import userCardStyle from '../styles/userCard.less';

const propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

class UserCard extends React.Component {
    render() {
        const { firstName, lastName, avatar } = this.props;
        return (
            <div styleName="card-ctn">
                <img src={avatar} alt={`${firstName} ${lastName}`} />
                <div>{`${firstName} ${lastName}`}</div>
            </div>
        );
    }
}

UserCard.propTypes = propTypes;

export default CSSModules(UserCard, userCardStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' });
