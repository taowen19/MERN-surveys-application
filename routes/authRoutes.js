const passport = require("passport"); //require the original npm passport module

module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/surveys");
		}
	);

	// req: incoming requests
	// res: response
	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});

	app.get("/api/logout", (req, res) => {
		// logout is a function that automatically attached to the req object by passport.js
		req.logout(); // take the cookie and kill the id,destroy the req.user
		//res.send(req.user); // so test this, then will be an empty screen
		// if you go to the current page, then empty screen as well
		res.redirect("/");
	});
};
