import React, { useEffect, useContext, lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { AddToCartModal, Navbar } from './components';
import AllegroFooter from './components/allegroFooter/AllegroFooter';
import { theme } from './infrastructure/theme';
import { ProtectedRoute } from './utils/routes/ProtectedRoute';
import { screens } from './components/responsive';
import { NavbarAd } from './components/navbarAdd/NavbarAdd';
import { loadUser } from './redux/actions/userActions';
import { allegroVersion } from './redux/actions/versionAction';
import { getProducts } from './redux/actions/productActions';
import { store } from './store';
import { GreyBackground, Container, GreyFilter } from './App.styles';
import { CartContext } from './context/cart.context';
import Loader from './components/loader/Loader';
import './style.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Listing = lazy(() => import('./pages/Listing/Listing'));
const ProductDetails = lazy(() => import('./pages/ProductDetalis/ProductDetails'));
const AllegroLocal = lazy(() => import('./pages/AllegroLocal/AllegroLocal'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage'));
const CheckoutPage = lazy(() => import('./pages/Checkout/CheckoutPage'));
const InvoicePage = lazy(() => import('./pages/InvoicePage/InvoicePage'));
const Login = lazy(() => import('./pages/Authentication/Login/Login'));
const Register = lazy(() => import('./pages/Authentication/Register/Register'));
const MyAccount = lazy(() => import('./pages/Authentication/Account/MyAccount'));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(loadUser());
		dispatch(allegroVersion());
		getProducts();
	}, [dispatch]);

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const { cartModal, dispatch: dispatchCartContext, justAddedProduct } = useContext(CartContext);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				{cartModal && !isMobile && <GreyFilter />}
				{cartModal && justAddedProduct && !isMobile && (
					<AddToCartModal dispatch={dispatchCartContext} justAddedProduct={justAddedProduct} />
				)}

				<GreyBackground isMobile={isMobile}>
					<Navbar />
					{!isMobile && <NavbarAd cartModal={cartModal} />}
					<Container isMobile={isMobile}>
						<Suspense fallback={<Loader />}>
							<Routes>
								<Route path='/' element={<HomePage isMobile={isMobile} />} exact />
								<Route path='/product/:id' element={<ProductDetails />} exact />
								<Route path='/listing/:keyword' element={<Listing />} />
								<Route path='/login' exact element={<Login />} />
								<Route path='/register' element={<Register />} exact />
								<Route path='/cart' element={<CartPage />} exact />
								<Route path='/checkout' element={<CheckoutPage />} exact />
								<Route path='/payment' element={<PaymentPage />} exact />
								<Route path='/invoice' element={<InvoicePage />} exact />
								<Route
									path='/moje-allegro/moje-konto'
									element={
										<ProtectedRoute>
											<MyAccount />
										</ProtectedRoute>
									}
									exact
								/>
								<Route path='/allegroLocal' element={<AllegroLocal />} exact />
							</Routes>
						</Suspense>
					</Container>
					<AllegroFooter isMobile={isMobile} />
				</GreyBackground>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
