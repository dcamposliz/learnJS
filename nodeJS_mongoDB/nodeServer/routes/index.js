var express = require('express');
var router = express.Router();
// including mongodb again below:
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); // this defines the root route
// get, above, receives a path as well as a function.
// this will then render an 'index' page.
// More specifically, it will open views/index.jade.
// req stands for request
// res stands for response
// title: 'Express' is just some placeholder 'data'

// let's add some custom 'functionality'
router.get('/thelist', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/nodeServer';
	MongoClient.connect(url, function(err, db){
		if(err){
			console.log('Unable to connect to the server', err);
		} else {
			console.log("Connection established!");
			var collection = db.collection('students');
			collection.find({}).toArray(function(err, result){
				if(err){
					res.send(err);
				} else if (result.length){
					res.render('studentlist', {
						"studentlist" : result
					});
				} else {
					res.send('No documents found');
				}
				db.close();
			});
		}
	});
});

// now we are adding a form functionality to add new students
router.get('/newstudent', function(req, res){
	res.render('newstudent', {title: 'Add student'});
}); 
	// this routes the user to a newstudent.jade file
	// the render function 'supports' http requests and responses
	// and the newstudent page with title 'Add student' gets rendered

// now adding a way to add new students
router.post('/addstudent', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/nodeServer';
	MongoClient.connect(url, function(err, db){
		if(err){
			console.log("Unable to connect to server", err);
		} else {
			console.log("Connected to server.");

			var collection = db.collection('students');

			var student1 = {student: req.body.student, street: req.body.street, city: req.body.city, state: req.body.state, sex: req.body.sex, gpa: req.body.gpa};

			collection.insert([student1], function(err, result){
				if(err){
					console.log(err)
				} else {
					res.redirect("thelist");
				}
				db.close();
			});
		}
	});
});

module.exports = router;
