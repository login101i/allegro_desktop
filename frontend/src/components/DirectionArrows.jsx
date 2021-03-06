import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { screens } from "./responsive";
import { Text } from "../components";

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

  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "40px"};
  z-index: 2;
  color: darkGrey;
  display: none;
  background: white;
  transition: 0.3s;

  &:hover {
    border: 2px solid darkGrey;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(${(props) => props.slideIndex * -450}px);
  transition: all 0.5s ease-in-out;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  align-items: flex-start;
  justify-content: center;
  // padding: 10px 15px;
  overflow: hidden;
  position: relative;
  flex: 1;
  padding: 10px;
  overflow-x: ${(props) => (props.isMobile ? " scroll" : "none")};
  transition: 0.3s;
  height: ${(props) => (props.isMobile ? "100px" : "300px")};
 

  &: hover ${DirectionButton} {
    display: block;
  }
`;

const DirectionArrows = ({ title, children, style }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: screens.md });
 

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
      <Container isMobile={isMobile}>
        {title && <Text bold>{title}</Text>}
        <Wrapper>{children}</Wrapper>
      </Container>
    );
  else
    return (
      <Container style={style} isMobile={isMobile}>
        {slideIndex > 0 && (
          <DirectionButton direction="left" onClick={() => handleClick("left")}>
            <ArrowBackIosNewIcon />
          </DirectionButton>
        )}
        {title && <Text bold>{title}</Text>}
        <Wrapper slideIndex={slideIndex}>{children}</Wrapper>

        <DirectionButton direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIosIcon />
        </DirectionButton>
      </Container>
    );
};

export default DirectionArrows;
