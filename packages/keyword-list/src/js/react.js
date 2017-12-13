/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * keyword-list function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * An item inside the AUkeywordList component
 *
 * @param  {string}   repeatedName     - The repeated bit in each item
 * @param  {object}   item             - The keyword list item
 * @param  {string}   item.link        - The link URL, optional
 * @param  {string}   item.name        - The name of the item
 * @param  {function} item.onClick     - An onClick event, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUkeywordListItem = ({ repeatedName, item, ...attributeOptions }) => {

	if( typeof item.onClick === 'function' ) {
		attributeOptions.onClick = item.onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !item.link ) {
			item.link = '#';
		}
	}

	return (
		<li className="au-keyword-list__item">
			{ item.link
				? <a href={ item.link } { ...attributeOptions }><small className="au-keyword-list__item__small">{ repeatedName }</small>{ item.name }</a>
				: <span><small className="au-keyword-list__item__small">{ repeatedName }</small>{ item.name }</span>
			}
		</li>
	);
};

AUkeywordListItem.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	item: PropTypes.shape({
		link: PropTypes.string,
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}),
};


/**
 * DEFAULT
 * The keyword-list component
 *
 * @param  {string} repeatedName     - The repeated bit in each item
 * @param  {array}  items            - All items in this list, format: { link: '', name: '', onClick: () }
 * @param  {string} dark             - Add the dark variation class
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUkeywordList = ({ repeatedName, items, dark, ...attributeOptions }) => (
	<ul className={ `au-keyword-list au-link-list${ dark ? ' au-keyword-list--dark' : '' } `} { ...attributeOptions }>
		{ items.map( ( item, i ) => <AUkeywordListItem key={ i } item={ item } repeatedName={ repeatedName } /> ) }
	</ul>
);

AUkeywordList.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			name: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default AUkeywordList;
