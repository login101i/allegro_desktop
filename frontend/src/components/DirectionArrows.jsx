import React, { useState } from "react";
import styled from "styled-components";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DirectionButton = styled.button`
  height: 42px;
  width: 42px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  border: 2px solid darkGrey;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translate(0%, -65%);
  transition: 0.1s;

  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "40px"};
  cursor: pointer;
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
  height:100%;
  transform: translateX(${(props) => props.slideIndex * -450}px);
  transition: all 0.5s ease-in-out;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  background-color: white;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 15px;
  overflow: hidden;
  position: relative;

  &: hover ${DirectionButton} {
    display: block;
  }
`;

const Title = styled.span`
  color: var(--textColor);
  font-size: 22px;
  font-weight:600;
  display: absolute;
  left: 170px;
  top: 150px;
`;

const DirectionArrows = ({ title, children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

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
  return (
    <Container>
      {slideIndex > 0 && (
        <DirectionButton direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosNewIcon />
        </DirectionButton>
      )}
      {title && <Title>{title}</Title>}

      <Wrapper slideIndex={slideIndex}>
        <>{children}</>
      </Wrapper>

      <DirectionButton direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </DirectionButton>
    </Container>
  );
};

export default DirectionArrows;
