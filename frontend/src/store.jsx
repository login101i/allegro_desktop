import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	productsReducer,
	productDetailsReducer,
	newProductReducer
} from "./redux/reducers/productReducers";

import { versionReducers } from "./redux/reducers/versionReducers";

import { authReducer } from "./redux/reducers/userReducers";

const reducer = combineReducers({
	productDetails: productDetailsReducer,

	products: productsReducer,
	newProduct: newProductReducer,
	auth: authReducer,
	version: versionReducers
});

let initialState = {};

const middlware = [thunk];

export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlware))
);
