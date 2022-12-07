import Text from '../text/Text';
import { useNavigate } from 'react-router-dom';
import { Container } from './MenuContainerBox.styles';

const MenuContentBox = ({ title, subTitles, style, onClick, borderBottom = false, text, bold = false }) => {
	const navigate = useNavigate();
	return (
		<Container style={style} onClick={onClick}>
			<Text bold={bold} title={title} marginTop='4px'>
				{text}
			</Text>
			{subTitles.map((subTitle, i) => (
				<Text onClick={() => navigate(subTitle.link)} key={i} borderBottom={borderBottom} hovered>
					{subTitle.subTitle ? subTitle.subTitle : subTitle}
				</Text>
			))}
		</Container>
	);
};

export default MenuContentBox;
