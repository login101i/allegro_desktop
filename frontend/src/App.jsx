import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const GreyBackground = styled.div`
	// min-width: 1360px;
	min-width: ${(props) => (props.isMobile ? "100vw" : "1360px")};

	background-color: ${(props) => props.theme.colors.allegroBackground};
	display: flex;
	flex-direction: column;
	// align-items: center;
	// justify-content: center;
	position: relative;
	overflow-x: hidden !important;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	// align-items: center;
	// width: 1660px;
	overflow: hidden;
`;

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<ThemeProvider theme={theme}>
			<GreyBackground isMobile={isMobile}>
				<BrowserRouter>
					<Navbar />
					{!isMobile && <NavbarAd />}
					<Container>
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
