import { ImageContainer, Image } from './ImageComponent.styles';

const ImageComponent = ({ img, size, style }) => {
	return (
		<ImageContainer style={style}>
			<Image src={img} size={size} />
		</ImageContainer>
	);
};

export default ImageComponent;
