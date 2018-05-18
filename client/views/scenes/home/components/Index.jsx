import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../../../modules/header/components/Index';
import Footer from '../../../modules/footer/components/Index';
import indexStyle from '../styles/index.less';


const HomeScene = () => (
    <div>
        <Header />
        <div className="outer-ctn">
            <div className="inner-ctn" styleName="home-ctn">
                <h1>Welcome to my Boilerplate!</h1>
                <p>In this demo, we use</p>
                <p>
                    react, redux, redux-logger,
                    redux-form, redux-saga, axios,
                    react-css-modules, i18n, jest,
                    yarn, docker, webpack(Dev, HMR), babel, eslint
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

export default CSSModules(HomeScene, indexStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' });
