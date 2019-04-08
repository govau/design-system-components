/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * tags function
 *
 * Use tags to apply a taxonomy and link to similar content.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * A tag item inside the AUtags component
 *
 * @param  {string}  link             - The link for this tag, optional
 * @param  {string}  text             - The text for the tag
 * @param  {object}  li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUtagItem = ({ link, linkComponent, text, li = {}, ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	if( link ){
		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		}
		// If we are using a link component
		else if( typeof LinkComponent === 'function' ) {
			attributeOptions.to = link;
		}
	}

	return (
		<li { ...li }>
			{
				link
					? <LinkComponent { ...attributeOptions }>{ text }</LinkComponent>
					: <span { ...attributeOptions }>{ text }</span>
			}
		</li>
	)
};


AUtagItem.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	li: PropTypes.object,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUtagItem.defaultProps = {
	linkComponent: 'a',
};


/**
 * DEFAULT
 * The tags component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   tags             - The tags, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUtags = ({ dark, linkComponent, tags, className = '', ...attributeOptions }) => (
	<ul className={ `au-tags ${ className } ${ dark ? 'au-tags--dark' : '' }` } { ...attributeOptions }>
		{
			tags.map(
				( tag, i ) => <AUtagItem linkComponent={ linkComponent } key={ i } { ...tag } />
			)
		}
	</ul>
);

AUtags.propTypes = {
	dark: PropTypes.bool,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	className: PropTypes.string,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUtags.defaultProps = {
	linkComponent: 'a',
};

export default AUtags;
