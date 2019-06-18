/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * direction-links function
 *
 * Use direction links to link up and down within the DOM or back to a parent page.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All direction options
 *
 * @type {Object}
 */
const directions = {
	up: 'au-direction-link__arrow--left',
	right: 'au-direction-link__arrow--right',
	down: 'au-direction-link__arrow--down',
	left: 'au-direction-link__arrow--left',
};


/**
 * DEFAULT
 * The direction-links component
 *
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  link             - The link target, optional
 * @param  {string}  text             - The text of the CTA link
 * @param  {string}  direction        - The direction for the arrow; can be either: up right down left, default: 'right'
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUdirectionLink = ({ linkComponent, dark, link, text, direction, className = '', ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	if( link ) {
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
				className={ `au-direction-link ${ className } ${ dark ? ' au-direction-link--dark' : '' }`}
				{ ...attributeOptions }>
										<AUdirectionArrow direction={directions[ direction ]} text={text} />
			</LinkComponent>
		);
		}
	else {
		return (
			<button className={ `au-direction-link ${ className } ${ dark ? ' au-direction-link--dark' : '' }`}
							{ ...attributeOptions }>
							<AUdirectionArrow direction={directions[direction]} text={text} />
			</button>
		);
	}


};

AUdirectionLink.propTypes = {
	dark: PropTypes.bool,
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	direction: PropTypes.oneOf([ 'up', 'right', 'down', 'left' ]).isRequired,
	className: PropTypes.string,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

AUdirectionLink.defaultProps = {
	direction: 'right',
	linkComponent: 'a',
};

/**
 * The direction arrow component
 * 
 * @param  {string}  text             - The text of the direction link
 * @param  {string}  direction        - The direction for the arrow; can be either: up right down left, default: 'right'
 */
const AUdirectionArrow = ({ direction, text }) => {
	if (direction=== "au-direction-link__arrow--left") {
		return (
			 <React.Fragment><span className={ `au-direction-link__arrow ${ direction } `} aria-hidden="true"></span> {text}</React.Fragment>
		)
	}
	else{
		return (
			<React.Fragment>{text} <span className={ `au-direction-link__arrow ${ direction } `} aria-hidden="true"></span></React.Fragment>
		)
	}
};

AUdirectionArrow.propTypes = {
	direction: PropTypes.oneOf([ 'au-direction-link__arrow--up', 'au-direction-link__arrow--down', 'au-direction-link__arrow--left', 'au-direction-link__arrow--right' ]).isRequired,
	text: PropTypes.string.isRequired
}

AUdirectionArrow.defaultProps = {

}

export default AUdirectionLink;
