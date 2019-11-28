const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
// same line as below, it means that mongoose object has a property
//called schema, and store it in a new variable
const { Schema } = mongoose;

const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;

