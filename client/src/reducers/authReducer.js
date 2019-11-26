import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false; // an emtpy string in js will be interpreted as false

		default:
			//default value is set to null
			return state;
	}
}
