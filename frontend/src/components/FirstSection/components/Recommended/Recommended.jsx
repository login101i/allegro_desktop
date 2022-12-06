import DirectionArrows from '../../../directArrows/DirectionArrows';
import { Item } from '../Item';
import { ItemsContainer } from './Recommended.styles';

const Recommended = ({ images, containerIndex }) => {
	return (
		<DirectionArrows
			style={{
				position: 'relative',
			}}
			title='Warto zobaczyć'
			containerIndex={containerIndex}
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
