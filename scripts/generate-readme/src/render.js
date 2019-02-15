// Dependencies
const Marked = require( 'marked' );
const ReactDOMServer = require( 'react-dom/server' );
const Babel = require( '@babel/core' );
const Prism = require( 'prismjs' );
const PrismLanguage = require( 'prismjs/components/');
const ReactDocs = require( 'react-docgen' );


/**
 * Transform ES6 or JSX into CommonJS.
 * @param {string} code - Code to transpile
 * 
 * @returns {string} - CommonJS string output
 */
const TransformCode = ( code ) => {
	return Babel.transform( code, {
		presets: [ '@babel/preset-react', '@babel/preset-env' ],
		minified: false,
		comments: false
	}).code;
}


/**
 * 
 * @param {string} html 
 * @param {string} react 
 */
const FormatHTML = ( html, react ) => {
	PrismLanguage( [ 'jsx' ] );

	let HTMLOutput = "";

	HTMLOutput += `<div class="code-example-html">${ Prism.highlight( html, Prism.languages.html, 'html') }</div>`
	HTMLOutput += `<div class="code-example-react">${ Prism.highlight( react, Prism.languages.jsx, 'jsx') }</div>`
	HTMLOutput += `${ html }`
	
	return HTMLOutput;
}


/**
 * 
 * @param {string} react - The react source file contents
 */
const RenderHTML = ( react ) => {
	// Parse React code to commonJS
	let commonJS = TransformCode( react );
	// Extract static markup from react source
	let html = ReactDOMServer.renderToStaticMarkup( eval( commonJS ) );

	return html;
}


/**
 * Given a markdown file with the code keyword 'example', 
 * return the first entry with said example
 * 
 * @param {string} markdown 
 * 
 * @returns {string} 
 */
const RenderExample = ( markdown ) => {
	const MarkdownRenderer = new Marked.Renderer();
	const codeSnippets = [];

	MarkdownRenderer.code = ( code, languages ) => {
		if( languages.includes( 'example' ) ){
			codeSnippets.push( code );
		}
	}

	// Run Marked so that we populate the array
	Marked( markdown, { renderer: MarkdownRenderer });

	// Return first code snippet example
	return codeSnippets[ 0 ];
}


const RenderMarkdownCode = ( markdown ) => {
    const MarkdownRenderer = new Marked.Renderer();
    
    MarkdownRenderer.code = ( code, languages ) => {
        if( languages.includes( 'example' ) ){
			//@TODO Append token `import React from 'react';` to example
			
            return RenderHTML( code )
		}
		else {
            return `<code>${ code }</code>`;
		}
	}
    
    return Marked( markdown, { renderer: MarkdownRenderer, breaks: true } );
}


/**
 * 
 * @param {object} reactSource - Object of file paths
 */
const RenderReactPropsMarkdownTable = async ( reactSource ) => {
	let docs = ReactDocs.parse( reactSource );
	let result = `Prop name | Type | Description\n--- | --- | ---\n`;

	Object.entries( docs.props ).forEach( ( [key, value] ) => {
		result += `${key} | ${value.type.name} | ${value.description}\n`
	})

	return result;
}

// module.exports.Render = RenderMarkdownCode;
// module.exports.RenderExample = RenderExample;
module.exports.RenderHTML = RenderHTML;
module.exports.RenderReactPropsMarkdownTable = RenderReactPropsMarkdownTable;
// module.exports.RenderJSX = RenderJSX;