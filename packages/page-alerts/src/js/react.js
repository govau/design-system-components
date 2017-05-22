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
		<section className='uikit-page-alerts uikit-page-alerts--info' role='alert'>
			{ children }
		</section>
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
		<section className='uikit-page-alerts uikit-page-alerts--warning' role='alert'>
			{ children }
		</section>
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
		<section className='uikit-page-alerts uikit-page-alerts--error' role='alert'>
			{ children }
		</section>
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
		<section className='uikit-page-alerts uikit-page-alerts--success' role='alert'>
			{ children }
		</section>
	);
};

PageAlertSuccess.propTypes = {
	children: PropTypes.node.isRequired,
};

