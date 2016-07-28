#6. Data without Redux

 - JSON server (just so we have a RESTful API for demo purposes)

 - Axios (a popular XHR tool using promises)

 - Concepts: Component containers

Install:

	cd path/to/example
	npm install
	gulp

Visit http://localhost:3000 for database
Visit http://localhost:8000 for web app

GULP

We are using gulp now to carry out a variety of tasks for us: launching a server:api and server:web, starting a 'watch' thing, and running webpack to create our bundle files.

After the installation instructions we are able to run our app as well as our (JSON) database.

Our JSON database is faily simple:

										//-- /db.json

	{
	  "users": [
	    {
	      "id": 1,
	      "name": "Brad"
	    },
	    {
	      "id": 2,
	      "name": "Kevin"
	    }
	  ]
	}

	//-- (end)

We have two users, each with an 'id' and a 'name'. When we go to the users page on our app, this gets elements from our database.

Our /app/ui/app.js file has not changed too much except for the fact that we added our widget component.

										//-- /app/ui/app.js

	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Router, Route, browserHistory } from 'react-router';

	// layouts
	import App from 'layouts/app';

	// components
	import Home from 'ui/home';
	import WidgetContainer from 'ui/widget-container';
	import UsersContainer from 'ui/widget-container';

	ReactDOM.render((
	 		<Router history={browserHistory}>
	 			<Route component={App}>
	 				<Route path="/" component={Home} />
	 				<Route path="/widgets" component={WidgetContainer} />
	 				<Route path="/users" component={UsersContainer} />
	 			</Route>
	 		</Router>
	), document.getElementById('root'));

	//-- (end)

Notice that the router 'elements' have different values for path and component attributes. This is to say, we have the Widgets and Users components, and also widget-container and users-container components.

Ultimately, the widget-container component contains and returns the widget component. Similarly, the users-container contains and returns the users component. The widget-container and users-container components hold the data state of the widget and users components, respectively.

Let's then look at the widget-container component.

										//-- /app/ui/widget-container.js

	import React from 'react';
	import Widgets from './widgets'

	export default React.createClass({

		getInitialState: function(){
			return{
				widgetData: ['one', 'two', 'three']
			}
		},

		render: function(){
			return (
				<Widgets widgetData={this.state.widgetData} />
			)
		}
	});

	//-- (end)

Notice that widget-container is returning the widget component, and is passing down its state data in the form of widgetData, which technically is an array with three elements. It's worth mentioning that this is dummy data, as it is 'initialized' within the widget-container, instead of being passed from a database. The widget-container, again, contains the 'state' of the compoment, and passes it down to the component.

Let's see what the widget component looks like:

										//-- /app/ui/widgets.js

	import React from 'react';

	export default React.createClass({
		render: function(){
			return(
				<div className="widgets-page">
					<h1></h1>
					<ul>
						{this.props.widgetData.map(function(value, i){
							return(
								<li key={i}>{value}</li>
							);
						})}
					</ul>
				</div>
			)
		}
	});

	//-- (end)

This component is looping over the data elements through this.props.widgetData.map(function(...){...}) with the key attribute within the 'li' element. We must use the {i} value to increment in the array.

Moving onto the users and users-container components, we have a similar situation. Our users-container component contains and returns our users component. Let's take a look at our users-container component first:

										//-- /app/ui/users-container.js

	import React from 'react';
	import Users from './users'
	import { getUsers } from 'api/user';

	export default React.createClass({

		getInitialState: function(){
			return(
				users : []
			)
		},
		componentWillMount: function(){
			var _this = this;
			getUsers().then(function(response){
				_this.setState({
					users: response.data
				})
			}).catch(function(err){
				console.log(err);
			});
		},
		render: function(){
			return(
				<Users users={this.state.users} />
			)
		}
	});

	//-- (end)

In this context, it's important to regard the /app/api/user.js file:

										//-- /app/api/user.js

	import axios from 'axios';

	export function getUsers(){
		return axois.get('http://localhost:3000/users');
	}

	//-- (end)

The axios 'library' is simply an XHR (ajax) tool. This returns a 'promise'. Here is more documentation on JavaScript promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise. Notice also that we are not using 'export default' for getUsers(). Since we are using the curly braces '{}' we are deconstructing the object into smaller parts.

We can then see that our users-container first creates a users object, then the function componentWillMount 'populates' such users object with data that it gets using the getUsers function, which uses axios and simply returns JSON data. The componentWillMount function also supports error handling. Finally, users data is passed down as state to the child component <Users> in the render function.


Now let's look at the users.js file.

										//-- /app/ui/users.js

	import React from 'react';

	export default React.createClass({

		render: function(){
			return(
				<div className="users-page">
					<h1>App: Users</h1>
					<ul>
						{this.props.users.map(function(user, i){
							return(
								<li key={user.id}>{user.name}</li>
							)
						})}
					</ul>
				</div>
			)
		}
	});

	//-- (end)

It's worth noting that this users.js file is rather similar to the widgets.js file. This is good. This means that our child components are doing a similar job of consuming state data from their parent components. We want the container components to do most of the data-handling heavy lifting.
