import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	object-fit: contain;
	cursor: pointer;
	max-height: 250px;
	height: ${(props) => (props.size ? props.size + "px" : "auto")};
`;

const ImageComponent = ({ img, size, style }) => {
	return (
		<ImageContainer style={style}>
			<Image src={img} size={size} />
		</ImageContainer>
	);
};

export default ImageComponent;
