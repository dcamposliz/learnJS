#3. Props

 - Webpack Resolve ./app

 - Webpack Watch (done through terminal)

 - Concept: Sub Components

To install:

	cd path/to/example
	npm install
	webpack -w
	open index.html

We are using resolve:{} within the webpack.config.js file, which helps us with organization of files and hence finding things. It is used like this:

							//-- /node_modules/webpack.config.js
	module.exports = {
		...

		resolve: {
			root: path.resolve('./app'),
			extensions: ['', '.js']
		}
	}

Then in our app.js file we do not have to specify the path from the current directory, or extension of files imported; instead, we declare a default short-cut path. In this case, when we import components within our app.js file, the import method starts looking at root, then app, then at whatever 'tail' destination has been specified:

							//-- /app/app.js

	import Nav from 'ui/nav';
	import Anchor from 'ui/anchor';

These resolve at '/app/ui/nav.js' and '/app/ui/anchor.js', respectively. 

We also start seeing props in this section.

Notice that within /app/ui/anchor.js we see a prop within the anchor tag. This is because the parent component, <App />, will have values declared for such props, which get 'rendered' for these child components, such as <Anchor /> and/or <Nav />.

	<a href={this.props.goSomewhere}>{this.props.text}</a>