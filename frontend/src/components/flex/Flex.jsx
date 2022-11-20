import {Container } from './Flex.styles'

const FlexRow = ({ space, style, align, column, fullWidth, borderTop, center, children }) => {
	return (
		<Container
			style={style}
			space={space}
			align={align}
			column={column}
			fullWidth={fullWidth}
			borderTop={borderTop}
			center={center}
		>
			{children}
		</Container>
	);
};

export default FlexRow;
