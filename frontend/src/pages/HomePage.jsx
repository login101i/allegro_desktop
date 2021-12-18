import React from "react";
import styled from "styled-components";

import NavbarAd from "../components/NavbarAd";
import Navbar from "../components/Navbar";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/secondSection/SecondSection";
import ThirdSection from "../components/thirdSection/ThirdSection";
import FourthSection from "../components/fourthSection/FourthSection";
import FifthSection from "../components/fifthSection/FifthSection";
import PayPalButton from "../components/PayPalButton";
import { ThemeProvider } from "styled-components";
import SmartBannerImg from "../../src/assets/pictures/smartBanner.png";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	max-width: 1650px;
	width: 1650px;
	overflow: hidden;
`;

const SmartBanner = styled.img`
	margin-top: 16px;
	width: 100%;
	height: 100px;
`;

const HomePage = () => {
	return (
		<>
			{/* <NavbarAd /> */}
			<MainContainer>
				<Navbar />
				<FirstSection />
				<SecondSection
					title={"Wszystko na Święta"}
					style={{ marginTop: "20px" }}
				/>
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
