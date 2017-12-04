/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * control-input function
 *
 * Control inputs include radio buttons and checkboxes. They allow users to select one or more options.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	dark: 'au-control-input--dark',
};


/**
 * The checkbox component
 *
 * @param  {string}   theme    - The colour theme of the component
 * @param  {string}   label    - The label
 * @param  {string}   name     - The name of the input element
 * @param  {string}   value    - The value of the input element
 * @param  {string}   id       - The id of the input element, for additional labels, optional
 * @param  {boolean}  checked  - The check option, optional
 * @param  {boolean}  disabled - The disable option, optional
 * @param  {boolean}  full     - The full variant option, optional
 * @param  {function} onChange - A callback for onChange, optional
 */
export const Checkbox = ({ theme, label, name, value, id, checked, disabled, full, onChange }) => {
	const attributeOptions = {};

	if( typeof id !== 'undefined' ) {
		attributeOptions.id = id;
	}

	if( typeof checked !== 'undefined' ) {
		attributeOptions.checked = checked;
	}

	if( typeof onChange === 'function' ) {
		attributeOptions.onChange = onChange;
	}

	return (
		<label className={ `au-control-input${ full ? ' au-control-input--full' : '' } ${ theme ? themes[ theme ] : '' }` }>
			<input className="au-control-input__input" type="checkbox" name={ name } disabled={ disabled } { ...attributeOptions } />
			<span className="au-control-input__text">{ label }</span>
		</label>
	);
};

Checkbox.propTypes = {
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	onChange: PropTypes.func,
};

Checkbox.defaultProps = {
	theme: 'light',
};


/**
 * The radio component
 *
 * @param  {string}   theme    - The colour theme of the component
 * @param  {string}   label    - The label
 * @param  {string}   name     - The name of the input element
 * @param  {string}   value    - The value of the input element
 * @param  {string}   id       - The id of the input element, for additional labels, optional
 * @param  {boolean}  checked  - The check option, optional
 * @param  {boolean}  disabled - The disable option, optional
 * @param  {boolean}  full     - The full variant option, optional
 * @param  {function} onChange - A callback for onChange, optional
 */
export const Radio = ({ theme, label, name, value, id, checked, disabled, full, onChange }) => {
	const attributeOptions = {};

	if( typeof id !== 'undefined' ) {
		attributeOptions.id = id;
	}

	if( typeof checked !== 'undefined' ) {
		attributeOptions.checked = checked;
	}

	if( typeof onChange !== 'undefined' ) {
		attributeOptions.onChange = onChange;
	}

	return (
		<label className={ `au-control-input${ full ? ' au-control-input--full' : '' }${ theme ? ` ${ themes[ theme ] }` : '' }` }>
			<input className="au-control-input__input" type="radio" name={ name } disabled={ disabled } { ...attributeOptions } />
			<span className="au-control-input__text">{ label }</span>
		</label>
	);
};

Radio.propTypes = {
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	onChange: PropTypes.func,
};

Radio.defaultProps = {
	theme: 'light',
};
