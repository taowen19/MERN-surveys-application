const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
// same line as below, it means that mongoose object has a property
//called schema, and store it in a new variable
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
	title: String,
	subject: String,
	body: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: "User" },
	dateSent: Date,
	lastResponded: Date
});

// create a new collection called users
// only create it if it doesn't exist
mongoose.model("surveys", surveySchema);
