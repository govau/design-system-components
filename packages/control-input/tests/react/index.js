import React from 'react';
import ReactDOM from 'react-dom';

import { AUcheckbox, AUradio, AUradioList, AUcheckboxList } from './control-input.js';


  // <AUcheckboxList toggleCheckBox={this.toggleCheckBox} />

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	toggleCheckBox( checkboxItem ) {
		console.log( "This function gets ran everytime a checkbox in this list changes")
		console.log( checkboxItem );
	}

	toggleRadioBox( radioItem ) {
		console.log( "This function gets ran everytime a radio in this list changes")
		console.log( radioItem );
	}

	render() {
		return (
			<div>
				<div className="split-wrapper">
					<div className="split">
						<h2>checkboxes</h2>
						<AUcheckboxList name="checkbox-ex" items={[
							{
								label: 'Phone',
								value: 'phone',
								id: 'phoneCheckbox',
							},
							{
								label: 'Tablet',
								value: 'tablet',
								checked: true,
							},
							{
								label: 'Laptop',
								value: 'laptop',
							},
							{
								label: 'Mobile',
								value: 'mobile',
								className: 'testing',
							},
							{
								label: 'Fax',
								value: 'fax',
								disabled: true,
								checked: true,
							},
						]} />


						<hr />
						<h2>radio buttons</h2>
						<AUradioList name="radio-ex" items={[
							{
								label: 'Yes',
								value: 'yes',
								id: 'yesRadio',
							},
							{
								label: 'Maybe',
								value: 'maybe',
							},
							{
								label: 'No',
								value: 'no',
								className: 'testing',
							},
							{
								label: 'What',
								value: 'what',
								disabled: true,
								checked: true,
							},
						]} />


						<hr/>
						<h2>control-inputs <code>--dark --block</code></h2>
						<AUcheckbox label="I agree" block />
						<AUradio label="Maybe" block />


						<hr/>
						<h2>control-inputs <code>--small</code></h2>
						<AUcheckbox label="I agree" small />
						<AUradio label="Maybe" small />


						<hr />
						<h2>invalid checkboxes with and without classes</h2>
						<AUcheckbox label="I agree" status="invalid" checked />
						<AUcheckbox label="I agree" required />


						<hr />
						<h2>invalid radio buttons with and without classes</h2>
						<AUradio label="I agree" status="invalid" checked />
						<AUradio label="I agree" required />


						<hr />
						<h2>control-inputs with <code>onChange</code></h2>

						<AUcheckboxList name="checkbox-ex2" items={[
							{
								label: 'Phone',
								value: 'phone',
								onChange: () => { console.log('This function will run when the first checkbox is changed') },
							},
							{
								label: 'Tablet',
								value: 'tablet',
								checked: true,
								onChange: () => { console.log('This function will run when the second checkbox is changed') },
							},
						]} />

						<hr />

						<AUradioList name="radio-ex2" items={[
							{
								label: 'Yes',
								value: 'yes',
								onChange: () => { console.log('This function will run when the first radio button is changed') },
							},
							{
								label: 'Maybe',
								value: 'maybe',
								onChange: () => { console.log('This function will run when the second radio button is changed') },
							},
						]} />
					</div>
					<div className="split split--dark">
						<h2>checkboxes <code>--dark</code></h2>
						<AUcheckboxList dark name="checkbox-ex-dark" items={[
							{
								label: 'Phone',
								value: 'phone',
							},
							{
								label: 'Tablet',
								value: 'tablet',
								checked: true,
							},
							{
								label: 'Laptop',
								value: 'laptop',
							},
							{
								label: 'Mobile',
								value: 'mobile',
								className: 'testing',
							},
							{
								label: 'Fax',
								value: 'fax',
								disabled: true,
								checked: true,
							},
						]} />


						<hr />
						<h2>radio buttons <code>--dark</code></h2>
						<AUradioList dark name="radio-ex-dark" items={[
							{
								label: 'Yes',
								value: 'yes',
							},
							{
								label: 'Maybe',
								value: 'maybe',
							},
							{
								label: 'No',
								value: 'no',
								className: 'testing',
							},
							{
								label: 'What',
								value: 'what',
								disabled: true,
								checked: true,
							},
						]} />


						<hr/>
						<h2>control-inputs <code>--dark --block</code></h2>
						<AUcheckbox label="I agree" block dark />
						<AUradio label="Maybe" block dark />


						<hr/>
						<h2>control-inputs <code>--dark --small</code></h2>
						<AUcheckbox label="I agree" dark small />
						<AUradio label="Maybe" dark small />


						<hr />
						<h2>invalid checkboxes with and without classes <code>--dark</code></h2>
						<AUcheckbox dark label="I agree" status="invalid" checked />
						<AUcheckbox dark label="I agree" required />


						<hr />
						<h2>invalid radio buttons with and without classes <code>--dark</code></h2>
						<AUradio dark label="I agree" status="invalid" checked />
						<AUradio dark label="I agree" required />
					</div>
				</div>
				<div className="split-wrapper">
					<div className="split split--alt">
						<h2>checkboxes <code>--alt</code></h2>
						<AUcheckboxList alt name="checkbox-ex-alt" items={[
							{
								label: 'Phone',
								value: 'phone',
								id: 'phoneCheckbox',
							},
							{
								label: 'Tablet',
								value: 'tablet',
								checked: true,
							},
							{
								label: 'Laptop',
								value: 'laptop',
							},
							{
								label: 'Mobile',
								value: 'mobile',
								className: 'testing',
							},
							{
								label: 'Fax',
								value: 'fax',
								disabled: true,
								checked: true,
							},
						]} />


						<hr />
						<h2>radio buttons <code>--alt</code></h2>
						<AUradioList alt name="radio-ex-alt" items={[
							{
								label: 'Yes',
								value: 'yes',
								id: 'yesRadio'
							},
							{
								label: 'Maybe',
								value: 'maybe',
							},
							{
								label: 'No',
								value: 'no',
								className: 'testing',
							},
							{
								label: 'What',
								value: 'what',
								disabled: true,
								checked: true,
							},
						]} />


						<hr/>
						<h2>control-inputs <code>--alt --block</code></h2>
						<AUcheckbox label="I agree" alt block />
						<AUradio label="Maybe" alt block />


						<hr/>
						<h2>control-inputs <code>--alt --small</code></h2>
						<AUcheckbox label="I agree" alt small />
						<AUradio label="Maybe" alt small />


						<hr />
						<h2>invalid checkboxes with and without classes <code>--alt</code></h2>
						<AUcheckbox alt label="I agree" status="invalid" checked />
						<AUcheckbox alt label="I agree" required />


						<hr />
						<h2>invalid radio buttons with and without classes <code>--alt</code></h2>
						<AUradio alt label="I agree" status="invalid" checked />
						<AUradio alt label="I agree" required />
					</div>
					<div className="split split--alt split--dark">
						<h2>checkboxes <code>--alt --dark</code></h2>
						<AUcheckboxList dark alt name="checkbox-ex-alt-dark" items={[
							{
								label: 'Phone',
								value: 'phone',
							},
							{
								label: 'Tablet',
								value: 'tablet',
								checked: true,
							},
							{
								label: 'Laptop',
								value: 'laptop',
							},
							{
								label: 'Mobile',
								value: 'mobile',
								className: 'testing',
							},
							{
								label: 'Fax',
								value: 'fax',
								disabled: true,
								checked: true,
							},
						]} />


						<hr />
						<h2>radio buttons <code>--alt --dark</code></h2>
						<AUradioList dark alt name="radio-ex-dark-alt" items={[
							{
								label: 'Yes',
								value: 'yes',
							},
							{
								label: 'Maybe',
								value: 'maybe',
							},
							{
								label: 'No',
								value: 'no',
								className: 'testing',
							},
							{
								label: 'What',
								value: 'what',
								disabled: true,
								checked: true,
							},
						]} />


						<hr/>
						<h2>control-inputs <code>--alt --dark --block</code></h2>
						<AUcheckbox label="I agree" alt dark block />
						<AUradio label="Maybe" alt dark block />


						<hr/>
						<h2>control-inputs <code>--alt --dark --small</code></h2>
						<AUcheckbox label="I agree" alt dark small />
						<AUradio label="Maybe" alt dark small />


						<hr />
						<h2>invalid checkboxes with and without classes <code>--alt --dark</code></h2>
						<AUcheckbox alt dark label="I agree" status="invalid" checked />
						<AUcheckbox alt dark label="I agree" required />


						<hr />
						<h2>invalid radio buttons with and without classes <code>--alt --dark</code></h2>
						<AUradio alt dark label="I agree" status="invalid" checked />
						<AUradio alt dark label="I agree" required />
					</div>
					<div className="split split--alt split--dark">
							<h2>Checkbox - React State</h2>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render( <App />,
	document.getElementById('root'),
);
