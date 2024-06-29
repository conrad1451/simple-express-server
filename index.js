// Importing express 
const express = require('express'); 

// Creating instance of express 
const app = express(); 

// Handling GET / Request 
app.get('/', function (req, res) { 
	res.send("Hello World!, I am server created by expresss"); 
}) 

// Listening to server at port 3000 
app.listen(3000, function () { 
	console.log("server started"); 
})
