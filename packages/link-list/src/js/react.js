/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * link-lists function
 *
 * A simple list of inline links.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * An item inside the AUlinkList component
 *
 * @param  {string} link             - The link URL, optional
 * @param  {string} text             - The link Text
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} attributeOptions - Any other attribute options, optional
 */
export const AUlinkListItem = ({ text, link, li = {}, ...attributeOptions }) => {

	if( typeof onClick === 'function' ) {
		attributeOptions.onClick = onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !link ) {
			link = '#';
		}
	}

	return (
		<li { ...li }>
			{ link === undefined
				? ( text )
				: ( <a href={ link } { ...attributeOptions }>{ text }</a> )
			}
		</li>
	);
};

AUlinkListItem.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string,
	li: PropTypes.object,
};


/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to AUlinkListItem, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
const AUlinkList = ({ inline, items, className = '', ...attributeOptions }) => (
	<ul className={ `au-link-list ${ className }${ inline ? ' au-link-list--inline' : '' }` } { ...attributeOptions }>
		{ items.map( ( item, i ) => <AUlinkListItem key={ i } { ...item } /> ) }
	</ul>
);

AUlinkList.propTypes = {
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
		).isRequired,
};

export default AUlinkList;
