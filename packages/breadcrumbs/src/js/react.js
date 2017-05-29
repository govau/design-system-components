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

import LinkList from './link-list.js';


/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {boolean} inverted - the inverted option
 * @param  {string}  label    - The aria label of the component
 * @param  {string}  items    - Items inside the breadcrumbs passed on to LinkList
 */
const Breadcrumbs = ({ inverted, label, items }) => (
	<nav className={ `uikit-breadcrumbs${ inverted ? ' uikit-breadcrumbs--inverted' : '' }` } aria-label={ label }>
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
		})
		).isRequired,
};

export default Breadcrumbs;
