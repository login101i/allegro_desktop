import { useState } from "react";
import { ProductContainer } from "../../components";
import { fourthSectionData, occasions } from "../../utils/data";
import {
	Container,
	Bar,
	BarTitle,
	ProductContainer1
} from "./FourthSection.styles";

const FourthSection = () => {
	const [categoryArray, setCategoryArray] = useState(occasions);

	const handleArray = (array) => {
		setCategoryArray(array);
	};
	return (
		<Container>
			<Bar>
				{fourthSectionData.map(({ id, array, title }) => (
					<BarTitle key={id} onClick={() => handleArray(array)}>
						{title}
					</BarTitle>
				))}
			</Bar>

			<ProductContainer1>
				{categoryArray.map((okazja) => (
					<ProductContainer
						key={okazja.id}
						img={okazja.img}
						price={okazja.price}
					/>
				))}
			</ProductContainer1>
		</Container>
	);
};

export default FourthSection;
