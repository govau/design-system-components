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
 * @param  {boolean} inverted - The inverted option, optional
 * @param  {string}  label    - The aria label of the component
 * @param  {array}   items    - Items inside the breadcrumbs passed on to LinkList
 */
const Breadcrumbs = ({ inverted, label, items }) => (
	<nav className={ `au-breadcrumbs${ inverted ? ' au-breadcrumbs--inverted' : '' }` } aria-label={ label }>
		<LinkList inverted={ inverted } inline items={ items } />
	</nav>
);

Breadcrumbs.propTypes = {
	inverted: PropTypes.bool,
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
