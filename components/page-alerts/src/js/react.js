/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Page alert function
 *
 * Use page alert to notify and alert users of important application events.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
	info: 'au-page-alerts--info',
	warning: 'au-page-alerts--warning',
	error: 'au-page-alerts--error',
	success: 'au-page-alerts--success',
};


/**
 * DEFAULT
 * Page alert
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  as               - What kind of alert this is, takes: 'info', 'warning', 'error', 'success'
 * @param  {node}    children         - Anything inside the component
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUpageAlert = ({ as, alt, dark, children, className = '', ...attributeOptions }) => (
	<div
		className={`au-body au-page-alerts ${ className } ${
			dark
				? ' au-page-alerts--dark au-body--dark'
				: ''
			}${
			alt
				? ' au-page-alerts--alt au-body--alt'
				: ''
			} ${ options[ as ] }`} { ...attributeOptions }
	>
		{ children }
	</div>
);

AUpageAlert.propTypes = {
	as: PropTypes.oneOf([ 'info', 'warning', 'error', 'success' ]).isRequired,
	alt: PropTypes.bool,
	dark: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default AUpageAlert;
