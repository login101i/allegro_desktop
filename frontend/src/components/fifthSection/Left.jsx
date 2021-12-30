import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductContainer from "../ProductContainer";
import BorderAndTitle from "../BorderAndTitle";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: white;
	flex: 1;
	margin: 0px 10px 0px 20px;

	-webkit-box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	-moz-box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);

`;

const FlexRow = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 21px;
	margin: 16px;
	color: rgb(76, 79, 70);
`;

const Left = ({ products, loading }) => {
	const dogProducts = products.filter((p) => p.category === "Pupil");
	return (
		<>
			<Container>
				<Title>Polecane dla psa</Title>
				<FlexRow>
					{dogProducts.map((dogProduct) => (
						<ProductContainer
							key={dogProduct._id}
							img={dogProduct.img[0].url}
							discount={dogProduct.discount}
							oldPrice={dogProduct.oldPrice}
							price={dogProduct.price}
							product={dogProduct}
							extended={true}
						/>
					))}
				</FlexRow>
				<BorderAndTitle />
			</Container>
		</>
	);
};

export default Left;
