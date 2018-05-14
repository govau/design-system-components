/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AU from '@gov.au/animate'; // interdependency with our animate lib


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


let IDstart = 0;

class AUaccordion extends React.PureComponent {
	/**
	 * Constructor
	 * Create state and iterate over a unique ID
	 *
	 * @param  {object}  props - The props object
	 */
	constructor( props ) {
		super( props );

		const { header, open, speed, onOpen, afterOpen, onClose, afterClose, dark, className = '', children, ...attributeOptions } = props;

		this.setAriaRoles = this.setAriaRoles.bind( this );
		this.toggleClasses = this.toggleClasses.bind( this );
		this.removeClass = this.removeClass.bind( this );
		this.addClass = this.addClass.bind( this );
		this.accordionToggle = this.accordionToggle.bind( this );
		this.accordionOpen = this.accordionOpen.bind( this );
		this.accordionClose = this.accordionClose.bind( this );
		this.toggle = this.toggle.bind( this );
		this.className = className;
		this.attributeOptions = attributeOptions;

		// Generate a unique ID and our css class
		IDstart ++;

		this.ID = `accordion${ IDstart }`;
		this.closeClass = this.props.open ? '' : 'au-accordion--closed';
	}


	/**
	 * Handle state if supplied
	 */
	componentWillReceiveProps( nextProps ) {
		const open = nextProps.open;

		if( open ) {
			this.accordionOpen( this.accordionHeader );
		}
		else {
			this.accordionClose( this.accordionHeader );
		}
	}


	/**
	 * Set the correct Aria roles for given element on the accordion title and body
	 *
	 * @param  {object} element  - The DOM element we want to set attributes for
	 * @param  {object} target   - The DOM element we want to set attributes for
	 * @param  {string} state    - The DOM element we want to set attributes for
	 */
	setAriaRoles( element, target, state ) {

		if( state === 'closing' ) {
			target.setAttribute( 'aria-hidden', true );
			element.setAttribute( 'aria-expanded', false );
			element.setAttribute( 'aria-selected', false );
		}
		else {
			target.setAttribute( 'aria-hidden', false );
			element.setAttribute( 'aria-expanded', true );
			element.setAttribute( 'aria-selected', true );
		}
	}


	/**
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {object} element       - The DOM element we want to toggle classes on
	 * @param  {object} target        - The DOM element we want to toggle classes on
	 * @param  {object} state         - The current state of the animation on the element
	 * @param  {string} openingClass  - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass  - The secondClass you want to toggle on the DOM node
	 */
	toggleClasses( element, state, openingClass, closingClass ) {

		if( state === 'opening' || state === 'open' ) {
			var oldClass = openingClass || 'au-accordion--closed';
			var newClass = closingClass || 'au-accordion--open';
		}
		else {
			var oldClass = closingClass || 'au-accordion--open';
			var newClass = openingClass || 'au-accordion--closed';
		}

		this.removeClass( element, oldClass );
		this.addClass( element, newClass );
	}


	/**
	 * IE8 compatible function for removing a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be removed
	 */
	removeClass( element, className ) {
		if( element.classList ) {
			element.classList.remove( className );
		}
		else {
			element.className = element.className.replace( new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " " );
		}
	}


	/**
	 * IE8 compatible function for adding a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be added
	 */
	addClass( element, className ) {
		if( element.classList ) {
			element.classList.add( className );
		}
		else {
			element.className = element.className + " " + className;
		}
	}


	/**
	 * Toggle an accordion element
	 *
	 * @param  {string}  elements  - The DOM node/s to toggle
	 * @param  {integer} speed     - The speed in ms for the animation
	 * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
	 *
	 */
	accordionToggle( elements, speed, callbacks ) {

		const SetAriaRoles = this.setAriaRoles;
		const ToggleClasses = this.toggleClasses;

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		// making sure we can iterate over just one DOM element
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// check this once
		if( typeof callbacks != 'object' ) {
			callbacks = {};
		}

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls');
			var target = document.getElementById( targetId );

			if( target == null ) {
				throw new Error('AU.animate.Toggle cannot find the target to be toggled from inside aria-controls');
			}

			target.style.display = 'block';

			(function( element ) {
				AU.animate.Toggle({
					element: target,
					property: 'height',
					speed: speed || 250,
					prefunction: function( target, state ) {
						if( state === 'opening' ) {
							target.style.display = 'block';

							// run when opening
							if( typeof callbacks.onOpen === 'function' ) {
								callbacks.onOpen();
							}
						}
						else {
							// run when closing
							if( typeof callbacks.onClose === 'function' ) {
								callbacks.onClose();
							}
						}

						SetAriaRoles( element, target, state );
						ToggleClasses( element, state );
					},
					postfunction: function( target, state ) {
						if( state === 'closed' ) {
							target.style.display = '';

							// run after opening
							if( typeof callbacks.afterOpen === 'function' ) {
								callbacks.afterClose();
							}
						}
						else {

							// run after closing
							if( typeof callbacks.afterClose === 'function' ) {
								callbacks.afterOpen();
							}
						}

						ToggleClasses( target, state );
					},
				});
			})( element );

		}

