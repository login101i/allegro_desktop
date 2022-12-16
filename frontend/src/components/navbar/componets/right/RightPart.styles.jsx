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
	z-index: 1000;
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
	min-width: 500px;
	margin-left: 100px;
`;

export const MenuLoginLogoutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const IconDown = styled(Icon)`
	font-size: ${props => (props.isMobile ? '18px' : '28px')};
	margin-left: 25px;
`;

export const MenuLogin = styled.div`
	border: 1px solid lightGrey;
	display: ${props => (props.openMenu ? 'block' : 'none')};
	position: fixed;
	top: 45px;
	right: 0;
	width: 285px;
	height: ${props => (props.isMobile ? '100vh' : ' 700px')};
	min-height: 200px;
	padding: 16px;
	background-color: white;
	border: 1px solid lightGrey;
`;
export const MenuLoginMobile = styled.div`
	display: ${props => (props.openMenu ? 'block' : '')};
	position: fixed;
	top: -65px;
	right: -360px;
	width: 90vw;
	height: 100vh;
	padding: 16px;
	background-color: white;
	transition: all 0.4s ease-out;
	margin-top: 65px;
	z-index: 81;

	${props =>
		props.openMenu &&
		css`
			transform: translate(-300px);
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
	width: 80%;
	height: 100%;
	padding: 10px;
	overflow: hidden;
`;

export const AccountNavbar = styled.div`
	display: flex;
	flex-direction: row;
	width: ${props => (props.isMobile ? '80%' : '100%')};
	justify-content: flex-start;
	background-color: white;
`;

export const AccountMainCont = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;
