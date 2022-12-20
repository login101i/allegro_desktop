import React, { useState } from 'react';
import { Text, Flex } from '..';
import { ErrorContainer, ErrorCloseButton } from './ErrorMessage.styles';

const ErrorMessage = ({ error = 'Błąd' }) => {
	const [errorVisible, setErrorVisible] = useState(true);

	const handleError = () => {
		setErrorVisible(false);
	};
	return (
		errorVisible && (
			<ErrorContainer>
				<Flex space align fullWidth>
					<Text color='white' size={16} wrap='true'>
						{error.message || error}
					</Text>
					<ErrorCloseButton onClick={handleError}>x</ErrorCloseButton>
				</Flex>
			</ErrorContainer>
		)
	);
};

export default ErrorMessage;
