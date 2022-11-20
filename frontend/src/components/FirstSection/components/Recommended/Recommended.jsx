import DirectionArrows from '../../../directArrows/DirectionArrows';
import { Item } from '../Item';
import { ItemsContainer } from './Recommended.styles';

const Recommended = ({ images }) => {
	return (
		<DirectionArrows
			style={{
				position: 'relative',
			}}
			title='Warto zobaczyć'
		>
			<ItemsContainer isMobile>
				{images.map((image, i) => (
					<Item key={i} image={image.image} title={image.title} />
				))}
			</ItemsContainer>
		</DirectionArrows>
	);
};

export default Recommended;
