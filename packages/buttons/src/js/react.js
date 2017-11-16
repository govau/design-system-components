/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * buttons function
 *
 * Buttons signal action. Use them to move the user through the service.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
	'primary': '',
	'secondary': 'au-btn--secondary',
	'tertiary': 'au-btn--tertiary',
};

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text     - The text of the button
 * @param  {string}    as       - The kind of button, can be either 'primary', 'secondary', 'tertiary', default: 'primary'
 * @param  {string}    type     - The type attribute, default: 'button', optional
 * @param  {string}    id       - The ID attribute, optional
 * @param  {boolean}   disabled - The disabled option, optional
 * @param  {boolean}   block    - The block option, optional
 * @param  {function}  onClick  - An onClick function, optional
 */
const Button = ({ text, as, type, id, disabled, block, onClick }) => {
	const attributeOptions = {};

	if( typeof id !== 'undefined' ) {
		attributeOptions.id = id;
	}

	if( typeof onClick === 'function' ) {
		attributeOptions.onClick = onClick;
	}

	return (
		<button
			type={ type }
			className={ `au-btn ${ options[ as ] }${ block ? ' au-btn--block' : '' }` }
			disabled={ disabled }
			{ ...attributeOptions }
		>
			{ text }
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	as: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary' ]).isRequired,
	type: PropTypes.string,
	id: PropTypes.string,
	disabled: PropTypes.bool,
	block: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	type: 'button',
	as: 'primary',
};

export default Button;
