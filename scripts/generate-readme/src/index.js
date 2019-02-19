// Dependencies
const Fs = require( 'fs' );
const Fsp = Fs.promises;
const Path = require( 'path' );
const JSDoc = require( 'jsdoc-to-markdown' );
const { GetMonoDepTree, PrintTreeTrim } = require( 'pkg-dep-tree' );

// Local Dependencies
const { GetFolders, FileExists } = require( './helper' );
const Config = require( './config' );
const { RenderHTML, RenderReactJSX, RenderReactPropsMarkdownTable } = require( './render' );


// Start da fing
( async () => {
	let components = await GetFolders( Config.workspace );
	// @todo - Test with a single component...
	let component = components[ 0 ]; 

	let hasJS = await FileExists( `${ component }/src/js/module.js` );
	let hasReact = await FileExists( `${ component }/src/js/react.js` );
	let hasjQuery = await FileExists( `${ component }/src/js/jquery.js` );

	let packageMeta = JSON.parse( await Fsp.readFile( `${ component }/package.json` ) );
	let packageNamePlain = packageMeta.name.split('/')[1]
	
	let sourceFiles;
	let sourceFileContent;

	if ( hasReact ){
		sourceFiles = { "files": `${ component }/src/js/react.js` }
		sourceFileContent = await Fsp.readFile( sourceFiles.files, `utf-8` );
	}
	
	let readme = `${packageMeta.name}
---
> ${packageMeta.description}

## Install

\`\`\`bash
yarn add ${packageMeta.name}
\`\`\`
\`\`\`bash
npm i ${packageMeta.name}
\`\`\`


${ hasReact
? `## Usage\n### HTML
\`\`\`html
${ RenderHTML( sourceFileContent ) }
\`\`\`

### React
\`\`\`jsx
import AU${ packageNamePlain } from "@gov.au/${packageNamePlain}";

${ RenderReactJSX( sourceFileContent ) }
\`\`\``
: ``}

${ hasReact
? `## Props\n${ await RenderReactPropsMarkdownTable( sourceFileContent ) }`
: ""}

## Dependency graph
\`\`\`bash
${ packageNamePlain }
${ await( PrintTreeTrim( await GetMonoDepTree( Config.workspace, packageNamePlain, '@gov.au') ) ) }
\`\`\`

## Latest updates
For the latest release notes, check out the [CHANGELOG.md](https://raw.githubusercontent.com/govau/design-system-components/master/packages/${ packageNamePlain }/CHANGELOG.md) file.

## Test preview
https://auds.service.gov.au/packages/${ packageNamePlain }/tests/site/

## License
Copyright (c) Commonwealth of Australia. Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/master/packages/${ packageNamePlain }/LICENSE).
`
	await Fsp.writeFile( `${ component }/README-GEN.md`, readme ) // @todo - Update output filename.
})();
