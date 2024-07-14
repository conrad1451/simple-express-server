// Importing express 
const express = require('express'); 

// Creating instance of express 
const app = express(); 

const PORT = process.env.PORT || 8081;

// CHQ: already declared earlier
// const express = require("express");
// const app = express();
// Set middleware of CORS
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://react-api-use-test-2.vercel.app"
  );
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  // );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

// Handling GET / Request 
app.get('/', function (req, res) { 
	res.send("Hello World!, I am server created by expresss"); 
}) 

// Testing custom path
app.get('/bro/', function (req, res) { 
	res.send("Ayo!, I'm a new path in this ExpressJS app. What's good?"); 
}) 

// Listening to server at port 3000 
app.listen(PORT, function () { 
	console.log("server started"); 
})
