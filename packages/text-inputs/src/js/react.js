/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * text-input function
 *
 * Text inputs include text inputs, labels, hints and textareas. They allow users to input data into a field.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * DEFAULT
 * The AUtextInput component
 *
 * @param  {string} as               - The kind of input, can be either 'input' or 'textarea', default: 'input'
 * @param  {string} dark             - Add the dark variation class
 * @param  {string} block            - Add the block variation class
 * @param  {string} invalid          - Add the invalid variation class
 * @param  {string} valid            - Add the valid variation class
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUtextInput = ({
	as,
	dark,
	block,
	invalid,
	valid,
	...attributeOptions
}) => {

	return (
		as === 'input'
			? <input className={
						`au-text-input
						${ dark ? ' au-text-input--dark' : '' }
						${ block ? ' au-text-input--block' : '' }
						${ valid ? ' au-text-input--valid' : '' }
						${ invalid ? ' au-text-input--invalid' : '' }`
					}
					type="text" { ...attributeOptions }
				/>
			: <textarea
					className={
						`au-text-input
						${ block ? ' au-text-input--block' : '' }
						${ dark ? ' au-text-input--dark' : '' }
						${ valid ? ' au-text-input--valid' : '' }
						${ invalid ? ' au-text-input--invalid' : '' }`
					}
					type="text" { ...attributeOptions } >
				</textarea>
	);
};

AUtextInput.propTypes = {
	as: PropTypes.oneOf([ 'input', 'textarea' ]),
	dark: PropTypes.bool,
	block: PropTypes.bool,
	id: PropTypes.string,
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

AUtextInput.defaultProps = {
	as: 'input',
};

export default AUtextInput;
