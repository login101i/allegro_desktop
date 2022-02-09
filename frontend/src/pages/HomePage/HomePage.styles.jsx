import styled from "styled-components";
import { Button } from "../../components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	max-width: 1660px;
	width: 1660px;
	// overflow: hidden;
	background: ${(props) => props.theme.colors.allegroBackground};
	margin-bottom: 100px;
`;
export const BannerContainer = styled.div`
	position: relative;
	width: 100vw;
	margin-top: 16px;
`;

export const SmartBanner = styled.img`
	width: 100vw;
`;

export const BannerButton = styled(Button)`
    	position: "absolute",
		top: "50%",
		right: "30px",
		transform: "translate(0%,-50%)",
		width: "auto",
		padding: "4px 18px",
		borderRadius: "3px"
`;
