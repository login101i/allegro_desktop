import styled from 'styled-components'


export const Container = styled.div`
	margin-top: 60px;
	margin-left: 40px;
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 80%;
	background-color: white;
	padding: 0px 20px;
	margin-bottom: 60px;
`;

export const Space = styled.div`
	height: 20px;
	background-color: ${(props) => props.theme.colors.allegroBackground};
    `