import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { Navbar } from "./components";
import { HomePage } from "./pages/HomePage/HomePage";
import { Listing } from "./pages/Listing/Listing";
import { ProductDetails } from "./pages/ProductDetalis/ProductDetails";
import { AllegroLocal } from "./pages/AllegroLocal/AllegroLocal";
import { Login, Register, MyAccount } from "./pages/Authentication";
import { AllegroFooter } from "./components";

import { theme } from "./infrastructure/theme";
import "./style.css";

import { ProtectedRoute } from "./utils/routes/ProtectedRoute";
import { screens } from "./components/responsive";
import { NavbarAd } from "./components/NavbarAd";

import { loadUser } from "./redux/actions/userActions";
import { allegroVersion } from "./redux/actions/versionAction";

import { store } from "./store";
import { GreyBackground, Container } from "./App.styles";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(loadUser());
		dispatch(allegroVersion());
	}, [dispatch]);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	console.time("loop");

	for (let i = 0; i < 10000; i++) {
		// Do stuff here
	}
	console.timeEnd("loop");

	return (
		<ThemeProvider theme={theme}>
			<GreyBackground isMobile={isMobile}>
				<BrowserRouter>
					<Navbar />
					{!isMobile && <NavbarAd />}
					<Container isMobile={isMobile}>
						<Routes>
							<Route
								path="/"
								element={<HomePage isMobile={isMobile} />}
								exact
							/>
							<Route path="/product/:id" element={<ProductDetails />} />
							<Route path="/listing/:keyword" element={<Listing />} />
							<Route path="/login" exact element={<Login />} />
							<Route path="/register" element={<Register />} exact />
							<Route
								path="/moje-allegro/moje-konto"
								element={
									<ProtectedRoute>
										<MyAccount />
									</ProtectedRoute>
								}
								exact
							/>
							<Route
								path="/oferty/wystaw/kup-teraz"
								element={<AllegroLocal />}
								exact
							/>
						</Routes>
					</Container>
					<AllegroFooter isMobile={isMobile} />
				</BrowserRouter>
			</GreyBackground>
		</ThemeProvider>
	);
};

export default App;
