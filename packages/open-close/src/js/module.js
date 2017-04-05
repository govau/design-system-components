/***************************************************************************************************************************************************************
 *
 * Open Close function
 *
 * A function to open, close and toggle the display of page elements.
 *
 **************************************************************************************************************************************************************/

var UIKIT = UIKIT || {};

( function( UIKIT ) {

	var openclose = {
		animation: {},
	}

	/**
	 * Get inital size of element to animate
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} direction   - The direction of the animation (either height or width)
	 *
	 * @return {object}             - initial and end sizes of the element to animate
	 */

	function getInitialSize ( el, direction, endSize ) {
		if (direction == 'height') {
			var initialSize = el.clientHeight; // the start height of the element to animate
		}
		else if (direction == 'width') {
			var initialSize = el.clientWidth; // the start width of the element to animate
		} else {
			throw new Error('Direction argument on UIKIT.openclose can only be "height" or "width"');
		}

		if ( endSize == 'auto' ) {
			el.style.height = 'auto';
			var endSize = el.clientHeight;
			el.style.height = initialSize;
		}
		else {
			var endSize = endSize;
		}

		return {
			initialSize: initialSize,
			endSize: endSize,
		}
	}

	/**
	 * Calculate the requiremnts for the desired animation
	 *
	 * @param  {integer} initalSize   - The initial size of the element to animate
	 * @param  {string} speed         - The speed of the animation in ms
	 * @param  {integer} endSize      - The size (height or width) the element should open or close to
	 *
	 * @return {object}               - Required steps, stepSize and intervalTime for the animation
	 */
	function calculateAnimationSteps ( initialSize, endSize, speed ) {

		var distance = Math.abs( initialSize - endSize )
		var intervalTime = ( speed / distance );  // the time each setInterval iteration will take
		var stepSize = 1;                           // the size of each step in pixels
		var steps = distance / stepSize             // the amount of steps required to achieve animation

		//if iterval time exceeds 60FPS eg intervalTime < 16.67ms
		if (intervalTime < (50/3)) {
			stepSize = Math.round( (50/3) / intervalTime );

			// if number of steps required is not a whole number
			if ( ( ( initialSize - endSize ) / stepSize ) % 1 != 0) {
				steps = Math.floor( distance / stepSize )
				intervalTime = speed / steps;
			}
		}

		return {
			stepSize: stepSize,
			steps: steps,
			intervalTime: intervalTime,
		}
	}


	/**
	 * Animation
	 *
	 * @param  {object} el            - Element we are animating
	 * @param  {integer} initialSize  - The initial size of the element
	 * @param  {integer} stepSize     - The amount of pixels the element needs to move for each setInterval
	 * @param  {integer} intervalTime - The time taken for each iteration of setInterval
	 *
	 */
	function animateClose( el, closeSize, initialSize, direction, stepSize, intervalTime ) {

		var runAnimate = setInterval ( function() {

			if ( initialSize == closeSize ) {
				clearInterval(runAnimate);
			}
			else if ( initialSize < closeSize ) {
				el.style.height = closeSize;
				clearInterval(runAnimate);
			}
			else {
				initialSize -= stepSize;
				el.style.height = initialSize + 'px';
			}

		}, intervalTime )

	}

	function animateOpen( el, openSize, initialSize, direction, stepSize, intervalTime ) {

		var runAnimate = setInterval ( function() {
			if ( initialSize == openSize ) {
				clearInterval(runAnimate);
			}
			else if ( initialSize > openSize ) {
				el.style.height = openSize;
				clearInterval(runAnimate);
			}
			else {
				initialSize += stepSize;
				el.style.height = initialSize + 'px';
			}

		}, intervalTime )

	}


	/**
	 * Close animation
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} direction   - The direction of the animation (either height or width)
	 * @param  {integer} speed      - The speed of the animation in ms
	 * @param  {function} callback  - The callback to run after the animation has completed
	 *
	 */

	openclose.close = function (el, closeSize, direction, speed, callback) {

		var initialSize = getInitialSize ( el, direction )
		var animationSpecs = calculateAnimationSteps (initialSize.initialSize, closeSize, speed)
		//console.log(animationSpecs)
		UIKIT.openclose.animation = animateClose( el, closeSize, initialSize.initialSize, direction, animationSpecs.stepSize, animationSpecs.intervalTime )

		if (callback) {
			callback();
		}
	};

	openclose.open = function (el, openSize, direction, speed, callback) {
		var initialSize = getInitialSize (el, direction, openSize )
		var animationSpecs = calculateAnimationSteps (initialSize.initialSize, initialSize.endSize, speed)
		UIKIT.openclose.animation = animateOpen( el, initialSize.endSize, initialSize.initialSize, direction, animationSpecs.stepSize, animationSpecs.intervalTime )

		if (callback) {
			callback();
		}
	};

	openclose.toggle = function (event) {
	};

	UIKIT.openclose = openclose;

}(UIKIT));
