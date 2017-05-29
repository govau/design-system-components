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


/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
	info: 'uikit-page-alerts--info',
	warning: 'uikit-page-alerts--warning',
	error: 'uikit-page-alerts--error',
	success: 'uikit-page-alerts--success',
};

/**
 * DEFAULT
 * Page alert
 *
 * @param  {string} as       - What kind of alert this is, takes: 'info', 'warning', 'error', 'success'
 * @param  {string} children - Anything inside the component
 */
const PageAlert = ({ as, children }) => (
	<div className={`uikit-page-alerts ${ options[ as ] }`} role='alert'>
		{ children }
	</div>
);

PageAlert.propTypes = {
	as: PropTypes.oneOf([ 'info', 'warning', 'error', 'success' ]),
	children: PropTypes.node.isRequired,
};

export default PageAlert;
