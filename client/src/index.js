//data layer -- redux
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

import axios from "axios";
window.axios = axios;

// first para is a dummy reducer which is a arrow function that returns an array, like this : () => []
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// first para is root route, second route is where to put the result of render, root dom object
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
/// every time store get updated, provider will inform all children in the App
// the document means index.html , can be found in public folder
// it's automatically generated
