import React from 'react';
import ReactDOM from 'react-dom';

import { Callout, CalloutCalendar } from './react.js';


ReactDOM.render(
	<div>
		<h2>Simple callout</h2>

		<Callout description="description for first callout">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</Callout>

		<hr />
		<h2>Calendar callout</h2>

		<CalloutCalendar
			description="description for second callout"
			datetime="2017-01-01T00:00:00+00:00"
			time="Sunday 32 Jun"
			subline="Your next appointment is"
			name="Talk to boss"
		/>

		<hr />
		<h2>Calendar callout without optionals</h2>

		<CalloutCalendar
			description="description for second callout"
			datetime="2017-01-01T00:00:00+00:00"
			time="Sunday 32 Jun"
		/>
	</div>,

	document.getElementById('root'),
);
