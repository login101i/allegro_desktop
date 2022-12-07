import styled from 'styled-components';
import { Input } from '@mui/material';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	height: auto;
`;

export const RegisterContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	background-color: white;
	padding: 20px;
`;
export const LoginContainer = styled.div`
	background-color: white;
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CustomInput = styled(Input)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Break = styled.div`
	height: 1px;
	background-color: lightGrey;
	margin: 20px 0px;
`;
