import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Global Setting.
import 'normalize.css';
import './app.less';

// Import Services
import LoggedInRoute from './views/modules/custom-route/components/LoggedInRoute';

// Import Scene Components
import HomeScene from './views/scenes/home/components/Index';
import LangScene from './views/scenes/lang/components/Index';
import LoginScene from './views/scenes/login/components/Index';
import UserScene from './views/scenes/user/components/Index';
import SettingScene from './views/scenes/setting/components/Index';
import NotFoundScene from './views/scenes/not-found/components/Index';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeScene} />
                    <Route path="/lang" component={LangScene} />
                    <Route path="/login" component={LoginScene} />
                    <Route path="/user" component={UserScene} />
                    <LoggedInRoute path="/setting" component={SettingScene} />
                    <Route component={NotFoundScene} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
