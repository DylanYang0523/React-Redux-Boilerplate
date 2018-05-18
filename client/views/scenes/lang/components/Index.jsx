import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { translate } from 'react-i18next';
import Header from '../../../modules/header/components/Index';
import Footer from '../../../modules/footer/components/Index';
import indexStyle from '../styles/index.less';

const propTypes = {
    t: PropTypes.func.isRequired,
};

class LangScene extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <Header />
                <div className="outer-ctn">
                    <div className="inner-ctn" styleName="lang-ctn">
                        <button onClick={() => i18next.changeLanguage('en')}>Eng</button>
                        <button onClick={() => i18next.changeLanguage('zh')}>中文</button>
                        <h3>{t('title1')}</h3>
                        <p>{t('paragraph1')}</p>
                        <h3>{t('title2')}</h3>
                        <p>{t('paragraph2')}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

LangScene.propTypes = propTypes;

export default translate('translations')(CSSModules(
    LangScene,
    indexStyle,
    { allowMultiple: true, handleNotFoundStyleName: 'log' },
));
