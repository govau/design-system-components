/***************************************************************************************************************************************************************
 *
 * TODO
 *
 **************************************************************************************************************************************************************/

'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Fs = require(`fs`);
const Path = require('path');
const Chalk = require('chalk');
const PKG = require( Path.normalize(`${ process.cwd() }/package.json`) );

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Constructor
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const COMPILE = (() => { //constructor factory

	return {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		NAME: PKG.name,
		VERSION: PKG.version,


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Log to console.log
//
// @method  success                    Log success info
//          @param   [text]  {string}  The sting you want to log
//          @return  [ansi]            output
//
// @method  error                      Log error info
//          @param   [text]  {string}  The sting you want to log
//          @return  [ansi]            output
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		log: {

			success: ( text ) => {
				console.log( Chalk.green(`✅  ${text}`));
			},

			error: ( text ) => {
				console.error( Chalk.red(`❎  ${text}`));
			},
		},
	}
})();


/***************************************************************************************************************************************************************
 *
 * MODULE
 *
 * TODO
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Autoprefixer = require('autoprefixer');
const Exec = require('child_process').exec;
const Postcss = require('postcss');
const Sass = require('node-sass');


COMPILE.all = (() => {
	/**
	 * PRIVATE
	 * Create a path if it doesn't exist
	 *
	 * @param  {string} dir - The path to be checked and created if not found
	 */
	const CreateDir = ( dir ) => {
		const splitPath = dir.split('/');

		splitPath.reduce( ( path, subPath ) => {
			let currentPath;

			if( subPath != '.' ) {
				currentPath = `${ path }/${ subPath }`;

				if( !Fs.existsSync( currentPath ) ){
					Fs.mkdirSync( currentPath );
				}
			}
			else {
				currentPath = subPath;
			}

			return currentPath;
		}, '');
	};


	/**
	 * PRIVATE
	 * Copy a file
	 *
	 * @param  {string} source - The path to the file to move
	 * @param  {string} target - The path to move it to
	 */
	const CopyFile = ( source, target ) => {
		if( !Fs.existsSync( source ) ) {
			return false;
		}

		const data = Fs.readFileSync( source, 'utf-8');
		Fs.writeFileSync( target, data );

		COMPILE.log.success(`Moved file to ${ Chalk.yellow( target ) }`);
	};


	/**
	 * PRIVATE
	 * Replace a string with a another globally in the file
	 *
	 * @param  {object} searchs  - What is replaced with what, Key = the text to be replaced, value = the replacement text.
	 * @param  {string} FileName - The file to be converted
	 */
	const ReplaceFileContent = ( searchs, fileName ) => {
		let content = Fs.readFileSync( fileName, 'utf-8');

		for( const replacing of Object.keys( searchs ) ) { //replace all searches
			content = content.split( replacing ).join( searchs[ replacing ] ); //replacing globally without regex
		}

		Fs.writeFileSync( fileName, content, ( error ) => {
			if( error ) {
				COMPILE.log.error(`Doh! ${ error }`);
				return;
			}
		});

		COMPILE.log.success(`Replaced file strings inside ${ Chalk.yellow( fileName ) }`);
	};


	/**
	 * PRIVATE
	 * Compile Sass code into CSS
	 *
	 * @param  {string} scss The Sass file to be compiled
	 * @param  {string} css  The location where the CSS should be written to
	 */
	const Sassify = ( scss, css ) => {
		const compiled = Sass.renderSync({
			file: scss,
			includePaths: [ './dist/sass/' ],
			outputStyle: 'compressed',
		});

		Fs.writeFileSync( css, compiled.css );

		COMPILE.log.success(`Compiled Sass ${ Chalk.yellow( scss ) }`);
	};


	/**
	 * PRIVATE
	 * Autoprefix a css file
	 *
	 * @param  {string} file - The file to be prefixed
	 */
	const Autoprefix = ( file ) => {
		const data = Fs.readFileSync( file, 'utf-8');

		Postcss([ Autoprefixer ])
			.process( data )
			.then( ( prefixed ) => {
				prefixed
					.warnings()
					.forEach( ( warn ) => {
						console.warn( warn.toString() );
				});

			Fs.writeFileSync( file, prefixed.css );

			COMPILE.log.success(`Autoprefixed file ${ Chalk.yellow( file ) }`);
		});
	};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		init: () => {
			COMPILE.all.sass();
		},

		sass: () => {
			//1. create path
			CreateDir('./dist/sass/');

			//2. copy files
			CopyFile('./src/sass/globals.scss', './dist/sass/globals.scss');
			CopyFile('./src/sass/module.scss', './dist/sass/module.scss');

			//3.replace strings inside new files in dist
			const searches = {
				'[replace-name]': COMPILE.NAME,
				'[replace-version]': COMPILE.VERSION,
			};

			ReplaceFileContent( searches, './dist/sass/globals.scss' );
			ReplaceFileContent( searches, './dist/sass/module.scss' );

			//4. compile scss
			Sassify('./tests/site/test.scss', './tests/site/style.css');

			//5. autoprefixer
			Autoprefix('./tests/site/style.css');
		},

		js: () => {
		},

		img: () => {
		},

		svg: () => {
		},
	}

})();


/***************************************************************************************************************************************************************
 *
 * MODULE
 *
 * Initiate application
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const CFonts = require(`cfonts`);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// SCRIPT INIT
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
COMPILE.init = () => {
	CFonts.say(`Compiling module`, {
		font: 'chrome',
		space: false,
		colors: ['red', 'magenta', 'blue'],
	});

	CFonts.say(`... so you don't have to`, {
		font: 'console',
		space: false,
	});

	console.log(`\n`);

	COMPILE.all.init();
};

COMPILE.init();


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// EXIT HANDLER
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * Handle exiting of program
 *
 * @param {null}   exiting - null for bind
 * @param {object} error   - Object to distinguish between closing events
 */
function ExitHandler( exiting, error ) {
	if( error ) {
		console.error( error.stack );
	}

	if( exiting.now ) {
		process.exit( 0 ); //exit now
	}

	console.log('\n');

	process.exit( 0 ); //now exit with a smile :)
}

process.on( 'exit', ExitHandler.bind( null, { now: false } ) );              //on closing
process.on( 'SIGINT', ExitHandler.bind( null, { now: true } ) );             //on [ctrl] + [c]
process.on( 'uncaughtException', ExitHandler.bind( null, { now: true } ) );  //on uncaught exceptions