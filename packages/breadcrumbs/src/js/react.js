/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * breadcrumbs function
 *
 * Breadcrumbs help users understand where they are in the service and how they got there.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {string} dark             - Add the dark variation class
 * @param  {string} label            - The aria label of the component
 * @param  {array}  items            - Items inside the breadcrumbs passed on to AUlinkList
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUbreadcrumbs = ({ dark, label, items, className = '', ...attributeOptions }) => (
	<nav
		className={ `au-breadcrumbs ${ className }${ dark ? ' au-breadcrumbs--dark' : '' }` }
		aria-label={ label }
		{ ...attributeOptions }
	>
		<AUlinkList inline items={ items } />
	</nav>
);

AUbreadcrumbs.propTypes = {
	dark: PropTypes.bool,
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default AUbreadcrumbs;
