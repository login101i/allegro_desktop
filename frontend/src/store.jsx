import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	productsReducer,
	productDetailsReducer,
	newProductReducer
} from "./redux/reducers/productReducers";

import { authReducer } from "./redux/reducers/userReducers";

const reducer = combineReducers({
	productDetails: productDetailsReducer,

	products: productsReducer,
	newProduct: newProductReducer,
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
