/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * mainNav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


const AUmainNav = ({ dark, alt, className, ariaLabel, children, ...attributeOptions }) => (
	<nav
		className={
			'au-main-nav ' +
			`${ dark ? ' au-main-nav--dark' : '' }` +
			`${ alt ? ' au-main-nav--alt' : '' }` +
			`${ className ? ' ' + className : '' }`
		}
		aria-label = { ariaLabel }
		{ ...attributeOptions }
	>
		{ children }
	</nav>
);

AUmainNav.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	ariaLabel: PropTypes.string,
	children: PropTypes.node.isRequired,
};

AUmainNav.defaultProps = {
	ariaLabel: 'main',
};

export default AUmainNav;
