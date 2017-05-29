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


/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
	'primary': '',
	'secondary': 'uikit-btn--secondary',
	'tertiary': 'uikit-btn--tertiary',
};

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}  text     - The text of the button
 * @param  {boolean} disabled - The disabled option
 * @param  {boolean} block    - The block option
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
		<button type={ type } className={ `uikit-btn ${ options[ as ] }${ block ? ' uikit-btn--block' : '' }` } disabled={ disabled } { ...attributeOptions }>{ text }</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
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
