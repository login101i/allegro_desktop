import React from "react";
import styled from "styled-components";

import NavbarAd from "../components/NavbarAd";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/secondSection/SecondSection";
import ThirdSection from "../components/thirdSection/ThirdSection";
import FourthSection from "../components/fourthSection/FourthSection";
import FifthSection from "../components/fifthSection/FifthSection";
import PayPalButton from "../components/PayPalButton";
import SmartBannerImg from "../../src/assets/pictures/smartBanner.png";
import MetaData from "../components/MetaData";

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
	return (
		<>
			<NavbarAd />
			<MainContainer>
				<MetaData title="Allegro - atrakcyjne ceny" />

				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FifthSection />

				<SmartBanner src={SmartBannerImg} />

				<PayPalButton />
			</MainContainer>
		</>
	);
};

export default HomePage;
