import React from 'react';
import ReactDOM from 'react-dom';

import { AUcheckbox, AUradio, AURadioList, AUcheckboxList } from './control-input.js';


// to test a nice list of radio button

class App extends React.Component {

	toggleCheckBox(a) {
		console.log( a );
	}

	render() {
		return (
			<div className="split-wrapper">
			<div className="split">
			<AUcheckboxList toggleCheckBox={this.toggleCheckBox} block name="radio-ex" items={[
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
						status: 'invalid'
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
					},
				]} />
				</div>
		</div>
		)
	}
}


ReactDOM.render( <App />,
	document.getElementById('root'),
);
