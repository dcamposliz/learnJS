what is nodeJS?

two categories of what people are doing with node:

	- utilities on the machine (dev)

		- gulp : used for simplicity of configuration files

		- grunt : JS task runner (e.g. minification, compilation, unit testing, linting)

		- yeoman : web scaffolding tool

	- a web server

		- express

		- koa

what are the super basics?

		node -v 	// returns node's version

		node 		// starts a node process

	in a node process there is no window or documnet because such node is not tied to a browser. there is a process, however.

We can load modules with:

	var moduleName = require('fileNameWhereModuleExists');

We can install the backbone package, for example, with:

	npm install backbone

So it seems there are a whole lot of packages to manage, and it'd be a pain to have to do it all manually. For this we use:

	npm init		// which creates a package.json file with all the dependecies

	npm install		// this installs dependencies as specified by package.json


