import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../../../modules/header/components/Index';
import Footer from '../../../modules/footer/components/Index';
import indexStyle from '../styles/index.less';

const SettingScene = () => (
    <div>
        <Header />
        <div className="outer-ctn">
            <div className="inner-ctn" styleName="setting-ctn">
                <h4>After you logged in, you can see this page.</h4>
                <p>
                    You can access some private data in your private page.
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

export default CSSModules(SettingScene, indexStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' });
