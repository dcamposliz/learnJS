Make sure NodeJS and MongoDB are installed.

	npm install --save express
	sudo npm install -g express-generator 
	npm install jade

Go to working directory and type:

	express <appName>

Edit package.json to include kerberos and mongodb. Move to appName directory and type:

	npm install

		or

	sudo npm install -g npm@latest

Create a data directory. Type to terminal:

	npm start

Go to localhost:3000 on browser and verify that server launched properly.

On terminal, type:

	mongod --dbpath <path/to/data/directory>

	mongo

	use <appName>

	db.students.insert([{"student" : "david campos", "street": "601 e anapamu", "city": "santa barbara", "state": "ca", "sex": "M", "gpa": 4.0}])

	db.students.find().pretty()

Open app.js on text editor and require mongodb.

Open routes/index.js and make some changes.

Create studentlist.jade within views directory, and edit it to output some markup.

Go to index.js and include functionality for adding a new student.