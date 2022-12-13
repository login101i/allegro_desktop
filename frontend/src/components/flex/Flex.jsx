import {Container } from './Flex.styles'

const FlexRow = ({ space, style, align, column, fullWidth, borderTop, center, children, maxWidth }) => {
	return (
		<Container
			style={style}
			space={space}
			align={align}
			column={column}
			fullWidth={fullWidth}
			borderTop={borderTop}
			center={center}
			maxWidth={maxWidth}
		>
			{children}
		</Container>
	);
};

export default FlexRow;
