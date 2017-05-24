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


/**
 * The checkbox component
 *
 * @param  {string}   label    - The label
 * @param  {string}   name     - The name of the input element
 * @param  {string}   value    - The value of the input element
 * @param  {boolean}  checked  - The check option
 * @param  {boolean}  disabled - The disable option
 * @param  {boolean}  full     - The full variant option
 * @param  {function} onChange - A callback for onChange
 */
export const Checkbox = ({ label, name, value, checked, disabled, full, onChange }) => (
	<label className={ `uikit-control-input${ full ? ' uikit-control-input--full' : '' }` }>
		<input className="uikit-control-input__input" type="checkbox" name={ name } disabled={ disabled } checked={ checked } onChange={ onChange } />
		<span className="uikit-control-input__text">{ label }</span>
	</label>
);

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	onChange: PropTypes.func,
};

Checkbox.defaultProps = {
	onChange: function() {},
};


/**
 * The radio component
 *
 * @param  {string}   label    - The label
 * @param  {string}   name     - The name of the input element
 * @param  {string}   value    - The value of the input element
 * @param  {boolean}  checked  - The check option
 * @param  {boolean}  disabled - The disable option
 * @param  {boolean}  full     - The full variant option
 * @param  {function} onChange - A callback for onChange
 */
export const Radio = ({ label, name, value, checked, disabled, full, onChange }) => (
	<label className={ `uikit-control-input${ full ? ' uikit-control-input--full' : '' }` }>
		<input className="uikit-control-input__input" type="radio" name={ name } disabled={ disabled } checked={ checked } onChange={ onChange } />
		<span className="uikit-control-input__text">{ label }</span>
	</label>
);

Radio.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	onChange: PropTypes.func,
};

Radio.defaultProps = {
	onChange: function() {},
};
