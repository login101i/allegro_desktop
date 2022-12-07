import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
	width: ${props => (props.width ? props.width : '80%')};
	margin-bottom: 100px;
	margin-top: 16px;
`;
