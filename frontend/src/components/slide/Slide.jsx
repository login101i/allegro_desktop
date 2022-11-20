import { SlideImage } from './Slide.styles';

const Slide = props => {
	const { image } = props;

	return <SlideImage src={image} alt='Image Slider'></SlideImage>;
};

export default Slide;
