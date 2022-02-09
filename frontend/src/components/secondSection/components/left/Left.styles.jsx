import styled from "styled-components";

export const  Container = styled.div`
	display: flex;
	// flex: 1;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	overflow: hidden;
	padding: 20px 10px;
	width: 100vw;
`;

export const  Title = styled.div`
	font-weight: 600;
	text-align: center;
	font-size: 20px;
	margin-bottom: 30px;
`;

export const  TimeContainer = styled.div`
	display: absolute;
	align-items: center;
	justify-content: center;
	top: 0px;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
`;
export const  TimeItem = styled.div`
	height: 36px;
	width: 24px;
	background-color: #ff5a00;
	color: white;
	margin-right: 1.3px;
	font-size: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const  Colon = styled.span`
	color: #ff5a00;
	font-size: 25px;
	margin: 0px 5px;
`;

export const  Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
`;
