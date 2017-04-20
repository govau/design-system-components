const UIKIT = require('../../lib/js/module.js');

test('UIKIT.animate.CalculateAnimationSpecs should calculate correct animation values', () => {

	const result1 = {
		"intervalTime": 18.51851851851852,
		"stepSize": -1,
		"steps": 53,
	}

	const result2 = {
		"intervalTime": 18.51851851851852,
		"stepSize": 1,
		"steps": 53,
	}

	const result3 = {
		"intervalTime": 16.666666666666668,
		"stepSize": -1.3333333333333333,
		"steps": 14,
	}

	const result4 = {
		"intervalTime": 16.666666666666668,
		"stepSize": -27.466666666666665,
		"steps": 14,
	}

	const result5 = {
		"intervalTime": 16.666666666666668,
		"stepSize": 10,
		"steps": 14,
	}

	const result6 = {
		"intervalTime": 16.666666666666668,
		"stepSize": -10,
		"steps": 14,
	}

	const result7 = {
		"intervalTime": 20,
		"stepSize": 1,
		"steps": 499,
	}

	const result8 = {
		"intervalTime": 1373.888888888889,
		"stepSize": -1,
		"steps": 8,
	}

	const result9 = {
		"intervalTime": 16.666666666666668,
		"stepSize": 2.285185185185185,
		"steps": 539,
	}

	const result10 = {
		"intervalTime": 16.666666666666668,
		"stepSize": 2,
		"steps": 4,
	}

	const result11 = {
		"intervalTime": 16.666666666666668,
		"stepSize": -128.16666666666666,
		"steps": 5,
	}

	const result12 = {
		"intervalTime": 16.666666666666668,
		"stepSize": 3,
		"steps": 2,
	}

	const result13 = {
		"intervalTime": 16.666666666666668,
		"stepSize": 3,
		"steps": 0,
	}

	const result14 = {
		"intervalTime": 0,
		"stepSize": 0,
		"steps": 0,
	}

	// normal animation speeds and distances
	expect( UIKIT.animate.CalculateAnimationSpecs( 54, 0, 1000 )).toMatchObject( result1 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 54, 1000 )).toMatchObject( result2 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 20, 0, 250 )).toMatchObject( result3 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 412, 0, 250 )).toMatchObject( result4 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 50, 200, 250 )).toMatchObject( result5 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 200, 50, 250 )).toMatchObject( result6 );

	// really long/slow animations
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 500, 10000 )).toMatchObject( result7 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 9, 0, 12365 )).toMatchObject( result8 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 107, 1341, 9000 )).toMatchObject( result9 );

	// really quick/short animations
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 10, 80 )).toMatchObject( result10 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 769, 0, 100 )).toMatchObject( result11 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 23, 32, 50 )).toMatchObject( result12 );
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 3, 6 ) ).toMatchObject( result13 );

	// no animation
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 0, 100 )).toMatchObject( result14 );
});



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


test('UIKIT.animate.CalculateAnimationSpecs should only return whole number for steps', () => {
	expect( UIKIT.animate.CalculateAnimationSpecs( 162, 982, 350 ) ).toBeWholeNumber();
	expect( UIKIT.animate.CalculateAnimationSpecs( 0, 3, 6 ) ).toBeWholeNumber();
});
