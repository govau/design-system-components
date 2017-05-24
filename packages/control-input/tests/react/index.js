import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox, Radio } from './control-input.js';


ReactDOM.render(
	<div>
		<h2>checkboxes</h2>
		<p><Checkbox label="Phone" name="checkbox-ex" value="phone" /></p>
		<p><Checkbox label="Tablet" name="checkbox-ex" value="tablet" checked /></p>
		<p><Checkbox label="Laptop" name="checkbox-ex" value="laptop" /></p>
		<p><Checkbox label="Fax" name="checkbox-ex" value="fax" disabled /></p>
		<p><Checkbox label="Fax" name="checkbox-ex" value="fax" disabled checked /></p>


		<hr />
		<h2>checkboxes variation <code>--full</code></h2>
		<p><Checkbox full label="Phone" name="checkbox-ex2" value="phone" /></p>
		<p><Checkbox full label="Tablet" name="checkbox-ex2" value="tablet" checked /></p>
		<p><Checkbox full label="Laptop" name="checkbox-ex2" value="laptop" /></p>
		<p><Checkbox full label="Fax" name="checkbox-ex2" value="fax" disabled /></p>
		<p><Checkbox full label="Fax" name="checkbox-ex2" value="fax" disabled checked /></p>


		<hr />
		<h2>radio buttons</h2>
		<p><Radio label="Yes" name="radio-ex" value="yes" /></p>
		<p><Radio label="Maybe" name="radio-ex" value="maybe" /></p>
		<p><Radio label="No" name="radio-ex" value="no" /></p>
		<p><Radio label="What?" name="radio-ex" value="what" disabled checked /></p>


		<hr />
		<h2>radio buttons variation <code>--full</code></h2>
		<p><Radio full label="Yes" name="radio-ex2" value="yes" /></p>
		<p><Radio full label="Maybe" name="radio-ex2" value="maybe" /></p>
		<p><Radio full label="No" name="radio-ex2" value="no" /></p>
		<p><Radio full label="What?" name="radio-ex2" value="what" disabled checked /></p>


		<hr />
		<h2>checkbox and radio buttons with <code>onChange</code></h2>
		<p>
			<Checkbox label="Phone" name="checkbox-ex" value="phone"
				onChange={ () => { console.log('This function will run when the checkbox is changed'); } }
			/>
		</p>
		<p>
			<Radio label="Yes" name="radio-ex2" value="yes"
				onChange={ () => { console.log('This function will run when the radio button is changed'); } }
			/>
		</p>

	</div>,

	document.getElementById('root'),
);
