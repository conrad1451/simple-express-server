// CHQ: Gemini AI generated file as a refactor of index.js
// that is suitable for a serverless API

const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Set CORS middleware
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://react-api-use-test-2.vercel.app",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers",
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  res.setHeader("Access-Control-Max-Age", 7200);

  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// Use Express Router to handle the base path redirect seamlessly
const router = express.Router();

// GET /
router.get("/", (req, res) => {
  res.send("Hello World!, I am server created by express");
});

// GET /bro/
router.get("/bro", (req, res) => {
  res.send("Ayo!, I'm a new path in this ExpressJS app. What's good?");
});

// Mount the router under the function path or root
app.use("/.netlify/functions/api", router);
app.use("/", router);

// Export handler wrapped in serverless-http
module.exports.handler = serverless(app);
