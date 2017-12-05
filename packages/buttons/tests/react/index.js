import React from 'react';
import ReactDOM from 'react-dom';

import Button from './buttons.js';


ReactDOM.render(
	<form>
		<div className="split-wrapper">
			<div className="split">
				<h2>primary button</h2>
				<Button text="Continue" />&nbsp;
				<Button text="Continue" disabled />


				<hr />
				<h2>secondary button</h2>
				<Button as='secondary' text="Save" />&nbsp;
				<Button as='secondary' text="Save" disabled />


				<hr />
				<h2>tertiary button</h2>
				<Button as='tertiary' text="Cancel" />&nbsp;
				<Button as='tertiary' text="Cancel" disabled />


				<hr />
				<h2>buttons with block</h2>
				<Button text="Continue" block />
				<Button as='secondary' text="Save" block />
				<Button as='tertiary' text="Cancel" block />


				<hr />
				<h2>buttons with different type</h2>
				<Button type="submit" text="Submit" />&nbsp;
				<Button type="button" text="Button" />&nbsp;
				<Button type="reset" text="Reset" />


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
			</div>
			<div className="split split--dark">
				<h2>primary button <code>--dark</code></h2>
				<Button dark text="Continue" />&nbsp;
				<Button dark text="Continue" disabled />


				<hr />
				<h2>secondary button <code>--dark</code></h2>
				<Button dark as='secondary' text="Save" />&nbsp;
				<Button dark as='secondary' text="Save" disabled />


				<hr />
				<h2>tertiary button <code>--dark</code></h2>
				<Button dark as='tertiary' text="Cancel" />&nbsp;
				<Button dark as='tertiary' text="Cancel" disabled />


				<hr />
				<h2>buttons with block <code>--dark</code></h2>
				<Button dark text="Continue" block />
				<Button dark as='secondary' text="Save" block />
				<Button dark as='tertiary' text="Cancel" block />


				<hr />
				<h2>buttons with different type <code>--dark</code></h2>
				<Button dark type="submit" text="Submit" />&nbsp;
				<Button dark type="button" text="Button" />&nbsp;
				<Button dark type="reset" text="Reset" />


				<hr />
				<h2>buttons with onClick <code>--dark</code></h2>
				<p>
					<Button dark text="log it" onClick={ () => console.log('This function will be called when the primary button is clicked') } />
				</p>
				<p>
					<Button dark as='secondary' text="log it" onClick={ () => console.log('This function will be called when the secondary button is clicked') } /><br />
				</p>
				<p>
					<Button dark as='tertiary' text="log it" onClick={ () => console.log('This function will be called when the tertiary button is clicked') } />
				</p>
			</div>
		</div>
	</form>,

	document.getElementById('root'),
);
