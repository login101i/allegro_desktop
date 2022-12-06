import styled from 'styled-components';
import { Badge } from '@material-ui/core';

export const Icon = styled.div`
	color: grey;
	font-size: 30px;
	cursor: pointer;
	margin-right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
	margin-left: 10px;
	transition: 0.2s ease-in-out;
	&:hover {
		filter: brightness(85%);
	}
`;

export const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: theme.colors.allegroColor,
		border: `2px solid ${props => props.theme.colors.allegroColor}`,
		padding: '0 4px',
		right: -2,
		top: 30,
		color: 'white',
	},
}));
