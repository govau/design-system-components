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
 * @param  {object}   item             - The link list item
 * @param  {string}   item.link        - The link URL, optional
 * @param  {string}   item.text        - The link Text
 * @param  {function} item.onClick     - An onClick event, optional
 * @param  {function} item.className   - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUlinkListItem = ({ item, ...attributeOptions }) => {

	if( typeof item.onClick === 'function' ) {
		attributeOptions.onClick = item.onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !item.link ) {
			item.link = '#';
		}
	}

	return (
		<li className={ item.className }>
			{ item.link === undefined
				? ( item.text )
				: ( <a href={ item.link } { ...attributeOptions }>{ item.text }</a> )
			}
		</li>
	);
};

AUlinkListItem.propTypes = {
	item: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}),
};


/**
 * DEFAULT
 * The Link List component
 *
 * @param  {boolean} inverted         - Inverted option, optional
 * @param  {array}   items            - All items inside the link list to be passed to AUlinkListItem, format: { link: '', text: '', onClick: () }
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUlinkList = ({ inline, items, ...attributeOptions }) => (
	<ul className={ `au-link-list${ inline ? ' au-link-list--inline' : '' }` } { ...attributeOptions }>
		{ items.map( ( item, i ) => <AUlinkListItem key={ i } item={ item } /> ) }
	</ul>
);

AUlinkList.propTypes = {
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default AUlinkList;
