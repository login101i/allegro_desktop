import { useSelector } from 'react-redux';

import PayPalLogo from '../../../../assets/pictures/PayPalLogo.png';
import Logo2 from '../../../../assets/pictures/goodToSee3.webp';
import Logo3 from '../../../../assets/pictures/goodToSee2.webp';
import { Button, Text, Flex } from '../../../../components';
import { Container1, Icon } from '../sidebarRight/SideBarRight.styles';

const ContainerInfo1 = () => {
	const { isAuthenticated, user } = useSelector(state => state.auth);

	function capitalize(word) {
		return word?.charAt(0).toUpperCase() + word?.slice(1) || 'Brak słowa';
	}

	return (
		<Container1>
			<Flex style={{ width: '85%', height: '90%' }}>
				<Flex column space>
					{isAuthenticated ? <Text title={'Cześć ' + capitalize(user.name) + '!'} bold /> : <Text title={'Witaj na allegro!'} bold />}
					<Flex>
						<Icon src={PayPalLogo} />
						<Text wrap='true'>
							Twoje środki Allegro Pay:
							<br /> 4 000 zł.
						</Text>
					</Flex>
					<Flex>
						<Icon src={Logo2} />
						<Text wrap='true'>W Allegro Family darmowe dostawy dla 10 członków rodziny!</Text>
					</Flex>
					<Flex>
						<Icon src={Logo3} />
						<Text wrap='true'>W Allegro Family darmowe dostawy dla 10 członków rodziny</Text>
					</Flex>
					<Button title={'Poznaj swoje korzyści'} />
				</Flex>
			</Flex>
		</Container1>
	);
};

export default ContainerInfo1;
