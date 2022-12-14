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
			const product = action.payload.product;
			const qty = action.payload.qty;
			const itemExistInCart = state.cart.find(i => i.product._id === product._id);
			const totalProductPrice = product.price * qty;

			if (itemExistInCart) {
				return {
					...state,
					cart: state.cart.map(i =>
						i.product._id === product._id ? { product, qty: i.qty + qty, totalProductPrice: i.totalProductPrice + totalProductPrice } : i,
					),
				};
			} else {
				return {
					...state,
					cart: [{ product, qty, totalProductPrice }, ...state.cart],
				};
			}

		case 'REMOVE_FROM_CART':
			return {
				cart: [...state.cart.filter(i => i.product._id !== action.payload._id)],
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
				cartModal: state.cartModal,
				loading: state.loading,
				error: state.error,
				justAddedProduct: state.cart[state.cart.length - 1],
				dispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
