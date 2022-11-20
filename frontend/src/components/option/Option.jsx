import { OptionContainer, Option } from './Option.styles';

const OptionComponent = ({ option, onClick, size, borderBottom, borderTop = true, upperCase }) => {
	return (
		<OptionContainer onClick={onClick} borderBottom={borderBottom} borderTop={borderTop}>
			<Option size={size} upperCase={upperCase}>
				{option}
			</Option>
		</OptionContainer>
	);
};

export default OptionComponent;
