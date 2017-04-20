const UIKIT = require('../../lib/js/module.js');

test('UIKIT.animate.CalculateAnimationSpecs should calculate correct animation values', () => {

	// normal animation speeds and distances
	expect( UIKIT.animate.CalculateAnimationSpecs( 54, 0, 1000 )).toMatchObject( { "intervalTime": 18.51851851851852, "stepSize": -1, "steps": 53, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 54, 1000 )).toMatchObject( { "intervalTime": 18.51851851851852, "stepSize": 1, "steps": 53, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 20, 0, 250 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": -1.3333333333333333, "steps": 14, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 412, 0, 250 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": -27.466666666666665, "steps": 14, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 50, 200, 250 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": 10, "steps": 14, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 200, 50, 250 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": -10, "steps": 14, } );

	// really long/slow animations
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 500, 10000 )).toMatchObject( { "intervalTime": 20, "stepSize": 1, "steps": 499, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 9, 0, 12365 )).toMatchObject( { "intervalTime": 1373.888888888889, "stepSize": -1, "steps": 8, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 107, 1341, 9000 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": 2.285185185185185, "steps": 539, } );

	// really quick/short animations
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 10, 80 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": 2, "steps": 4, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 769, 0, 100 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": -128.16666666666666, "steps": 5, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 23, 32, 50 )).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": 3, "steps": 2, } );
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 3, 6 ) ).toMatchObject( { "intervalTime": 16.666666666666668, "stepSize": 3, "steps": 0, } );

	// no animation
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 0, 100 )).toMatchObject( { "intervalTime": 0, "stepSize": 0, "steps": 0, } );
});


test('UIKIT.animate.CalculateAnimationSpecs should only return whole number for steps', () => {

	expect.extend({
		toBeWholeNumber( received ) {

			return {
				message: () => (
					`expected ${ received.steps } to be a whole number`
				),
				pass: Math.round( received.steps ) === received.steps,
			};
		},
	});

	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 0, 250, ) ).toBeWholeNumber();

	Array.from( Array( 50 ), ( _, i ) => i ++ ).forEach( iteration => {
		expect( UIKIT.animate.CalculateAnimationSpecs( (2.1425*iteration), (100.921833*iteration), (20.9178187*iteration) ) ).toBeWholeNumber();
	});

});
