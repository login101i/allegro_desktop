import React from "react";
import styled from "styled-components";

import { Text } from "../../components/Text";

import ProductContainer from "../../components/ProductContainer";
import WeekOcasion1 from "../../assets/pictures/WeekOcasion1.png";

const Container = styled.div`
	height: 40%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	margin-top: 16px;
`;

const XX = styled.div`
	height: 80%;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ContainerInfo2 = () => {
	return (
		<Container>
			<XX>
				<Text title={"Oferta dla Ciebie:"} size={20} bold />

				<ProductContainer
					row
					img={WeekOcasion1}
					discount={232}
					oldPrice={389.0}
					price={299.89}
					description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"}
					extended={false}
				/>
			</XX>
		</Container>
	);
};

export default ContainerInfo2;
