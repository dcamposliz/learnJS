import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';

// Components
import Home from 'ui/home';
import WidgetContainer from 'ui/widget-container';
import UsersContainer from 'ui/users-container';

ReactDOM.render((
    <Router history={browserHistory}>

        <Route component={App}>

            <Route path="/" component={Home} />
            <Route path="/widgets" component={WidgetContainer} />
            <Route path="/users" component={UsersContainer} />

        </Route>

    </Router>
), document.getElementById('root'));