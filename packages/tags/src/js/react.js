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
 * A tag item inside the Tags component
 *
 * @param  {object}   tag         - The tag object
 * @param  {string}   tag.link    - The link for this tag, optional
 * @param  {string}   tag.text    - The text for the tag
 * @param  {function} tag.onClick - An onClick event, optional
 */
const TagItem = ({ tag }) => {
	const attributeOptions = {};

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

TagItem.propTypes = {
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
 * @param  {array} tags - The tags, format: { link: '', text: '', onClick: () }
 */
const Tags = ({ tags }) => (
	<ul className="au-tags">
		{ tags.map( ( tag, i ) => <TagItem key={ i } tag={ tag } /> ) }
	</ul>
);

Tags.propTypes = {
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default Tags;
