import styled from 'styled-components';
import { Input } from '@mui/material';

export const Container = styled.div`
	display: grid;
	grid-template-columns: ${props => (props.isMobile ? ' repeat(1, 1fr)' : ' repeat(2, 1fr)')};
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	height: auto;
	width: 100%;
`;

export const RegisterContainer = styled.div`
	grid-area: ${props => (props.isMobile ? '1 / 1 / 1 / 3' : '1 / 2 / 2 / 3')};
	background-color: white;
	padding: 20px;
	max-width: 800px;
`;
export const LoginContainer = styled.div`
	background-color: white;
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
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
