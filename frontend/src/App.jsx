import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import HomePage from "./pages/HomePage";
import Listing from "./pages/Listing";
import { theme } from "./infrastructure/theme";
import "./style.css";

import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetalis/ProductDetails";
import { Login, Register, MyAccount } from "./pages/Authentication";

import { loadUser } from "./redux/actions/userActions";
import store from "./store";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { AllegroFooter } from "./components";

const GreyBackground = styled.div`
	min-width: 1360px;
	background-color: ${(props) => props.theme.colors.allegroBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1660px;
	overflow: hidden;
`;

const App = () => {
	const dispatch = useDispatch();

	const { isAuthenticated, user } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		console.log("load user request");
		store.dispatch(loadUser());
	}, []);

	console.log(isAuthenticated, user);

	return (
		<ThemeProvider theme={theme}>
			<GreyBackground>
				<BrowserRouter>
					<Navbar />
					<Container>
						<Routes>
							<Route path="/" element={<HomePage />} exact />
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
						</Routes>
					</Container>
					<AllegroFooter />
				</BrowserRouter>
			</GreyBackground>
		</ThemeProvider>
	);
};

export default App;
