// Dependencies
const Fs = require( 'fs' );
const Fsp = Fs.promises;
const Path = require( 'path' );
const JSDoc = require( 'jsdoc-to-markdown' );
const { GetMonoDepTree, PrintTreeTrim } = require( 'pkg-dep-tree' );

// Local Dependencies
const { GetFolders } = require( './helper' );
const Config = require( './config' );
const { RenderHTML, RenderReactPropsMarkdownTable } = require( './render' );


// Start thing
( async () => {	
	let components = await GetFolders( Config.workspace );
	
	let packageMeta = JSON.parse( await Fsp.readFile( `${components[ 0 ]}/package.json` ) );
	let packageNamePlain = packageMeta.name.split('/')[1]

	let sourceFiles = { "files": `${ components[ 0 ] }/src/js/react.js` }
	let sourceFileContent = await Fsp.readFile( sourceFiles.files, `utf-8` );

	// console.log( ReactDocs.parse( sourceFileContent ) );
	let readme = `${packageMeta.name}
---
${packageMeta.description}

## Install

\`\`\`bash
yarn add ${packageMeta.name}
\`\`\`
\`\`\`bash
npm i ${packageMeta.name}
\`\`\`

## Usage
### HTML
\`\`\`html
${ RenderHTML( sourceFileContent ) }
\`\`\`

### React
\`\`\`jsx
todo
\`\`\`

## Props
${ await RenderReactPropsMarkdownTable( sourceFileContent ) }

## Dependency Graph
\`\`\`bash
${ packageNamePlain }
${ await( PrintTreeTrim( await GetMonoDepTree( Config.workspace, packageNamePlain, '@gov.au') ) ) }
\`\`\`

## Test
https://auds.service.gov.au/packages/${packageNamePlain}/tests/site/
`
	await Fsp.writeFile( `${components[ 0 ]}/README-GEN.md`, readme )
})();
