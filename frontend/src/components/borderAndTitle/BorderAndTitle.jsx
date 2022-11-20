import { Header, SpanText } from './BorderAndTitle.styles';

const BorderAndTitle = (props) => {
	return (
		<>
			{props.border ? (
				<Header>
					<SpanText>{props.title || "Zobacz więcej"} </SpanText>
				</Header>
			) : (
				<SpanText>{props.title || "Zobacz więcej"} </SpanText>
			)}
		</>
	);
};

export default BorderAndTitle;
