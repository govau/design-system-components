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

		if ( endSize == 'auto' && direction == 'height' ) {
			el.style.height = 'auto';
			var endSize = el.clientHeight;
			el.style.height = initialSize;
		}
		else if ( endSize == 'auto' && direction == 'width' ) {
			el.style.width = 'auto';
			var endSize = el.clientWidth;
			el.style.width = initialSize;
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
		var intervalTime = ( speed / distance );    // the time each setInterval iteration will take
		var stepSize = 1;                           // the size of each step in pixels
		var steps = distance / stepSize             // the amount of steps required to achieve animation
		intervalTime = speed / steps;
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
	 * @param  {object} el            - Element/s we are animating
	 * @param  {integer} initialSize  - The initial size of the element
	 * @param  {integer} stepSize     - The amount of pixels the element needs to move for each setInterval
	 * @param  {integer} intervalTime - The time taken for each iteration of setInterval
	 *
	 */

	function animate( el, endSize, initialSize, direction, stepSize, steps, intervalTime ) {

		 UIKIT.openclose.animation = setInterval ( function() {

			 //check if the element is opening or closing
			 if (endSize > initialSize) {
				 var iterateCounter = initialSize += stepSize;
				 el.UIKITtoggleState = 'opening'
			 }
			 else if (endSize < initialSize){
				 var iterateCounter = initialSize -= stepSize;
				 el.UIKITtoggleState = 'closing'
			 }

			 //check if the element is modifying height or width
			 if (direction == 'height') {
				 var iterateSize = el.style.height = initialSize + 'px';
			 }
			 else {
				 var iterateSize = el.style.width = initialSize + 'px';
			 }

			 // we dont run function if dropwdown is already closed or opened
			 if ( initialSize == endSize ) {
				 clearInterval(UIKIT.openclose.animation);
			 }
			 else if ( steps == 0 && direction == 'width' ) {
				 el.style.width = endSize + 'px';
				 clearInterval(UIKIT.openclose.animation);
			 }
			 else if ( steps == 0 && direction == 'height' ) {
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
	 * @param  {string} direction   - The direction of the animation (either height or width)
	 * @param  {integer} speed      - The speed of the animation in ms
	 * @param  {function} callback  - The callback to run after the animation has completed
	 *
	 */

	openclose.close = function (el, closeSize, direction, speed, callback) {
		clearInterval(UIKIT.openclose.animation);

		var initialSize = getInitialSize ( el, direction, closeSize )
		var animationSpecs = calculateAnimationSteps (initialSize.initialSize, closeSize, speed)

		animate( el, closeSize, initialSize.initialSize, direction, animationSpecs.stepSize, animationSpecs.steps, animationSpecs.intervalTime )

		if (callback) {
			callback();
		}
	};

	openclose.open = function (el, openSize, direction, speed, callback) {
		clearInterval(UIKIT.openclose.animation);

		var initialSize = getInitialSize (el, direction, openSize )
		var animationSpecs = calculateAnimationSteps (initialSize.initialSize, initialSize.endSize, speed)
		animate( el, initialSize.endSize, initialSize.initialSize, direction, animationSpecs.stepSize, animationSpecs.steps, animationSpecs.intervalTime )

		if (callback) {
			callback();
		}
	};

	openclose.toggle = function (el, closeSize, openSize, direction, speed, callback) {
		clearInterval(UIKIT.openclose.animation);

		var initialSize = getInitialSize ( el, direction, openSize )
		console.log(initialSize)
		//check if accordion is open or closed
		if ( initialSize.initialSize == closeSize ) {
			//get the specs we need to open the element
			var animationSpecs = calculateAnimationSteps (initialSize.initialSize, initialSize.endSize, speed)
			var endSize = initialSize.endSize
		}
		else if ( initialSize.initialSize == initialSize.endSize ) {
			//get the specs we need to close the element
			var animationSpecs = calculateAnimationSteps (initialSize.initialSize, closeSize, speed)
			console.log(animationSpecs)
			var endSize = closeSize
		}
		else {
			if ( el.UIKITtoggleState == 'opening' ) {
				// we should start to close
				var animationSpecs = calculateAnimationSteps (initialSize.initialSize, closeSize, speed)
				var endSize = closeSize
			}
			else if ( el.UIKITtoggleState == 'closing' ) {
				// we should start to open
				var animationSpecs = calculateAnimationSteps (initialSize.initialSize, initialSize.endSize, speed)
				var endSize = initialSize.endSize
			}
			else {
				console.log('Uhoh: Something went wrong with UIKIT.openclose.toggle animation')
			}
		}

		//console.log('toggle state: '+el.UIKITtoggleStateState)
		animate( el, endSize, initialSize.initialSize, direction, animationSpecs.stepSize, animationSpecs.steps, animationSpecs.intervalTime )

		if (callback) {
			callback();
		}
	};

	UIKIT.openclose = openclose;

}(UIKIT));
