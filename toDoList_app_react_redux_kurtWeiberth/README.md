# toDoList_app_react_redux_kurtWeiberth

In this directory I follow Kurt Weinberth's [tutorial series](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg) to build a to-do-list app using react, redux, and webpack.

Here is [original code](https://github.com/kweiberth/react-todo-list).

--

PART 3

The 'package.json' contains meta-data this project, as well as dependencies we'll be using, which include (roughly speacking):

 - babel

 - express

 - react

 - webpack

These can be installed in the working directory using the command

	npm install

We will need npm & webpack to be installed globally, so make sure that's done first.

We also have a 'server.js' file in the server directory. Notice that we are running a simple express server and initially serving static files.

We are running our app from the /dist directory which contains bundle.js, which gets packaged with webpack. For this we use:

	//-- {file : '/server/server.js'}

	app.use(express.static('./dist'));

	app.use('/', function(req, res){
		res.sendFile(path.resolve('client/index.html'));
	});

	//-- (end)

This is sending the client to the 'client/index.html' destination. 

'client/index.html' contains <div id="app"><div/> and loads bundle.js file from the dist directory.

We can run our server using (make sure to have ran 'npm install' first):

	node server/server.js

We are also loading nodemon within package.json, which helps with hot re-loading.

	//-- {file : '/server/server.js'}
	
	"serve": "nodemon server/server.js --ignore components"

	//-- (end)

Make sure to first install nodemon globally using:

	npm install -g nodemon

Now we can start our server with:

	npm run serve
