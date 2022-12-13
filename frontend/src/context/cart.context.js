import { createContext, useEffect, useReducer, useState } from 'react';

const INITIAL_STATE = {
	cart: JSON.parse(localStorage.getItem('cart-id')) || [],
	loading: false,
	error: false,
};

const CartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT_TO_CART':
			return {
				cart: [...state.cart, action.payload],
				loading: true,
				error: null,
			};
		case 'LOGIN_SUCCESS':
			return {
				user: action.payload,
				loading: false,
				error: null,
			};
		case 'LOGIN_FAILURE':
			return {
				user: null,
				loading: false,
				error: action.payload,
			};
		case 'LOGOUT':
			return {
				user: null,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
};

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({ children }) => {
	const [quantity, setQuantity] = useState(1);

	// const increaseQty = (id, quantity, stock) => {
	// 	const newQty = quantity + 1;
	// 	if (newQty > stock) return;
	// };

	// const decreaseQty = (id, quantity) => {
	// 	const newQty = quantity - 1;
	// 	if (newQty <= 0) return;
	// };

	// const removeCartItemHandler = id => {};

	// const addProductToCart = product => {};
	const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

	useEffect(() => {
		if (state.cart.length) {
			localStorage.setItem('cart-id', JSON.stringify(state.cart));
		}
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				loading: state.loading,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
