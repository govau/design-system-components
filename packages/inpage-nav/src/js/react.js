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


/**
 * The inpage-nav component
 *
 * @param  {string} title    - The title of the content link block, default: Contents
 * @param  {array}  sections - An array of objects of all sections, sample: { link: '', title: '' }
 */
export const InpageNavLinks = ({ title, sections }) => (
	<nav className="uikit-inpage-nav-links">
		<h2 className="uikit-inpage-nav-links__heading uikit-display-2">{ title }</h2>
		<ul className="uikit-link-list">
			{ sections.map( ( section, i ) => <li key={ i }><a href={ `#${ section.link }` }>{ section.title }</a></li> ) }
		</ul>
	</nav>
);

InpageNavLinks.propTypes = {
	title: PropTypes.string.isRequired,
	sections: PropTypes.array.isRequired,
};

InpageNavLinks.defaultProps = {
	title: 'Contents',
};


/**
 * The inpage-nav component
 *
 * @param  {string}   title        - The title of the section
 * @param  {string}   link         - The link to this section
 * @param  {DOM node} children     - The content of the section
 * @param  {string}   level        - The heading level of the h tag
 * @param  {string}   headingClass - Any additional heading classes eg uikit-display-3 etc
 * @param  {string}   sectionLink  - The text for the section link, default: Link to section
 */
export const InpageNavSection = ({ title, link, children, level, headingClass, sectionLink }) => {

	const HeadingTag = `h${ level }`;

	return (
		<div>
			<HeadingTag className={ `uikit-inpage-nav-section ${ headingClass }` }>
				{ title }

				<a id={ link } className="uikit-inpage-nav-section-link" href={ `#${ link }` }>{ sectionLink }</a>
			</HeadingTag>

			{ children }
		</div>
	);
};

InpageNavSection.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	headingClass: PropTypes.string,
	sectionLink: PropTypes.string,
};

InpageNavSection.defaultProps = {
	level: '2',
	sectionLink: 'Link to section',
};
