export const localnieVersion = () => async (dispatch) => {
	dispatch({
		type: "allegro localnie"
	});
};

export const allegroVersion = () => async (dispatch) => {
	dispatch({
		type: "allegro"
	});
};
