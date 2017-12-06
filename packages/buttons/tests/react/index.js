import React from 'react';
import ReactDOM from 'react-dom';

import Button from './buttons.js';


ReactDOM.render(
	<form>
		<div className="split-wrapper">
			<div className="split">
				<h2>primary button</h2>
				<Button>Continue</Button>&nbsp;
				<Button disabled>Continue</Button>


				<hr />
				<h2>secondary button</h2>
				<Button as='secondary'>Save</Button>&nbsp;
				<Button as='secondary' disabled>Save</Button>


				<hr />
				<h2>tertiary button</h2>
				<Button as='tertiary'>Cancel</Button>&nbsp;
				<Button as='tertiary' disabled>Cancel</Button>


				<hr />
				<h2>buttons with block</h2>
				<Button block>Continue</Button>
				<Button as='secondary' block>Save</Button>
				<Button as='tertiary' block>Cancel</Button>


				<hr />
				<h2>buttons with different type</h2>
				<Button type="submit">Submit</Button>&nbsp;
				<Button type="button">Button</Button>&nbsp;
				<Button type="reset">Reset</Button>


				<hr />
				<h2>buttons with onClick</h2>
				<p>
					<Button onClick={ () => console.log('This function will be called when the primary button is clicked') }>log it</Button>
				</p>
				<p>
					<Button as='secondary' onClick={ () => console.log('This function will be called when the secondary button is clicked') }>log it</Button><br />
				</p>
				<p>
					<Button as='tertiary' onClick={ () => console.log('This function will be called when the tertiary button is clicked') }>log it</Button>
				</p>
			</div>
			<div className="split split--dark">
				<h2>primary button <code>--dark</code></h2>
				<Button dark>Continue</Button>&nbsp;
				<Button dark disabled>Continue</Button>


				<hr />
				<h2>secondary button <code>--dark</code></h2>
				<Button dark as='secondary'>Save</Button>&nbsp;
				<Button dark as='secondary' disabled>Save</Button>


				<hr />
				<h2>tertiary button <code>--dark</code></h2>
				<Button dark as='tertiary'>Cancel</Button>&nbsp;
				<Button dark as='tertiary' disabled>Cancel</Button>


				<hr />
				<h2>buttons with block <code>--dark</code></h2>
				<Button dark block>Continue</Button>
				<Button dark as='secondary' block>Save</Button>
				<Button dark as='tertiary' block>Cancel</Button>


				<hr />
				<h2>buttons with different type <code>--dark</code></h2>
				<Button dark type="submit">Submit</Button>&nbsp;
				<Button dark type="button">Button</Button>&nbsp;
				<Button dark type="reset">Reset</Button>


				<hr />
				<h2>buttons with onClick <code>--dark</code></h2>
				<p>
					<Button dark onClick={ () => console.log('This function will be called when the primary button is clicked') }>log it</Button>
				</p>
				<p>
					<Button dark as='secondary' onClick={ () => console.log('This function will be called when the secondary button is clicked') }>log it</Button><br />
				</p>
				<p>
					<Button dark as='tertiary' onClick={ () => console.log('This function will be called when the tertiary button is clicked') }>log it</Button>
				</p>
			</div>
		</div>
	</form>,

	document.getElementById('root'),
);
