import React from 'react';
import ReactDOM from 'react-dom';

import AUsearchbox from './searchbox.js';


ReactDOM.render(
	<div class="au-grid">
		<div className="split-wrapper">
			<div className="split">
				<h2>Standard</h2>
				<AUsearchbox label="Search" btnText="Search" id="def-search"/>

				<h2>Responsive</h2>
				<AUsearchbox label="Search" responsive btnText="Search" id="resp-search"/>

				<h2>Icon only</h2>
				<AUsearchbox label="Search" btnText="Search" icon id="icon-search"/>
			</div>
			<div className="split split--dark">
			<h2>Standard</h2>
				<AUsearchbox label="Search" btnText="Search" dark id="def-search-dark-dark"/>

				<h2>Responsive</h2>
				<AUsearchbox label="Search" responsive btnText="Search" dark id="resp-search-dark"/>

				<h2>Icon only</h2>
				<AUsearchbox label="Search" btnText="Search" dark icon id="icon-search-dark"/>

			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
