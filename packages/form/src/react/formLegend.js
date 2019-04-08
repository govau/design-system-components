/***************************************************************************************************************************************************************
 *
 * form legend function
 *
 * The form component contains layout, labelling and inline validations for form fields
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * The legend component
 *
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUlegend = ( {...attributeOptions} ) => (
	<legend className="au-fieldset__legend" { ...attributeOptions }></legend>
);
