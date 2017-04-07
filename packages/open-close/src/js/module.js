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
	 * Calculate the size of the element when it's dimension(height or width) is set to auto
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} dimension   - The dimenstion the animation moves in (either height or width)
	 *
	 * @return {integer}            - the size of the element when at dimension(height or width)='auto'
	 */
	function calculateAuto( el, dimension ) {

		var initialSize;
		var endSize;

		if ( dimension === 'height' ) {
			initialSize = el.clientHeight;
			el.style[ dimension ] = 'auto';
			endSize = el.clientHeight;
			el.style[ dimension ] = initialSize;
		}
		else {
			initialSize = el.clientWidth;
			el.style[ dimension ] = 'auto';
			endSize = el.clientWidth;
			el.style[ dimension ] = initialSize;
		}

		return parseInt( endSize );
	}


	/**
	 * Get inital size of element to animate
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} dimension   - The dimenstion the animation moves in (either height or width)
	 *
	 * @return {object}             - initial and end sizes of the element to animate
	 */

	function getInitialSize ( el, dimension, endSize ) {

		var initialSize;

		// validate the dimension argument
		if (dimension === 'height') {
			initialSize = el.clientHeight;
		}
		else if (dimension === 'width') {
			initialSize = el.clientWidth;
		}
		else {
			throw new Error('Dimension argument on UIKIT.openclose can only be "height" or "width"');
		}

		// 1. we may need to calculate the size of the elements at 'auto'
		if ( endSize === 'auto' ) {
			var endSize = calculateAuto( el, dimension );
		}
		// 2. if not simply use the integer from endSize
		else {
			var endSize = endSize;
		}

		return {
			initialSize: parseInt( initialSize ),
			endSize: parseInt( endSize ),
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
	function calculateAnimationSpecs ( initialSize, endSize, speed ) {

		var distance = Math.abs( initialSize - endSize )  // the overall distance the animation needs to travel
		var intervalTime = ( speed / distance );          // the time each setInterval iteration will take
		var stepSize = 1;                                 // the size of each step in pixels
		var steps = distance / stepSize                   // the amount of steps required to achieve animation
		intervalTime = speed / steps;

		// we need to adjust our animation specs if iterval time exceeds 60FPS eg intervalTime < 16.67ms
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
	 * The magical animation function
	 *
	 * @param  {object} el            - Element/s we are animating
	 * @param  {integer} endSize      - The size the element should animate to
	 * @param  {integer} initialSize  - The initial size of the element
	 * @param  {integer} dimesnion    - The dimenstion the animation moves in (either height or width)
	 * @param  {integer} stepSize     - The amount of pixels the element needs to move for each setInterval
	 * @param  {integer} steps        - The amount of steps the element needs to take
	 * @param  {integer} intervalTime - The time taken for each iteration of setInterval in milliseconds
	 *
	 */

	function animate( el, endSize, initialSize, dimension, stepSize, steps, intervalTime ) {

		 UIKIT.openclose.animation = setInterval ( function() {

			 var iterateCounter; // this variable will hold the current size of the element
			 var iterateSize;    // this variable will hold the the

			// check the current animation state of the element
			if (endSize > initialSize) {
				iterateCounter = initialSize += stepSize;
				el.UIKITtoggleState = 'opening';
			}
			else if (endSize < initialSize) {
				iterateCounter = initialSize -= stepSize;
				el.UIKITtoggleState = 'closing';
			}
			else {
				el.UIKITtoggleState = undefined;
			}

			// check if the element is modifying height or width
			if (dimension === 'height') {
				iterateSize = el.style.height = initialSize + 'px';
			}
			else {
				iterateSize = el.style.width = initialSize + 'px';
			}

			 // we dont run function if dropwdown is already closed or opened
			 if ( initialSize === endSize ) {
				 clearInterval(UIKIT.openclose.animation);
			 }
			 else if ( steps === 0 && dimension == 'width' ) {
				 el.style.width = endSize + 'px';
				 clearInterval(UIKIT.openclose.animation);
			 }
			 else if ( steps === 0 && dimension == 'height' ) {
				 el.style.height = endSize + 'px';
				 clearInterval(UIKIT.openclose.animation);
			 }
			 else {
				 iterateCounter
				 iterateSize
				 steps--
			 }

		 }, intervalTime )

	}


	/**
	 * Close animation
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} closeSize   - The direction of the animation (either height or width)
	 * @param  {string} dimension   - The dimenstion the animation moves in (either height or width)
	 * @param  {integer} speed      - The speed of the animation in ms
	 * @param  {function} callback  - The callback to run after the animation has completed
	 *
	 */

	openclose.close = function (el, closeSize, dimension, speed, callback) {
		clearInterval(UIKIT.openclose.animation);

		var initialSize = getInitialSize ( el, dimension, closeSize )
		var animationSpecs = calculateAnimationSpecs (initialSize.initialSize, closeSize, speed)

		animate( el, closeSize, initialSize.initialSize, dimension, animationSpecs.stepSize, animationSpecs.steps, animationSpecs.intervalTime )

		if (typeof callback === 'function') {
			callback();
		}
	};


	/**
	 * Open animation
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} closeSize   - The direction of the animation (either height or width)
	 * @param  {string} dimension   - The dimenstion the animation moves in (either height or width)
	 * @param  {integer} speed      - The speed of the animation in ms
	 * @param  {function} callback  - The callback to run after the animation has completed
	 *
	 */
	openclose.open = function (el, openSize, dimension, speed, callback) {
		clearInterval(UIKIT.openclose.animation);

		var initialSize = getInitialSize (el, dimension, openSize )
		var animationSpecs = calculateAnimationSpecs (initialSize.initialSize, initialSize.endSize, speed)
		animate( el, initialSize.endSize, initialSize.initialSize, dimension, animationSpecs.stepSize, animationSpecs.steps, animationSpecs.intervalTime )

		if (typeof callback === 'function') {
			callback();
		}
	};


	/**
	 * Toggle animation
	 *
	 * @param  {object} el          - The element to animate
	 * @param  {string} closeSize   - The direction of the animation (either height or width)
	 * @param  {string} dimension   - The dimenstion the animation moves in (either height or width)
	 * @param  {integer} speed      - The speed of the animation in ms
	 * @param  {function} callback  - The callback to run after the animation has completed
	 *
	 */
	openclose.toggle = function(el, closeSize, openSize, dimension, speed, callback) {
		clearInterval(UIKIT.openclose.animation);

		var closeSize = parseInt( closeSize ) || 0;
		var openSize = openSize || 'auto';
		var initialSize = getInitialSize( el, dimension, openSize );
		var targetSize; // the size the element should open/close to after toggle is clicked

		// check the state of the element and determine whether the element should close or open

		// is the accordion closed?
		if ( initialSize.initialSize === parseInt( closeSize ) ) {
			targetSize = initialSize.endSize;
		}
		// is the accordion open?
		else if ( initialSize.initialSize === initialSize.endSize ) {
			targetSize = closeSize;
		}
		// is the accordion opening?
		else if ( el.UIKITtoggleState === 'opening' ) {
			targetSize = closeSize;
		}
		// is the accordion closing?
		else if ( el.UIKITtoggleState === 'closing' ) {
			targetSize = initialSize.endSize;
		}
		else {
			throw new Error('Uhoh: Something went wrong with UIKIT.openclose.toggle animation');
		}

		var animationSpecs = calculateAnimationSpecs (initialSize.initialSize, targetSize, speed)

		animate( el, targetSize, initialSize.initialSize, dimension, animationSpecs.stepSize, animationSpecs.steps, animationSpecs.intervalTime )

		if (typeof callback === 'function') {
			callback();
		}
	};

	UIKIT.openclose = openclose;

}( UIKIT ));
