import styled from 'styled-components';

export const ModalContainer = styled.div`
	max-width: 900px;
	min-width: 800px;
	height: 600px;
	background-color: white !important;
	z-index: 9999999999 !important;
	position: fixed;
	top: 50vh;
	left: 50vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 25px;
	transform: translate(-25%, -50%);
	box-shadow: 1px 9px 22px 0px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 1px 9px 22px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 1px 9px 22px 0px rgba(0, 0, 0, 0.75);
`;
export const AnotherOfferContainer = styled.div`
	display: flex;
	overflow: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
