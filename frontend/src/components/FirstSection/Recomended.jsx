import React, { useState } from "react";
import styled from "styled-components";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import DirectionArrows from "../DirectionArrows";

import Item from "./Item";

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -450}px);
`;

const Recomended = (props) => {
  const { images } = props;

  return (
    <DirectionArrows style={{ position: "relative" }} title="Zobacz również">
      <ItemsContainer>
        {images.map((image) => (
          <Item image={image.image} title={image.title} />
        ))}
      </ItemsContainer>
    </DirectionArrows>
  );
};

export default Recomended;
