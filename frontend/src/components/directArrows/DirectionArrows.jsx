import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { screens } from '../responsive';
import { Text } from '..';
import { DirectionButton, Wrapper, Container } from './DirectArrows.styles';

const DirectionArrows = ({ title, children, style, containerIndex = 2, align }) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
		} else {
			setSlideIndex(slideIndex >= 0 ? slideIndex + 1 : 0);
			if (slideIndex === containerIndex) setSlideIndex(0);
		}
	};
	if (isMobile)
		return (
			<Container isMobile={isMobile}>
				{title && <Text bold>{title}</Text>}
				<Wrapper>{children}</Wrapper>
			</Container>
		);
	else
		return (
			<Container style={style} isMobile={isMobile} align={align}>
				{slideIndex > 0 && (
					<DirectionButton direction='left' onClick={() => handleClick('left')}>
						<ArrowBackIosNewIcon />
					</DirectionButton>
				)}
				{title && <Text bold>{title}</Text>}
				<Wrapper slideIndex={slideIndex}>{children}</Wrapper>
				<DirectionButton direction='right' onClick={() => handleClick('right')}>
					<ArrowForwardIosIcon />
				</DirectionButton>
			</Container>
		);
};

export default DirectionArrows;
