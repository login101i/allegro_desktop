import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./style.css";
import HomePage from "./pages/HomePage";
import Listing from "./pages/Listing";
import { theme } from "./infrastructure/theme";
import "./style.css";

import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetalis/ProductDetails";
import WystawPrzedmiot from "./pages/WystawPrzedmiot";
import { Login, Register, MyAccount } from "./pages/Authentication";

import { loadUser } from "./redux/actions/userActions";
import store from "./store";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { AllegroFooter } from "./components";

import { screens } from "./components/responsive";
import { useMediaQuery } from "react-responsive";
import NavbarAd from "./components/NavbarAd";

import { allegroVersion } from "./redux/actions/versionAction";

const GreyBackground = styled.div`
	// min-width: 1360px;
	min-width: ${(props) => (props.isMobile ? "100vw" : "1360px")};

	background-color: ${(props) => props.theme.colors.allegroBackground};
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.isMobile ? "left" : "center")};
	// justify-content: center;
	position: relative;
	overflow-x: hidden !important;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	// align-items: center;
	width: ${(props) => (props.isMobile ? "auto" : "1660px")};
	overflow: hidden;
`;

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(loadUser());
		dispatch(allegroVersion());
	}, [dispatch]);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const href = window.location.href;
	console.log("🚀 ~ file: App.jsx ~ line 55 ~ App ~ href", href);

	let result = href.includes("wystaw");
	console.log("🚀 ~ file: App.jsx ~ line 58 ~ App ~ result", result);

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
								element={<WystawPrzedmiot />}
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
