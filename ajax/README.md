#AJAX

This document contains notes on AJAX (Asynchronous JavaScript and XML). The source is W3SCHOOLS (http://www.w3schools.com/ajax).

--

INTRODUCTION

AJAX is about updating parts of a web page, without reloading the whole page.

AJAX = Asynchronous JavaScript and XML.

The way AJAX works can be summarized into a three step process. First, within the browser, and event occurs, which creates an XMLHttpRequest object, and sends an HttpRequest to the server. Second, within the server, the HttpRequest is processed, and a response (with data) is created and sent back to the browser. And third, within the browser, the returned data is processed with JavaScript, and the page content is updated.

AJAX uses a combination of XMLHttpRequest object (to retrieve data from a web server) and JavaScript/DOM (to display/use the data).

The keystone object of AJAX is the XMLHttpRequest object. 

--

AJAX XMLTTP

The syntax for creating an XMLHttpRequest object is:

	variable = new XMLHttpRequest();

Some browsers (e.g. IE5 and IE6) do not support this and workarounds are necessary. I.e.:

	var xhttp;
	if(window.XMLHttpRequest){
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE5, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

--

AJAX REQUEST

We use open() and send() methods on the XMLHttpRequest object to send such request to the server. I.e.:

	xhttp.open("GET", "ajax_info.txt", true);
	xttp.send();

The open() method takes three arguments, which are 1) method (GET or POST), 2) url (the server (file) location) and 3) async (true (asynchronous) or false (synchronous)).

The send() method takes no arguments if used for GET. If it used for POST then it takes a string argument (e.g. send(string)).

GET requests are simpler and faster, but POST requests are more robust and secure (and can be used for updating files or databases on servers, sending large amounts of data, and sending user input).

In our example above we may get a cached result. To avoid this we can add a unique ID to the URL using a query string parameter:

	xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
	xhttp.send();

We can also send information to the server using the GET method, and we do this by adding query string parameters as well:

	xhttp.open("GET", "demo_get2.asp?firstName=Henry&lastName=Ford", true);
	xhttp.send();

A simple POST request might look like this:

	xhttp.open("POST", "demo_post.asp", true);
	xhttp.send();

To post data like an HTML form, add an HTTP header with setRequestHeader(). Then specify the data you want to send in the send() method - remember the string argument?

	xhttp.open("POST", "ajax_test.asp", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("firstName=Henry&lastName=Ford");

The setRequestHeader() method adds HTTP headers to the request and takes two arguments: header and value.

 - header: specifies the header name.

 - value: specifies the header value.

--

AJAX RESPONSE

To get the response from a server, use the responseText or responseXML property of the XMLHttpRequest object.

 - responseText: gets the response data as a string

 - responseXML: gets the response data as XML data

If the response from the server is NOT XML, then use the responseText property:

	document.getElementById("demo").innerHTML = xhttp.responseText;

This outputs the xhttp.responseText into the DOM where our element's id is equal to "demo".

If the response from the server is XML, then we use:

	xmlDoc = xhttp.responseXML;
	txt = "";
	x = xmlDoc.getElementsByTagName("ARTIST");
	for (i = 0; i < x.length; i++){
		text = text + x[i].childNotes[0].nodeValue + "<br>";
	}
	document.getElementById("demo").innerHTML = txt;

--

AJAX EVENTS

...

--

AJAX PHP

...

--

AJAX ASP

...

--

AJAX DATABASE

...

--

AJAX XML FILE

...
