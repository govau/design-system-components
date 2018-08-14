/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Animate function
 *
 * A function to open, close and toggle the display of page elements.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

( function( AU ) {

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
		var steps = Math.abs( distance / stepSize ); // the amount of steps required to get to endSize
		intervalTime = speed / steps;

		// we need to adjust our animation specs if interval time exceeds 60FPS eg intervalTime < 16.67ms
		if( Math.abs( intervalTime ) < ( 1000 / 60 ) ) {
			intervalTime = ( 1000 / 60 );                          // let’s not get lower that 60FPS
			steps = Math.ceil( Math.abs( speed / intervalTime ) ); // we now need the steps and make sure we ceil them so -1 won't make them negative
			stepSize = distance / steps;                           // last thing is step sizes which are derived from all of the above
		}

		return {
			stepSize: stepSize,
			steps: ( steps - 1 ),
			intervalTime: intervalTime,
		};
	}

	// export for node and babel environments
	if( typeof module !== 'undefined' ) {
		animate.CalculateAnimationSpecs = CalculateAnimationSpecs;
	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Getting computed CSS styles from normal browsers and IE
	 *
	 * @param {object} element  - The DOM element we want to get the computed style from
	 * @param {string} property - The CSS property
	 *
	 * @return {string|integer} - The CSS value for the property
	 */
	animate.GetCSSPropertyBecauseIE = function( element, property ) {
		if( typeof getComputedStyle !== 'undefined' ) {
			return window.getComputedStyle( element )[ property ];
		}
		else {
			var space = element.currentStyle[ property ];

			if( space === 'auto' ) {
				space = AU.animate.CalculateAuto( element, property );
			}

			return space;
		}
	};


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
	};


	/**
	 * Stop any au animation on a DOM element
	 *
	 * @param  {object} element - The element to stop animating
	 */
	animate.Stop = function ( element ) {
		clearInterval( element.AUanimation );
	};


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
		elements[ 0 ].AUinteration = 0;
		elements[ 0 ].AUinterations = elements.length;

		// iterate over all DOM nodes
		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];                                                                   // this element
			AU.animate.Stop( element );                                                                    // stop any previous animations
			var initialSize = parseInt( AU.animate.GetCSSPropertyBecauseIE( element, options.property ) ); // the elements current size
			var endSize = options.endSize;                                                                 // the element end size

			if( options.endSize === 'auto' ) {                                                             // calculate what 'auto' means in pixel
				endSize = AU.animate.CalculateAuto( element, options.property );
			}

			// calculate our animation specs
			var animationSpecs = CalculateAnimationSpecs( initialSize, endSize, speed );
			var iterateCounter = initialSize;

			// set state
			if( animationSpecs.stepSize < 0 ) {
				element.AUtoggleState = 'closing';
			}
			else if( animationSpecs.stepSize > 0 ) {
				element.AUtoggleState = 'opening';
			}

			// scoping variable
			(function( element, initialSize, iterateCounter, animationSpecs, endSize ) {
				// keep track of animation by adding it to the DOM element
				element.AUanimation = setInterval( function() {

					// when we are at the end
					if( initialSize === endSize || animationSpecs.steps === 0 ) {
						AU.animate.Stop( element );

						element.style[ options.property ] = endSize + 'px'; // set to endSize
						element.AUtoggleState = '';

						elements[ 0 ].AUinteration ++;

						// removing auto so CSS can take over
						if( options.endSize === 'auto' ) {
							element.style[ options.property ] = '';
						}

						// when all iterations have finished, run the callback
						if( elements[ 0 ].AUinteration >= elements[ 0 ].AUinterations ) {
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
	 * @param  {object}         options              - The options for the animation
	 * @param  {object}         options.element      - Element/s we are animating (DOM nodes)
	 * @param  {string}         options.property     - The CSS property to animate [optional] [default: 'height']
	 * @param  {integer|string} options.closeSize    - The size the element should close to. Can be 'auto' or pixel value [optional] [default: 0]
	 * @param  {integer|string} options.openSize     - The size the element should open to. Can be 'auto' or pixel value [optional] [default: 'auto']
	 * @param  {integer}        options.speed        - The speed of the animation in milliseconds [optional] [default: 250]
	 * @param  {function}       options.prefunction  - A function to be executed before each animation starts, passes {object} element, {string} state [optional]
	 * @param  {function}       options.postfunction - A function to be executed after each animation ends, passes {object} element, {string} state [optional]
	 * @param  {function}       options.callback     - A function to be executed after the animation ends, passes {object} element, {string} state [optional]
	 *
	 * @return {unknown}                             - The return value passed on from our options.callback function [optional]
	 */
	animate.Toggle = function( options ) {

		var elements = options.element;
		var property = options.property || 'height';
		var speed = options.speed || 250;
		var closeSize = options.closeSize === 'undefined' ? 0 : options.closeSize;
		var openSize = options.openSize === 'undefined' ? 'auto' : options.openSize;

		// making a single DOM element iteratable
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// making a prefunction if none was provided
		if( typeof options.prefunction !== 'function' ) {
			options.prefunction = function() {};
		}

		// making a postfunction if none was provided
		if( typeof options.postfunction !== 'function' ) {
			options.postfunction = function() {};
		}

		// making a callback if none was provided
		if( typeof options.callback !== 'function' ) {
			options.callback = function() {};
		}

		// adding iteration counts
		elements[ 0 ].AUtoggleInteration = 0;
		elements[ 0 ].AUtoggleInterations = elements.length;

		// iterate over all DOM nodes
		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];

			AU.animate.Stop( element );

			var targetSize;     // the size the element should open/close to after toggle is clicked
			var preState = '';  // the state we animate to for the prefunction and callback functions
			var postState = ''; // the state we animate to for the prefunction and callback functions
			var currentSize = parseInt( AU.animate.GetCSSPropertyBecauseIE( element, options.property ) ); // the current size of the element

			if( currentSize === closeSize || element.AUtoggleState === 'closing' ) {
				targetSize = openSize;
				preState = 'opening';
				postState = 'open';
			}
			else if( currentSize !== closeSize || element.AUtoggleState === 'opening' ) {
				targetSize = closeSize;
				preState = 'closing';
				postState = 'closed';
			}
			else {
				throw new Error('AU.animate.Toggle cannot determine state of element');
			}

			// run prefunction once per element
			options.prefunction( element, preState );

			// shoot off animation
			AU.animate.Run({
				element: element,
				endSize: targetSize,
				property: property,
				speed: speed,
				callback: function() { // making sure we fire the callback only once
					elements[ 0 ].AUtoggleInteration ++;

					if( elements[ 0 ].AUtoggleInteration === elements[ 0 ].AUinterations ) {
						var returnParam = options.callback( element, postState );

						// run postfunction once per element
						options.postfunction( element, postState );

						return returnParam;
					}

					// run postfunction once per element
					options.postfunction( element, postState );
				},
			});

		}
	};


	AU.animate = animate;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}


if( typeof exports !== 'undefined' ) {
	Object.defineProperty( exports, "__esModule", { value: true } );

	eval('exports.default = AU');
}
