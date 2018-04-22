const viewReducer = function(state, action) {
	let { type } = action;

	if (type === "UPDATE-VIEWS") {
		let new_state = Object.assign(state, {});
		new_state["view"] = action.payload;

		return new_state
	} else if (state === undefined) {
		return {};
	}
	return state;
}

export default viewReducer;