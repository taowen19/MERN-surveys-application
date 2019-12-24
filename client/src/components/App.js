import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; // give some components the ability to call action creators
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import DashBoard from "./DashBoard";
import SurveyNew from "./surveys/SurveyNew";
const SurveyView = () => <h2>SurveyView</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={DashBoard} />
					<Route path="/surveys/new" component={SurveyNew} />
				</BrowserRouter>
			</div>
		);
	}
}
export default connect(null, actions)(App);
