import { createContext, useEffect, useReducer, useState } from 'react';

const INITIAL_STATE = {
	cart: JSON.parse(localStorage.getItem('cart-id')) || [],
	cartModal: false,
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
				cartModal: false,
			};
		case 'REMOVE_FROM_CART':
			return {
				cart: [...state.cart.filter(product => product._id !== action.payload._id)],
				cartModal: false,
				loading: false,
				error: null,
			};
		case 'CART_MODAL_OPEN':
			return {
				...state,
				cartModal: true,
			};
		case 'CART_MODAL_CLOSE':
			return {
				...state,
				cartModal: false,
			};
		case 'LOGOUT':
			return {
				cart: null,
				loading: false,
				error: null,
				cartModal: false,
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
	console.log(state.cartModal);

	useEffect(() => {
		if (state.cart.length) {
			localStorage.setItem('cart-id', JSON.stringify(state.cart));
		}
	}, [state.cart, state.cartModal]);

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				cartModal: state.cartModal,
				loading: state.loading,
				error: state.error,
        lastAddedProduct:state.cart[state.cart.length-1],
				dispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
