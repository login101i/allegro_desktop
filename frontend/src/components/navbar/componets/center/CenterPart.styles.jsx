import styled from 'styled-components';

export const Center = styled.div`
	flex-grow: grow;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: ${props => (props.isMobile ? '0px 10px' : '4px 50px')};
`;
export const CenterContainer = styled.form`
	display: flex;
	flex-grow: 1;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	border: 0.5px solid #d2d2d2;
	padding-right: 10px;
`;
export const Input = styled.input`
	border: none;
	height: 38px;
	width: 100%;
	line-height: 38px;
	outline: none;
	font-size: 15px;
	margin-left: 10px;
	padding-right: 8px;
`;

export const SelectContainer = styled.select`
	flex: 2;
	outline: none;
	border: 0.5px solid #d2d2d2;
	font-size: 16px;
	color: var(--textColor);
	height:40px;
`;

export const Option = styled.option`
	font-size: 14px;
	color: black;
`;
