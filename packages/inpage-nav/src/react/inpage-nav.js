/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * inpage-nav function
 *
 * Use inpage-nav links to help users scan and jump to content of a page.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * The inpage-nav component
 *
 * @param  {string}   title            - The title of the section
 * @param  {string}   link             - The link to this section
 * @param  {DOM node} children         - The content of the section, default: '2'
 * @param  {string}   level            - The heading level of the h tag
 * @param  {string}   headingClass     - Any additional heading classes eg 'au-display-sm' etc, optional
 * @param  {string}   sectionLink      - The text for the section link, default: 'Link to section', optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUinpageNavSection = ({ title, link, children, level, headingClass, sectionLink, className = '', ...attributeOptions }) => {

	const HeadingTag = `h${ level }`;

	return (
		<Fragment>
			<HeadingTag className={ `au-inpage-nav-section ${ className }${ headingClass ? ' ' + headingClass : "" }` }>
				{ title }

				<a id={ link } className="au-inpage-nav-section-link" href={ `#${ link }` } { ...attributeOptions }>{ sectionLink }</a>
			</HeadingTag>

			{ children }
		</Fragment>
	);
};

AUinpageNavSection.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	headingClass: PropTypes.string,
	sectionLink: PropTypes.string,
	className: PropTypes.string,
};

AUinpageNavSection.defaultProps = {
	level: '2',
	sectionLink: 'Link to section',
};
