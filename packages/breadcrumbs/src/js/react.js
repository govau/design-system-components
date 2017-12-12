/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * breadcrumbs function
 *
 * Breadcrumbs help users understand where they are in the service and how they got there.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import LinkList from '@gov.au/link-list';
// ES6 dependency: import LinkList from './link-list';


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
 * @param  {array}  items            - Items inside the breadcrumbs passed on to LinkList
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUbreadcrumbs = ({ dark, label, items, ...attributeOptions }) => (
	<nav
		className={ `au-breadcrumbs${ dark ? ' au-breadcrumbs--dark' : '' }` }
		aria-label={ label }
		{ ...attributeOptions }
	>
		<LinkList inline items={ items } />
	</nav>
);


AUbreadcrumbs.propTypes = {
	dark: PropTypes.bool,
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};


export default AUbreadcrumbs;
