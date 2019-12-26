import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
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
					onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

	//如果不加 || “” ，在我们还没有输入emails内容的时候，validate就被调用并且emails内容为空，会报错
	//但是如果这行代码按照intuition放在each loop后面，就会导致空string overrite前面本来已经获得到的真值
	errors.recipients = validateEmails(values.recipients || '');

	/* This is a redundant code since we need to check 4 fields with the same rules.
	if (!values.title) {
		errors.title = "You must provide a title";
	}
	*/

	// USE lodash library which was referenced above to iterate.
	// Notice that we use square brackets instead of dot to reference.
	_.each(formFields, ({name}) =>{
		if(!values[name]){
			errors[name] = 'You must provide a value';
		}
	});


	return errors;
}

export default reduxForm({
	validate: validate,
	form: "SurveyForm",
	destroyOnUnmount: false
})(SurveyForm);
