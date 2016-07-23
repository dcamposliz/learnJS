4. React Router

 - React Router

 - Gulp

 	- Webpack

 	- gulp-server

 - Concept: browserHistory

Install:

	cd path/to/example
	npm install
	sudo npm install gulp -g
	gulp

Then visit http://localhost.8000

Here we are trying to create a single-page-application (SPA). The initial HTTP request serves up the index.html and then the bundle.js. After that, when we toggle between 'Home' and 'Users' links, we do not need to make further requests to the server, as all we need already lives within the browser. This is possible with the REACT-ROUTER.

									//-- /app/app.js

	...
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Router, Route, browserHistory} from 'react-router';

	// Components
	import Home from 'ui/home';
	import Users from 'ui/users';

	ReactDOM.render((
			<Router history={browserHistory}>
				<Route path="/" component={Home} />
				<Route path="/users" component={Users} />
			</Router>
		), document.getElementById('root'));

	//-- (end)

'Router' and 'Route' are JSX functions. As we can see above, you can pass components as components' attributes. The curly braces '{}' indicate that we are including JavaScript. And remember, this is not in-line JavaScript, because the markup-looking code is JSX and not HTML.

Here is some further documentation on React-Router:

https://github.com/reactjs/react-router

