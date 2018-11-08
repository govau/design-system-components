import React from 'react';
import ReactDOM from 'react-dom';

import { AUcheckbox, AUradio, AURadioList, AUcheckboxList } from './control-input.js';


// to test a nice list of radio button


ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split">
			<AURadioList block name="radio-ex" items={[
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
				</div>
		</div>
	</div>,

	document.getElementById('root'),
);
