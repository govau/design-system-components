/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * headings function
 *
 * Class styles for display headings.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * DEFAULT
 * The headings component
 *
 * @param  {string} level - The tag level (<h1/> <h2/> etc)
 * @param  {string} size  - The headings size
 * @param  {string} text  - The heading text
 */
const Header = ({ level, size, text }) => {
	const sizes = [
		'uikit-display-1',
		'uikit-display-2',
		'uikit-display-3',
		'uikit-display-4',
		'uikit-display-5',
		'uikit-display-6',
	];

	if( level === '1' ) {
		return ( <h1 className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</h1> );
	}
	if( level === '2' ) {
		return ( <h2 className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</h2> );
	}
	if( level === '3' ) {
		return ( <h3 className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</h3> );
	}
	if( level === '4' ) {
		return ( <h4 className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</h4> );
	}
	if( level === '5' ) {
		return ( <h5 className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</h5> );
	}
	if( level === '6' ) {
		return ( <h6 className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</h6> );
	}
};

Header.propTypes = {
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	size: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	text: PropTypes.string.isRequired,
};

export default Header;
