import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	flex: 1;
	margin: ${props => (props.isMobile ? '5px' : '0px 10px 0px 20px')};
	align-items: left;
	-webkit-box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	-moz-box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	box-shadow: 0px 19px 32px -22px rgba(107, 108, 123, 1);
	overflow-x: scroll;
	width: 100vw;
`;
export const ScrollContainer = styled.div`
	width: 100vw;
	overflow-x: scroll;
	display: flex;
`;
