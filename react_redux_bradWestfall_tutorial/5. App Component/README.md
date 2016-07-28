#5. App Component

 - No new tools

 - Concept: Re-usable layout (App Component)

 Install:

 	cd path/to/example
 	npm install
 	gulp

 Visit http://localhost:8000

 PROBLEM: Imagine you have a 50-page app such that /app/app.js looks something like this:

 										//-- /app/app.js
	...

 	<Router history={browserHistory}>
 		<Route path="/" component="{Home}" />
 		<Route path="/" component="{Users}" />
 		...
 		<Route path="/" component="{ ... }" />
 		...
 		<Route path="/" component="{ [n] }" />
 	</Router>

 	...

 	//-- (end)

One way in which we may structure each of these components (e.g. Home and Users) is that each renders its own mark-up. This would look roughly like this:

										//-- /app/ui/home.js
	import React from 'react';
	import { Link } from 'react-router';

	export default React.createClass({
		render: function(){
			return (
				<div class="app">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/users">Users</Link>
					</nav>
					<main>
						<h1>Home</h1>
					</main>
				</div>
			);
		}
	});

	//-- (end)

Similarly, users.js would look like this:

										//-- /app/ui/users.js
	import React from 'react';
	import { Link } from 'react-router';

	export default React.createClass({
		render: function(){
			return (
				<div class="app">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/users">Users</Link>
					</nav>
					<main>
						<h1>Users</h1>
					</main>
				</div>
			);
		}
	});

	//-- (end)

This code looks almost the same, and having exist multiple times in the browser is inefficient. 

SOLUTION: What we want to do is abstract the app layout:


 										//-- /app/app.js
	import React from 'react';
	import ReactDOM from 'react-dom';
	import {Router, Route, browserHistory} from 'react-router';

	// layouts 							***		 :)
	import App from 'layouts/app';

	// components
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

	//-- (end)

Notice that the code above has a route that instead of having a path, it has a component. That makes our App component the layout for the whole page.

The way this works is that the router is going to load the home component, which is essentially page one, and it's going to stick it inside the app component.

Every route can have a path, or a component, or a path and a component.

This way the home.js and users.js components are much simpler, and our code becomes much more efficient.


 										//-- /app/ui/home.js
	import React from 'react';

	export default React.createClass({
		render: function(){
			return (
				<h1>App: Home</h1>
			)
		}
	});

	//-- (end)

Then user.js component is going to be the same thing.

	 										//-- /app/ui/users.js
	import React from 'react';

	export default React.createClass({
		render: function(){
			return (
				<h1>App: Users</h1>
			)
		}
	});

	//-- (end)


Quick random note: 

	When it comes to importing modules from different directories, 'import' will first look in the app directory, and if it does not find what it is looking for, it will then look in the node_modules directory.


