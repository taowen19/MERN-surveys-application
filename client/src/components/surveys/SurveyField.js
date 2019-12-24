import React, { Component } from "react";

//es6 syxtax, {input} = props.input
//...input represents all event handlers of input tag
export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
		</div>
	);
};
