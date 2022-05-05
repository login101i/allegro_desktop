import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import { screens } from "../../../../src/components/responsive";
import {  } from "../../../components";

import {Container, Left, TitleL, Ratings, Right ,TitleR, RightBottom} from './ProductDetailsNavbar.styles'

export const ProductDetailsNavbar = ({ product }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
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


