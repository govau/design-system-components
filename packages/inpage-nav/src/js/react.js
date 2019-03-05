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
 * The section component for the AUinpageNavLinks component
 *
 * @param  {object} link             - The link of this section
 * @param  {object} title            - The title of the section
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUinpageNavLinksItem = ({ link, title, li = {}, ...attributeOptions }) => (
	<li { ...li }>
		<a href={ `#${ link }` } { ...attributeOptions }>{ title }</a>
	</li>
);

AUinpageNavLinksItem.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	li: PropTypes.object,
};


/**
 * The inpage-nav component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  title            - The title of the content link block, default: Contents
 * @param  {array}   sections         - An array of objects of all sections, sample: { link: '', title: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  ariaLabel        - The aria-label attribute, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUinpageNavLinks = ({ dark, title, sections, ariaLabel, className = '', ...attributeOptions }) => (
	<nav className={ `au-inpage-nav-links ${ className }${ dark ? ' au-inpage-nav-links--dark' : '' }` } ariaLabel={ ariaLabel } { ...attributeOptions }>
		<h2 className="au-inpage-nav-links__heading au-display-sm">{ title }</h2>

		<ul className="au-link-list">
			{ sections.map( ( section, i ) => <AUinpageNavLinksItem key={ i } { ...section } /> ) }
		</ul>
	</nav>
);

AUinpageNavLinks.propTypes = {
	dark: PropTypes.bool,
	title: PropTypes.string.isRequired,
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	className: PropTypes.string,
};

AUinpageNavLinks.defaultProps = {
	title: 'Contents',
	ariaLabel: 'in page navigation',
};


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
