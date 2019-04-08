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
 * DEFAULT
 * The keyword-list component
 *
 * @param  {string}  repeatedName     - The repeated bit in each item
 * @param  {array}   items            - All items in this list, format: { link: '', name: '', onClick: () }
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUkeywordList = ({ repeatedName, linkComponent, items, dark, className = '', ...attributeOptions }) => (
	<ul className={ `au-keyword-list au-link-list ${ className }${ dark ? ' au-keyword-list--dark' : '' } `} { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <AUkeywordListItem linkComponent={ linkComponent } key={ i } repeatedName={ repeatedName } { ...item } />
			)
		}
	</ul>
);

AUkeywordList.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			name: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	className: PropTypes.string,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};


AUkeywordList.defaultProps = {
	linkComponent: 'a',
};


export default AUkeywordList;
