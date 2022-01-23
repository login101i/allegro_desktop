import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import PriceDiscount from "../../../components/PriceDiscount";
import { Text } from "../../../components/Text";
import { Shipping, CartPlusMinus } from "../../../components";
import { screens } from "../../../../src/components/responsive";

import { Flex } from "../../../components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px;
	width: 94%;
	flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
`;

const Left = styled.div`
	flex: 4;
	width: 100%;
	margin: ${(props) => (props.isMobile ? "30px" : "0px")};
`;

const MainImage = styled.img`
	width: ${(props) => (props.isMobile ? "50vw" : "100%")};
	max-height: 200px;
	object-fit: contain;
`;
const ImagesThumbnails = styled.div`
	width: 100%;
	margin-top: 30px;
`;

const ImageThumb = styled.img`
	height: 80px;
	object-fit: contain;
`;

const Right = styled.div`
	flex: 3;
`;
const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: ${(props) => props.theme.colors.linkColor};
	text-transform: uppercase;
	font-size: 20px;
`;

const Title = styled.div`
	fontsize: 30px;
	font-weight: 600;
	font-size: 26px;
`;
const FromSeller = styled.div`
	margin-bottom: 20px;
`;

const Raty = styled.div`
	font-size: 14px;
	font-weight: 600;
	display: flex;
	flex-direction: row;
`;

const ProductDetailInfo = ({ product }) => {
	const [mainImage, setMainImage] = useState(product.img[0].url);
	const handleChangeImage = (url) => {
		setMainImage(url);
	};
	const { img, title, discount, price, description, oldPrice, seller } =
		product;
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const leftPart = ({ isMobile }) => {
		return (
			<Left isMobile={isMobile}>
				<MainImage src={mainImage} isMobile={isMobile} />

				<ImagesThumbnails>
					{img.map((image) => (
						<ImageThumb
							src={image.url}
							key={image.url}
							onClick={() => handleChangeImage(image.url)}
						/>
					))}
				</ImagesThumbnails>
			</Left>
		);
	};

	const rightPart = ({ isMobile }) => {
		return (
			<Right>
				<IconContainer>
					<StarBorderIcon style={{ fontSize: "30px", margin: "10px" }} />
					Udostępnij
					<StarBorderIcon style={{ fontSize: "30px", margin: "10px" }} />
					Obserwuj
				</IconContainer>

				<Title>{title}</Title>
				<FromSeller>Od Super Sprzedawcy {seller}</FromSeller>
				<PriceDiscount
					discount={discount}
					oldPrice={oldPrice}
					price={price}
					description={description}
				/>
				{price > 500 && (
					<Flex>
						<Raty>{(price / 20).toFixed(2)} zł</Raty>
						<Text title={" x 20 rat "} />
					</Flex>
				)}
				<Text marginTop={50}>2 osoby kupiły 2 sztuki</Text>
				<Shipping />
				<CartPlusMinus />
			</Right>
		);
	};
	if (isMobile)
		return (
			<Container isMobile={isMobile}>
				<Flex column>
					{leftPart(isMobile)}
					{rightPart(isMobile)}
				</Flex>
			</Container>
		);
	else
		return (
			<>
				<Container>
					{leftPart()}
					{rightPart()}
				</Container>
			</>
		);
};

export default ProductDetailInfo;
