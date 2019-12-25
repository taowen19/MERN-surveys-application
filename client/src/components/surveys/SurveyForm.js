import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";

//store in an array to avoid have long declarations of 4 fields.
const FIELDS = [
	{ label: "Survey Title", name: "title" },
	{ label: "Subject Line", name: "subject" },
	{ label: "Email body", name: "body" },
	{ label: "Recipient List", name: "emails" }
];

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(values =>
						console.log(values)
					)}
				>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button
						type="submit"
						className="teal btn-flat right white-text"
					>
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}
// DIFFERENCE BETWEEN MAP AND EACH
// map will return a list, each will just iterate and modify the objects.
function validate(values) {
	const errors = {};

	/* This is a redundant code since we need to check 4 fields with the same rules.
	if (!values.title) {
		errors.title = "You must provide a title";
	}
	*/

	// USE lodash library which was referenced above to iterate.
	// Notice that we use square brackets instead of dot to reference.
	_.each(FIELDS, ({name}) =>{
		if(!values[name]){
			errors[name] = 'You must provide a value';
		}
	});
	

	return errors;
}

export default reduxForm({
	validate: validate,
	form: "SurveyForm"
})(SurveyForm);