		return false;

	}


	/**
	 * Open a group of accordion elements
	 *
	 * @param  {string}  elements  - The DOM node/s to toggle
	 * @param  {integer} speed     - The speed in ms for the animation
	 *
	 */
	accordionOpen( elements, speed ) {

		const ToggleClasses = this.toggleClasses;

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls');
			var target = document.getElementById( targetId );

			// let’s find out if this accordion is still closed
			var height = 0;
			if( typeof getComputedStyle !== 'undefined' ) {
				height = window.getComputedStyle( target ).height;
			}
			else {
				height = target.currentStyle.height;
			}

			if( parseInt( height ) === 0 ) {
				target.style.height = '0px';
			}

			target.style.display = '';
			this.toggleClasses( target, 'opening' );
			this.toggleClasses( element, 'opening' );
			this.setAriaRoles( element, target, 'opening' );

			(function( target, speed, element ) {
				AU.animate.Run({
					element: target,
					property: 'height',
					endSize: 'auto',
					speed: speed || 250,
					callback: function() {
						ToggleClasses( element, 'opening' );
					},
				});
			})( target, speed, element );
		}

	}


	/**
	 * Close a group of accordion elements
	 *
	 * @param  {string}  elements  - The DOM node/s to toggle
	 * @param  {integer} speed     - The speed in ms for the animation
	 *
	 */
	accordionClose( elements, speed ) {

		const ToggleClasses = this.toggleClasses;

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls');
			var target = document.getElementById( targetId );

			this.toggleClasses( element, 'closing' );
			this.setAriaRoles( element, target, 'closing' );

			(function( target, speed ) {
				AU.animate.Run({
					element: target,
					property: 'height',
					endSize: 0,
					speed: speed || 250,
					callback: function() {
						target.style.display = 'none';
						ToggleClasses( target, 'close' );
					},
				});
			})( target, speed );
		}

	}


	/**
	 * Toggle an accordion on click
	 *
	 * @param  {event object} event - The event object of the click
	 */
	toggle( event ) {
		event.preventDefault();

		this.accordionToggle( this.accordionHeader, this.props.speed, {
			onOpen: this.props.onOpen,
			afterOpen: this.props.afterOpen,
			onClose: this.props.onClose,
			afterClose: this.props.afterClose,
		});
	}


	render() {
		return (
			<div className={ `au-accordion ${ this.className }${ this.props.dark ? ' au-accordion--dark' : '' }` } { ...this.attributeOptions }>
				<a href={`#${ this.ID }`}
					className={`au-accordion__title js-au-accordion ${ this.closeClass }`}
					aria-controls={ this.ID }
					aria-expanded={ this.props.open }
					aria-selected={ this.props.open }
					role="tab"
					ref={ accordionHeader => { this.accordionHeader = accordionHeader } }
					onClick={ ( event ) => this.toggle( event ) }>
						{ this.props.header }
				</a>

				<div
					className={`au-accordion__body ${ this.closeClass }`}
					id={ this.ID }
					aria-hidden={ this.props.open ? 'false' : 'true' }>
					<div className="au-accordion__body-wrapper">

						{ this.props.children }

					</div>
				</div>
			</div>
		);
	}
};

AUaccordion.propTypes = {
	children: PropTypes.node.isRequired,
	header: PropTypes.string.isRequired,
	open: PropTypes.bool,
	speed: PropTypes.number,
	dark: PropTypes.bool,
	onOpen: PropTypes.func,
	afterOpen: PropTypes.func,
	onClose: PropTypes.func,
	afterClose: PropTypes.func,
	className: PropTypes.string,
};

AUaccordion.defaultProps = {
	open: false,
};

export default AUaccordion;
