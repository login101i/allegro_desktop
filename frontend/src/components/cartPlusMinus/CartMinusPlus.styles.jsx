import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const MinusPlusContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	margin-right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 8px;
`;

export const Square = styled.div`
	width: 40px;
	height: 40px;
	border: 1px solid lightGrey;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
export const Input = styled.input`
	width: 70px;
	height: 40px;
	border: 1px solid lightGrey;
	outline: none;
	text-align: center;
	font-size: 16px;
`;
