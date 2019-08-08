import React from 'react';
import ReactDOM from 'react-dom';

import AUsearchbox from './searchbox.js';


ReactDOM.render(
	<div>
		<h2>Standard</h2>
		<AUsearchbox label="Search" btnText="Search" id="def-search"/>

		<h2>Responsive</h2>
		<AUsearchbox label="Search" responsive btnText="Search" id="resp-search"/>

	<h2>Icon only</h2>
	<AUsearchbox label="Search" btnText="Search" icon id="icon-search"/>


	</div>,

	document.getElementById('root'),
);
