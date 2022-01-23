import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/secondSection/SecondSection";
import ThirdSection from "../components/thirdSection/ThirdSection";
import FourthSection from "../components/fourthSection/FourthSection";
import FifthSection from "../components/fifthSection/FifthSection";
import PayPalButton from "../components/PayPalButton";
import SmartBannerImg from "../../src/assets/pictures/smartBanner.png";
import MetaData from "../components/MetaData";

import { getProducts } from "../redux/actions/productActions";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	max-width: 1660px;
	width: 1660px;
	overflow: hidden;
	background: ${(props) => props.theme.colors.allegroBackground};
	margin-bottom: 100px;
`;

const SmartBanner = styled.img`
	margin-top: 16px;
	width: 100%;
	height: 100px;
`;

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
		console.log("Pobieram produkty.");
	}, []);

	return (
		<>
			<MainContainer>
				<MetaData title="Allegro - atrakcyjne ceny" />

				<FirstSection />
				<SecondSection />
				{/* <ThirdSection />
				<FourthSection />
				<FifthSection />

				<SmartBanner src={SmartBannerImg} />

				<PayPalButton /> */}
			</MainContainer>
		</>
	);
};

export default HomePage;
