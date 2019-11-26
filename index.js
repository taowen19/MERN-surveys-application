//es2015， use import express from 'express"'
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

require("./models/User"); // beware of the order or require statements
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
//use function is the middleware
//middleware is the function that preprocess incoming requests
//before they are sent to handlers
app.use(passport.initialize());
app.use(passport.session());

//by calling app.get, we are creatinga a new route handler
// implied slash localhost:5000/
// localhost:5000/greetin

require("./routes/authRoutes")(app); // niubi js
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets
	// like our main.js file or main.css file
	app.use(express.static("client/build"));
	// Express will serve up the index.html file
	// it it doesn't recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
// deploy step 1
//this line is written for Heroku, binding the port
// it is provider sothat we can deploy out application on
// heroku would inject the port number into the variable env.port
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//deply step 2
//need to tell heroku what version of node we use
// need to add engines in package.json file
// deploy step 3: add start variable in scripts in package.json
//step 4: create .gitigtore
