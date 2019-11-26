const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
// same line as below, it means that mongoose object has a property
//called schema, and store it in a new variable
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

// create a new collection called users
// only create it if it doesn't exist
mongoose.model("users", userSchema);
