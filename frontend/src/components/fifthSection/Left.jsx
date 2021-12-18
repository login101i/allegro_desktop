import React from "react";
import styled from "styled-components";

import ProductContainer from "../ProductContainer";
import BorderAndTitle from "../BorderAndTitle";

import Pies1 from "../../assets/pictures/Pies1.png";
import Pies2 from "../../assets/pictures/Pies2.png";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 300px;
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

const Left = () => {
	return (
		<Container>
			<Title>Polecane dla psa</Title>
			<FlexRow>
				<ProductContainer
					img={Pies1}
					discount={32}
					oldPrice={"122,99"}
					price={"89.99"}
				/>
				<ProductContainer
					img={Pies2}
					discount={19}
					oldPrice={"122,99"}
					price={"89.99"}
				/>
			</FlexRow>
			<BorderAndTitle />
		</Container>
	);
};

export default Left;