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
 * TODO
 * @param {*} param0
 */
export const AUtag = ({ link, type, dark, text, linkComponent, className, ...attributeOptions }) => {

	let TagContainer = 'span';
	let LinkComponent = linkComponent;

	if( LinkComponent === 'a' ) {
		attributeOptions.href = link;
	}
	// If we are using a link component
	else if( typeof LinkComponent === 'function' ) {
		attributeOptions.to = link;
	}


	return (
		link ?
				<LinkComponent className={`au-tag ${ dark ? 'au-tag--dark' : ''} ${className}`} { ...attributeOptions }>{ text }</LinkComponent>
			:
			<TagContainer {...attributeOptions} className={`au-tag ${ dark ? 'au-tag--dark' : ''} ${className}`}>
				{text}
			</TagContainer>
	)
}


AUtag.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	li: PropTypes.object,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUtag.defaultProps = {
	linkComponent: 'a',
	className: ''
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
const AUtagList = ({ dark, linkComponent, tags, className = '', ...attributeOptions }) => (
	<ul className={ `au-tag-list ${ className }` } { ...attributeOptions }>
		{
			tags.map(
				( tag, i ) => <li key={i}><AUtag dark={dark} linkComponent={ linkComponent } { ...tag } /></li>
			)
		}
	</ul>
);

AUtagList.propTypes = {
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

AUtagList.defaultProps = {
	linkComponent: 'a',
	dark: false
};

export default AUtagList;
