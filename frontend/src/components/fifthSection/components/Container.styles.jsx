import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	flex: 1;
	margin: ${props => (props.isMobile ? '5px' : '0px 10px 0px 20px')};
	width: ${props => (props.isMobile ? '100vw' : '')};
	max-width:660px;
	margin-left: ${props => props.isMobile && '30px'};
`;
export const ScrollContainer = styled.div`
	width: ${props => (props.isMobile ? '' : '100%')};
	overflow-x: scroll;
	display: flex;
	::-webkit-scrollbar {
		display: none;
	}
`;
