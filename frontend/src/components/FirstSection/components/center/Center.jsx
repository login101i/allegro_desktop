import React, { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import { sliderItems } from "../../../data";
import { screens } from "../../../responsive";
import Recomended from "../Recomended";
import { OptionComponent, Flex } from "../../..";
import {
	firstSectionImages,
	firstSectionOptions
} from "../../../../utils/data";

import {
	MainContainer,
	WrapperOption,
	Carousel,
	Slide,
	ImgContainer,
	Image,
	Container,
	Dot
} from "./Center.styles";

const Center = () => {
	const [distance, setDistance] = useState();
	const [slideIndex, setSlideIndex] = useState(0);

	const sliderRef = useRef();
	const isMobile = useMediaQuery({ maxWidth: screens.md });

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
		const distance = sliderRef.current.getBoundingClientRect().width;
		setDistance(distance);
	};

	if (isMobile) {
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
				<Recomended images={firstSectionImages} />
			</MainContainer>
		);
	} else {
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
						{firstSectionOptions.map((option) => (
							<OptionComponent onClick={() => handleIndex(0)} option={option} />
						))}
					</WrapperOption>
				</Container>
				<Recomended images={firstSectionImages} />
			</MainContainer>
		);
	}
};

export default Center;
