import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	productsReducer,
	productDetailsReducer
} from "./redux/reducers/productReducers";

import { authReducer } from "./redux/reducers/userReducers";

const reducer = combineReducers({
	productDetails: productDetailsReducer,

	products: productsReducer,
	auth: authReducer
});

let initialState = {};

const middlware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
