const Fs = require( 'fs' );
const Fsp = Fs.promises;


/**
 * IsDirectory - Check if a path location is a directory.
 *
 * @param {string} source - The location of the file
 */
const IsDirectory = ( source ) => {
	try {
		return Fs.lstatSync( source ).isDirectory();
	}
	catch( error ) {
		console.error( error );
	}
	return false;
}


/**
 * GetFolder - Gets all the folders inside a path location.
 *
 * @param {string} folderLocation - The path location of the root folder.
 */
const GetFolders = async ( folderLocation ) => {
	try{ 
		// Get the contents inside the folder
		const folderContents = await Fsp.readdir( folderLocation, { withFileTypes: true } );

		// Filter the contents and return only directories
		return folderContents
			.map( source => `${ folderLocation }/${ source.name }` )
			.filter( IsDirectory );
	}
	catch( error ) {
		console.error( error );
	}

	return [];
}


/**
 * Return true if a component folder location has a `jquery.js` file.
 * 
 * @param {string} folderLocation - Component folder location.
 */
const FileExists = async ( fileLocation ) => {
	try {
		return ( await Fsp.stat( fileLocation ) ).isFile()
	}
	catch( error ) {
		console.error( `❌  Bollocks! It looks like: ${ fileLocation } doesn't exist!` );
	}
	return false;
}


module.exports.GetFolders = GetFolders;
module.exports.FileExists = FileExists;
