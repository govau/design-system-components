/***************************************************************************************************************************************************************
 *
 * select item function
 *
 * The form select element for multiple options
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * An item inside the Select component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUselectItem = ({ text, value, ...attributeOptions }) => (
	<option value={ value } { ...attributeOptions }>{ text }</option>
);

AUselectItem.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string,
};
