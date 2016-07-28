#Redux

 - Redux

 - Redux-Thunk

 - Concepts: Stores, Reducers, Actions, Dispatch, Subscribe

Install:

	cd path/to/example
	npm install
	gulp

Visit http://localhost:8000

The first thing we see being different in this directory is that we now have /app/reducers/user.js, /app/store.js.

REDUX

The idea is that we store a bunch of data about our application in an object that is accessible to everywhere in our application. Our object is called 'Store'. Flux allows you to have multiple stores, Redux wants you to have one store - all the front-end data is then stored into one big object, maybe with sub-objects, etc. This does not mean that the store is a replication of our back-end data; we only load data that is relevant to our front-end. Maybe when we start an example app, our store says users:none but as we load our data and then our store has all the users.

Redux is build around the idea of code2 subscribing to code1. When code1 has an event, code2 knows. Then depending on logic, code2 will either react or not. Along the same mind-framework, when component1 experiences a change that the rest of the application needs to be aware of, instead of this component letting components 1_a and 1_b and 1_c know (and as the application gets bigger this complexity also does). Instead of this happening, component1 dispatches an announcement saying, 'hey, I changed', and anything listening can pick up the change and run with it.

Now, looking at the code in this directory, we can see that nothing changes in /app/app.js. 

										//-- /app/app.js
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Router, Route, browserHistory } from 'react-router';

	// layouts
	import App from 'layouts/app';

	// components
	import Home from 'ui/home';
	import WidgetContainer from 'ui/widget-container';
	import UsersContainer from 'ui/users-container';

	ReactDOM.render((
		<Router history="browserHistory">
			<Route component={App}>
				<Route path="/" component={Home} />
				<Route path="/widgets" component="WidgetContainer" />
				<Route path="/users" component="UsersContainer" />
			</Route>
		</Router>
	), document.getElementById('root'));

	//-- (end)

Same with our widgets and users components, they did not change much.

Where we do see change is in our /app/api/user.js file, which is where we make the call out to the database to retrieve user data:

										//-- /app/api/user.js

	import axios from 'axios';
	import store from 'store';

	export function getUsers(){
		return axios.get('http://localhost:3000/users').then(function(response){
			store.dispatch({
				type: 'GET_USERS',
				users: response.data
			})

			return response;
		
		}).catch(function(err){
			console.log(err);
		});
	}

	//-- (end)

This code dispatches user data into the store as object data. Then anything listening to store will be able to access such data if necessary. This code also handles errors. We also have an aside component:

										//-- /app/ui/aside.js

	import React from 'react';

	export default React.createClass({
		render: function(){
			return(
				<aside>
					Do we have users? {this.props.hasUsers ? 'Yes' : 'No'}
				</aside>
			)	
		}
	});

	//-- (end)

This component is of course wrapped in a container component, which holds the state data. Such container component looks like this:

										//-- /app/ui/aside.js

	import React from 'react';
	import Aside from './aside';
	import store from 'store';

	export default React.createClass({
	    getInitialState: function() {
	        return {
	            hasUsers: false
	        }
	    },
	    componentWillMount: function() {
	    	var _this = this;
	    	store.subscribe(function(){
	    		var currentStore = store.getState()
	    		_this.setState({
	    			hasUsers: currentStore.userReducer.users.length ? true : false
	    		})
	    	})
	    },
	    render: function() {
	        return (
	            <Aside hasUsers={this.state.hasUsers} />
	        )
	    }
	});

	//-- (end)

The componentWillMount() function is interesting here. It updates the state of this component based on the store.

Notice how we both import and call our 'store' object. Let's take a look at our 'store'.

										//-- /app/ui/aside.js

	import { createStore, applyMiddleware, combineReducers } from 'redux';
	import thunk from 'redux-thunk';

	// add middleware to createStore
	var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

	// app reducers
	import userReducer from './reducers/user';

	// combine reducers
	var reducers = combineReducers({
		userReducer: userReducer
		// more ...
	});

	// create store
	var store = createStoreWithMiddleware(reducers);

	export default store;

	//-- (end)

Here is some pseudo-code to help us understand what's going on with store:

	// PSEUDO-CODE
	// reducer function
	var addUserReducer = function(state, action){
		switch(action.type == 'ADD_USER'){
			case 'GET_USERS':
				var newState = object.assign({}, state)
				newState.users = action.users;
				return newState;

			default:
				return state;
		}
	}
	var store = createStore(addUserReducer);
	//
	store.dispatch({
		type: 'ADD_USER',
		data: {name : 'david'}
	});

	//-- (end)

The reducer function lives within the store, and any changes that happen to components get piped through the reducer to check for relevant changes to state. This is why we're importing our reducer into our store. Let's take a look at our reducer within /app/reducers/user.js:

										//-- /app/reducers/user.js

	var userInitialState = {
		users: []
	};
	export default function(state = userInitialState, action){
		switch(action.type){
			case 'GET_USERS':
				var newState = Object.assign({}, state)
				newState.users = action.users;
				return newState;

			default:
				return state;
		}
	}

	//-- (end)

Notice also that we are creating a new variable for our new state as we like to keep track of our different state iterations.

When I do a dispatch, every single reducer is alerted that something happened.

'Thunk' is a middleware that allows you to have mutiple asynchronous reducers.

The store is an object.

You could technically store different state versions to troubleshoot potential problems.

Back to reducers/user.js, we have all caps 'GET_USERS', this has to do with CONST versus var.

There is something about actions that we need to learn. For this, read the official REDUX documentation: http://redux.js.org/index.html.






