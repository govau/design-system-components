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
 * DEFAULT
 * The tags component
 *
 * @param  {array} tags - The tags, format: { link: '', text: '' }
 */
const Tags = ({ tags }) => (
	<ul className="uikit-tags">
		{ tags.map( ( tag, i ) => <li key={ i } className="uikit-tags__item">
			{ tag.link
				? <a href={ tag.link }>{ tag.text }</a>
				: tag.text
			}
		</li> ) }
	</ul>
);

Tags.propTypes = {
	tags: PropTypes.array.isRequired,
};

export default Tags;
