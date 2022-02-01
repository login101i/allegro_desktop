import checkPropTypes from "check-prop-types";

/**
 * Factory function ot create a ShallowWrapper
 * @function findByTestAtrr
 * @param {string}
 * @returns {ShallowWrapper}
 **/

export const searchByTestAtrr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		"props",
		component.name
	);
	expect(propError).toBeUndefined();
};
