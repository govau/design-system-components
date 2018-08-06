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

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * A menu inside the AUsideNav
 *
 * @param  {array}  items            - The link Text or link html
 */
const AUmainNavMenu = ({ items, linkComponent }) => {
	// Generate the menu
	const GenerateMenu = ( items ) => {
		const menu = items.map( item => {
			const link = {
				link: item.link,
				text: item.text,
			};

			// return the link, maybe with children
			return link;
		});

		return menu;
	}

	// Create the menu with children
	return (
		<AUlinkList items={ GenerateMenu( items ) } linkComponent={ linkComponent } />
	);
}


export const AUmainNavContent = ({ items }) => (
	<Fragment>
		<button
			aria-controls="main-nav-default"
			className="au-main-nav__toggle au-main-nav__toggle--menu">
			Menu
		</button>
		<div className="au-main-nav__content">
			<div className="au-main-nav__content-inner">
				<div className="au-main-nav__focus-trap-top"></div>
				<button
					aria-controls="main-nav-default"
					className="au-main-nav__toggle au-main-nav__toggle--close">
					Close
				</button>
				<AUmainNavMenu items={ items } />
				<div className="au-main-nav__focus-trap-bottom"></div>
			</div>
		</div>
	</Fragment>
);


const AUmainNav = ({ dark, alt, children, className = '' }) => (
	<nav
		className={
			'au-main-nav' +
			`${ dark ? ' au-main-nav--dark ' : '' }` +
			`${ alt ? ' au-main-nav--alt ' : '' }` +
			` ${ className }`
		}
		id="main-nav-default"
	>
		{ children }
		<div className="au-main-nav__overlay"></div>
	</nav>
);

AUmainNav.propTypes = {
	dark: PropTypes.bool
};

AUmainNav.defaultProps = {};

export default AUmainNav;
