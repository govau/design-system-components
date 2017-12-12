/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * text-input function
 *
 * Text inputs include text inputs and textareas. They allow users to input data into a field.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * The TextInput component
 *
 * @param  {string}   as           - The kind of input, can be either 'input' or 'textarea', default: 'input'
 * @param  {string}   dark         - Add the dark variation class
 * @param  {string}   defaultValue - The value of the input element
 * @param  {string}   id           - The id of the input element, for additional labels, optional
 * @param  {boolean}  disabled     - The disable option, optional
 * @param  {function} onChange     - A callback for onChange, optional
 * @param  {function} onClick      - A callback for onClick, optional
 */
export const TextInput = ({
	as,
	defaultValue,
	dark,
	block,
	id,
	disabled,
	invalid,
	valid,
	onChange,
	onClick
}) => {
	const attributeOptions = {};

	if( typeof id !== 'undefined' ) {
		attributeOptions.id = id;
	}

	if( typeof defaultValue !== 'undefined' ) {
		attributeOptions.defaultValue = defaultValue;
	}

	if( typeof disabled !== 'undefined' ) {
		attributeOptions.disabled = disabled;
	}

	if( typeof onChange === 'function' ) {
		attributeOptions.onChange = onChange;
	}

	if( typeof onClick === 'function' ) {
		attributeOptions.onClick = onClick;
	}

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
						`au-text-input au-text-input--textarea au-text-input--block
						${ dark ? ' au-text-input--dark' : '' }
						${ valid ? ' au-text-input--valid' : '' }
						${ invalid ? ' au-text-input--invalid' : '' }`
					}
					type="text" { ...attributeOptions } >
				</textarea>
	);
};


TextInput.propTypes = {
	as: PropTypes.oneOf([ 'input', 'textarea' ]),
	defaultValue: PropTypes.string,
	dark: PropTypes.bool,
	block: PropTypes.bool,
	id: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
};


TextInput.defaultProps = {
	as: 'input',
};



/**
 * The direction-links component
 *
 * @param  {string} children  - Add the dark variation class
 * @param  {string} for       - The link target, optional
 */
export const Label = ({ children, inputID }) => {

	const attributeOptions = {};

	if( typeof inputID !== 'undefined' ) {
		attributeOptions.for = inputID;
	}

	return (
		<label className="au-text-input__label" { ...attributeOptions } >
			{ children }
		</label>
	);
};

Label.propTypes = {
	children: PropTypes.string.isRequired,
	inputID:  PropTypes.string,
};


/**
 * The direction-links component
 *
 * @param  {string} children  - Add the dark variation class
 * @param  {string} for       - The link target, optional
 */
export const Hint = ({ children }) => {

	return (
		<span className="au-text-input__hint" >
			{ children }
		</span>
	);
};

Hint.propTypes = {
	children: PropTypes.string.isRequired,
};
