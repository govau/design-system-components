/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * mainNav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


export const AUmainNavContet = ({ menu }) => (
	<Fragment>
		<button
			aria-controls="main-nav-default"
			class="au-main-nav__toggle au-main-nav__toggle--menu">
			Menu
		</button>
		<div class="au-main-nav__content">
			<div class="au-main-nav__content-inner">
				<div class="au-main-nav__focus-trap-top"></div>
				<button
					aria-controls="main-nav-default"
					class="au-main-nav__toggle au-main-nav__toggle--close">
					Close
				</button>
				<ul class="au-link-list">
					<li><a href="#">About</a></li>
					<li><a href="#">Get started</a></li>
					<li class="active"><a href="#">Components</a></li>
					<li><a href="#">Templates</a></li>
					<li><a href="#">Community</a></li>
					<li><a href="#">Support</a></li>
					<li><a href="#">Github</a></li>
					<li><a href="#">Download</a></li>
				</ul>
				<div class="au-main-nav__focus-trap-bottom"></div>
			</div>
		</div>
	</Fragment>
);


const AUmainNav = ({ dark, alt, children }) => (
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
		<div class="au-main-nav__overlay"></div>
	</nav>
);

AUmainNav.propTypes = {
	dark: PropTypes.bool
};

AUmainNav.defaultProps = {};

export default AUmainNav;
