import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PriceDiscount from "./PriceDiscount";

import { Text } from "../components";

const SectionContainer = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	height: 100%;
	justify-content: flex-start;
	min-width: 220px;
	align-items: center;
	width: 100%;
`;
const SectionListingContainer = styled(SectionContainer)`
	border-bottom: 1px solid lightGrey;
`;
const ImageContainer = styled.div`
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 85%;
	padding-bottom: 10px;
	max-height: 230px;
`;

const ImageListingsContainer = styled(ImageContainer)`
	width: 25%;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	cursor: pointer;
	max-height: 250px;
`;

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProductContainer = ({
	img,
	discount = 0,
	oldPrice = 0,
	price,
	description,
	row = false,
	product = { id: "61c10bc4649cdf618b815c4a" },
	listings
}) => {
	return (
		<>
			<Link
				to={`/product/${product._id}`}
				style={{ textDecoration: "none", width: "100%" }}
			>
				{listings ? (
					<SectionListingContainer row={row} onClick={() => console.log(price)}>
						<ImageListingsContainer>
							{img && <Image src={img} />}
						</ImageListingsContainer>
						<FlexCol>
							<Text>{product.title}</Text>
							<Text> od {product.seller}</Text>
							<PriceDiscount
								discount={discount}
								oldPrice={oldPrice}
								price={price}
								description={description}
							/>
						</FlexCol>
					</SectionListingContainer>
				) : (
					<SectionContainer row={row} onClick={() => console.log(price)}>
						<ImageContainer>{img && <Image src={img} />}</ImageContainer>
					</SectionContainer>
				)}
			</Link>
		</>
	);
};

export default ProductContainer;
