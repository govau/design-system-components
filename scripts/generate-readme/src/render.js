const { renderToStaticMarkup } = require( 'react-dom/server' );
const Babel = require( '@babel/core' );
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
		minified: true,
		comments: false
	}).code;
}


const RenderHTML = ( react ) => {
	// Parse React code to commonJS
	let commonjs = TransformCode( react );

	// Evalulate commonjs code
	const Component = eval( commonjs );
	
	// Extract static markup from react source
	let html = renderToStaticMarkup( Component );

	return html;
}


/**
 * 
 * @param {object} reactSource - Object of file paths
 */
const RenderReactPropsMarkdownTable = async ( reactSource ) => {
	if( reactSource ) {
		console.log(reactSource);
		let docs = ReactDocs.parse( reactSource );
		let result = `Prop name | Type | Description\n--- | --- | ---\n`;
	
		Object.entries( docs.props ).forEach( ( [key, value] ) => {
			result += `${key} | ${value.type.name} | ${value.description}\n`
		})
	
		return result;
	}
	return "";
}

module.exports.RenderHTML = RenderHTML;
module.exports.RenderReactPropsMarkdownTable = RenderReactPropsMarkdownTable;
