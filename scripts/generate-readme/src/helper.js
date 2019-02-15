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


module.exports.GetFolders = GetFolders;