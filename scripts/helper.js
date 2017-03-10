/***************************************************************************************************************************************************************
 *
 * HELPER
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
// GLOBALS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
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
 * Copy the temp folder to a destination and replace files inside
 *
 * @param  {string} source       - The temp folder path
 * @param  {string} destination  - The path for where to copy the temp folder to
 * @param  {object} replacements - The replacement object
 */
const CopyTemp = ( source, destination, replacements ) => {
	CreateDir( destination );

	const files = Fs.readdirSync( source ); //create target folder

	for( let file of files ) {
		if( !file.startsWith('.') ) { //don't copy hidden files
			const current = Fs.lstatSync( Path.join( source, file ) );

			if( current.isDirectory() ) {
				CopyTemp( Path.join( source, file ), Path.join( destination, file ), replacements ); //call self
			}
			else {
				CopyFile( Path.join( source, file ), Path.join( destination, file ) ); //copy file over

				ReplaceFileContent( replacements, Path.join( destination, file ) ); //replace all placeholders
			}
		}
	}
};


/**
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

	HELPER.log.success(`Moved file to ${ Chalk.yellow( target ) }`);
};


/**
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
			HELPER.log.error(`Doh! ${ error }`);
			return;
		}
	});

	HELPER.log.success(`Replaced file strings inside ${ Chalk.yellow( fileName ) }`);
};


/**
 * Generate a dependency representation of a module inside an object by calling this function repeatedly
 *
 * @param  {string} name - The name of the module
 *
 * @return {object}      - An object of the dependency tree
 */
