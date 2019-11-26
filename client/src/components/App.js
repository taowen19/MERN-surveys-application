import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; // give some components the ability to call action creators
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
const DashBoard = () => <h2>DashBoard</h2>;
const SurveyView = () => <h2>SurveyView</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={DashBoard} />
						<Route path="/surveys/new" component={SurveyView} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default connect(null, actions)(App);
