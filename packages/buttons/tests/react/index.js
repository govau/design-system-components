import React from 'react';
import ReactDOM from 'react-dom';

import Button from './buttons.js';


ReactDOM.render(
	<form>
		<h2>primary button</h2>
		<Button text="Continue" /> <Button text="Continue" disabled />


		<hr />
		<h2>secondary button</h2>
		<Button as='secondary' text="Save" /> <Button as='secondary' text="Save" disabled />


		<hr />
		<h2>tertiary button</h2>
		<Button as='tertiary' text="Cancel" /> <Button as='tertiary' text="Cancel" disabled />


		<hr />
		<h2>buttons with block</h2>
		<Button text="Continue" block /> <Button as='secondary' text="Save" block /> <Button as='tertiary' text="Cancel" block />


		<hr />
		<h2>buttons with different type</h2>
		<Button type="submit" text="Submit" /> <Button type="button" text="Button" /> <Button type="reset" text="Reset" />


		<hr />
		<h2>buttons with onClick</h2>
		<p>
			<Button text="log it" onClick={ () => console.log('This function will be called when the primary button is clicked') } />
		</p>
		<p>
			<Button as='secondary' text="log it" onClick={ () => console.log('This function will be called when the secondary button is clicked') } /><br />
		</p>
		<p>
			<Button as='tertiary' text="log it" onClick={ () => console.log('This function will be called when the tertiary button is clicked') } />
		</p>
	</form>,

	document.getElementById('root'),
);
