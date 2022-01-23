import React from "react";
import styled from "styled-components";

import ProductContainer from "../ProductContainer";
import BorderAndTitle from "../BorderAndTitle";
import { Flex, Text } from "../../components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	flex: 1;
	margin: ${(props) => (props.isMobile ? "5px" : "0px 10px 0px 20px")};
	align-items: left;

	-webkit-box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	-moz-box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	width: 100vw;
`;
const ScrollContainer = styled.div`
	width: 100vw;
	overflow-x: scroll;
	display: flex;
`;

const Right = ({ products, isMobile }) => {
	const catProducts = products.filter((p) => p.category === "Perfumy");

	return (
		<Container isMobile={isMobile}>
			<Text title bold textAlign="center">
				Polecane dla kota
			</Text>
			<ScrollContainer>
				<Flex>
					{catProducts.map((product) => (
						<ProductContainer
							key={product._id}
							img={product.img[0].url}
							discount={product.discount}
							oldPrice={product.oldPrice}
							price={product.price}
							product={product}
							extended={true}
						/>
					))}
				</Flex>
			</ScrollContainer>

			<BorderAndTitle />
		</Container>
	);
};

export default Right;
