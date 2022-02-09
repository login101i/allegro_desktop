import React from "react";


import { ProductContainer, Text } from "../../../../components";
import WeekOcasion1 from "../../../../assets/pictures/WeekOcasion1.png";

import { Container2, Wrapper } from "../sidebarRight/SideBarRight.styles";

const ContainerInfo2 = () => {
	return (
		<Container2>
			<Wrapper>
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
			</Wrapper>
		</Container2>
	);
};

export default ContainerInfo2;
