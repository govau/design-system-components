import React from 'react';
import ReactDOM from 'react-dom';

import { Accordion } from './react.js';

ReactDOM.render(
	<div>
		<h2>Default accordion</h2>

		<Accordion>
			Some content of the accordion <a href="#sdfsdf">here</a>
		</Accordion>

		<hr />
		<h2>Closed accordion</h2>

		<Accordion open="false">
			Some content of the accordion <a href="#sdfsdf">here</a>
		</Accordion>
	</div>,

	document.getElementById('root'),
);
