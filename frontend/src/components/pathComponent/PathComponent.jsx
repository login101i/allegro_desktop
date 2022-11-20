import { Text } from '../../components';
import { Container } from './pathComponent.styles';

const PathComponent = ({ path }) => {
	return (
		<Container>
			<Text>Allegro -</Text>
			{path.map((p, i) => {
				const arrayLenght = path.length;

				if (i < arrayLenght - 1) return <Text key={i}>{p} - </Text>;
				else
					return (
						<Text color='var(--allegroColor)' key={i}>
							{p}
						</Text>
					);
			})}
		</Container>
	);
};

export default PathComponent;
