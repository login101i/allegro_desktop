import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FifthSection from "../../components/fifthSection/FifthSection";
import FirstSection from "../../components/FirstSection/FirstSection";
import FourthSection from "../../components/fourthSection/FourthSection";
import CartTitle from "../../components/CartTitle";
import PayPalButton from "../../components/PayPalButton";
import SecondSection from "../../components/secondSection/SecondSection";
import SmartBannerImg from "../../../src/assets/pictures/smartBanner.png";
import SmartBannerImg2 from "../../../src/assets/pictures/smartBanner2.png";
import ThirdSection from "../../components/thirdSection/ThirdSection";

import { getProducts } from "../../redux/actions/productActions";
import {
	MainContainer,
	BannerContainer,
	SmartBanner,
	BannerButton
} from "./HomePage.styles";

export const HomePage = ({ isMobile }) => {
	const [isPaypalShow, setIsPaypalShow] = useState(false);
	const dispatch = useDispatch();

	const listenToScroll = () => {
		const heightToHideFrom = 400;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		console.log(winScroll);
		if (winScroll > heightToHideFrom) {
			setIsPaypalShow(true);
		}
	};

	// event reactowy dotyczący ekranu
	useEffect(() => {
		dispatch(getProducts());
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, [dispatch]);

	return (
		<MainContainer>
			<CartTitle title="Allegro - atrakcyjne ceny" />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<PayPalButton showPayPal={isPaypalShow} />
			{isMobile ? (
				<BannerContainer>
					<SmartBanner src={SmartBannerImg2} />
					<BannerButton title="Więcej" />
				</BannerContainer>
			) : (
				<SmartBanner src={SmartBannerImg} />
			)}
		</MainContainer>
	);
};

