import { BorderAndTitle, PriceDiscount, Text } from '../../../../components';

import { Container, SectionContainer, ImageContainer, Image, SectionInfo, Description } from './Center.styles';

export const Center = ({ products = [], isMobile }) => {
	return (
		<Container isMobile={isMobile}>
			<Text title='Z super ceną zaoszczędzisz' />

			{products &&
				products.map((product, i) => (
					<SectionContainer key={Math.random()}>
						<ImageContainer>
							<Image src={product.img[0].url} />
						</ImageContainer>
						<SectionInfo>
							<PriceDiscount
								discount={product.discount}
								oldPrice={product.oldPrice}
								price={product.price}
								description={product.description}
							/>
							<Description>
								{product.description.toString().split('.')[0].length > 80
									? product.description.slice(0, 75) + '...'
									: product.description.toString().split('.')[0]}
								.
							</Description>
						</SectionInfo>
					</SectionContainer>
				))}
			<BorderAndTitle title='Zobacz więcej' />
		</Container>
	);
};
