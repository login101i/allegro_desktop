import { Container, ItemContainer, Image } from './ThirdSection.styles';
import { Text } from '../../components';
import { thirdSectionImages } from '../../utils/data';
import DirectionArrows from '../directArrows/DirectionArrows';

const ThirdSection = () => {
	return (
		<Container>
			<DirectionArrows containerIndex={1}>
				{thirdSectionImages.map(item => (
					<ItemContainer key={item.id}>
						<Image src={item.img} />
						<Text wrap textAlign hovered>
							{item.title}
						</Text>
					</ItemContainer>
				))}
			</DirectionArrows>
		</Container>
	);
};

export default ThirdSection;
