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
 * Page alert info
 *
 * @param  {string} options.children - Anything inside the component
 */
export const PageAlertInfo = ( { children } ) => {
	return (
		<div className='uikit-page-alerts uikit-page-alerts--info' role='alert'>
			{ children }
		</div>
	);
};

PageAlertInfo.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * Page alert warning
 *
 * @param  {string} options.children - Anything inside the component
 */
export const PageAlertWarning = ( { children } ) => {
	return (
		<div className='uikit-page-alerts uikit-page-alerts--warning' role='alert'>
			{ children }
		</div>
	);
};

PageAlertWarning.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * Page alert error
 *
 * @param  {string} options.children - Anything inside the component
 */
export const PageAlertError = ( { children } ) => {
	return (
		<div className='uikit-page-alerts uikit-page-alerts--error' role='alert'>
			{ children }
		</div>
	);
};

PageAlertError.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * Page alert success
 *
 * @param  {string} options.children - Anything inside the component
 */
export const PageAlertSuccess = ( { children } ) => {
	return (
		<div className='uikit-page-alerts uikit-page-alerts--success' role='alert'>
			{ children }
		</div>
	);
};

PageAlertSuccess.propTypes = {
	children: PropTypes.node.isRequired,
};

