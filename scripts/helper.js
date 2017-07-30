/***************************************************************************************************************************************************************
 *
 * HELPER
 *
 **************************************************************************************************************************************************************/

'use strict';


/**
 * Dependencies
 */
const Autoprefixer = require('autoprefixer');
const Postcss = require('postcss');
const Sass = require('node-sass');
const Chalk = require(`chalk`);
const Path = require(`path`);
const Fs = require(`fs`);

const PKG = require( Path.normalize(`${ process.cwd() }/package.json`) );


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// GLOBALS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * Create a path if it doesn’t exist
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

	const files = Fs.readdirSync( source ); // create target folder

	for( let file of files ) {
		if( !file.startsWith('.') || file === '.babelrc' ) { // don’t copy hidden files
			const current = Fs.lstatSync( Path.join( source, file ) );

			if( current.isDirectory() ) {
				CopyTemp( Path.join( source, file ), Path.join( destination, file ), replacements ); // call self
			}
			else {
				CopyFile( Path.join( source, file ), Path.join( destination, file ) ); // copy file over

				ReplaceFileContent( replacements, Path.join( destination, file ) ); // replace all placeholders
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
 * @param  {object} searches - What is replaced with what, Key = the text to be replaced, value = the replacement text.
 * @param  {string} FileName - The file to be converted
 */
const ReplaceFileContent = ( searches, fileName ) => {
	let content = Fs.readFileSync( fileName, 'utf-8');

	for( const replacing of Object.keys( searches ) ) { // replace all searches
		content = content.split( replacing ).join( searches[ replacing ] ); // replacing globally without regex
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
	const pkg = require( pkgPath, 'utf-8'); // we use require because we like the caching here

	if( Object.keys( pkg.peerDependencies ).length > 0 ) {
		for( const module of Object.keys( pkg.peerDependencies ) ) {
			tree[ module.substring( 8 ) ] = GetDepTree( module );
		}
	}

	return tree;
};


/**
 * Get all folders within a given path
 *
 * @param  {string}  thisPath - The path that contains the desired folders
 * @param  {boolean} verbose  - Verbose flag either undefined or true
 *
 * @return {array}            - An array of names of each folder
 */
const GetFolders = ( thisPath, verbose ) => {
	try {
		let folders = Fs.readdirSync( thisPath ).filter(
				thisFile => Fs.statSync(`${ thisPath }/${ thisFile }`).isDirectory()
			).filter(
				thisFile => thisFile !== 'core'
		);

		return ['core', ...folders ]; // moving core to top
	}
	catch( error ) {
		return [];
	}
};


/**
 * Compile Sass code into CSS
 *
 * @param  {string} scss - The Sass file to be compiled
 * @param  {string} css  - The location where the CSS should be written to
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
 * Autoprefix a css file
 *
 * @param  {string} file - The file to be prefixed
 */
const Autoprefix = ( file ) => {
	const data = Fs.readFileSync( file, 'utf-8' );

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
// Constructor
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const HELPER = (() => { // constructor factory

	return {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		NAME: PKG.name,
		VERSION: PKG.version,
		DEPENDENCIES: PKG.peerDependencies,
		TEMPLATES: Path.normalize(`${ __dirname }/../.templates`),
		URL: `http://uikit.apps.staging.digital.gov.au`,
		GITHUB: `https://github.com/govau/uikit/`,


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
				console.log( Chalk.green(`✔︎  ${text}`));
			},

			error: ( text ) => {
				console.error( Chalk.red(`✗  ${text}`));
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

/**
 * Dependencies
 */
const Babel = require('babel-core');
const Treeify = require('treeify');


HELPER.precompile = (() => {
	/**
	 * PUBLIC METHODS
	 */
	return {
		/**
		 * Starting off precompile
		 */
		init: () => {
			HELPER.precompile.sass();
			HELPER.precompile.readme();
			HELPER.precompile.js();
			HELPER.precompile.reactSass();
			HELPER.precompile.react();
		},

		/**
		 * Move files from src/ to lib/ and replace placeholders inside
		 */
		sass: () => {
			// 1. create path
			CreateDir('./lib/sass/');

			// 2. copy files
			CopyFile('./src/sass/_globals.scss', './lib/sass/_globals.scss');
			CopyFile('./src/sass/_module.scss', './lib/sass/_module.scss');
			CopyFile('./src/sass/_print.scss', './lib/sass/_print.scss');

			// Rethingiemajiging the peer dependencies for sass
			let dependencies = [];
			for( const module of Object.keys( HELPER.DEPENDENCIES ) ) {
				dependencies.push(`("${ module }", "${ HELPER.DEPENDENCIES[ module ].replace('^', '') }"),`);
			}

			// 3.replace strings inside new files in lib
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
			const _hasJS = Fs.existsSync( `${ process.cwd() }/src/js/module.js` );
			const _hasJquery = Fs.existsSync( `${ process.cwd() }/src/js/jquery.js` );
			const _hasReact = Fs.existsSync( `${ process.cwd() }/src/js/react.js` );

			// 1. create path
			if( _hasJS || _hasJquery || _hasReact ) {
				CreateDir(`./lib/js/`);
			}

			// 2. copy files
			if( _hasJS ) {
				CopyFile(`./src/js/module.js`, `./lib/js/module.js`);
			}

			if( _hasJquery ) {
				CopyFile(`./src/js/jquery.js`, `./lib/js/jquery.js`);
			}

			if( _hasReact ) {
				CopyFile(`./src/js/react.js`, `./lib/js/react.js`);
				CopyFile(`./src/js/react.js`, `./tests/react/${ HELPER.NAME.substring( 8 ) }.js`);
			}

			// 3.replace strings inside new files in lib
			const searches = {
				'[replace-name]': HELPER.NAME,
				'[replace-version]': HELPER.VERSION,
			};

			if( _hasJS ) {
				ReplaceFileContent( searches, `./lib/js/module.js` );
			}

			if( _hasJquery ) {
				ReplaceFileContent( searches, `./lib/js/jquery.js` );
			}

			if( _hasReact ) {
				ReplaceFileContent( searches, `./lib/js/react.js` );
				ReplaceFileContent( searches, `./tests/react/${ HELPER.NAME.substring( 8 ) }.js` );
			}
		},

		img: () => {
		},

		svg: () => {
		},

		/**
		 * Compile and autoprefix Sass
		 */
		reactSass: () => {
			if( Fs.existsSync(`${ process.cwd() }/lib/js/react.js`) ) {

				// 1. create directory
				CreateDir('./lib/css/');

				// 2. compile scss
				Sassify('./src/sass/_dependencies.scss', './lib/css/styles.css');

				// 3. autoprefixer
				Autoprefix('./lib/css/styles.css');
			}
		},

		/**
		 * Transpile react to es5, compile css file and include it into our react component
		 */
		react: () => {
			if( Fs.existsSync(`${ process.cwd() }/lib/js/react.js`) ) {
				const reactOptions = {
					ast: false,
					compact: true,
					minified: true,
					presets: [
						`es2015`,
						`react`,
						`stage-0`,
					],
					sourceMaps: "both",
					sourceMapTarget: `react.es5.js`,
				};

				const searches = {
					'// [replace-imports]': `import '../css/styles.css';`,
				};

				// 1. Copy files
				CopyFile('./lib/js/react.js', './lib/js/react.es5.js');

				// 2. Replace the comment with an import statement
				ReplaceFileContent( searches, `${ process.cwd() }/lib/js/react.es5.js` );

				// 3. Compile /lib/react.js to react.es5.js
				Babel.transformFile( `./lib/js/react.es5.js`, reactOptions, ( error, result ) => {
					if( error ) {
						HELPER.log.error(`We encountered an error when transpiling the react file in ${ Chalk.yellow( `${ process.cwd() }/lib/js/react.es5.js` ) }`);
						HELPER.log.error( error );
					}
					else {
						Fs.writeFileSync( `./lib/js/react.es5.js`, result.code );
						Fs.writeFileSync( `./lib/js/react.es5.js.map`, JSON.stringify( result.map, null, 2 ) );
					}
				});
			}
		},
	}

})();


/***************************************************************************************************************************************************************
 *
 * COMPILE MODULE
 *
 * Compile assets, move files from /src/ to /lib/
 *
 **************************************************************************************************************************************************************/

/**
 * Dependencies
 */
const Semver =  require('semver');


HELPER.compile = (() => {
	/**
	 * PRIVATE
	 * Flatten a deep object into a one level array
	 *
	 * @param  {object} object - The object to be flattened
	 *
	 * @return {array}         - The resulting flat array
	 */
	const flatten = object => {
		return [].concat( ...Object.keys( object ).map( key =>
			Object.keys( object[ key ] ).length > 0 ?
				[ key, ...flatten( object[ key ] ) ] :
				key
			)
		);
	};


	/**
	 * PRIVATE
	 * Get js from all dependencies for a module and write to a file
	 *
	 * @param  {string} from - The file to read from
	 * @param  {string} to   - The file to write to
	 */
	const getAllJs = ( from, to ) => {
		if( Fs.existsSync( Path.normalize(`${ process.cwd() }${ from }`) ) ) {
			const allDependencies = GetDepTree( HELPER.NAME );
			const dependencies = [ ...new Set( flatten( allDependencies ) ) ];

			let code = '';

			dependencies.forEach( dependency => {
				if( Fs.existsSync( Path.normalize(`${ process.cwd() }/../${ dependency }${ from }`) ) ) {
					// 1. get all dependencies
					code += `\n\n/* ${ dependency } */\n` + Fs.readFileSync( Path.normalize(`${ process.cwd() }/../${ dependency }${ from }`), 'utf-8');
				}
			});

			code += `\n\n/* ${ HELPER.NAME } */\n` + Fs.readFileSync( Path.normalize(`${ process.cwd() }${ from }`), 'utf-8');

			// 2. write files
			Fs.writeFileSync( `.${ to }`, code, `utf-8` );

			HELPER.log.success(`Written script ${ Chalk.yellow( `.${ to }` ) }`);
		}
	};


	/**
	 * PRIVATE
	 * Get react from all dependencies for a module and copy them all over
	 *
	 * @param  {string} from - The file to read from
	 * @param  {string} to   - The file to write to
	 */
	const getAllReact = ( from, to ) => {
		if( Fs.existsSync( Path.normalize(`${ process.cwd() }${ from }`) ) ) {
			const allDependencies = GetDepTree( HELPER.NAME );
			const dependencies = [ ...new Set( flatten( allDependencies ) ) ];

			let code = '';

			dependencies.forEach( dependency => {
				if( Fs.existsSync( Path.normalize(`${ process.cwd() }/../${ dependency }${ from }`) ) ) {
					const fileLocation = Path.normalize(`${ to }/${ dependency }.js`);

					CopyFile( Path.normalize(`${ process.cwd() }/../${ dependency }${ from }`), `.${ fileLocation }` );

					HELPER.log.success(`Written file ${ Chalk.yellow( `.${ fileLocation }` ) }`);
				}
			});

		}
	};


	/**
	 * PUBLIC METHODS
	 */
	return {
		/**
		 * Starting off compile
		 */
		init: () => {
			HELPER.compile.sass();
			HELPER.compile.js();
		},

		/**
		 * Compile and autoprefix Sass
		 */
		sass: () => {
			let _hasJs = Fs.existsSync( Path.normalize(`${ process.cwd() }/lib/js/module.js`) );

			// 1. compile scss
			Sassify('./tests/site/test.scss', './tests/site/style.css');

			if( _hasJs ) {
				Sassify('./tests/jquery/test.scss', './tests/jquery/style.css');
			}

			// 2. autoprefixer
			Autoprefix('./tests/site/style.css');

			if( _hasJs ) {
				Autoprefix('./tests/jquery/style.css');
			}
		},

		js: () => {
			// get all js for module.js
			getAllJs( '/lib/js/module.js', '/tests/site/script.js' );

			// get all js for jquery.js
			getAllJs( '/lib/js/jquery.js', '/tests/jquery/jquery.js' );
			getAllJs( '/lib/js/module.js', '/tests/jquery/script.js' );

			// get all react scripts
			getAllReact( '/lib/js/react.js', '/tests/react/' );
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

/**
 * Dependencies
 */


HELPER.generate = (() => {
	/**
	 * PUBLIC METHODS
	 */
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
			let packageJson = {}; // each package.json
			let uikitJson = {};   // the uikit.json object

			// iterate over all packages
			if( allModules !== undefined && allModules.length > 0 ) {
				for( let module of allModules ) {
					const pkgPath = Path.normalize(`${ packagesPath }/${ module }/package.json`);
					packageJson = require( pkgPath ); // read the package.json

					uikitJson[ packageJson.name ] = { // add to uikit.json
						name: packageJson.name,
						version: packageJson.version,
						peerDependencies: packageJson.peerDependencies,
					};
				}
			}

			Fs.writeFile( Path.normalize(`${ __dirname }/../uikit.json`), JSON.stringify( uikitJson ), 'utf8', ( error ) => { // write file
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
			let index = Fs.readFileSync( Path.normalize(`${ __dirname }/../.templates/index/index.html`), 'utf-8'); // this will be the index file
			let replacement = '';

			// iterate over all packages
			if( allModules !== undefined && allModules.length > 0 ) {
				for( let module of allModules ) {
					const pkg = require( Path.normalize(`${ __dirname }/../packages/${ module }/package.json`) );
					let jquery = '';
					let react = '';

					if( pkg.pancake['pancake-module'].js ) {
						if( pkg.pancake['pancake-module'].js.jquery ) {
							jquery = `<br><a href="packages/${ module }/tests/jquery/">` +
									`<img src="https://img.shields.io/badge/js        -jquery-green.svg?colorA=313131&colorB=1B7991" alt="">` +
								`</a>`;
						}

						if( pkg.pancake['pancake-module'].js.react ) {
							react = `<br><a href="packages/${ module }/tests/react/">` +
									`<img src="https://img.shields.io/badge/js        -react-green.svg?colorA=313131&colorB=1B7991" alt="">` +
								`</a>`;
						}
					}

					replacement += `<li>` +
						`<a class="module-list__headline" href="${
						jquery === '' && react === ''
						? `packages/${ module }/tests/site/`
						: `packages/${ module }/tests/` }">` +
							`${ module }</a>${ jquery }${ react }` +
							`<br><a href="https://www.npmjs.com/package/@gov.au/${ module }">` +
								`<img src="https://img.shields.io/npm/v/@gov.au/${ module }.svg?label=version&colorA=313131&colorB=1B7991" alt="">` +
							`</a>` +
							`<br><a href="https://github.com/govau/uikit/tree/master/packages/${ module }">` +
								`<img src="https://img.shields.io/badge/docs    -readme-green.svg?colorA=313131&colorB=1B7991" alt="">` +
							`</a>` +
						`</li>\n`;
				}
			}

			index = index.replace('[-uikit-modules-]', replacement);

			Fs.writeFile(`${ __dirname }/../index.html`, index, 'utf8', ( error ) => { // write file
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

					list += `<details>\n`;
					list += `	<summary>@gov.au/${ module }</summary>\n`;
					list += `	<br><code>yarn add @gov.au/${ module }</code> or <code>npm install @gov.au/${ module }</code><br>\n`;
					list += `	<br>See the <a href="${ HELPER.URL }/packages/${ module }/tests/site/">visual test file for ${ module }</a>\n`;
					list += `	<br>See the <a href="${ HELPER.GITHUB }blob/master/packages/${ module }/README.md">readme file for ${ module }</a><br><br>\n`;

					if( tree === '' ) {
						list += `	<i>No dependencies</i>\n\n----------\n`;
					}
					else {
						list += `	Dependencies:\n	<br>\n\n`;
						list += `\`\`\`shell\n${ tree }\`\`\`\n----------\n`;
					}

					list += `</details>\n\n`;
				}
			}

			const pkgPath = Path.normalize(`${ __dirname }/../README.md`);
			let readme = Fs.readFileSync( pkgPath, `utf-8`);
			readme = readme.replace(/## Modules\n\n[\s\S]*?back to top]/, `## Modules\n\n${ list }<br>\n\n**[⬆ back to top]`);
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

/**
 * Dependencies
 */
const Inquirer = require('inquirer');


HELPER.scaffolding = (() => {
	/**
	 * PUBLIC METHODS
	 */
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
					'[-replace-name-capital-]':
						answers.name
							.split('')
							.reduce(
								( lastCharacter, thisCharacter, i ) => lastCharacter +
									( i === 0 ?
										thisCharacter.toUpperCase() :
										thisCharacter
									), ''
							),
					'[-replace-description-]': answers.description,
					'[-replace-URL-]': `${ HELPER.URL }/packages/${ answers.name }/tests/site/`,
					'[-replace-version-]': '0.1.0',
				};

				CopyTemp( template, destination, replacements ); // copy all files and replace placeholders inside of them

			});
		},
	}

})();



/***************************************************************************************************************************************************************
 *
 * TEST MODULE
 *
 * Testing dependencies
 *
 **************************************************************************************************************************************************************/

/**
 * Dependencies
 */


HELPER.test = (() => {
	/**
	 * PRIVATE
	 */
	const some = ( thisPath, verbose ) => {
	};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		init: () => {
			const packagesPath = Path.normalize(`${ __dirname }/../packages/`);
			const allModules = GetFolders( packagesPath );

			HELPER.test.dependencies( allModules );
		},

		/**
		 * Test all dependencies
		 *
		 * @param {array} allModules - An array of all modules
		 */
		dependencies: ( allModules ) => {
			let pancakes = {};
			let dependencies = [];

			if( allModules !== undefined && allModules.length > 0 ) {
				for( let module of allModules ) {
					const packagesPKG = require( Path.normalize(`${ __dirname }/../packages/${ module }/package.json`) );

					pancakes[ packagesPKG.name ] = packagesPKG.version; //adding to our library of pancakes

					for( const module of Object.keys( packagesPKG.peerDependencies ) ) {
						let version = packagesPKG.peerDependencies[ module ];

						dependencies.push({
							name: module,
							version: version,
							from: packagesPKG.name,
						})
					}
				}
			}

			for( const module of dependencies ) {
				if( !Semver.satisfies( pancakes[ module.name ], module.version ) ) {
					HELPER.log.error(`Peer Dependencies ${ module.name }:${ module.version } failed for ${ module.from }`);

					console.log('\n');
					process.exit( 1 );
				}
			}

			HELPER.log.success(`All pancakes without dependency conflicts`);
		},
	}

})();



/***************************************************************************************************************************************************************
 *
 * CLI MODULE
 *
 * Initiate application
 *
 **************************************************************************************************************************************************************/

/**
 * Dependencies
 */
const CFonts = require(`cfonts`);

/**
 * SCRIPT INIT
 **/
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


	if( process.argv.indexOf( 'test' ) !== -1 ) {
		CFonts.say( 'Testing', {
			font: 'chrome',
			space: false,
			colors: ['red', 'magenta', 'blue'],
		});

		CFonts.say(`... so you don't have to`, {
			font: 'console',
			space: false,
		});

		console.log(`\n`);
		HELPER.test.init();
	}
};

HELPER.init();

module.exports = HELPER;



/**
 * Handle exiting of program
 *
 * @param {null}   exiting - null for bind
 * @param {object} error   - Object to distinguish between closing events
 */
function ExitHandler( exiting, error ) {
	if( error ) {
		if( error.stack ) {
			console.error( error.stack );
		}

		process.exit( 1 );
	}

	if( exiting.now ) {
		process.exit( 0 ); // exit now
	}

	console.log('\n');

	process.exit( 0 ); // now exit with a smile :)
}

process.on( 'exit', ExitHandler.bind( null, { now: false } ) );              // on closing
process.on( 'SIGINT', ExitHandler.bind( null, { now: true } ) );             // on [ctrl] + [c]
process.on( 'uncaughtException', ExitHandler.bind( null, { now: true } ) );  // on uncaught exceptions
