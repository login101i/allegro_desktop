import axios from "axios";

import {
	ALL_PRODUCTS_REQUEST,
	ALL_PRODUCTS_SUCCESS,
	ALL_PRODUCTS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	CLEAR_ERRORS
} from "../constants/productConstants";

import { productsLocaly } from "../../infrastructure/theme/dummy";

export const getProducts =
	(currentPage = 1, keyword = "", price=[1,10000], category = "", rating = 0) =>
	async (dispatch) => {
		try {
			dispatch({ type: ALL_PRODUCTS_REQUEST });

			let link = `/api/v1/products`;
			if (keyword) {
				link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`;
			}

			if (category) {
				link = `/api/v1/products?page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category};
				&ratings[gte]=${rating}`;
			}

			const { data } = await axios.get(link);
			// console.log(data);

			// console.log(productsLocaly);

			dispatch({
				type: ALL_PRODUCTS_SUCCESS,
				payload: data
			});
		} catch (error) {
			dispatch({
				type: ALL_PRODUCTS_FAIL,
				payload: error.response.data.message
			});
		}
	};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });
		console.log(id);

		const { data } = await axios.get(`/api/v1/product/${id}`);
		console.log(data);

		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: "Error hehe"
		});
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	});
};
