import axios from 'axios';

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_USER_REQUEST,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CLEAR_ERRORS,
} from '../constants/userConstants';

export const registerUser = body => async dispatch => {
	try {
		dispatch({ type: REGISTER_USER_REQUEST });
		const { data } = await axios.post('/api/v1/register', body);
		dispatch({
			type: REGISTER_USER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: REGISTER_USER_FAIL,
			payload: error.response.data,
		});
	}
};

export const loginUser = body => async dispatch => {
	try {
		dispatch({ type: LOGIN_REQUEST });
		const { data } = await axios.post('/api/v1/login', body);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data,
		});
	}
};

export const logoutUser = () => async dispatch => {
	try {
		await axios.post('/api/v1/logout');

		dispatch({
			type: LOGOUT_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const loadUser = () => async dispatch => {
	try {
		dispatch({
			type: LOAD_USER_REQUEST,
		});

		const { data } = await axios.post('/api/v1/me');
		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAIL,
			payload: 'Nie udało się załadować uzytkownika',
		});
	}
};

export const clearErrors = () => async dispatch => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
