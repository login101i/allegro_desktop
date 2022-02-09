export const localVersion = () => async (dispatch) => {
	dispatch({
		type: "allegro local"
	});
};

export const allegroVersion = () => async (dispatch) => {
	dispatch({
		type: "allegro"
	});
};
