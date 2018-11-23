/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

( function( AU ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var accordion = {}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * Set the correct Aria roles for given element on the accordion title and body
	 *
	 * @param  {object} element - The DOM element we want to set attributes for
	 * @param  {object} target  - The DOM element we want to set attributes for
	 * @param  {string} state   - The DOM element we want to set attributes for
	 */
	function setAriaRoles( element, target, state ) {

		if( state === 'closing' ) {
			element.setAttribute( 'aria-expanded', false );
			element.setAttribute( 'aria-selected', false );
		}
		else {
			element.setAttribute( 'aria-expanded', true );
			element.setAttribute( 'aria-selected', true );
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {object} element      - The DOM element we want to toggle classes on
	 * @param  {object} target       - The DOM element we want to toggle classes on
	 * @param  {object} state        - The current state of the animation on the element
	 * @param  {string} openingClass - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass - The secondClass you want to toggle on the DOM node
	 */
	function toggleClasses( element, state, openingClass, closingClass ) {

		if( state === 'opening' || state === 'open' ) {
			var oldClass = openingClass || 'au-accordion--closed';
			var newClass = closingClass || 'au-accordion--open';
		}
		else {
			var oldClass = closingClass || 'au-accordion--open';
			var newClass = openingClass || 'au-accordion--closed';
		}

		removeClass( element, oldClass );
		addClass( element, newClass );
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for removing a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be removed
	 */
	function removeClass( element, className ) {
		if( element.classList ) {
			element.classList.remove( className );
		}
		else {
			element.className = element.className.replace( new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " " );
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for adding a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be added
	 */
	function addClass( element, className ) {
		if( element.classList ) {
			element.classList.add( className );
		}
		else {
			element.className = element.className + " " + className;
		}
	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Toggle an accordion element
	 *
	 * @param  {string}  elements  - The DOM node/s to toggle
	 * @param  {integer} speed     - The speed in ms for the animation
	 * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
	 *
	 */
	accordion.Toggle = function( elements, speed, callbacks ) {

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
				throw new Error(
					'AU.accordion.Toggle cannot find the target to be toggled from inside aria-controls.\n' +
					'Make sure the first argument you give AU.accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points ' +
					'to a div that you want to toggle.'
				);
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

						setAriaRoles( element, target, state );
						toggleClasses( element, state );
					},
					postfunction: function( target, state ) {
						if( state === 'closed' ) {
							// run after closing
							target.style.display = '';
							target.style.height = '';

							if( typeof callbacks.afterClose === 'function' ) {
								callbacks.afterClose();
							}
						}
						else {
							// run after opening
							target.style.display = '';
							target.style.height = '';

							if( typeof callbacks.afterOpen === 'function' ) {
								callbacks.afterOpen();
							}
						}

						toggleClasses( target, state );
					},
				});
			})( element );

		}

		return false;

	}


	/**
	 * Open a group of accordion elements
	 *
	 * @param  {string}  elements - The DOM node/s to toggle
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	accordion.Open = function( elements, speed ) {

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
			toggleClasses( target, 'opening' );
			toggleClasses( element, 'opening' );
			setAriaRoles( element, target, 'opening' );

			(function( target, speed, element ) {
				AU.animate.Run({
					element: target,
					property: 'height',
					endSize: 'auto',
					speed: speed || 250,
					callback: function() {
						toggleClasses( element, 'opening' );
					},
				});
			})( target, speed, element );
		}

	}


	/**
	 * Close a group of accordion elements
	 *
	 * @param  {string}  elements - The DOM node/s to toggle
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	accordion.Close = function( elements, speed ) {

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

			toggleClasses( element, 'closing' );
			setAriaRoles( element, target, 'closing' );

			(function( target, speed ) {
				AU.animate.Run({
					element: target,
					property: 'height',
					endSize: 0,
					speed: speed || 250,
					callback: function() {
						target.style.display = '';
						toggleClasses( target, 'close' );
					},
				});
			})( target, speed );
		}

	}


	AU.accordion = accordion;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
