/***************************************************************************************************************************************************************
 *
 * Open Close function
 *
 * A function to open, close and toggle the display of page elements.
 *
 **************************************************************************************************************************************************************/

var UIKIT = UIKIT || {};

( function( UIKIT ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var openclose = {}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Calculate the requirements for the desired animation
	 *
	 * @param  {integer} initalSize - The initial size of the element to animate
	 * @param  {string}  speed      - The speed of the animation in ms
	 * @param  {integer} endSize    - The size the element after the animation completes
	 *
	 * @return {object}             - Required steps, stepSize and intervalTime for the animation
	 */
	function CalculateAnimationSpecs( initialSize, endSize, speed ) {
		var distance = endSize - initialSize; // the overall distance the animation needs to travel
		var intervalTime = ( speed / distance ); // the time each setInterval iteration will take
		var stepSize = 1;                        // the size of each step in pixels
		var steps = distance / stepSize;         // the amount of steps required to achieve animation

		intervalTime = speed / steps;

		// we need to adjust our animation specs if interval time exceeds 60FPS eg intervalTime < 16.67ms
		if( intervalTime < ( 50 / 3 ) ) {
			stepSize = Math.round( ( 50 / 3 ) / intervalTime );

			// if number of steps required is not a whole number
			if( ( ( initialSize - endSize ) / stepSize ) % 1 != 0) {
				steps = Math.floor( distance / stepSize );
				intervalTime = speed / steps;
			}
		}

		return {
			stepSize: stepSize,
			steps: ( steps - 1 ),
			intervalTime: intervalTime,
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
	openclose.CalculateAuto = function( element, dimension ) {
		var initialSize;
		var endSize;

		if( dimension === 'height' ) {
			initialSize = element.clientHeight;       // get current height
			element.style[ dimension ] = 'auto';      // set height to auto
			endSize = element.clientHeight;           // get height again
			element.style[ dimension ] = initialSize; // set back to initial height
		}
		else {
			initialSize = element.clientWidth;
			element.style[ dimension ] = 'auto';
			endSize = element.clientWidth;
			element.style[ dimension ] = initialSize;
		}

		return parseInt( endSize );
	}


	/**
	 * Stop any uikit animation on a DOM element
	 *
	 * @param  {object} element - The element to stop animating
	 */
	openclose.Stop = function ( element ) {
		clearInterval( element.UIKITanimation );
	}


	/**
	 * The magical animation function
	 *
	 * @param  {object}   element  - Element/s we are animating
	 * @param  {string}   property - The property to animate
	 * @param  {integer}  endSize  - The size the element should animate to
	 * @param  {integer}  speed    - The speed of the animation
	 * @param  {function} callback - A function to be executed after the animation ends
	 *
	 * @return {unknown}           - The return passed on from our callback function [optional]
	 */
	openclose.Animate = function( options ) {
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
			openclose.Stop( elements[ i ] ); // stop any previous animations

			var element = elements[ i ];                                                         // this element
			var initialSize = parseInt( window.getComputedStyle( element )[ options.property ] ) // the elements current size
			// TODO element.currentStyle for IE?
			var endSize = options.endSize;                                                       // the element end size

			if( options.endSize === 'auto' ) {                                                   // calculate what 'auto' means in pixel
				endSize = openclose.CalculateAuto( element, options.property );
			}

			// calculate our animation specs
			var animationSpecs = CalculateAnimationSpecs( initialSize, endSize, speed );
			var steps = animationSpecs.steps;
			var iterateCounter = initialSize;

			// keep track of animation by adding it to the DOM element
			element.UIKITanimation = setInterval( function() {
				iterateCounter += animationSpecs.stepSize;

				element.style[ options.property ] = iterateCounter + 'px';

				// when we are at the end
				if( initialSize === endSize || steps === 0 ) {
					openclose.Stop( element );

					element.style[ options.property ] = endSize + 'px'; //set to endSize

					elements[ 0 ].UIKITinteration ++;

					// when all iterations have finished, run the callback
					if( elements[ 0 ].UIKITinteration >= elements[ 0 ].UIKITinterations ) {
						return options.callback();
					}
				}

				// if we are still animating
				else {
					steps --;
				}

			}, animationSpecs.intervalTime );
		}
	};


	/**
	 * Toggle animation
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} closeSize   - The direction of the animation (either height or width)
	 * @param  {string} dimension   - The dimension the animation moves in (either height or width)
	 * @param  {integer} speed      - The speed of the animation in ms
	 * @param  {function} callback  - The callback to run after the animation has completed
	 *
	 */
	openclose.Toggle = function( options ) {

		//( el, dimension, speed, callback )

		var el = options.element;
		var dimension = options.dimension || 'height';
		var callback = options.callback;
		var speed = options.speed || 250;

		// how we handle if user defines callback but no speed
		if(typeof speed === 'function') {
			callback = speed;
			speed = undefined;
		}

		var closeSize = 0;
		var openSize = 'auto';


		// todo!
		// refactor function params to be object
		// how does it work if paddings and heights are specified on css?

		// make element iteratable if it is a single element
		if( el.length === undefined ) {
			el = [ el ];
		}

		//adding iteration counts
		el[ 0 ].UIKITinteration = 0;
		el[ 0 ].UIKITinterations = el.length;

		//iterate over all DOM nodes
		for(var i = 0; i < el.length; i++) {
			var element = el[ i ];

			clearInterval( element.UIKITanimation );

			var openSize = openSize || 'auto';
			var elementSize = CalculateElementSize( element, dimension, openSize );
			var targetSize; // the size the element should open/close to after toggle is clicked

			// check the state of the element and determine whether the element should close or open

			// is the accordion closed?
			if( elementSize.initialSize === 0 ) {
				targetSize = elementSize.endSize;
			}
			// is the accordion open?
			else if( elementSize.initialSize === elementSize.endSize ) {
				targetSize = closeSize;
				elementSize.endSize = 0;
			}
			// is the accordion opening?
			else if( element.UIKITtoggleState === 'opening' ) {
				targetSize = 0;
				elementSize.endSize = 0;
			}
			// is the accordion closing?
			else if( element.UIKITtoggleState === 'closing' ) {
				targetSize = elementSize.endSize;
			}
			else {
				throw new Error('Uhoh: Something went wrong with UIKIT.openclose.toggle() animation');
			}

			var animationSpecs = CalculateAnimationSpecs (elementSize.initialSize, targetSize, speed)

			animate(
				element,
				elementSize,
				dimension,
				animationSpecs.stepSize,
				animationSpecs.steps,
				animationSpecs.intervalTime,
				callback,
				el[ 0 ]
			);

		}
	};


	UIKIT.openclose = openclose;

}( UIKIT ));
