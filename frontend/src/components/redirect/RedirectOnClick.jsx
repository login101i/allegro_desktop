import { Container } from './RedirectOnClick.styles';
const RedirectOnLick = ({ children, to }) => {
	return (
		<Container
			to={`${to}`}
			style={{
				textDecoration: 'none',
				width: '100%',
				background: 'transparent',
			}}
		>
			{children}
		</Container>
	);
};

export default RedirectOnLick;
