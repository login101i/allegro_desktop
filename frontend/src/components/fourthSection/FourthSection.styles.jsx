import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: hidden;
	white-space: nowrap;
	height: 280px;
`;

export const Bar = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BarTitle = styled.div`
	text-transform: uppercase;
	margin: 0px 2px;
	cursor: pointer;
	transition: 0.15s;
	padding: 5px 2px;
	border-bottom: ${props => (props.active ? ' 3px solid #ff5a00' : ' 3px solid transparent')};
	color: ${props => (props.active ? '#ff5a00' : 'grey')};
	&:hover {
		color: ${props => (props.active ? '#ff5a00' : 'var(--linkColor)')};
	}
`;
