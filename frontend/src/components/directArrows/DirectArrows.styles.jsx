export const DirectionButton = styled.button`
	height: 42px;
	width: 42px;
	padding: 4px;
	background: rgba(255, 255, 255, 0.9);
	border-radius: 2px;
	border: 2px solid darkGrey;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	transform: translate(0%, -65%);

	left: ${props => props.direction === 'left' && '20px'};
	right: ${props => props.direction === 'right' && '40px'};
	z-index: 2;
	color: darkGrey;
	display: none;
	background: white;
	transition: 0.3s;

	&:hover {
		border: 2px solid darkGrey;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	transform: translateX(${props => props.slideIndex * -450}px);
	transition: all 0.5s ease-in-out;
	position: relative;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: white;
	align-items: flex-start;
	justify-content: center;
	// padding: 10px 15px;
	overflow: hidden;
	position: relative;
	flex: 1;
	padding: 10px;
	overflow-x: ${props => (props.isMobile ? ' scroll' : 'none')};
	transition: 0.3s;
	height: ${props => (props.isMobile ? '100px' : '300px')};

	&: hover ${DirectionButton} {
		display: block;
	}
`;
