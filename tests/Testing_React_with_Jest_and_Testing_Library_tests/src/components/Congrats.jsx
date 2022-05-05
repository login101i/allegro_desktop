import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => {
	if (success === true) {
		return (
			<div data-test="component-congrats" className="alert alert-success">
				<h2 data-test="congrats-message">
					Congratulation! You guessed the word!
				</h2>
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
