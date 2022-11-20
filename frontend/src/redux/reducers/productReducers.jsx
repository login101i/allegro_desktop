import {
	ALL_PRODUCTS_REQUEST,
	ALL_PRODUCTS_SUCCESS,
	ALL_PRODUCTS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	NEW_PRODUCT_REQUEST,
	NEW_PRODUCT_SUCCESS,
	NEW_PRODUCT_FAIL,
	NEW_PRODUCT_RESET,
	PRODUCT_DETAILS_FAIL,
	CLEAR_ERRORS,
} from '../constants/productConstants';

// interface reducerProductsState {
// 	loading: boolean;
// 	products: string[];
// 	error?: string | null;
// 	productsCount?: Number;
// 	resPerPage?: string[];
// 	filteredProducts?: string[];
// 	success?: boolean;
// }
// interface Action {
// 	type: string;
// 	payload?: any;
// }

// interface RequestReducerAction {
// 	type: 'ALL_PRODUCTS_REQUEST';
// }
// interface SuccessReducerAction {
// 	type: 'ALL_PRODUCTS_SUCCESS';
// 	payload: string[] | {};
// }
// interface FailReducerAction {
// 	type: 'ALL_PRODUCTS_FAIL' | string;
// }
// interface ResetReducerAction {
// 	type: 'NEW_PRODUCT_RESET';
// }
// interface ClearReducerAction {
// 	type: 'CLEAR_ERRORS';
// }

const InitialState = {
	loading: false,
	products: {},
	error: false,
	productsCount: 0,
	resPerPage: 1,
	filteredProducts: 1,
	success: true,
};
export const productsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case ALL_PRODUCTS_REQUEST:
			return {
				loading: true,
				products: [],
				error: 'error',
			};

		case ALL_PRODUCTS_SUCCESS:
			return {
				loading: false,
				products: action.payload.products,
				productsCount: action.payload.productsCount,
				resPerPage: action.payload.resPerPage,
				filteredProducts: action.payload.filteredProducts,
			};

		case ALL_PRODUCTS_FAIL:
			return {
				products: [],
				loading: false,
				error: action.payload,
			};

		case NEW_PRODUCT_RESET:
			return {
				...state,
				success: false,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export const productDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PRODUCT_DETAILS_SUCCESS:
			return {
				loading: false,
				product: action.payload.product,
			};

		case PRODUCT_DETAILS_FAIL:
			return {
				...state,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export const newProductReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case NEW_PRODUCT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case NEW_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: action.payload.success,
				product: action.payload.product,
			};
		case NEW_PRODUCT_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		case NEW_PRODUCT_RESET:
			return {
				...state,
				success: false,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
