/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Animate function
 *
 * A function to open, close and toggle the display of page elements.
 *
 **************************************************************************************************************************************************************/

var UIKIT = UIKIT || {};

( function( UIKIT ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var animate = {}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * Calculate the requirements for the desired animation
	 *
	 * @param  {integer} initialSize - The initial size of the element to animate
	 * @param  {integer} endSize     - The size the element after the animation completes
	 * @param  {string}  speed       - The speed of the animation in ms
	 *
	 * @return {object}              - Required steps, stepSize and intervalTime for the animation
	 */
	function CalculateAnimationSpecs( initialSize, endSize, speed ) {

		if( initialSize === endSize ) {
			return {
				stepSize: 0,
				steps: 0,
				intervalTime: 0,
			};
		}

		var distance = endSize - initialSize;        // the overall distance the animation needs to travel
		var intervalTime = ( speed / distance );     // the time each setInterval iteration will take
		var stepSize = distance < 0 ? -1 : 1;        // if distance is negative then we set stepSize to -1
		var steps = Math.abs( distance / stepSize ); // the amount of steps required to achieve animation
		intervalTime = speed / steps;

		// we need to adjust our animation specs if interval time exceeds 60FPS eg intervalTime < 16.67ms
		if( Math.abs( intervalTime ) < ( 50 / 3 ) ) {
			stepSize = Math.round( ( 50 / 3 ) / intervalTime );
			steps = Math.abs( Math.floor( distance / stepSize ) );
			stepSize = distance < 0 ? -stepSize : stepSize;
			intervalTime = speed / steps;
		}

		return {
			stepSize: stepSize,
			steps: ( steps - 1 ), //TODO small distance with long time
			intervalTime: intervalTime,
		};
	}


	/**
	 * PRIVATE
	 * Getting computed CSS styles from normal browsers and IE
	 *
	 * @param {object} element  - The DOM element we want to get the computed style from
	 * @param {string} property - The CSS property
	 *
	 * @return {string|integer} - The CSS value for the property
	 */
	function GetCSSPropertyBecauseIE( element, property ) {
		if( typeof getComputedStyle !== 'undefined' ) {
			return window.getComputedStyle( element )[ property ];
		}
		else {
			var space = element.currentStyle[ property ];

			if( space === 'auto' ) {
				space = UIKIT.animate.CalculateAuto( element, property );
			}

			return space;
		}
	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Calculate the size of the element when it’s dimension(height or width) is set to auto
	 *
	 * @param  {object} element   - The element to read auto height from
	 * @param  {string} dimension - The dimension to measure
	 *
	 * @return {integer}          - The size of the element when at dimension(height or width) is set to 'auto'
	 */
	animate.CalculateAuto = function( element, dimension ) {
		var initialSize;
		var endSize;

		if( dimension === 'height' ) {
			initialSize = element.clientHeight;              // get current height
			element.style[ dimension ] = 'auto';             // set height to auto
			endSize = element.clientHeight;                  // get height again
			element.style[ dimension ] = initialSize + 'px'; // set back to initial height
		}
		else {
			initialSize = element.clientWidth;
			element.style[ dimension ] = 'auto';
			endSize = element.clientWidth;
			element.style[ dimension ] = initialSize + 'px';
		}

		return parseInt( endSize );
	}


	/**
	 * Stop any uikit animation on a DOM element
	 *
	 * @param  {object} element - The element to stop animating
	 */
	animate.Stop = function ( element ) {
		clearInterval( element.UIKITanimation );
	}


	/**
	 * The magical animation function
	 *
	 * @param  {object}         options          - The options for the animation
	 * @param  {object}         options.element  - Element/s we are animating (DOM nodes)
	 * @param  {string}         options.property - The CSS property to animate
	 * @param  {integer|string} options.endSize  - The size the element should animate to. Can be 'auto' or pixel value
	 * @param  {integer}        options.speed    - The speed of the animation in milliseconds [optional] [default: 250]
	 * @param  {function}       options.callback - A function to be executed after the animation ends [optional]
	 *
	 * @return {unknown}                         - The return value passed on from our options.callback function [optional]
	 */
	animate.Run = function( options ) {
		// defaults
		var elements = options.element;
		var speed = options.speed || 250;

		// making a single DOM element iteratable
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// making a callback if none was provided
		if( typeof options.callback !== 'function' ) {
			options.callback = function() {};
		}

		// adding iteration counts
		elements[ 0 ].UIKITinteration = 0;
		elements[ 0 ].UIKITinterations = elements.length;

		// iterate over all DOM nodes
		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];                                                        // this element
			UIKIT.animate.Stop( element );                                                      // stop any previous animations
			var initialSize = parseInt( GetCSSPropertyBecauseIE( element, options.property ) ); // the elements current size

			var endSize = options.endSize;                                                      // the element end size

			if( options.endSize === 'auto' ) {                                                  // calculate what 'auto' means in pixel
				endSize = UIKIT.animate.CalculateAuto( element, options.property );
			}

			// calculate our animation specs
			var animationSpecs = CalculateAnimationSpecs( initialSize, endSize, speed );
			var iterateCounter = initialSize;

			// set state
			if( animationSpecs.stepSize < 0 ) {
				element.UIKITtoggleState = 'closing';
			}
			else if( animationSpecs.stepSize > 0 ) {
				element.UIKITtoggleState = 'opening';
			}

			// scoping variable
			(function( element, initialSize, iterateCounter, animationSpecs, endSize ) {
				// keep track of animation by adding it to the DOM element
				element.UIKITanimation = setInterval( function() {

					// when we are at the end
					if( initialSize === endSize || animationSpecs.steps === 0 ) {
						UIKIT.animate.Stop( element );

						element.style[ options.property ] = endSize + 'px'; // set to endSize
						element.UIKITtoggleState = '';

						elements[ 0 ].UIKITinteration ++;

						// removing auto so CSS can take over
						if( options.endSize === 'auto' ) {
							element.style[ options.property ] = '';
						}

						// when all iterations have finished, run the callback
						if( elements[ 0 ].UIKITinteration >= elements[ 0 ].UIKITinterations ) {
							return options.callback();
						}
					}

					// if we are still animating
					else {
						iterateCounter += animationSpecs.stepSize;
						element.style[ options.property ] = iterateCounter + 'px';

						animationSpecs.steps --;
					}

				}, Math.abs( animationSpecs.intervalTime ) );
			})( element, initialSize, iterateCounter, animationSpecs, endSize );
		}
	};


	/**
	 * Toggle animation
	 *
	 * @param  {object}         options           - The options for the animation
	 * @param  {object}         options.element   - Element/s we are animating (DOM nodes)
	 * @param  {string}         options.property  - The CSS property to animate [optional] [default: 'height']
	 * @param  {integer|string} options.closeSize - The size the element should close to. Can be 'auto' or pixel value [optional] [default: 0]
	 * @param  {integer|string} options.openSize  - The size the element should open to. Can be 'auto' or pixel value [optional] [default: 'auto']
	 * @param  {integer}        options.speed     - The speed of the animation in milliseconds [optional] [default: 250]
	 * @param  {function}       options.callback  - A function to be executed after the animation ends [optional]
	 *
	 * @return {unknown}                          - The return value passed on from our options.callback function [optional]
	 */
	animate.Toggle = function( options ) {

		var elements = options.element;
		var property = options.property || 'height';
		var speed = options.speed || 250;
		var closeSize = options.closeSize || 0;
		var openSize = options.openSize || 'auto'

		// making a single DOM element iteratable
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// making a callback if none was provided
		if( typeof options.callback !== 'function' ) {
			options.callback = function() {};
		}

		// adding iteration counts
		elements[ 0 ].UIKITtoggleInteration = 0;
		elements[ 0 ].UIKITtoggleInterations = elements.length;

		// iterate over all DOM nodes
		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];

			UIKIT.animate.Stop( element );

			var targetSize;                                                                   // the size the element should open/close to after toggle is clicked
			var currentSize = parseInt( GetCSSPropertyBecauseIE( element, options.property ) ); // the current size of the element

			if( currentSize === closeSize || element.UIKITtoggleState === 'closing' ) {
				targetSize = openSize;
			}
			else if( currentSize !== closeSize || element.UIKITtoggleState === 'opening' ) {
				targetSize = closeSize;
			}
			else {
				throw new Error('UIKIT.animate.Toggle cannot determine state of element');
			}

			// shoot off animation
			UIKIT.animate.Run({
				element: element,
				endSize: targetSize,
				property: property,
				speed: speed,
				callback: function() { // making sure we fire the callback only once
					elements[ 0 ].UIKITtoggleInteration ++;

					if( elements[ 0 ].UIKITtoggleInteration === elements[ 0 ].UIKITinterations ) {
						return options.callback();
					}
				},
			});

		}
	};


	UIKIT.animate = animate;

}( UIKIT ));


if( typeof window.module !== 'undefined' ) {
	module.exports = UIKIT;
}
