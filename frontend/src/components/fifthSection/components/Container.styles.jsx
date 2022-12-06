import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	flex: 1;
	margin: ${props => (props.isMobile ? '5px' : '0px 10px 0px 20px')};
	width: 100vw;
`;
export const ScrollContainer = styled.div`
	width: 100vw;
	overflow-x: hidden;
	display: flex;
`;
