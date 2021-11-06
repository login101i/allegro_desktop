import React from "react";
import styled from "styled-components";

const SlideImage = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  max-height: 200px;
  background-color: white;
`;
const Slide = (props) => {
  const { image } = props;

  return <SlideImage src={image} alt="Image Slider"></SlideImage>;
};

export default Slide;
