import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Import i18next
import { I18nextProvider } from 'react-i18next';

// Import Middle Ware
import loggerMiddleware from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Import Root Reducers
import appRootReducer from './appRootReducer';

// Import App Base Router
import App from './app';

// Import i18n Init Setting
import i18n from './services/i18n/index';

// Import Saga Manager
import appSagaManager from './appSagaManager';

// Create Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(appRootReducer, applyMiddleware(loggerMiddleware, sagaMiddleware));

const appRender = (Component) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Component />
                </I18nextProvider>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

// sagaMiddleware.run(rootSaga);
appSagaManager.startSagas(sagaMiddleware);

appRender(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    // HMR css
    module.hot.accept('./app', () => { appRender(App); });
    // HMR reducer
    module.hot.accept('./appRootReducer', () => {
        store.replaceReducer(appRootReducer);
    });
    // HMR saga
    module.hot.accept('./appSagaManager', () => {
        appSagaManager.cancelSagas(store);
        appSagaManager.startSagas(sagaMiddleware);
    });
}
