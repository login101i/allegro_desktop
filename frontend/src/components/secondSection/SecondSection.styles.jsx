import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-top: 16px;
	height: ${props => (props.isMobile ? 'auto' : '600px')};
	margin-bottom: 16px;
`;

export const Even = styled.div`
	max-width: 33%;
	height: 100%;
	display: flex;
	flex: 1;
`;

export const Space = styled.div`
	width: 20px;
	heigth: 200px;
	background-color: transparent;
`;
