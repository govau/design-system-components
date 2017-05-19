/*! @gov.au/page-alerts v0.1.1 */
/***************************************************************************************************************************************************************
 *
 * Page alert function
 *
 * Use page alert to notify and alert users of important application events.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Page alert
 *
 * @param  {string} options.variant     - The variation of the alert (optional) { null, 'info', 'success', 'warning', 'error' }
 * @param  {string} options.children    - Anything inside the component
 */

const PageAlert = ( { variant = null, children } ) => {

	let classes = classNames({
		'uikit-page-alerts': true,
		[`uikit-page-alerts--${variant}`]: variant,
	});

	return (
		<section className={ classes } role='alert'>
			{ children }
		</section>
	)

};

PageAlert.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf([null, 'info', 'success', 'warning', 'error']),
};

export default PageAlert
