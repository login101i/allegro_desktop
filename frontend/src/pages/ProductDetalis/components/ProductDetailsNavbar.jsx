import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import { screens } from "../../../../src/components/responsive";
import { Flex } from "../../../components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	width: 94%;
	flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
	border-bottom: 1px solid lightGrey;
`;

const Left = styled.div`
	flex: 3;
	justify-content: center;
`;
const TitleL = styled.div`
	fontsize: 30px;
	font-weight: 600;
	font-size: 26px;
`;
const Ratings = styled.div`
	display: flex;
`;

const Right = styled.div`
	font-weight: 600;
	flex: 2;
`;
const TitleR = styled.div`
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.textColor};
`;
const RightBottom = styled.div`
	color: ${(props) => props.theme.colors.linkColor};
	margin-top: 10px;
`;

const ProductDetailsNavbar = ({ product }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isLarge = useMediaQuery({ minWidth: screens.lg });
	console.log(product);
	return (
		<>
			{product && (
				<Container isMobile={isMobile}>
					<Left>
						<TitleL>{product.title}</TitleL>
						<Ratings>
							{product.ratings} <StarBorderIcon style={{ fontSize: "20px" }} />{" "}
							{product.numOfReviews}
						</Ratings>
					</Left>
					<Right>
						<TitleR>Inne oferty tego produktu.</TitleR>

						<RightBottom>
							Najtańsze od {product.price.toFixed(2) - 10} zł, najszyciej od{" "}
							{product.price + 4} zł. Wszystkie ({product.stock})
						</RightBottom>
					</Right>
				</Container>
			)}
		</>
	);
};

export default ProductDetailsNavbar;
