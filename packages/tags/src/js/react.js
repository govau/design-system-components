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
 * @param  {object}   tag              - The tag object
 * @param  {string}   tag.link         - The link for this tag, optional
 * @param  {string}   tag.text         - The text for the tag
 * @param  {function} tag.onClick      - An onClick event, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
const AUtagItem = ({ tag, ...attributeOptions }) => {

	if( typeof tag.onClick === 'function' ) {
		attributeOptions.onClick = tag.onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !tag.link ) {
			tag.link = '#';
		}
	}

	return (
		<li className="au-tags__item">
			{ tag.link
				? <a href={ tag.link } { ...attributeOptions }>{ tag.text }</a>
				: tag.text
			}
		</li>
	);
};

AUtagItem.propTypes = {
	tag: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}).isRequired,
};


/**
 * DEFAULT
 * The tags component
 *
 * @param  {string} dark             - Add the dark variation class
 * @param  {array}  tags             - The tags, format: { link: '', text: '', onClick: () }
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUtags = ({ dark, tags, ...attributeOptions }) => (
	<ul className={ `au-tags ${ dark ? 'au-tags--dark' : '' }` }>
		{ tags.map( ( tag, i ) => <AUtagItem key={ i } tag={ tag } /> ) }
	</ul>
);

AUtags.propTypes = {
	dark: PropTypes.bool,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};


export default AUtags;
