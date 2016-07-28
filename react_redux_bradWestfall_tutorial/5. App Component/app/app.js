import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';

// Components
import Home from 'ui/home';
import Users from 'ui/users';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />
        </Route>
    </Router>
), document.getElementById('root'));