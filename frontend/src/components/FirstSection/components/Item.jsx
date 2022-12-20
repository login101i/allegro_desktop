import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Text } from '../..';
import { screens } from '../../responsive';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: ${props => (props.isMobile ? '5px' : '5px 25px')};
	flex: 1;
	cursor: pointer;
`;

const Image = styled.img`
	margin-bottom: 15px;
	height: ${props => (props.isMobile ? '100px' : '132px')};
	width: ${props => (props.isMobile ? '100px' : '132px')};
`;

export const Item = props => {
	const { image, title } = props;
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<Container isMobile={isMobile}>
			<Image src={image} isMobile={isMobile} />
			<Text size={isMobile ? 13 : 16}>{title}</Text>
		</Container>
	);
};
