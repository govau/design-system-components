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
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to AUlinkListItem, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
const AUlinkList = ({ inline, items, linkComponent, className = '', ...attributeOptions }) => (
	<ul className={ `au-link-list ${ className }${ inline ? ' au-link-list--inline' : '' }` } { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <AUlinkListItem linkComponent={ linkComponent } key={ i } { ...item } />
			)
		}
	</ul>
);

AUlinkList.propTypes = {
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.node.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

AUlinkList.defaultProps = {
	linkComponent: "a",
};


export default AUlinkList;
