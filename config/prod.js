// prod.js - production keys
// this file must be commited, so that can be handled by heroku to know proces.env variables
// so this cannot be git ignored
//cookie key can be random numbers
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	stripePublishableKey: process.env.STRIPEpk,
	stripeSecretKey: process.env.STRIPEsk,
	sendGridKey: process.env.SEND_GRID_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN
};
