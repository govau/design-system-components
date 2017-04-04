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
	 * @return {integer}             - initial size of the element to animate
	 */

	function getInitialSize ( el, direction ) {
		if (direction == 'height') {
			var initialSize = el.clientHeight; // the start height of the element to animate
		}
		else if (direction == 'width') {
			var initialSize = el.clientWidth; // the start width of the element to animate
		} else {
			throw new Error('Direction argument on UIKIT.openclose can only be "height" or "width"');
		}

		return initialSize;
	}

	/**
	 * Calculate the requiremnts for the desired animation
	 *
	 * @param  {integer} initalSize   - The initial size of the element to animate
	 * @param  {string} speed         - The speed of the animation in ms
	 *
	 * @return {object}               - Required steps, stepSize and intervalTime for the animation
	 */
	function calculateAnimationSteps ( initialSize, speed ) {

		var intervalTime = (speed / initialSize)/2; // the time each setInterval iteration will take
		var stepSize = 1;                       // the size of each step in pixels
		var steps = initialSize / stepSize      // the amount of steps required to achieve animation

		//if iterval time exceeds 60FPS eg intervalTime < 16.67ms
		if (intervalTime < (50/3)) {
			stepSize = Math.round( (50/3) / intervalTime );

			// if number of steps required is not a whole number
			if ( (initialSize / stepSize) % 1 != 0) {
				steps = Math.floor( initialSize / stepSize )
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
	function animate( el, initialSize, stepSize, intervalTime ) {

		var runAnimate = setInterval ( function() {

			if ( initialSize == 0 ) {
				clearInterval(runAnimate);
			}
			else if ( initialSize < 0 ) {
				el.style.height = 0;
				clearInterval(runAnimate);
			}
			else {
				initialSize -= stepSize;
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

	openclose.close = function (el, direction, speed, callback) {

		var initialSize = getInitialSize (el, direction)
		var animationSpecs = calculateAnimationSteps (initialSize, speed)

		UIKIT.openclose.animation = animate( el, initialSize, animationSpecs.stepSize, animationSpecs.intervalTime )

		if (callback) {
			callback();
		}

	};

	openclose.open = function (el, direction, value, speed, callback) {
	};

	openclose.toggle = function (event) {
	};

	UIKIT.openclose = openclose;

}(UIKIT));
