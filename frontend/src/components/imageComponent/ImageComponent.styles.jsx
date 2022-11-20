import styled from 'styled-components';

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: ${props => (props.column ? 'column' : 'row')};
	justify-content: ${props => (props.space ? 'space-between' : '')};
	justify-content: ${props => (props.center ? 'center' : '')};
	align-items: ${props => (props.align ? 'center' : 'left')};
	margin: 4px 0px;
	width: ${props => (props.fullWidth ? '100%' : 'auto')};
	border-top: ${props => (props.borderTop ? '1px solid lightGrey ' : '')};
`;

export const Image = styled.img`
	object-fit: contain;
	cursor: pointer;
	max-height: 250px;
	height: ${props => (props.size ? props.size + 'px' : 'auto')};
`;
