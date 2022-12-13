import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Container, TextInfo } from './Shipping.styles';

import BorderAndTitle from '../borderAndTitle/BorderAndTitle';

import { Text, Flex } from '..';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../responsive';

const dataArray = [
	{
		icon: LocalShippingOutlinedIcon,
		text: 'Dostawa za darmo ',
		subTitle: 'Przewidywana dostawa: za 48 - 53 dni u Ciebie',
		title: 'Dostawa',
	},
	{
		icon: LocalShippingOutlinedIcon,
		text: '30 dni na odstąpienie od umowy',
		title: 'Dostawa',
	},
	{
		icon: AccountBalanceWalletOutlinedIcon,
		text: 'Wygodne płatności',
		subTitle: 'raty zero',
		title: 'raty zero',
	},
];

const Shipping = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			<Container>
				{dataArray.map((data, index) => (
					<div key={index + data.text}>
						<Flex space wrap column={isMobile}>
							<TextInfo>
								<data.icon
									style={{
										fontSize: '30px',
										color: 'lightGrey',
										marginRight: '10px',
									}}
								/>
								<Text subTitle={data.subTitle} size={16} wrap='true'>
									{data.text}
								</Text>
							</TextInfo>
						</Flex>
						<BorderAndTitle title={data.title} />
					</div>
				))}
			</Container>
		</>
	);
};

export default Shipping;
