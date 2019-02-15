// Dependencies
const Path = require( 'path' );
const Fs = require( 'fs' );

module.exports = {
    "workspace": Path.join( __dirname, `/../../../components` ),
    "prismTheme": Fs.readFileSync( Path.join( __dirname, '/../node_modules/prismjs/themes/prism-dark.css' ), 'utf-8' )
}