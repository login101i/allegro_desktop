import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import "./../../../src/style.css";

import Slide1 from "../../assets/pictures/Slide1.png";
import Slide2 from "../../assets/pictures/Slide2.png";
import Image1 from "../../assets/pictures/goodToSee1.png";
import Image2 from "../../assets/pictures/goodToSee2.png";
import Image3 from "../../assets/pictures/goodToSee3.png";
import Image4 from "../../assets/pictures/goodToSee4.png";

import Recomended from "./Recomended";
import { OptionComponent } from "../../components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
	flex-grow: grow;
	width: 100%;
`;

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

const Center = () => {
	const [current, setCurrent] = useState(0);
	const [distance, setDistance] = useState();
	const [slideIndex, setSlideIndex] = useState(0);

	const sliderRef = useRef();

	const changeSlide = () => {
		setTimeout(() => {
			if (slideIndex < 5) {
				setSlideIndex(slideIndex + 1);
				console.log(slideIndex);
			} else {
				setSlideIndex(0);
			}
		}, 7000);
	};

	useEffect(() => {
		changeSlide();
	}, [slideIndex]);

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
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		transition: all 1.5s ease-in-out;
	`;

	const ImgContainer = styled.div`
		height: 100%;
		flex: 1;
	`;

	const Image = styled.img`
		height: 100%;
	`;

	const Container = styled.div`
		width: 100%;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		min-height: 60%;
		justify-content: space-between;
		margin-bottom: 16px;
	`;

	const handleIndex = (index) => {
		setSlideIndex(index);
		let distance = sliderRef.current.getBoundingClientRect().width;
		setDistance(distance);
	};

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
};

export default Center;
