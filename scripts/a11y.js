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


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// GLOBALS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const OPTIONS = {
	timeout: 60000,
	hideElements: '.sr-only, .is-visuallyhidden, .visuallyhidden, .no-a11y-test, .auds-page-alerts__sronly, .auds-skip-link',
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
	// Start the browser
	const browser = await Puppeteer.launch({
		headless: true,
		devtools: false,
		args: ["--no-sandbox", "--disable-setuid-sandbox"]
	});

	// For each url create a new page and run the Pa11y Test
	const tests = urls.map( async ( url ) => {
		const page = await browser.newPage();

		// Run the Pa11y test
		await Pa11y( url, {
			browser,
			page,
			...OPTIONS,
		})
		.then( result => {
			console.log( `Pa11y automated ${ result.documentTitle }` );
			DisplayResults( result );
		})
		.catch( error => Helper.log.error( error ) );

		// Close the page
		await page.close();
	});

	// Wait for all the tests to finish
	await Promise.all( tests );

	// Close the browser
	await browser.close();
}


// Global variables
const audsJson = Path.normalize( `${ process.cwd() }/auds.json` );
const TestURL   = 'http://localhost:8080';


// Start the test - immediatley executed async function
( async() => {
	// Start express at port 8080
	const App    = Express();
	const Server = App.listen( '8080' );

	// Set up the server localhost:8080 and the current directory
	App.use( Express.static( './' ) );

	// Default one url to test
	let urls = [ `${ TestURL }/tests/site` ];

	// If there is a auds.json file we should test all the components
	if( Fs.existsSync( audsJson ) ){

		// Create a url based off the keys in the auds.json
		urls = Object.keys( require( audsJson ) ).map( key => {
			return `${ TestURL }/packages/${ key.substring( 8 ) }/tests/site`
		});
	}

	// Run all of the tests
	await RunPa11y( urls );

	// Close the express server
	Server.close();
})();
