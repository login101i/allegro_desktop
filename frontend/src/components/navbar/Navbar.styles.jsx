import styled from 'styled-components';
import { Badge } from '@material-ui/core';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${props => (props.isMobile ? '2px' : '16px 16px')};
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 99;
	width: 100%;
	height: ${props => (props.isMobile ? '230px' : '80px')};
	background-color: ${props => (props.cartModal ? 'grey' : 'white')} !important;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	// width: 1600px;
	width: 90%;
	margin: 0 auto;
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	background-color: white;
`;

export const Image = styled.div`
	transform: ${props => (props.isMobile ? 'scale(0.7)' : 'scale(1.15)')};
`;

export const LogInImage = styled.img`
	width: 100%;
	object-fit: contain;
`;

export const Center = styled.div`
	flex-grow: grow;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: ${props => (props.isMobile ? '4px' : '0px 20px')};
`;
export const CenterContainer = styled.form`
	display: flex;
	flex-grow: 1;
`;

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	border: 0.5px solid #d2d2d2;
`;
export const Input = styled.input`
	border: none;
	height: 38px;
	line-height: 38px;

	outline: none;
	font-size: 15px;
	margin-left: 10px;
	paddgin-right: 8px;
`;

export const SelectContainer = styled.select`
	flex: 2;
	outline: none;
	border: 0.5px solid #d2d2d2;
`;

export const Right = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Icon = styled.div`
	color: grey;
	padding: 4px;
	font-size: 30px;
	margin: 0px 10px;
	cursor: pointer;
	margin: 6px 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
`;

export const IconDown = styled(Icon)`
	transform: translateX(10px);
	font-size: 30px;
	// border: 2px solid black;
`;

export const MenuLogin = styled.div`
	border: 1px solid lightGrey;
	display: ${props => (props.openMenu ? 'block' : 'none')};
	position: absolute;
	top: 45px;

	right: 0;
	width: 285px;
	height: auto;
	min-height: 200px;
	padding: 16px;
	background-color: white;
	border: 1px solid lightGrey;
	zindex: 112;
`;
export const MenuLogged = styled(MenuLogin)`
	padding: 0px;
	background-color: ${props => props.theme.colors.allegroBackground};
`;
export const MenuLoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	background-color: white;
`;

export const AccountNavbar = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	background-color: white;
`;

export const AccountMainCont = styled.div`
	width: 100%;
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