const GetDepTree = ( name ) => {
	let tree = {};
	const pkgPath = Path.normalize(`${ process.cwd() }/../${ name.substring( 8 ) }/package.json`);
	const pkg = require( pkgPath, 'utf-8'); //we use require because we like the caching here

	if( Object.keys( pkg.peerDependencies ).length > 0 ) {
		for( const module of Object.keys( pkg.peerDependencies ) ) {
			tree[ module.substring( 8 ) ] = GetDepTree( module );
		}
	}

	return tree;
};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Constructor
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const HELPER = (() => { //constructor factory

	return {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		NAME: PKG.name,
		VERSION: PKG.version,
		DEPENDENCIES: PKG.peerDependencies,
		TEMPLATES: Path.normalize(`${ __dirname }/../.templates`),
		URL: `http://uikit.apps.staging.digital.gov.au`,


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
 * PRECOMPILE MODULE
 *
 * Replace tags and move files from src/ to lib/
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Treeify = require('treeify');


HELPER.precompile = (() => {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		/**
		 * Starting off precompile
		 */
		init: () => {
			HELPER.precompile.sass();
			HELPER.precompile.readme();
		},

		/**
		 * Move files from src/ to lib/ and replace placeholders inside
		 */
		sass: () => {
			//1. create path
			CreateDir('./lib/sass/');

			//2. copy files
			CopyFile('./src/sass/_globals.scss', './lib/sass/_globals.scss');
			CopyFile('./src/sass/_module.scss', './lib/sass/_module.scss');
			CopyFile('./src/sass/_print.scss', './lib/sass/_print.scss');

			//rethingiemajiging the peer dependencies for sass
			let dependencies = [];
			for( const module of Object.keys( HELPER.DEPENDENCIES ) ) {
				dependencies.push(`("${ module }", "${ HELPER.DEPENDENCIES[ module ].replace('^', '') }"),`);
			}

			//3.replace strings inside new files in lib
			const searches = {
				'[replace-name]': HELPER.NAME,
				'[replace-version]': HELPER.VERSION,
				'[replace-dependencies]': dependencies.join(`\n\t`),
			};

			ReplaceFileContent( searches, './lib/sass/_globals.scss' );
			ReplaceFileContent( searches, './lib/sass/_module.scss' );
			ReplaceFileContent( searches, './lib/sass/_print.scss' );
		},

		/**
		 * Inject the current dependency tree into the readme file
		 */
		readme: () => {
			const depTree = GetDepTree( HELPER.NAME );
			const prettyTree = `${ HELPER.NAME.substring( 8 ) }\n${ Treeify.asTree( depTree ) }`;

			let readme = Fs.readFileSync( `./README.md`, `utf-8`);
			readme = readme.replace(/## Dependency graph\n\n```shell[\s\S]*?```/, `## Dependency graph\n\n\`\`\`shell\n${ prettyTree }\`\`\``);
			Fs.writeFileSync( `./README.md`, readme, `utf-8` );

			HELPER.log.success(`Injected dependency tree into ${ Chalk.yellow('README.md') }`);
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
 * COMPILE MODULE
 *
 * Compile assets, move files from /scr/ to /lib/
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Autoprefixer = require('autoprefixer');
const Postcss = require('postcss');
const Sass = require('node-sass');
const Semver =  require('semver');


HELPER.compile = (() => {
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
			indentType: 'tab',
			precision: 8,
			includePaths: [ './lib/sass/' ],
			outputStyle: 'compressed',
		});

		Fs.writeFileSync( css, compiled.css );

		HELPER.log.success(`Compiled Sass ${ Chalk.yellow( scss ) }`);
	};


	/**
	 * PRIVATE
	 * Autoprefix a css file
	 *
	 * @param  {string} file - The file to be prefixed
	 */
	const Autoprefix = ( file ) => {
		const data = Fs.readFileSync( file, 'utf-8');

		Postcss([ Autoprefixer({ browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10'] }) ])
			.process( data )
			.then( ( prefixed ) => {
				prefixed
					.warnings()
					.forEach( ( warn ) => {
						console.warn( warn.toString() );
				});

				Fs.writeFileSync( file, prefixed.css );

				HELPER.log.success(`Autoprefixed file ${ Chalk.yellow( file ) }`);
		});
	};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		/**
		 * Starting off compile
		 */
		init: () => {
			HELPER.compile.sass();
		},

		/**
		 * Compile and autoprefix Sass
		 */
		sass: () => {
			//1. compile scss
			Sassify('./tests/site/test.scss', './tests/site/style.css');

			//2. autoprefixer
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
 * GENERATE MODULE
 *
 * Generate a json file with all current modules and their versions.
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


HELPER.generate = (() => {
	/**
	 * PRIVATE
	 * Get all folders within a given path
	 *
	 * @param  {string}  thisPath - The path that contains the desired folders
	 * @param  {boolean} verbose  - Verbose flag either undefined or true
	 *
	 * @return {array}            - An array of names of each folder
	 */
	const GetFolders = ( thisPath, verbose ) => {
		try {
			return Fs.readdirSync( thisPath ).filter(
				( thisFile ) => Fs.statSync(`${ thisPath }/${ thisFile }`).isDirectory()
			);
		}
		catch( error ) {
			return [];
		}
	};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		/**
		 * Starting off generate
		 */
		init: () => {
			const packagesPath = Path.normalize(`${ __dirname }/../packages/`);
			const allModules = GetFolders( packagesPath );

			HELPER.generate.json( allModules );
			HELPER.generate.index( allModules );
			HELPER.generate.readme( allModules );
		},

		/**
		 * Write json file
		 *
		 * @param {array} allModules - An array of all modules
		 */
		json: ( allModules ) => {
			const packagesPath = Path.normalize(`${ __dirname }/../packages/`);
			let packageJson = {}; //each package.json
			let uikitJson = {};   //the uikit.json object

			//iterate over all packages
			if( allModules !== undefined && allModules.length > 0 ) {
				for( let module of allModules ) {
					const pkgPath = Path.normalize(`${ packagesPath }/${ module }/package.json`);
					packageJson = require( pkgPath ); //read the package.json

					uikitJson[ packageJson.name ] = { //add to uikit.json
						name: packageJson.name,
						version: packageJson.version,
						peerDependencies: packageJson.peerDependencies,
					};
				}
			}

			Fs.writeFile( Path.normalize(`${ __dirname }/../uikit.json`), JSON.stringify( uikitJson ), 'utf8', ( error ) => { //write file
				if( error ) {
					console.error( error );
					return;
				}

				HELPER.log.success(`Written ${ Chalk.yellow('uikit.json') }`);
			});
		},

		/**
		 * Write json file
		 *
		 * @param {array} allModules - An array of all modules
		 */
		index: ( allModules ) => {
			let index = Fs.readFileSync( Path.normalize(`${ __dirname }/../.templates/index/index.html`), 'utf-8') //this will be the index file
			let replacement = '';

			//iterate over all packages
			if( allModules !== undefined && allModules.length > 0 ) {
				for( let module of allModules ) {
					replacement += `<li><a href="packages/${ module }/tests/site/">${ module }</a></li>\n`;
				}
			}

			index = index.replace('[-uikit-modules-]', replacement);

			Fs.writeFile(`${ __dirname }/../index.html`, index, 'utf8', ( error ) => { //write file
				if( error ) {
					console.error( error );
					return;
				}

				HELPER.log.success(`Written ${ Chalk.yellow('index.html') }`);
			});
		},

		/**
		 * Inject a list of all modules into the main readme file
		 *
		 * @param  {array} allModules - An array of all modules
		 */
		readme: ( allModules ) => {
			let list = ``;

			if( allModules !== undefined && allModules.length > 0 ) {
				for( let module of allModules ) {
					let tree = Treeify.asTree( GetDepTree(`@gov.au/${ module }`) );

					if( tree === '' ) {
						tree = '.';
					}

					list += `- [${ module }](${ HELPER.URL }/packages/${ module }/tests/site/)\n`;
					list += `\`\`\`\n${ tree }\`\`\`\n\n`;
				}
			}

			const pkgPath = Path.normalize(`${ __dirname }/../README.md`);
			let readme = Fs.readFileSync( pkgPath, `utf-8`);
			readme = readme.replace(/## Modules\n\n[\s\S]*?back to top]/, `## Modules\n\n${ list }\n\n**[⬆ back to top]`);
			Fs.writeFileSync( pkgPath, readme, `utf-8` );

			HELPER.log.success(`Injected modules into main readme file`);
		}
	}

})();


/***************************************************************************************************************************************************************
 *
 * SCAFFOLDING MODULE
 *
 * Create a new module fast
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Inquirer = require('inquirer');


HELPER.scaffolding = (() => {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		init: () => {
			Inquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: `What's the name of the module?`
			},
			{
				type: 'input',
				name: 'description',
				message: `What's the description of the module?`
			},
			]).then(( answers ) => {

				const template = `${ HELPER.TEMPLATES }/new-module/`;
				const destination = Path.normalize(`${ __dirname }/../packages/${ answers.name }`);
				const replacements = {
					'[-replace-name-]': answers.name,
					'[-replace-description-]': answers.description,
					'[-replace-URL-]': `${ HELPER.URL }/packages/${ answers.name }/tests/site/`,
					'[-replace-version-]': '0.1.0',
				};

				CopyTemp( template, destination, replacements ); //copy all files and replace placeholders inside of them

			});
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
HELPER.init = () => {

	if( process.argv.indexOf( 'scaffolding' ) !== -1 ) {
		CFonts.say( 'Scaffolding', {
			font: 'chrome',
			space: false,
			colors: ['red', 'magenta', 'blue'],
		});

		CFonts.say(`... so you don't have to`, {
			font: 'console',
			space: false,
		});

		console.log(`\n`);
		HELPER.scaffolding.init();
	}

	if( process.argv.indexOf( 'precompile' ) !== -1 ) {
		CFonts.say( `Precompile ${ PKG.name.substring( 8 ) }`, {
			font: 'chrome',
			space: false,
			colors: ['red', 'magenta', 'blue'],
		});

		CFonts.say(`... so you don't have to`, {
			font: 'console',
			space: false,
		});

		console.log(`\n`);
		HELPER.precompile.init();
	}

	if( process.argv.indexOf( 'compile' ) !== -1 ) {
		CFonts.say( `Compiling ${ PKG.name.substring( 8 ) }`, {
			font: 'chrome',
			space: false,
			colors: ['red', 'magenta', 'blue'],
		});

		CFonts.say(`... so you don't have to`, {
			font: 'console',
			space: false,
		});

		console.log(`\n`);
		HELPER.compile.init();
	}

	if( process.argv.indexOf( 'publish' ) !== -1 ) {
		CFonts.say( 'Publishing', {
			font: 'chrome',
			space: false,
			colors: ['red', 'magenta', 'blue'],
		});

		CFonts.say(`... so you don't have to`, {
			font: 'console',
			space: false,
		});

		console.log(`\n`);
		HELPER.generate.init();
	}
};

HELPER.init();


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
