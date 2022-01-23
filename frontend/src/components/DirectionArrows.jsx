import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { screens } from "./responsive";

const DirectionArrows = ({ title, children }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isMedium = useMediaQuery({ maxWidth: screens.lg });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const DirectionButton = styled.button`
		height: 42px;
		width: 42px;
		padding: 4px;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 2px;
		border: 2px solid darkGrey;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		transform: translate(0%, -65%);
		transition: 0.1s;

		left: ${(props) => props.direction === "left" && "20px"};
		right: ${(props) => props.direction === "right" && "40px"};
		z-index: 2;
		color: darkGrey;
		display: none;
		background: white;

		&:hover {
			border: 3px solid darkGrey;
		}
	`;

	const Wrapper = styled.div`
		display: flex;
		width: 100%;
		height: 100%;
		transform: translateX(${(props) => props.slideIndex * -450}px);
		transition: all 0.5s ease-in-out;
		position: relative;
	`;

	const Container = styled.div`
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: white;
		align-items: flex-start;
		justify-content: center;
		// padding: 10px 15px;
		overflow: hidden;
		position: relative;
		flex: 1;
		padding: 10px;
		overflow-x: ${isMobile ? " scroll" : "none"};

		&: hover ${DirectionButton} {
			display: block;
		}
	`;

	const Title = styled.span`
		color: var(--textColor);
		font-size: 22px;
		font-weight: 600;
		display: absolute;
		left: 170px;
		top: 150px;
	`;

	const handleClick = (direction) => {
		console.log(slideIndex);
		if (direction === "left") {
			console.log("left");
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
		} else {
			console.log("right");
			setSlideIndex(slideIndex >= 0 ? slideIndex + 1 : 0);
			if (slideIndex === 4) setSlideIndex(0);
		}
	};
	if (isMobile)
		return (
			<Container>
				{title && <Title>{title}</Title>}
				<Wrapper>{children}</Wrapper>
			</Container>
		);
	else
		return (
			<Container>
				{slideIndex > 0 && (
					<DirectionButton direction="left" onClick={() => handleClick("left")}>
						<ArrowBackIosNewIcon />
					</DirectionButton>
				)}

				<Wrapper slideIndex={slideIndex}>{children}</Wrapper>

				<DirectionButton direction="right" onClick={() => handleClick("right")}>
					<ArrowForwardIosIcon />
				</DirectionButton>
			</Container>
		);
};

export default DirectionArrows;
