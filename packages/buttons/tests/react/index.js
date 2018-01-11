import React from 'react';
import ReactDOM from 'react-dom';

import AUbutton from './buttons.js';


ReactDOM.render(
	<form>
		<div className="split-wrapper">
			<div className="split">
				<h2>primary button</h2>
				<AUbutton>Continue</AUbutton>&nbsp;
				<AUbutton id='testforID' disabled>Continue</AUbutton>


				<hr />
				<h2>secondary button</h2>
				<AUbutton as='secondary'>Save</AUbutton>&nbsp;
				<AUbutton as='secondary' disabled>Save</AUbutton>


				<hr />
				<h2>tertiary button</h2>
				<AUbutton as='tertiary'>Cancel</AUbutton>&nbsp;
				<AUbutton as='tertiary' disabled>Cancel</AUbutton>


				<hr />
				<h2>buttons with additional class</h2>
				<AUbutton className="testing">Primary</AUbutton>&nbsp;
				<AUbutton className="testing" as='secondary'>Secondary</AUbutton>&nbsp;
				<AUbutton className="testing" as='tertiary'>Tertiary</AUbutton>


				<hr />
				<h2>buttons with block</h2>
				<AUbutton block>Continue</AUbutton>
				<AUbutton as='secondary' block>Save</AUbutton>
				<AUbutton as='tertiary' block>Cancel</AUbutton>


				<hr />
				<h2>buttons with different type</h2>
				<AUbutton type="submit">Submit</AUbutton>&nbsp;
				<AUbutton type="button">Button</AUbutton>&nbsp;
				<AUbutton type="reset">Reset</AUbutton>


				<hr />
				<h2>buttons with onClick</h2>
				<p>
					<AUbutton onClick={ () => console.log('This function will be called when the primary button is clicked') }>log it</AUbutton>
				</p>
				<p>
					<AUbutton as='secondary' onClick={ () => console.log('This function will be called when the secondary button is clicked') }>log it</AUbutton><br />
				</p>
				<p>
					<AUbutton as='tertiary' onClick={ () => console.log('This function will be called when the tertiary button is clicked') }>log it</AUbutton>
				</p>


				<hr />
				<h2>buttons as link</h2>
				<AUbutton href="#">Primary</AUbutton>&nbsp;
				<AUbutton href="#" as='secondary'>Secondary</AUbutton>&nbsp;
				<AUbutton href="#" as='tertiary'>Tertiary</AUbutton>

			</div>
			<div className="split split--dark">
				<h2>primary button <code>--dark</code></h2>
				<AUbutton dark>Continue</AUbutton>&nbsp;
				<AUbutton dark disabled>Continue</AUbutton>


				<hr />
				<h2>secondary button <code>--dark</code></h2>
				<AUbutton dark as='secondary'>Save</AUbutton>&nbsp;
				<AUbutton dark as='secondary' disabled>Save</AUbutton>


				<hr />
				<h2>tertiary button <code>--dark</code></h2>
				<AUbutton dark as='tertiary'>Cancel</AUbutton>&nbsp;
				<AUbutton dark as='tertiary' disabled>Cancel</AUbutton>


				<hr />
				<h2>buttons with additional class <code>--dark</code></h2>
				<AUbutton className="testing" dark>Primary</AUbutton>&nbsp;
				<AUbutton className="testing" dark as='secondary'>Secondary</AUbutton>&nbsp;
				<AUbutton className="testing" dark as='tertiary'>Tertiary</AUbutton>


				<hr />
				<h2>buttons with block <code>--dark</code></h2>
				<AUbutton dark block>Continue</AUbutton>
				<AUbutton dark as='secondary' block>Save</AUbutton>
				<AUbutton dark as='tertiary' block>Cancel</AUbutton>


				<hr />
				<h2>buttons with different type <code>--dark</code></h2>
				<AUbutton dark type="submit">Submit</AUbutton>&nbsp;
				<AUbutton dark type="button">Button</AUbutton>&nbsp;
				<AUbutton dark type="reset">Reset</AUbutton>


				<hr />
				<h2>buttons with onClick <code>--dark</code></h2>
				<p>
					<AUbutton dark onClick={ () => console.log('This function will be called when the primary button is clicked') }>log it</AUbutton>
				</p>
				<p>
					<AUbutton dark as='secondary' onClick={ () => console.log('This function will be called when the secondary button is clicked') }>log it</AUbutton><br />
				</p>
				<p>
					<AUbutton dark as='tertiary' onClick={ () => console.log('This function will be called when the tertiary button is clicked') }>log it</AUbutton>
				</p>


				<hr />
				<h2>buttons as link</h2>
				<AUbutton href="#" dark>Primary</AUbutton>&nbsp;
				<AUbutton href="#" dark as='secondary'>Secondary</AUbutton>&nbsp;
				<AUbutton href="#" dark as='tertiary'>Tertiary</AUbutton>
			</div>
		</div>
	</form>,

	document.getElementById('root'),
);
