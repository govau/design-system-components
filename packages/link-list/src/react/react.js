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
 * @param  {node}   text             - The link Text or link html
 * @param  {string} link             - The link URL, optional
 * @param  {string} linkComponent    - The component used for the link
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} attributeOptions - Any other attribute options, optional
 */
export const AUlinkListItem = ({ text, link, linkComponent, li = {}, children, ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	// If there is no link provided and an onClick function
	if( typeof onClick === 'function' ) {
		attributeOptions.onClick = onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !link ) {
			link = '#';
		}
	}

	// If we are using a normal link
	if( LinkComponent === 'a' ) {
		attributeOptions.href = link;
	}
	// If we are using a link component
	else if( typeof LinkComponent === 'function' ) {
		attributeOptions.to = link;
	}

	if( link ){
		return (
			<li { ...li }>
				<LinkComponent { ...attributeOptions }>{ text }</LinkComponent>
				{ children }
			</li>
		)
	}

	return ( <li { ...li }>{ text }{ children }</li> );
};

AUlinkListItem.propTypes = {
	text: PropTypes.node.isRequired,
	link: PropTypes.string,
	li: PropTypes.object,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

AUlinkListItem.defaultProps = {
	linkComponent: "a",
};


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
