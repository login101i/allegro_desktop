import styled from "styled-components";

export const MainContainer = styled.div`
	width: ${(props) => (props.isMobile ? "100%" : "80%")};
	margin: 0 auto;
	margin-left: ${(props) => (props.isMobile ? "0px" : "250px")};
`;
export const Container = styled.div`
	min-height: 100vh;
	background-color: var(--allegroLocalnieColor);
	display: flex;
	flex-direction: ${(props) => (props.isMobile ? "column" : "row")};

	margin-top: 30px;
	width: 100%;
`;

export const LeftPart = styled.div`
	margin-right: ${(props) => (props.isMobile ? "0px" : "30px")};
	flex-direction: column;
	width: ${(props) => (props.isMobile ? "100%" : "40%")};
	position: relative;
`;

export const TopLeftCont = styled.div`
	min-height: 100px;
	border: 1px solid #7770bd;
	border-radius: 12px;
	padding: 12px 32px;
	display: flex;
	background-color: #edecf7;
	cursor: pointer;
	width: ${(props) => (props.isMobile ? "100%" : "700px")};

	-webkit-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	-moz-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
`;

export const BottomLeftCont = styled.div`
	height: auto;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	margin: 20px 0px;
	padding: 16px 32px;
	overflow: hidden;

	width: ${(props) => (props.isMobile ? "100%" : "700px")};

	background-color: white;
	position: relative;

	-webkit-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	-moz-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);

	margin-bottom: ${(props) => (props.isMobile ? "70px" : "200px")};
`;

export const BorderContainer = styled.div`
	border: 1px solid #e3e4e6;
	transform: translateX(-200px);
	width: 200%;
	margin: 20px 0px;
`;

export const BlackDot = styled.div`
	height: 7px;
	width: 7px;
	background-color: black;
	border-radius: 50%;
	display: inline-block;
	margin-right: 8px;
`;

export const RequiredFields = styled.div`
	position: absolute;
	bottom: 0px;
	right: 30px;
	font-size: 11px;
	color: grey;
`;
export const RightPart = styled.div`
	position: absolute;
	top: 0px;
	left: 720px;
`;

export const RightCont = styled.div`
position:fixed;
width:450px;
	height: auto;
		border-radius: 12px;
	padding:10px 20px
	border-radius: 12px;
	display: flex;
	background-color: white;
padding:30px 32px;
	display:flex;
	flex-direction:column;
	align-items:center;

	

	-webkit-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	-moz-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
`;
export const RightContInfo = styled.div`
	position: absolute;
	bottom: -100px;
	left: 50%;
	transform: translate(-50%, 0%);
`;

export const ProductState = styled.div`
	position: relative;
	border: 1px solid lightGrey;
	border-radius: 10px;
	padding: 16px;
	margin-bottom: 20px;
	cursor: pointer;

	-webkit-box-shadow: 2px 1px 54px -39px rgba(166, 68, 90, 0.6);
	-moz-box-shadow: 2px 1px 54px -39px rgba(166, 68, 90, 0.6);
	box-shadow: 2px 1px 54px -39px rgba(166, 68, 90, 0.6);
	&:hover {
		border: 1px solid darkGrey;
		transition: 0.3s;
	}
`;

export const BorderWithArrow = styled(ProductState)`
	margin-top: 20px;
	&::after {
		content: " ";
		position: absolute;
		left: 25px;
		top: -9px;
		width: 16px;
		height: 16px;
		transform: rotate(45deg);
		border-top: 1px solid lightGrey;
		border-left: 1px solid lightGrey;
		background-color: white;
	}
	&:hover {
		border: 1px solid lightGrey;
	}
`;

export const LoadImagesComponent = styled.input`
	background-color: #edecf7;
	color: #7770bd;
	cursor: pointer;
	outline: none;
	text-align: center;
	font-weight: 600;
	letter-spacing: 2px;
	text-transform: uppercase;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Open Sans, sans-serif;
	font-size: 14px;
	height: 40px;
	line-height: 21px;
	line-height: 40px;
	margin: 0;
	overflow: hidden;
	padding: 0px 24px;
	position: relative;
	text-decoration: none;
	text-size-adjust: 100%;
	vertical-align: middle;
	white-space: nowrap;
	z-index: 7999;

	width: auto;
	border-radius: 20px;
	font-weight: 500;

	&:hover {
		color: var(--linkColor);
		background-color: "green";
		transition: 0.3s;
	}
`;
