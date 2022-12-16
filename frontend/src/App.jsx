import { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { AddToCartModal, Navbar } from './components';
import { HomePage } from './pages/HomePage/HomePage';
import { Listing } from './pages/Listing/Listing';
import { ProductDetails } from './pages/ProductDetalis/ProductDetails';
import { AllegroLocal } from './pages/AllegroLocal/AllegroLocal';
import { Login, Register, MyAccount } from './pages/Authentication';
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
import { CartPage } from './pages/CartPage/CartPage';
import { PaymentPage } from './pages/PaymentPage/PaymentPage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { InvoicePage } from './pages/InvoicePage/InvoicePage';
import { CartContext } from './context/cart.context';

import './style.css';

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
						<Routes>
							<Route path='/' element={<HomePage isMobile={isMobile} />} exact></Route>
							<Route path='/product/:id' element={<ProductDetails />} />
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
							<Route path='/oferty/wystaw/kup-teraz' element={<AllegroLocal />} exact />
						</Routes>
					</Container>

					<AllegroFooter isMobile={isMobile} />
				</GreyBackground>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
