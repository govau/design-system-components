/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Page alert function
 *
 * Use page alert to notify and alert users of important application events.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
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
 * @param  {string} as       - What kind of alert this is, takes: 'info', 'warning', 'error', 'success'
 * @param  {node}   children - Anything inside the component
 */
const PageAlert = ({ as, children }) => (
	<div className={`au-page-alerts ${ options[ as ] }`} role='alert'>
		{ children }
	</div>
);

PageAlert.propTypes = {
	as: PropTypes.oneOf([ 'info', 'warning', 'error', 'success' ]).isRequired,
	children: PropTypes.node.isRequired,
};

export default PageAlert;
