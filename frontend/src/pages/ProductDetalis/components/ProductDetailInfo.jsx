import React, { useState } from "react";
import styled from "styled-components";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import PriceDiscount from "../../../components/PriceDiscount";
import { Text } from "../../../components/Text";
import { Shipping, CartPlusMinus } from "../../../components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	width: 94%;
`;

const Left = styled.div`
	flex: 4;
	margin: 30px;
`;

const MainImage = styled.img`
	width: 100%;
	height: 500px;
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
const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;


const ProductDetailInfo = ({ product }) => {
	const [mainImage, setMainImage] = useState(product.img[0].url);
	const handleChangeImage = (url) => {
		setMainImage(url);
	};
	console.log(product);
	const { img, title, discount, price, description, oldPrice, seller } =
		product;

	return (
		<>
			<Container>
				<Left>
					<MainImage src={mainImage} />

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
						<FlexRow>
							<Raty>{(price / 20).toFixed(2)} zł</Raty>
							<Text title={" x 20 rat "} />
						</FlexRow>
					)}
					<Text marginTop={50}>2 osoby kupiły 2 sztuki</Text>
					<Shipping />
					<CartPlusMinus />
				</Right>
			</Container>
		</>
	);
};

export default ProductDetailInfo;
