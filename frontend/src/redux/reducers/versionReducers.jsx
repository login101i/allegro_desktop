export const versionReducers = (state = { version: "allegro" }, action) => {
	switch (action.type) {
		case "allegro":
			return {
				version: "allegro"
			};
		case "allegro localnie":
			return {
				version: "allegro localnie"
			};
		default:
			return state;
	}
};
