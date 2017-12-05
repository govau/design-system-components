import React from 'react';
import ReactDOM from 'react-dom';

import { Callout, CalloutCalendar } from './callout.js';


ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split">
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
			</div>
			<div className="split split--dark">
				<h2>Simple callout <code>--dark</code></h2>

				<Callout dark description="description for first callout">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</Callout>

				<hr />
				<h2>Calendar callout <code>--dark</code></h2>

				<CalloutCalendar
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout without optionals <code>--dark</code></h2>

				<CalloutCalendar
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
				/>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>Simple callout <code>--alt</code></h2>

				<Callout alt description="description for first callout">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</Callout>

				<hr />
				<h2>Calendar callout <code>--alt</code></h2>

				<CalloutCalendar
					alt
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout without optionals <code>--alt</code></h2>

				<CalloutCalendar
					alt
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
				/>
			</div>
			<div className="split split--alt split--dark">
				<h2>Simple callout <code>--alt</code> <code>--dark</code></h2>

				<Callout alt dark description="description for first callout">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</Callout>

				<hr />
				<h2>Calendar callout <code>--alt</code> <code>--dark</code></h2>

				<CalloutCalendar
					alt
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout without optionals <code>--alt</code> <code>--dark</code></h2>

				<CalloutCalendar
					alt
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
				/>
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
