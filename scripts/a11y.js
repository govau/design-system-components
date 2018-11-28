/***************************************************************************************************************************************************************
 *
 * PA11Y TEST
 *
 **************************************************************************************************************************************************************/

'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Helper    = require( './helper.js' );
const Express   = require( 'express' );
const Pa11y     = require( 'pa11y' );
const Puppeteer = require( 'puppeteer' );
const Fs        = require( 'fs' );
const Path      = require( 'path' );
const Events    = require( 'events' );


// Change the limit for max listeners for the number of components
Events.EventEmitter.defaultMaxListeners = 30;


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// GLOBALS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const OPTIONS = {
	timeout: 60000,
	hideElements: '.sr-only, .is-visuallyhidden, .visuallyhidden, .no-a11y-test, .uikit-page-alerts__sronly, .uikit-skip-link',
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLI OUTPUT FORMATTING
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const DisplayResults = results => {
	if( results.issues.length ) {
		results.issues.map( issue => {
			Helper.log.error( `Error found at ${ issue.selector }`)
			console.log( `${ issue.context }\n ${ issue.message }\n` );
		})

		process.exit( 1 );
	}
	else {
		Helper.log.success( 'No errors' );
	}
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// RUN TESTS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const RunPa11y = async ( urls ) => {
	try {
		// Start the browser
		console.log( 'start browser' );
		const browser = await Puppeteer.launch();

		// For each url create a new page and run the Pa11y Test
		const tests = urls.map( async ( url ) => {
			const page = await browser.newPage();
			console.log( 'page finished opening' );

			// Run the Pa11y test
			try {
				console.log( 'run pa11y test' );
				const result = await Pa11y( url, {
					browser,
					page,
					...OPTIONS,
				});

				console.log( `Pa11y automated ${ result.documentTitle }` );
				DisplayResults( result );
			}
			catch( error ){
				Helper.log.error( error )
			}

			console.log( 'close page' );
			// Close the page
			await page.close();

			console.log( 'page closed' );
		});

		// Wait for all the tests to finish
		await Promise.all( tests );
		console.log( 'tests done' );

		// Close the browser
		await browser.close();
		console.log( 'browser closed' );
	}
	catch( error ){
		throw new Error( error );
	}
}


// Global variables
const UikitJson = Path.normalize( `${ process.cwd() }/uikit.json` );
const TestURL   = 'http://localhost:8080';


// Start the test - immediatley executed async function
( async() => {
	try {
		console.log( 'create a server' );
		// Run all of the tests
		// Start express at port 8080
		const App    = Express();
		const Server = App.listen( '8080' );

		// Set up the server localhost:8080 and the current directory
		App.use( Express.static( './' ) );

		// Default one url to test
		let urls = [ `${ TestURL }/tests/site` ];

		// If there is a uikit.json file we should test all the components
		if( Fs.existsSync( UikitJson ) ){

			// Create a url based off the keys in the uikit.json
			urls = Object.keys( require( UikitJson ) ).map( key => {
				return `${ TestURL }/packages/${ key.substring( 8 ) }/tests/site`
			});
		}

		await RunPa11y( urls );

		// Close the express server
		await Server.close();
	}
	catch( error ){
		throw new Error( error );
	}
})();
