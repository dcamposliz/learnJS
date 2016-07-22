// buidling a simple http server using nodeJS

var http = require('http');

var server = http.createServer(function(request, response){
	console.log("got a request!");
	response.write("hi");
	response.end();
});

server.listen(3000);