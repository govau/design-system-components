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

// import AUlinkList from '@gov.au/link-list';
// import AUlinkList from '../../../../pancake/react/link-list';
import AUlinkList from "../../../pancake/react/link-list";

// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  label            - The aria label of the component
 * @param  {array}   items            - Items inside the breadcrumbs passed on to AUlinkList
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUbreadcrumbs = ({ dark, label, items, linkComponent, className = '', ...attributeOptions }) => (
	<nav
		className={ `au-breadcrumbs ${ className }${ dark ? ' au-breadcrumbs--dark' : '' }` }
		aria-label={ label }
		{ ...attributeOptions }
	>
		<AUlinkList inline linkComponent={ linkComponent } items={ items } />
	</nav>
);

AUbreadcrumbs.propTypes = {
	/**
	 * A dark variation of the component.
	 */
	dark: PropTypes.bool,
	/**
	 * Provide the aria label.
	 */
	label: PropTypes.string.isRequired,
	/**
	 * The link, text and props for each of the breadcrumbs.
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	/**
	 * The component used for the child links, optional.
	 */
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

AUbreadcrumbs.defaultProps = {
	linkComponent: 'a',
	items: [
		{
			link: 'breadcrumb/one/',
			text: 'breadcrumb 1',
		}
	],
	label: 'Breadcrumb for this page'
};

export default AUbreadcrumbs;
