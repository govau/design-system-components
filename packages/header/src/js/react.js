/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * The header brand component
 *
 * @param  {string}   title            - The title of the header
 * @param  {string}   level            - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}   subline          - An optional subline, optional
 * @param  {string}   brandImage       - An optional brand image, optional
 * @param  {string}   brandImageAlt    - Brand image alt tag
 * @param  {string}   link             - An optional link for the header brand, optional
 * @param  {node}     children         - The inside of this section
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUheaderBrand = ({
	title,
	level,
	subline,
	brandImage,
	brandImageAlt,
	link,
	children,
	className = '',
	...attributeOptions
}) => {
	const HeadingTag = `h${ level }`;

	let BrandTag = 'div';
	if( link !== undefined ) {
		BrandTag = 'a';
		attributeOptions.href = link;
	}

	let brand = brandImage
		? <img className="au-header__brand-image" alt={ brandImageAlt } src={ brandImage } />
		: null;

	return (
		<BrandTag className={ `au-header__brand ${ className }` } { ...attributeOptions }>
			{ brand }
			{
				title || subline
					?
						<div className="au-header__text">
							{
								title
									? <HeadingTag className="au-header__heading" children={ title } />
									: null
							}
							{
								subline
									? <div className="au-header__subline" children={ subline } />
									: null
							}
							{ children }
						</div>
					: ''
			}

		</BrandTag>
	);
}

AUheaderBrand.propTypes = {
	title: PropTypes.node,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]),
	subline: PropTypes.node,
	link: PropTypes.string,
	brandImage: PropTypes.string,
	brandImageAlt: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
}

AUheaderBrand.defaultProps = {
	level: '1',
	brandImageAlt: 'Australian Government Crest',
};


/**
 * DEFAULT
 * The header component
 *
 * @param  {boolean}  hero             - The hero option, optional
 * @param  {boolean}  dark             - Add the dark variation class, optional
 * @param  {boolean}  alt              - Add the alt variation class, optional
 * @param  {node}     children         - The inside of this section
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
const AUheader = ({ hero, dark, alt, children, className = '', ...attributeOptions }) => (
	<div
		className={`au-header ${ className }${ hero ? ' au-header--hero' : '' }${ dark ? ' au-header--dark' : '' }${ alt ? ' au-header--alt' : '' }`}
		role="banner" { ...attributeOptions }>
		{ children }
	</div>
);

AUheader.propTypes = {
	hero: PropTypes.bool,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
};

export default AUheader;
