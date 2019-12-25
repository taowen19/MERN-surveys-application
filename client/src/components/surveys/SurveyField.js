import React, { Component } from "react";

//es6 syxtax, {input} = props.input
//...input represents all event handlers of input tag
// if touched is true, then error will be inspected to see if it contains a string
			// if it does, then the string will be return
export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom:'5px'}}/>
			<div className="red-text" style={{ marginBottom:'20px'}}>
				{touched && error}
			</div>
			

		</div>
	);
};
