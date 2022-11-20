
import {Container} from './PageWidth.styles'
const PageWidth = ({ row, children, width }) => {
	return (
		<Container row={row} width={width}>
			{children}
		</Container>
	);
};

export default PageWidth;
