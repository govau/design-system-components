/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * buttons function
 *
 * Buttons signal action. Use them to move the user through the service.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
	'primary': '',
	'secondary': 'au-btn--secondary',
	'tertiary': 'au-btn--tertiary',
};


/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}   linkComponent    - The component used for the link
 * @param  {string}   link             - If this is a link the location it goes
 * @param  {string}   children         - Anything inside
 * @param  {string}   as               - The kind of button, can be either 'primary', 'secondary', 'tertiary', default: 'primary'
 * @param  {boolean}  dark             - Add the dark variation class, optional
 * @param  {string}   type             - The type attribute, default: 'button', optional
 * @param  {boolean}  block            - The block option, optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
const AUbutton = ({ linkComponent, link, children, as, dark, type, block, className = '', ...attributeOptions }) => {
	if( link ) {
		const LinkComponent = linkComponent;

		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		}
		// If we are using a link component
		else if( typeof LinkComponent === 'function' ) {
			attributeOptions.to = link;
		}

		return (
			<LinkComponent
				className={ `au-btn ${ className } ${ options[ as ] }${ block ? ' au-btn--block' : '' }${ dark ? ' au-btn--dark' : '' }` }
				{ ...attributeOptions }
			>
				{ children }
			</LinkComponent>
		);
	}
	else {
		return (
			<button
				type={ type }
				className={ `au-btn ${ className } ${ options[ as ] }${ block ? ' au-btn--block' : '' }${ dark ? ' au-btn--dark' : '' }` }
				{ ...attributeOptions }
			>
				{ children }
			</button>
		);
	}
};

AUbutton.propTypes = {
	/**
	 * If an link is set the button will render as a link.
	 */
	link: PropTypes.string,
	/**
	 * Anything inside.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * The kind of button, secondary or tertiary.
	 */
	as: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary' ]).isRequired,
	/**
	 * A dark variation of the component.
	 */
	dark: PropTypes.bool,
	type: PropTypes.string,
	/**
	 * The block option to make the button fill the available width.
	 */
	block: PropTypes.bool,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
	/**
	 * The component used for the link, optional.
	 */
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUbutton.defaultProps = {
	type: 'button',
	as: 'primary',
	linkComponent: 'a',
};

export default AUbutton;
