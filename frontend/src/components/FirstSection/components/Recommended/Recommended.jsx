import DirectionArrows from '../../../directArrows/DirectionArrows';
import { Item } from '../Item';
import { ItemsContainer } from './Recommended.styles';

export const Recommended = ({ images, containerIndex, isMobile }) => {
	return (
		<DirectionArrows
			style={{
				position: 'relative',
			}}
			title='Warto zobaczyć'
			containerIndex={containerIndex}
		>
			<ItemsContainer isMobile={isMobile}>
				{images.map((image, i) => (
					<Item key={i} image={image.image} title={image.title} />
				))}
			</ItemsContainer>
		</DirectionArrows>
	);
};
