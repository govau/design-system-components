/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * DEFAULT
 * The header component
 *
 * @param  {string}  title   - The title of the header
 * @param  {string}  subline - An optional subline
 * @param  {boolean} hero    - The hero option
 * @param  {string}  theme   - Optional theme that can be either: light dark
 */
const Header = ({ title, subline, hero, theme }) => {
	const themes = {
		light: 'uikit-header--light',
		dark: 'uikit-header--dark',
	};

	return (
		<header className={`uikit-header${ hero ? ' uikit-header--hero' : '' }${ theme ? ` ${ themes[ theme ] }` : '' }`} role="banner">
			<h1 className="uikit-header-heading">{ title }</h1>
			{ subline && <span className="uikit-header-subline">{ subline }</span> }
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subline: PropTypes.string,
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	hero: PropTypes.bool,
};

export default Header;
