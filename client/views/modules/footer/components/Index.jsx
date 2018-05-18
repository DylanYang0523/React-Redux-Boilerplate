import React from 'react';
import CSSModules from 'react-css-modules';
import indexStyle from '../styles/index.less';

class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="outer-ctn">
                <div className="inner-ctn" styleName="footer-ctn">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/DylanYang0523">GitHub</a>
                </div>
            </footer>
        );
    }
}

export default CSSModules(Footer, indexStyle, { allowMultiple: true, handleNotFoundStyleName: 'log' });
