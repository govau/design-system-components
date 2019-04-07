/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * file-upload function
 *
 * Select and upload a file
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * The file upload component
 * 
 * @param  {string}  id               - The label ID, required
 * @param  {string}  name             - The input name to match the ID, required
 * @param  {string}  text             - Text of the label, required
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUfileUpload = ( { id, name, text, ...attributeOptions } ) => (
	<div className="au-file-upload au-form-group">
		<label className="au-label" htmlFor={ id } { ...attributeOptions }>{ text }</label>
		<input className="au-file-input" type="file" id={ name }></input>
	</div>
);


AUfileUpload.propTypes = {
	/**
	 * The file input ID
	 */
	id: PropTypes.string.isRequired,
	/**
	 * The label name to match the ID
	 */
	name: PropTypes.string.isRequired,
	/**
	 * The label text description
	 */
	text: PropTypes.string.isRequired,
};


AUfileUpload.defaultProps = {};


export default AUfileUpload;
