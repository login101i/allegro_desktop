import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 16px;
	min-height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: column;
`;

export const CartStagesContainer = styled.div`
	background-color: ${props => props.theme.colors.white};
	max-height: 50px;
	width: 100%;
	height: 50px;
`;

export const MainContainer = styled.div`
	flex-direction: column;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	width: ${props => (props.isMobile ? '400px' : '')};
	margin-bottom: 160px;
	margin-top: 16px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

export const LeftColumn = styled.div`
	grid-area: 1 / 1 / 8 / 5;
	display: ${props => (props.isMobile ? 'flex' : 'grid')};
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 0px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	max-height: 800px;
	overflow: scroll;
	max-width: 850px;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const LeftRow1 = styled.div`
	max-height: 100px;
	background-color: ${props => props.theme.colors.white};
	display: flex;
	justify-content: space-between;
	padding:0px 12px;
`;
export const LeftRow2 = styled.div`
	margin-bottom: ${props => props.isMobile && '22px'};
	background-color: ${props => props.theme.colors.white};
`;

export const RightColumn = styled.div`
	width: 100%;
	height: 100%;
	max-width: 370px;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const RightRow1 = styled.div`
	background-color: ${props => props.theme.colors.white};
	padding: 12px;
`;

export const RightRow2 = styled.div`
	background-color: ${props => props.theme.colors.white};
	padding: 12px;
	max-height: 230px;
	margin-top: 16px;
`;
export const RightRow3 = styled.div`
	background-color: ${props => props.theme.colors.white};
	max-height: 200px;
	padding: 12px;
	margin-top: 16px;
`;

export const CartProductContainer = styled.div`
	margin-bottom: 16px;
	background-color: ${props => props.theme.colors.white};
`;
