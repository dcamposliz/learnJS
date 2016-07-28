#8. React-Redux

 - react-redux

 - Concepts: Provider, storeSelector, connect

Install:

	cd path/to/example
	npm install
	gulp

Visit http://localhost:8000

react-redux is project that is separate from react, and from redux. This helps us with wiring between react and redux.

For this we load 'react-redux' in our package.json file. 

We load the 'Provider' package from 'react-redux' in our /app/ui/app.js, gluing redux to our entire application, as the following shows:

										//-- /app/ui/app.js

	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Router, Route, browserHistory } from 'react-router';
	import { Provider } from 'react-redux';
	import store from 'store';

	// Layouts
	import App from 'layouts/app';

	// Components
	import Home from 'ui/home';
	import WidgetContainer from 'ui/widget-container';
	import UsersContainer from 'ui/users-container';

	ReactDOM.render((
	    <Provider store={store}>
	        <Router history={browserHistory}>

	            <Route component={App}>

	                <Route path="/" component={Home} />
	                <Route path="/widgets" component={WidgetContainer} />
	                <Route path="/users" component={UsersContainer} />

	            </Route>

	        </Router>
	    </Provider>
	), document.getElementById('root'));

	//-- (end)

That's not all. We must also go to our aside-container.js file and fix things around. We may now use 'store selector' for which, instead of exporting our component (which we were doing before) we are now exporting a connection.

										//-- /app/ui/app.js

	import React from 'react';
	import store from 'store';
	import { connect } from 'react-redux';
	import Aside from './aside';

	const stateToProps = function(state){
		return {
			hasUsers: state.userReducer.users.length ? true : false
		}
	}

	export default connect(stateToProps)(Aside);

	//-- (end)

We no longer have to subscribe. React-Redux takes care of the wiring such that the state of the store is connected to the state of the component. React-Redux is only good for the subscription part of things, we still need to handle the dispatch.

Read more documentation: http://redux.js.org/





