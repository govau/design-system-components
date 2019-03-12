import React from 'react';
import ReactDOM from 'react-dom';

import {AUlabel, AUhintText, AUerrorText, AUformGroup} from './form.js';
import AUtextInput from '@gov.au/text-inputs';
import AUheading from '@gov.au/headings';
import { AUfieldset } from '../../src/js/react';

class App extends React.Component {
	render() {
		return (
			<div class="split-wrapper au-body">
				<div className="split">
					<h3>Label</h3>
					<p>
						<AUlabel title="Password" htmlFor="label" />
						<AUtextInput id="label" />
					</p>
					<hr/>

					<h3>Label <code>--inline</code> </h3>
					<p>
						<AUlabel title="Password" htmlFor="label-inline" inline />
						<AUtextInput id="label-inline" />
					</p>
					<hr/>

					<h3>Hint Text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-hint" />
						<AUhintText title="Minimum 6 characters" id="hint-text"/>
						<AUtextInput id="pw-with-hint" aria-describedby="hint-text"/>
					</p>
					<hr/>

					<h3>Error text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error" />
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error"/>
						<AUerrorText title="Password was not 6 characterts" id="error-text" />
						<AUtextInput id="pw-with-error" aria-describedby="error-text hint-text-with-error" status="invalid" />
					</p>
					<hr/>

					<h3>Error text bottom</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-bottom" />
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-bottom"/>
						<AUtextInput id="pw-with-error-bottom" aria-describedby="error-text-bottom hint-text-with-error-bottom" status="invalid" />
						<AUerrorText title="Password was not 6 characterts" id="error-text-bottom" />
					</p>
					<hr/>

					<h3>Form group</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username" />
							<AUtextInput id="fg-username"/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel title="Password" htmlFor="fg-password" />
							<AUhintText title="Minimum 6 characters" id="fg-hint-text"/>
							<AUtextInput id="fg-password" aria-describedby="fg-hint-text" />
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code></h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username" />
							<AUtextInput id="fg-username"/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password" />
							<AUhintText title="Minimum 6 characters" id="fg-hint-text"/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text" />
							<AUtextInput id="fg-password" aria-describedby="fg-hint-text fg-error-text" status="invalid" />
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code> bottom</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-err-bottom" />
							<AUtextInput id="fg-username-err-bottom"/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-err-bottom" />
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-err-bottom"/>
							<AUtextInput id="fg-password-err-bottom" aria-describedby="fg-hint-text-err-bottom fg-error-text-err-bottom" status="invalid" />
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-err-bottom" />
						</AUformGroup>
					<hr/>

					<h3>Fieldset</h3>
					<AUfieldset>
						<legend class="au-fieldset--heading">
							<AUheading level="1" size="xl">
								What is your address?
							</AUheading>
						</legend>
						

					</AUfieldset>
				</div>
			</div>
		);
	}
}


export default App;

ReactDOM.render(<App />,

	document.getElementById('root'),
);
