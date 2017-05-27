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
 * @param  {string}  level   - The tag level (<h1/> <h2/> etc)
 * @param  {string}  subline - An optional subline
 * @param  {boolean} hero    - The hero option
 * @param  {string}  theme   - Optional theme that can be either: light dark
 */
const Header = ({ title, level, subline, hero, theme }) => {
	const themes = {
		light: 'uikit-header--light',
		dark: 'uikit-header--dark',
	};

	const HeadingTag = `h${ level }`;

	return (
		<header className={`uikit-header${ hero ? ' uikit-header--hero' : '' }${ theme ? ` ${ themes[ theme ] }` : '' }`} role="banner">
			<HeadingTag className="uikit-header-heading">{ title }</HeadingTag>
			{ subline && <span className="uikit-header-subline">{ subline }</span> }
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	subline: PropTypes.string,
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	hero: PropTypes.bool,
};

Header.defaultProps = {
	level: '1',
};

export default Header;
