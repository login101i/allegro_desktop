import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PriceDiscount from "./PriceDiscount";

import { Text, Flex } from "../components";

const SectionContainer = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	height: 100%;
	justify-content: flex-start;
	min-width: 220px;
	max-width: ${(props) => props.isMobile && "200px"};

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
				style={{
					textDecoration: "none",
					width: "100%",
					background: "transparent",
					cursor: "default"
				}}
			>
				{listings ? (
					<SectionListingContainer row={row} onClick={() => console.log(price)}>
						<ImageListingsContainer>
							{img && <Image src={img} />}
						</ImageListingsContainer>
						<Flex column>
							<Text wrap="true">{product.title}</Text>
							<Text> od {product.seller}</Text>
							<PriceDiscount
								discount={discount}
								oldPrice={oldPrice}
								price={price}
								description={description}
							/>
						</Flex>
					</SectionListingContainer>
				) : (
					<>
						<SectionContainer
							row={row}
							onClick={() => console.log(price)}
							isMobile
						>
							<ImageContainer>{img && <Image src={img} />}</ImageContainer>
							<Flex column>
								<Text wrap="true">{product.title}</Text>
								<Text> od {product.seller}</Text>
								<PriceDiscount
									discount={discount}
									oldPrice={oldPrice}
									price={price}
									description={description}
								/>
							</Flex>
						</SectionContainer>
					</>
				)}
			</Link>
		</>
	);
};

export default ProductContainer;
