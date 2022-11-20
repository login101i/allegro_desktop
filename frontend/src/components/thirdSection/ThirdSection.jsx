import { Container, ItemContainer, Image } from './ThirdSection.styles';
import { Text } from '../../components';
import { thirdSectionImages } from '../../utils/data';
import DirectionArrows from '../directArrows/DirectionArrows';

const ThirdSection = () => {
	return (
		<DirectionArrows>
			<Container>
				{thirdSectionImages.map(item => (
					<ItemContainer key={item.id}>
						<Image src={item.img} />
						<Text>{item.title}</Text>
					</ItemContainer>
				))}
			</Container>
		</DirectionArrows>
	);
};

export default ThirdSection;
