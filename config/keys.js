// keys.js - figure out what set of credentials to return 

// this node-env variable is automatically handled by heroku
// so on the local machine, everytime should go to the else case
if (process.env.NODE_ENV === 'production'){
	// we are in production - return the prod set of keys
	module.exports = require('./prod');
} else {
	// we are in dev - return dev set of keys
	// require this and immediately pass it to whoever call this
	// that's the function of module.exports
	module.exports = require('./dev');
}
