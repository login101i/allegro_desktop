import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Navbar } from './components';
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
import { GreyBackground, Container } from './App.styles';
import { CartPage } from './pages/CartPage/CartPage';
import { CartContextProvider } from './context/cart.context';
import './style.css';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(loadUser());
		dispatch(allegroVersion());
		getProducts();
	}, [dispatch]);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<ThemeProvider theme={theme}>
			<CartContextProvider>
				<GreyBackground isMobile={isMobile}>
					<BrowserRouter>
						<Navbar />
						{!isMobile && <NavbarAd />}
						<Container isMobile={isMobile}>
							<Routes>
								<Route path='/' element={<HomePage isMobile={isMobile} />} exact></Route>
								<Route path='/product/:id' element={<ProductDetails />} />
								<Route path='/listing/:keyword' element={<Listing />} />
								<Route path='/login' exact element={<Login />} />
								<Route path='/register' element={<Register />} exact />
								<Route path='/cart' element={<CartPage />} exact />
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
					</BrowserRouter>
				</GreyBackground>
			</CartContextProvider>
		</ThemeProvider>
	);
};

export default App;
