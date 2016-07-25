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

	export default React.createClass({
	
		render: function(){
			return: (

				<div className="users-page">
					<h1>App: Users</h1>
					<ul>
						{this.props.users.map(function(users, i){
							return(
								<li key={user.id}>{user.name}</li>
							);
						})}
					</ul>
				</div>

			)
		}
	});

	//-- (end)

