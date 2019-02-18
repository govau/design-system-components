// Dependencies
const Fs = require( 'fs' );
const Fsp = Fs.promises;

/**
 * IsDirectory - Check if a location is a file or a directory
 *
 * @param {string} source - The location of the file
 */
const IsDirectory = ( source ) => {
	return Fs.lstatSync( source ).isDirectory();
}

/**
 * GetFolder - Gets all the folders inside a location
 *
 * @param {*} folderLocation - The location of the folder to get folders from
 */
const GetFolders = async ( folderLocation ) => {	
	// Get the contents inside the folder
	const folderContents = await Fsp.readdir( folderLocation, { withFileTypes: true } );
	
	// Filter the contents and return only directories
	return folderContents.map( source => `${ folderLocation }/${ source.name }` ).filter( IsDirectory );
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
		console.error( error );
	}
	return false;
}



module.exports.GetFolders = GetFolders;
module.exports.FileExists = FileExists;