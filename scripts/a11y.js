/***************************************************************************************************************************************************************
 *
 * PA11Y TEST
 *
 **************************************************************************************************************************************************************/

'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Helper = require('./helper.js')
const Express = require('express')
const CFonts = require(`cfonts`)
const Pa11y = require('pa11y')
const Path = require('path')


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// GLOBALS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const OPTIONS = {
	timeout: 60000,
	hideElements: '.sr-only, .is-visuallyhidden, .visuallyhidden, .no-a11y-test, .uikit-page-alerts__sronly, .uikit-skip-link',
}

const TestURL = 'http://localhost:8080'


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLI OUTPUT FORMATTING
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const displayResults = results => {
	let errors = results.filter( result => result.type === 'error' )

	if( errors.length ) {
		errors.map( error => {
			Helper.log.error(`Error found at ${ error.selector }`)
			console.log(`${ error.context }\n ${ error.message }\n`)
		})

		process.exit( 1 )
	}
	else {
		Helper.log.success('No errors')
	}
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// RUN TESTS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Pa11yTest = Pa11y( OPTIONS )
const PKG = require( Path.normalize(`${ process.cwd() }/package.json`) )

const App = Express()
const Server = App.listen('8080')

App.use( Express.static('tests/site') )

Pa11yTest.run( TestURL, ( error, results ) => {
	CFonts.say( `${ PKG.name.substring( 8 ) }`, {
		font: 'chrome',
		space: false,
		colors: ['red', 'magenta', 'blue'],
	})

	error ? Helper.log( error ) : displayResults( results )
	Server.close()
})
