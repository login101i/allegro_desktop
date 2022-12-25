import React, { useReducer, useEffect } from 'react';
import { ForumOutlined } from '@mui/icons-material';
import { ProductState, BorderContainer } from '../AllegroLocal.styles';
import { Flex, Text, CustomIcon } from '../../../components';
import { conditionReducer } from '../utils/AllegroLocal.utils';

const StateOfProduct = ({ setStateOfProduct }) => {
	const [stateCondition, dispatchConditionReducer] = useReducer(conditionReducer, {
		uzywany: true,
		bdb: false,
		nowy: false,
		dostawa: false,
	});

	useEffect(() => {
		setStateOfProduct(stateCondition);
	}, [stateCondition]);
	return (
		<>
			<Flex column>
				<Text bold style={{ margin: '20px 0px' }}>
					{' '}
					Stan przedmiotu *
				</Text>
				<ProductState
					onClick={() => dispatchConditionReducer({ type: 'uzywany' })}
					style={{
						border: stateCondition.uzywany ? '1px solid #f7ae10' : '',
					}}
				>
					<Flex space>
						<Text bold setStateOfProduct>
							Używany
						</Text>
						{stateCondition.uzywany && <CustomIcon icon={ForumOutlined} size={20} color='#f7ae10' />}
					</Flex>
					<Text wrap='true' color='grey'>
						Widoczne ślady używania lub uszkodzenia, które zostały uwzględnione w opisie tego przedmiotu i/lub na zdjęciach.
					</Text>
				</ProductState>
				<ProductState
					onClick={() => dispatchConditionReducer({ type: 'bdb' })}
					style={{
						border: stateCondition.bdb ? '1px solid #f7ae10' : '',
					}}
				>
					<Flex space>
						<Text bold>Bardzo dobry</Text>
						{stateCondition.bdb && <CustomIcon icon={ForumOutlined} size={20} color='#f7ae10' />}
					</Flex>
					<Text wrap='true' color='grey'>
						W bardzo dobrym stanie technicznym i wizualnym. Nie nosi śladów używania lub są one znikome.
					</Text>
				</ProductState>
				<ProductState
					onClick={() => dispatchConditionReducer({ type: 'nowy' })}
					style={{
						border: stateCondition.nowy ? '1px solid #f7ae10' : '',
					}}
				>
					<Flex space>
						<Text bold>Nowy</Text>
						{stateCondition.nowy && <CustomIcon icon={ForumOutlined} size={20} color='#f7ae10' />}
					</Flex>
					<Text wrap='true' color='grey'>
						Fabrycznie nowy, nieużywany, nieuszkodzony, zapakowany w oryginalne opakowanie od producenta.
					</Text>
				</ProductState>
			</Flex>
			<BorderContainer> </BorderContainer>
		</>
	);
};

export default StateOfProduct;
