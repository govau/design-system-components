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


const AUmainNav = ({ dark, alt, menu, children }) => (
	<nav
		className={
			'au-main-nav' +
			`${ dark ? 'au-main-nav--dark ' : '' }` +
			`${ alt ? 'au-main-nav--alt ' : '' }` +
			`${ className }`
		}
		id="main-nav-default"
	>
		{ children }
		<div class="au-main-nav__overlay" onClick="return AU.mainNav.Close( document.getElementById( 'main-nav-default' ) )"></div>
	</nav>
);

AUmainNav.propTypes = {
	dark: PropTypes.bool
};

AUmainNav.defaultProps = {};

export default AUmainNav;
