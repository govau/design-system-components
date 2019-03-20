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
			<React.Fragment>
			<div className="split-wrapper">
				<div className="split">
				<h2>Normal background</h2>
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

					<h3>Error text <code>--inline</code></h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-inline" />
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-inline"/>
						<AUtextInput id="pw-with-error-inline" aria-describedby="error-text-inline hint-text-with-error-inline" status="invalid" />
						<AUerrorText title="Password was not 6 characterts" inline id="error-text-inline" />
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

				{/* <div className="split split--dark">
					<h2><code>--dark</code> background</h2>
					<h3>Label</h3>
					<p>
						<AUlabel title="Password" htmlFor="label-dark" dark/>
						<AUtextInput id="label-dark" dark/>
					</p>
					<hr/>

					<h3>Label <code>--inline</code> </h3>
					<p>
						<AUlabel title="Password" htmlFor="label-inline-dark" inline dark/>
						<AUtextInput id="label-inline-dark" dark/>
					</p>
					<hr/>

					<h3>Hint Text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-hint-dark" dark/>
						<AUhintText title="Minimum 6 characters" id="hint-text-dark" dark/>
						<AUtextInput id="pw-with-hint-dark" aria-describedby="hint-text-dark" dark/>
					</p>
					<hr/>

					<h3>Error text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-dark" dark/>
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-dark" dark/>
						<AUerrorText title="Password was not 6 characterts" id="error-text-dark"/>
						<AUtextInput id="pw-with-error" aria-describedby="error-text-dark hint-text-with-error-dark" status="invalid" dark/>
					</p>
					<hr/>

					<h3>Error text bottom</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-bottom-dark" dark/>
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-bottom-dark" dark/>
						<AUtextInput id="pw-with-error-bottom-dark" aria-describedby="error-text-bottom-dark hint-text-with-error-bottom-dark" status="invalid" dark/>
						<AUerrorText title="Password was not 6 characterts" id="error-text-bottom-dark" />
					</p>
					<hr/>

					<h3>Error text <code>--inline</code></h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-inline-alt" />
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-inline-alt"/>
						<AUtextInput id="pw-with-error-inline-alt" aria-describedby="error-text-inline-alt hint-text-with-error-inline-alt" status="invalid" />
						<AUerrorText title="Password was not 6 characterts" inline id="error-text-inline-alt" />
					</p>
					<hr/>

					<h3>Form group</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-dark" dark/>
							<AUtextInput id="fg-username-dark" dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel title="Password" htmlFor="fg-password-dark" dark/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-dark" dark/>
							<AUtextInput id="fg-password-dark" aria-describedby="fg-hint-text-dark" dark/>
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code></h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-invalid-dark" dark/>
							<AUtextInput id="fg-username-invalid-dark" dark/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-dark" dark/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-dark" dark/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-dark"/>
							<AUtextInput id="fg-password-dark" aria-describedby="fg-hint-text-dark fg-error-text-dark" status="invalid" dark/>
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code> bottom</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-err-bottom-dark" dark/>
							<AUtextInput id="fg-username-err-bottom-dark" dark/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-err-bottom-dark" dark/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-err-bottom-dark" dark/>
							<AUtextInput id="fg-password-err-bottom-dark" aria-describedby="fg-hint-text-err-bottom-dark fg-error-text-err-bottom-dark" status="invalid" dark/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-err-bottom-dark" />
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
							<AUlabel htmlFor="address-1-dark" title="Street and number" dark/>
							<AUtextInput id="address-1-dark" width="lg" dark/>
						</AUformGroup>
						<AUformGroup>
							<AUlabel htmlFor="address-2-dark" title="Suburb" dark/>
							<AUtextInput id="address-2-dark" width="lg" dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="select1-dark" title="State" dark/>
							<AUselect id="select1-dark" options={states} dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-dark" title="Postcode" dark/>
							<AUtextInput id="address-4-dark" width="sm" dark/>
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
							<AUlabel htmlFor="address-1-err-dark" title="Street and number" dark/>
							<AUtextInput id="address-1-err-dark" width="lg" dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-2-err-dark" title="Suburb" dark/>
							<AUtextInput id="address-2-err-dark" width="lg" dark/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel htmlFor="select1-err-dark" title="State" dark/>
							<AUerrorText title="A state was not selected" id="fg-error-text-err-bottom-dark" dark/>
							<AUselect status="invalid" id="select1-err-dark" options={states} dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-err-dark" title="Postcode" dark/>
							<AUtextInput id="address-4-err-dark" width="sm" dark/>
						</AUformGroup>

					</AUfieldset>

					<hr/>

					<h3>Fieldsets with control inputs <code>--invalid</code></h3>
					<p></p>
					<AUformGroup status="invalid">
						<AUfieldset>
							<legend className="au-fieldset__legend">
								<AUheading level="2" size="lg">
									Please select your favorite device
								</AUheading>
								<AUhintText title="Minimum 6 characters" id="device-hint-text-err-dark" dark/>
								<AUerrorText title="A device was not selected" id="device-cb-err-dark" dark/>
							</legend>

							<AUcheckbox label="Phone" name="checkbox-ex-err-dark" id="cb-phone-err-dark" block dark/>
							<AUcheckbox label="Tablet" name="checkbox-ex-err-dark" id="cb-tablet-err-dark" block dark/>
							<AUcheckbox label="Laptop" name="checkbox-ex-err-dark" id="cb-laptop-err-dark" block dark/>

						</AUfieldset>
					</AUformGroup>
					<br/>

				</div> */}
			{/* </div>
			<div className="split-wrapper"> */}
				<div className="split split--alt">
				<h2><code>--alt</code> background</h2>
				<h3>Label</h3>
					<p>
						<AUlabel title="Password" htmlFor="label-alt"/>
						<AUtextInput id="label-alt"/>
					</p>
					<hr/>

					<h3>Label <code>--inline</code> </h3>
					<p>
						<AUlabel title="Password" htmlFor="label-inline-alt" inline/>
						<AUtextInput id="label-inline-alt"/>
					</p>
					<hr/>

					<h3>Hint Text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-hint-alt"/>
						<AUhintText title="Minimum 6 characters" id="hint-text-alt"/>
						<AUtextInput id="pw-with-hint-alt" aria-describedby="hint-text-alt"/>
					</p>
					<hr/>

					<h3>Error text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-alt"/>
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-alt"/>
						<AUerrorText title="Password was not 6 characterts" id="error-text-alt"/>
						<AUtextInput id="pw-with-error" aria-describedby="error-text-alt hint-text-with-error-alt" status="invalid" dark/>
					</p>
					<hr/>

					<h3>Error text bottom</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-bottom-alt"/>
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-bottom-alt"/>
						<AUtextInput id="pw-with-error-bottom-alt" aria-describedby="error-text-bottom-alt hint-text-with-error-bottom-alt" status="invalid"/>
						<AUerrorText title="Password was not 6 characterts" id="error-text-bottom-alt" />
					</p>
					<hr/>

					<h3>Error text <code>--inline</code></h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-inline-alt" />
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-inline-alt"/>
						<AUtextInput id="pw-with-error-inline-alt" aria-describedby="error-text-inline-alt hint-text-with-error-inline-alt" status="invalid" />
						<AUerrorText title="Password was not 6 characterts" inline id="error-text-inline-alt" />
					</p>
					<hr/>

					<h3>Form group</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-alt"/>
							<AUtextInput id="fg-username-alt"/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel title="Password" htmlFor="fg-password-alt"/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-alt"/>
							<AUtextInput id="fg-password-alt" aria-describedby="fg-hint-text-alt"/>
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code></h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-invalid-alt"/>
							<AUtextInput id="fg-username-invalid-alt"/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-alt"/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-alt"/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-alt"/>
							<AUtextInput id="fg-password-alt" aria-describedby="fg-hint-text-alt fg-error-text-alt" status="invalid"/>
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code> bottom</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-err-bottom-alt"/>
							<AUtextInput id="fg-username-err-bottom-alt"/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-err-bottom-alt"/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-err-bottom-alt"/>
							<AUtextInput id="fg-password-err-bottom-alt" aria-describedby="fg-hint-text-err-bottom-alt fg-error-text-err-bottom-alt" status="invalid" dark/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-err-bottom-alt" />
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
							<AUlabel htmlFor="address-1-alt" title="Street and number"/>
							<AUtextInput id="address-1-alt" width="lg"/>
						</AUformGroup>
						<AUformGroup>
							<AUlabel htmlFor="address-2-alt" title="Suburb"/>
							<AUtextInput id="address-2-alt" width="lg"/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="select1-alt" title="State"/>
							<AUselect id="select1-alt" options={states}/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-alt" title="Postcode"/>
							<AUtextInput id="address-4-alt" width="sm"/>
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
							<AUlabel htmlFor="address-1-err-alt" title="Street and number"/>
							<AUtextInput id="address-1-err-alt" width="lg"/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-2-err-alt" title="Suburb"/>
							<AUtextInput id="address-2-err-alt" width="lg"/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel htmlFor="select1-err-alt" title="State"/>
							<AUerrorText title="A state was not selected" id="fg-error-text-err-bottom"/>
							<AUselect status="invalid" id="select1-err-alt" options={states}/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-err-alt" title="Postcode"/>
							<AUtextInput id="address-4-err-alt" width="sm"/>
						</AUformGroup>

					</AUfieldset>

					<hr/>

					<h3>Fieldsets with control inputs <code>--invalid</code></h3>
					<p></p>
					<AUformGroup status="invalid">
						<AUfieldset>
							<legend className="au-fieldset__legend">
								<AUheading level="2" size="lg">
									Please select your favorite device
								</AUheading>
								<AUhintText title="Minimum 6 characters" id="device-hint-text-err-alt"/>
								<AUerrorText title="A device was not selected" id="device-cb-err-alt"/>
							</legend>

							<AUcheckbox label="Phone" name="checkbox-ex-err-alt" id="cb-phone-err-alt" block/>
							<AUcheckbox label="Tablet" name="checkbox-ex-err-alt" id="cb-tablet-err-alt" block/>
							<AUcheckbox label="Laptop" name="checkbox-ex-err-alt" id="cb-laptop-err-alt" block/>

						</AUfieldset>
					</AUformGroup>

				</div>
{/* 
				<div className="split split--dark split--alt">
				<h2><code>--dark</code> <code>--alt</code> background</h2>
				<h3>Label</h3>
					<p>
						<AUlabel title="Password" htmlFor="label-dark-alt" dark/>
						<AUtextInput id="label-dark-alt" dark/>
					</p>
					<hr/>

					<h3>Label <code>--inline</code> </h3>
					<p>
						<AUlabel title="Password" htmlFor="label-inline-dark-alt" inline dark/>
						<AUtextInput id="label-inline-dark-alt" dark/>
					</p>
					<hr/>

					<h3>Hint Text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-hint-dark-alt" dark/>
						<AUhintText title="Minimum 6 characters" id="hint-text-dark-alt" dark/>
						<AUtextInput id="pw-with-hint-dark-alt" aria-describedby="hint-text-dark-alt" dark/>
					</p>
					<hr/>

					<h3>Error text</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-dark-alt" dark/>
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-dark-alt" dark/>
						<AUerrorText title="Password was not 6 characterts" id="error-text-dark-alt"/>
						<AUtextInput id="pw-with-error" aria-describedby="error-text-dark-alt hint-text-with-error-dark-alt" status="invalid" dark/>
					</p>
					<hr/>

					<h3>Error text bottom</h3>
					<p>
						<AUlabel title="Password" htmlFor="pw-with-error-bottom-dark-alt" dark/>
						<AUhintText title="Minimum 6 characters" id="hint-text-with-error-bottom-dark-alt" dark/>
						<AUtextInput id="pw-with-error-bottom-dark-alt" aria-describedby="error-text-bottom-dark-alt hint-text-with-error-bottom-dark-alt" status="invalid" dark/>
						<AUerrorText title="Password was not 6 characterts" id="error-text-bottom-dark-alt" />
					</p>
					<hr/>

					<h3>Form group</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-dark-alt" dark/>
							<AUtextInput id="fg-username-dark-alt" dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel title="Password" htmlFor="fg-password-dark-alt" dark/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-dark-alt" dark/>
							<AUtextInput id="fg-password-dark-alt" aria-describedby="fg-hint-text-dark-alt" dark/>
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code></h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-invalid-dark-alt" dark/>
							<AUtextInput id="fg-username-invalid-dark-alt" dark/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-dark-alt" dark/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-dark-alt" dark/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-dark-alt"/>
							<AUtextInput id="fg-password-dark-alt" aria-describedby="fg-hint-text-dark-alt fg-error-text-dark-alt" status="invalid" dark/>
						</AUformGroup>
					<hr/>

					<h3>Form group with <code>--invalid</code> bottom</h3>
						<AUformGroup>
							<AUlabel title="Username" htmlFor="fg-username-err-bottom-dark-alt" dark/>
							<AUtextInput id="fg-username-err-bottom-dark-alt" dark/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel title="Password" htmlFor="fg-password-err-bottom-dark-alt" dark/>
							<AUhintText title="Minimum 6 characters" id="fg-hint-text-err-bottom-dark-alt" dark/>
							<AUtextInput id="fg-password-err-bottom-dark-alt" aria-describedby="fg-hint-text-err-bottom-dark-alt fg-error-text-err-bottom-dark-alt" status="invalid" dark/>
							<AUerrorText title="Password was not 6 characters" id="fg-error-text-err-bottom-dark-alt" />
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
							<AUlabel htmlFor="address-1-dark-alt" title="Street and number" dark/>
							<AUtextInput id="address-1-dark-alt" width="lg" dark/>
						</AUformGroup>
						<AUformGroup>
							<AUlabel htmlFor="address-2-dark-alt" title="Suburb" dark/>
							<AUtextInput id="address-2-dark-alt" width="lg" dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="select1-dark-alt" title="State" dark/>
							<AUselect id="select1-dark-alt" options={states} dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-dark-alt" title="Postcode" dark/>
							<AUtextInput id="address-4-dark-alt" width="sm" dark/>
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
							<AUlabel htmlFor="address-1-err-dark-alt" title="Street and number" dark/>
							<AUtextInput id="address-1-err-dark-alt" width="lg" dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-2-err-dark-alt" title="Suburb" dark/>
							<AUtextInput id="address-2-err-dark-alt" width="lg" dark/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel htmlFor="select1-err-dark-alt" title="State" dark/>
							<AUerrorText title="A state was not selected" id="fg-error-text-err-bottom-dark-alt" dark/>
							<AUselect status="invalid" id="select1-err-dark-alt" options={states} dark/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-err-dark-alt" title="Postcode" dark/>
							<AUtextInput id="address-4-err-dark-alt" width="sm" dark/>
						</AUformGroup>

					</AUfieldset>

					<hr/>

					<h3>Fieldsets with control inputs <code>--invalid</code></h3>
					<p></p>
					<AUformGroup status="invalid">
						<AUfieldset>
							<legend className="au-fieldset__legend">
								<AUheading level="2" size="lg">
									Please select your favorite device
								</AUheading>
								<AUhintText title="Minimum 6 characters" id="device-hint-text-err-dark-alt" dark/>
								<AUerrorText title="A device was not selected" id="device-cb-err-dark-alt" dark/>
							</legend>

							<AUcheckbox label="Phone" name="checkbox-ex-err-dark-alt" id="cb-phone-err-dark-alt" block dark/>
							<AUcheckbox label="Tablet" name="checkbox-ex-err-dark-alt" id="cb-tablet-err-dark-alt" block dark/>
							<AUcheckbox label="Laptop" name="checkbox-ex-err-dark-alt" id="cb-laptop-err-dark-alt" block dark/>

						</AUfieldset>
					</AUformGroup>
				</div> */}

			</div>
			</React.Fragment>
		);
	}
}


export default App;

ReactDOM.render(<App />,

	document.getElementById('root'),
);
