import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => {
	if (success===true) {
		return (
			<div data-test="component-congrats">
				<span data-test="congrats-message">
					Congratulation! You guessed the word!
				</span>
			</div>
		);
	} else {
		return <div data-test="component-congrats"></div>;
	}
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
};

export default Congrats;
