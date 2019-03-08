/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * footer function
 *
 * Footers help users who reach the bottom of a page without finding what they want.
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
 * The footer component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {node}    children         - The inside of this section
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUlabel = ({ dark, inline, title,  className = '', ...attributeOptions }) => (
	<label
		className={ `au-label ${ className }` +
		`${ dark ? ' au-label--dark' : '' }` + 
		`${ inline ? 'au-label--inline' : ''}`
		}
		{ ...attributeOptions }
	>
    {title}
	</label>
);

AUlabel.propTypes = {
	dark: PropTypes.bool,
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default AUlabel;
