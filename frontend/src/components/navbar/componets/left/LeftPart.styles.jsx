import styled from "styled-components";



export const Image = styled.div`
	transform: ${(props) => (props.isMobile ? "scale(0.7)" : "scale(1.15)")};
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	background-color: white;

`;
