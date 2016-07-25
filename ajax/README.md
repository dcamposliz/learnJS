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

THE URL

The ul parameter of the open() method is an address to a file on a server. The file can be of any kind, like .txt or .xml, or .asp or .php (which can perform actions on the server before sending a response back to the browser).

ASYNCHRONOUS - TRUE OR FALSE?

Sending asynchronous requests is a huge improvement for web developers. Many server-performed tasks are very time consuming; and before AJAX, these operations could cause applications to hand or stop - for this reason.

With AJAX, the JavaScript does not have to wait for the server response, but can instead:

 - execute other scripts while waiting for server response

 - deal with the response when the response is ready

When using async=true we need to specify a function to execute once the response is ready. We do this with the onreadystatechange event:

	xhttp.onreadystatechange = function(){
 		if(xhttp.readyState == 4 && xhttp.status == 200){
 			document.getElementById("demo").innerHTML = xhttp.responseText;
 		}
 	};
 	xhttp.open("GET", "ajax_info.txt", true);
 	xhttp.send();

Using async=false is not recommended - although it can be used for small requests. JavaScript will not proceed to subsequent scripts until the server response is ready. When using async=false, we do NOT write an onreadystatechange function - just put the code after the send() statement.

	xhttp.open("GET", "ajax_info.txt", false);
	xhttp.send();
	document.getElementById("demo").innerHTML = xhttp.responseText;

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

The onreadystatechange event

When a request to a server is sent, we want to perform some actions based on the response. The onreadystatechange event is triggered every time the readyState changes. The readyState property holds the status of the XMLHttpRequest. The XMLHttpRequest has three important properties, onreadystatechange, readyState, and status.

 - onreadystatechange: stores a function (name of the function) to be called automatically each time the readyState property changes.

 - readyState: holds the status of the XMLHttpRequest. Changes from 0 to 4:

  - 0: request not initialized.

  - 1: server connection established.

  - 2: request received.

  - 3: processing request.

  - 4: request finished and response is ready.

 - status: 200 for "OK" or 404 for "Page not found".

In the onreadystatechange event, we specify what what will happen when the server response is ready to be processed.

When readyState is 4 and status is 200, the response is ready. For example:

	<!DOCTYPE html>
	<html>
	<body>
	<div id="demo">AJAX will change this content.</div>
	<button type="button" onclick="loadDoc()">Change content</button>
	<script>
		function loadDoc(){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(readyState == 4 && status == 200){
					document.getElementById("demo").innerHTML = xhttp.responseText;
				}
			};
			xhttp.open("GET", "ajax_info.txt", true);
			xhttp.send();
		}
	</script>
	</body>
	</html>

CALLBACK FUNCTION

A callback function is a function passed as a parameter to another function. If you have more than one AJAX task on your site, you should create ONE standard function for creating the XMLHttpRequest object, and call this for each AJAX task.

The function call should contain the URL and what to do on the onreadystatechange (which is probably different for each call).

For example:

	function loadDoc(url, customFunction){
		var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){
				customFunction(xhttp);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}

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
