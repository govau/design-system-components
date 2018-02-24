/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * tags function
 *
 * Use tags to apply a taxonomy and link to similar content.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * A tag item inside the AUtags component
 *
 * @param  {string}  link             - The link for this tag, optional
 * @param  {string}  text             - The text for the tag
 * @param  {object}  li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUtagItem = ({ link, text, li = {}, ...attributeOptions }) => (
	<li { ...li }>
		{
			link
				? <a href={ link } { ...attributeOptions }>{ text }</a>
				: <span { ...attributeOptions }>{ text }</span>
		}
	</li>
);

AUtagItem.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	li: PropTypes.object,
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
const AUtags = ({ dark, tags, className = '', ...attributeOptions }) => (
	<ul className={ `au-tags ${ className } ${ dark ? 'au-tags--dark' : '' }` } { ...attributeOptions }>
		{
			tags.map(
				( tag, i ) => <AUtagItem key={ i } { ...tag } />
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
};

export default AUtags;
