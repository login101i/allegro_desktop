import { useState } from 'react';
import { ProductContainer } from '../../components';
import { fourthSectionData, occasions } from '../../utils/data';
import { Container } from './FourthSection.styles';
import { DirectionArrows } from '../../components';

const FourthSection = () => {
	const [categoryArray, setCategoryArray] = useState(occasions);

	const handleArray = array => {
		setCategoryArray(array);
	};

	return (
		<DirectionArrows containerIndex={4}>
			<Container>
				{categoryArray.map((item, index) => (
					<ProductContainer key={item.id} img={item.SmartImage} price={item.price} index={index} imageSize='110px' />
				))}
			</Container>
		</DirectionArrows>
	);
};

export default FourthSection;
