import styled from 'styled-components';

export const Container = styled.div`
	background-color: rgb(60, 80, 82);
	width: 100vw;
	position: absolute;
	bottom: 0px;
	left: 0;
	height:80px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${props => (props.isMobile ? '2px' : '20px')};
	left: ${props => (props.isMobile ? '3%' : '20%')};
	width: 100vw;
`;

export const Logo = styled.img`
	height: 43px;
	margin: 5px 20px;
`;
