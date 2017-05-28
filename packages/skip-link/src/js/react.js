/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * skip-link function
 *
 * Provide skip links to navigation and content.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * DEFAULT
 * The skip-link component
 *
 * @param  {array} links - The links, format: { url: '', text: '' }
 */
const SkipLink = ({ links }) => (
	<nav className="uikit-skip-link">
		{ links.map( ( link, i ) => <a key={ i } className="uikit-skip-link__link" href={ link.url }>{ link.text }</a> ) }
	</nav>
);

SkipLink.propTypes = {
	links: PropTypes.array.isRequired,
};

export default SkipLink;
