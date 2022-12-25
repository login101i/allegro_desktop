import { Container, ItemContainer, Image } from './ThirdSection.styles';
import { Text } from '../../components';
import { thirdSectionImages } from '../../utils/data';
import DirectionArrows from '../directArrows/DirectionArrows';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../responsive';

const ThirdSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<Container>
			<DirectionArrows containerIndex={1}>
				{thirdSectionImages.map(item => (
					<ItemContainer key={item.id}>
						<Image src={item.img} />
						<Text wrap="true" textAlign hovered size={isMobile ? 15 : 18}>
							{item.title}
						</Text>
					</ItemContainer>
				))}
			</DirectionArrows>
		</Container>
	);
};

export default ThirdSection;
