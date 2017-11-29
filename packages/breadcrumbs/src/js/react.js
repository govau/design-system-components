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
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	dark: 'au-breadcrumbs--dark',
};


/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {string} theme - The colour theme of the component
 * @param  {string} label - The aria label of the component
 * @param  {array}  items - Items inside the breadcrumbs passed on to LinkList
 */
const Breadcrumbs = ({ theme, label, items }) => (
	<nav className={ `au-breadcrumbs ${ theme ? themes[ theme ] : themes.light }` } aria-label={ label }>
		<LinkList inverted={ theme } inline items={ items } />
	</nav>
);

Breadcrumbs.propTypes = {
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default Breadcrumbs;
