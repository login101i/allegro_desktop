import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/secondSection/SecondSection";
import ThirdSection from "../components/thirdSection/ThirdSection";
import FourthSection from "../components/fourthSection/FourthSection";
import FifthSection from "../components/fifthSection/FifthSection";
import PayPalButton from "../components/PayPalButton";
import SmartBannerImg from "../../src/assets/pictures/smartBanner.png";
import SmartBannerImg2 from "../../src/assets/pictures/smartBanner2.png";

import MetaData from "../components/MetaData";
import { Button } from "../components";

import { getProducts } from "../redux/actions/productActions";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	max-width: 1660px;
	width: 1660px;
	// overflow: hidden;
	background: ${(props) => props.theme.colors.allegroBackground};
	margin-bottom: 100px;
`;
const BannerContainer = styled.div`
	position: relative;
	width: 100vw;
	margin-top: 16px;
`;

const SmartBanner = styled.img`
	width: 100vw;
`;

const HomePage = ({ isMobile }) => {
	const [showPayPal, setShowPayPal] = useState(false);

	const dispatch = useDispatch();

	const listenToScroll = () => {
		let heightToHideFrom = 400;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		console.log(winScroll);
		if (winScroll > heightToHideFrom) {
			setShowPayPal(true);
		}
	};

	useEffect(() => {
		dispatch(getProducts());
		console.log("Pobieram produkty.");
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, [dispatch]);

	return (
		<>
			<MainContainer>
				<MetaData title="Allegro - atrakcyjne ceny" />

				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FifthSection />
				{isMobile ? (
					<>
						<BannerContainer>
							<SmartBanner src={SmartBannerImg2} />
							<Button
								style={{
									position: "absolute",
									top: "50%",
									right: "30px",
									transform: "translate(0%,-50%)",
									width: "auto",
									padding: "4px 18px",
									borderRadius: "3px"
								}}
							>
								Więcej
							</Button>
						</BannerContainer>
					</>
				) : (
					<SmartBanner src={SmartBannerImg} />
				)}

				<PayPalButton showPayPal={showPayPal} />
			</MainContainer>
		</>
	);
};

export default HomePage;
