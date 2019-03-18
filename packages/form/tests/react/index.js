import React from 'react';
import ReactDOM from 'react-dom';

import { AUlabel, AUhintText, AUerrorText, AUformGroup, AUfieldset } from './form.js';
import AUtextInput from '../../../text-inputs';
import AUheading from '../../../headings';
import AUselect from '../../../select';
import { AUcheckbox } from '../../../control-input';

class App extends React.Component {

	render() {
		const states = [
			{ value: '', text: 'Please select'},
			{ value: '1', text: 'ACT' },
			{ value: '2', text: 'VIC' },
			{ value: '3', text: 'NSW' },
			];
		return (
			<div className="split-wrapper au-body">
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

					<h3>Fieldsets</h3>
					<br/>
					<AUfieldset>
						<legend className="au-fieldset__legend">
							<AUheading level="2" size="lg">
								What is your address?
							</AUheading>
						</legend>
						<AUformGroup>
							<AUlabel htmlFor="address-1" title="Street and number" />
							<AUtextInput id="address-1" width="lg" />
						</AUformGroup>
						<AUformGroup>
							<AUlabel htmlFor="address-2" title="Suburb" />
							<AUtextInput id="address-2" width="lg" />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="select1" title="State" />
							<AUselect id="select1" options={states} />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4" title="Postcode" />
							<AUtextInput id="address-4" width="sm" />
						</AUformGroup>

					</AUfieldset>
					<hr/>

					<h3>Fieldsets with <code>--invalid</code></h3>
					<br/>
					<AUfieldset>
						<legend className="au-fieldset__legend">
							<AUheading level="2" size="lg">
								What is your address?
							</AUheading>
						</legend>
						<AUformGroup>
							<AUlabel htmlFor="address-1-err" title="Street and number" />
							<AUtextInput id="address-1-err" width="lg" />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-2-err" title="Suburb" />
							<AUtextInput id="address-2-err" width="lg" />
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel htmlFor="select1-err" title="State" />
							<AUerrorText title="A state was not selected" id="fg-error-text-err-bottom" />
							<AUselect status="invalid" id="select1-err" options={states} />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-err" title="Postcode" />
							<AUtextInput id="address-4-err" width="sm" />
						</AUformGroup>

					</AUfieldset>

					<hr/>

					<h3>Fieldsets with control inputs <code>--invalid</code></h3>
					<p></p>
					<AUformGroup status="invalid">
						<AUfieldset >
							<legend className="au-fieldset__legend">
								<AUheading level="2" size="lg">
									Please select your favorite device
								</AUheading>
								<AUhintText title="Minimum 6 characters" id="device-hint-text-err" />
								<AUerrorText title="A device was not selected" id="device-cb-err" />
							</legend>

							<AUcheckbox label="Phone" name="checkbox-ex-err" id="cb-phone-err" block/>
							<AUcheckbox label="Tablet" name="checkbox-ex-err" id="cb-tablet-err" block/>
							<AUcheckbox label="Laptop" name="checkbox-ex-err" id="cb-laptop-err" block/>

						</AUfieldset>
					</AUformGroup>
					<br/>


				</div>
			</div>
		);
	}
}


export default App;

ReactDOM.render(<App />,

	document.getElementById('root'),
);
