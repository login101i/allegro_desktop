import React from "react";
import styled from "styled-components";

import BorderAndTitle from "../BorderAndTitle";
import ProductContainer from "../../components/ProductContainer";
import PriceDiscount from "../../components/PriceDiscount";

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	overflow: hidden;
	padding: 20px 10px;
`;

const Title = styled.div`
	font-weight: 600;
	text-align: center;
	font-size: 20px;
	margin-bottom: 30px;
`;

const SectionContainer = styled.div`
	width: 100%;
	display: flex;
`;
const ImageContainer = styled.div`
	min-width: 40%;
	max-height: 120px;
	margin: 1px;
`;
const Image = styled.img`
	max-height: 125px;
	width: 100%;
	object-fit: contain;
	cursor: pointer;
`;

const SectionInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const Description = styled.div`
	text-decoration: uppercase;
	font-size: 14px;
	color: grey;
	flex-wrap: wrap;
`;
const Center = ({ products }) => {
	return (
		<Container>
			<Title>Z super ceną zaoszczędzisz</Title>

			{products.map((product, i) => (
				<SectionContainer key={Math.random()}>
					<ImageContainer>
						<Image src={product.img[0].url} />
					</ImageContainer>
					<SectionInfo>
						<PriceDiscount
							discount={product.discount}
							oldPrice={product.oldPrice}
							price={product.price}
							description={product.description}
						/>
						<Description>
							{product.description.toString().split(".")[0].length > 80
								? product.description.slice(0, 75) + "..."
								: product.description.toString().split(".")[0]}
							.
						</Description>
					</SectionInfo>
				</SectionContainer>
			))}

			<BorderAndTitle title="Zobacz więcej" />
		</Container>
	);
};

export default Center;
