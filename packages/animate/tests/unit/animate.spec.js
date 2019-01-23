const AU = require('../../lib/js/module.js');
const { expect } = require( 'chai' );

describe(`AU.animate.CalculateAnimation`, () => {
	it('AU.animate.CalculateAnimation should calculate correct animation values', () => {
		// normal animation speeds and distances
		expect( AU.animate.CalculateAnimationSpecs( 54, 0, 1000 ) ).that.deep.equals( { "intervalTime": 18.51851851851852, "stepSize": -1, "steps": 53, } );
		expect( AU.animate.CalculateAnimationSpecs( 0, 54, 1000 )).that.deep.equals( { "intervalTime": 18.51851851851852, "stepSize": 1, "steps": 53, } );
		expect( AU.animate.CalculateAnimationSpecs( 20, 0, 250 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": -1.3333333333333333, "steps": 14, } );
		expect( AU.animate.CalculateAnimationSpecs( 412, 0, 250 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": -27.466666666666665, "steps": 14, } );
		expect( AU.animate.CalculateAnimationSpecs( 50, 200, 250 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": 10, "steps": 14, } );
		expect( AU.animate.CalculateAnimationSpecs( 200, 50, 250 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": -10, "steps": 14, } );
	
		// really long/slow animations
		expect( AU.animate.CalculateAnimationSpecs( 0, 500, 10000 )).that.deep.equals( { "intervalTime": 20, "stepSize": 1, "steps": 499, } );
		expect( AU.animate.CalculateAnimationSpecs( 9, 0, 12365 )).that.deep.equals( { "intervalTime": 1373.888888888889, "stepSize": -1, "steps": 8, } );
		expect( AU.animate.CalculateAnimationSpecs( 107, 1341, 9000 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": 2.285185185185185, "steps": 539, } );
	
		// really quick/short animations
		expect( AU.animate.CalculateAnimationSpecs( 0, 10, 80 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": 2, "steps": 4, } );
		expect( AU.animate.CalculateAnimationSpecs( 769, 0, 100 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": -128.16666666666666, "steps": 5, } );
		expect( AU.animate.CalculateAnimationSpecs( 23, 32, 50 )).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": 3, "steps": 2, } );
		expect( AU.animate.CalculateAnimationSpecs( 0, 3, 6 ) ).that.deep.equals( { "intervalTime": 16.666666666666668, "stepSize": 3, "steps": 0, } );
	
		// no animation
		expect( AU.animate.CalculateAnimationSpecs( 0, 0, 100 )).that.deep.equals( { "intervalTime": 0, "stepSize": 0, "steps": 0, } );
	});
	
	
	it('AU.animate.CalculateAnimation should only return whole number for steps', () => {
	
		// expect.extend({
		// 	toBeWholeNumber( received ) {
	
		// 		return {
		// 			message: () => (
		// 				`expected ${ received.steps } to be a whole number`
		// 			),
		// 			pass: Math.round( received.steps ) === received.steps,
		// 		};
		// 	},
		// });
	
		// expect( AU.animate.CalculateAnimationSpecs( 0, 0, 250, ) ).toBeWholeNumber();
	
		// Array.from( Array( 50 ), ( _, i ) => i ++ ).forEach( iteration => {
		// 	expect( AU.animate.CalculateAnimationSpecs(
		// 		( 2.1425 * iteration ),
		// 		( 100.921833 * iteration ),
		// 		( 20.9178187 * iteration ),
		// 	) ).toBeWholeNumber();
		// });
	
	});
})