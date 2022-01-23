import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import "./../../../src/style.css";
import { screens } from "../responsive";

import Image1 from "../../assets/pictures/goodToSee1.png";
import Image2 from "../../assets/pictures/goodToSee2.png";
import Image3 from "../../assets/pictures/goodToSee3.png";
import Image4 from "../../assets/pictures/goodToSee4.png";

import { useMediaQuery } from "react-responsive";

import Recomended from "./Recomended";
import { OptionComponent } from "../../components";
import { Flex } from "../../components";

const images = [
	{ image: Image1, title: "Limitowana okazja!" },
	{ image: Image2, title: "Alegro Smart" },
	{ image: Image3, title: "Monety i wspólny Smart!" },
	{ image: Image4, title: "Powrót do biura!" },
	{ image: Image2, title: "Alegro Smart" },
	{ image: Image3, title: "Monety i wspólny Smart!" },
	{ image: Image4, title: "Powrót do biura!" },
	{ image: Image2, title: "Alegro Smart" },
	{ image: Image3, title: "Monety i wspólny Smart!" },
	{ image: Image4, title: "Powrót do biura!" },
	{ image: Image1, title: "Limitowana okazja!" },
	{ image: Image2, title: "Alegro Smart" },
	{ image: Image3, title: "Monety i wspólny Smart!" },
	{ image: Image1, title: "Limitowana okazja!" },
	{ image: Image2, title: "Alegro Smart" }
];

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;

	flex-grow: grow;
	width: ${(props) => (props.isMobile ? "100vw" : "100%")};
	overflow-y: ${(props) => (props.isMobile ? "hidden" : "none")};
	overflow-x: hidden !important;
`;
const WrapperOption = styled.div`
	display: flex;
	justify-content: space-between;
	background: white;
	width: 100%;
	height: 15%;
	flex: 1;

	padding-bottom: 10px;
`;

const Carousel = styled.div`
	display: flex;
	transform: translateX(${(props) => -(props.slideIndex * props.distance)}px);
	height: 100%;
	width: 100%;
	transition: all 1.5s ease-in-out;
`;

const Slide = styled.div`
	// width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	transition: all 1.5s ease-in-out;
`;

const ImgContainer = styled.div`
	// height: 100%;
	// flex: 1;
	// width: 100vw;
`;

const Image = styled.img`
	// width: 100vw;
	height: 100%;
	background-image: ${(props) => props.src};
	background-position: center;
	transform: translateX(-18%);
	object-fit: cover;
`;

const Container = styled.div`
	width: 100vw;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	max-height: ${(props) => (props.isMobile ? "500px" : "60%")};
	justify-content: space-between;
	margin-bottom: ${(props) => (props.isMobile ? "0px" : "16px")};
	max-width: 100% !important;
	overflow-x: hidden !important;
`;

const Dot = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background-color: ${(props) =>
		props.i === props.slideIndex ? "black" : "grey"};
	margin: 10px 6px;
`;

const Center = () => {
	const [distance, setDistance] = useState();
	const [slideIndex, setSlideIndex] = useState(0);

	const sliderRef = useRef();
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	// const changeSlide = () => {
	// 	setInterval(() => {
	// 		if (slideIndex < 5) {
	// 			setSlideIndex(slideIndex + 1);
	// 			console.log(slideIndex);
	// 		} else {
	// 			setSlideIndex(0);
	// 		}
	// 	}, 7000);
	// };

	// function myStopFunction() {
	// 	clearTimeout(changeSlide);
	// }

	useEffect(() => {
		// changeSlide();
	}, []);

	const handleIndex = (index) => {
		setSlideIndex(index);
		let distance = sliderRef.current.getBoundingClientRect().width;
		setDistance(distance);
	};

	if (isLarge) {
		return (
			<MainContainer>
				<Container>
					<Carousel slideIndex={slideIndex} distance={distance}>
						{sliderItems.map((item) => (
							<Slide key={item.id} ref={sliderRef}>
								<ImgContainer>
									<Image src={item.img} />
								</ImgContainer>
							</Slide>
						))}
					</Carousel>
					<WrapperOption>
						<OptionComponent
							onClick={() => handleIndex(0)}
							option="Kupuj teraz, płać później"
						/>
						<OptionComponent
							onClick={() => handleIndex(0)}
							option="Karmy Dog Chow"
						/>
						<OptionComponent
							onClick={() => handleIndex(0)}
							option="Z kuponami taniej"
						/>
						<OptionComponent
							onClick={() => handleIndex(0)}
							option="Strefa projektanta"
						/>
						<OptionComponent
							onClick={() => handleIndex(0)}
							option="Kupuj teraz, płać później"
						/>
						<OptionComponent
							onClick={() => handleIndex(0)}
							option="Wtaminy na jesień"
						/>
					</WrapperOption>
				</Container>

				<Recomended images={images} />
			</MainContainer>
		);
	} else if (isMobile) {
		return (
			<MainContainer isMobile>
				<Container isMobile>
					<Carousel slideIndex={slideIndex} distance={distance}>
						{sliderItems.map((item) => (
							<Slide key={item.id} ref={sliderRef}>
								<ImgContainer>
									<Image src={item.img} />
								</ImgContainer>
							</Slide>
						))}
					</Carousel>
					<Flex align style={{ margin: "0 auto" }}>
						{sliderItems.map((item, i) => (
							<Dot
								key={i}
								onClick={() => handleIndex(i)}
								i={i}
								slideIndex={slideIndex}
							/>
						))}
					</Flex>
				</Container>
				<Recomended images={images} />
			</MainContainer>
		);
	}
};

export default Center;
