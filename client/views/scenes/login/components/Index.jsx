import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../../../modules/header/components/Index';
import Footer from '../../../modules/footer/components/Index';
import LoginForm from './LoginForm';
import indexStyle from '../styles/index.less';

const LoginScene = props => (
    <div>
        <Header />
        <div className="outer-ctn">
            <div className="inner-ctn" styleName="login-ctn">
                <LoginForm routeProps={props} />
            </div>
        </div>
        <Footer />
    </div>
);

export default CSSModules(LoginScene, indexStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' });
