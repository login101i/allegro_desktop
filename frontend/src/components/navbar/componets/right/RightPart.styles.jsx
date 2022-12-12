import styled, { css } from 'styled-components';
import { Badge } from '@material-ui/core';

export const SelectContainer = styled.select`
	flex: 2;
	outline: none;
	border: 0.5px solid #d2d2d2;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Right = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-bottom: ${props => props.isMobile && '16px'};
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

export const LogInImage = styled.img`
	width: 100%;
	object-fit: contain;
`;

export const IconDown = styled(Icon)`
	transform: translateX(10px);
	font-size: ${props => (props.isMobile ? '18px' : '28px')};
	margin-left: 25px;
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
	z-index: 112;
`;
export const MenuLoginMobile = styled.div`
	display: ${props => (props.openMenu ? 'block' : '')};
	position: absolute;
	transform: translate(50%, -50%);
	top: -65px;
	right: -320px;
	width: 80vw;
	height: 100vh;
	padding: 16px;
	background-color: white;
	z-index: 112;
	transform: translate(10vw);
	transition: all 0.4s ease-out;
	${props =>
		props.openMenu &&
		css`
			transform: translate(-280px);
			box-shadow: -9px 2px 17px -5px rgba(46, 46, 46, 0.75);
			-webkit-box-shadow: -9px 0px 17px -5px rgba(46, 46, 46, 0.75);
			-moz-box-shadow: -9px 2px 17px -5px rgba(46, 46, 46, 0.75);
		`};
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
