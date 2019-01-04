import React from 'react';
import ReactDOM from 'react-dom';

import { AUcallout, AUcalloutCalendar } from './callout.js';


ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split">
				<h2>Simple callout</h2>

				<AUcallout description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Callout with additional classes</h2>

				<AUcallout className="testing" description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Calendar callout</h2>

				<AUcalloutCalendar
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout with additional classes</h2>

				<AUcalloutCalendar
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
					className="testing"
				/>

				<hr />
				<h2>Calendar callout without optionals</h2>

				<AUcalloutCalendar
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
				/>
			</div>
			<div className="split split--dark">
				<h2>Simple callout <code>--dark</code></h2>

				<AUcallout dark description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Callout with additional classes <code>--dark</code></h2>

				<AUcallout dark className="testing" description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Calendar callout <code>--dark</code></h2>

				<AUcalloutCalendar
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout with additional classes <code>--dark</code></h2>

				<AUcalloutCalendar
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
					className="testing"
				/>

				<hr />
				<h2>Calendar callout without optionals <code>--dark</code></h2>

				<AUcalloutCalendar
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

				<AUcallout alt description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Callout with additional classes <code>--alt</code></h2>

				<AUcallout alt className="testing" description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Calendar callout <code>--alt</code></h2>

				<AUcalloutCalendar
					alt
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout with additional classes <code>--alt</code></h2>

				<AUcalloutCalendar
					alt
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
					className="testing"
				/>

				<hr />
				<h2>Calendar callout without optionals <code>--alt</code></h2>

				<AUcalloutCalendar
					alt
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
				/>
			</div>
			<div className="split split--alt split--dark">
				<h2>Simple callout <code>--alt</code> <code>--dark</code></h2>

				<AUcallout alt dark description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Callout with additional classes <code>--alt</code> <code>--dark</code></h2>

				<AUcallout alt dark className="testing" description="description for first callout">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.</p>
				</AUcallout>

				<hr />
				<h2>Calendar callout <code>--alt</code> <code>--dark</code></h2>

				<AUcalloutCalendar
					alt
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
				/>

				<hr />
				<h2>Calendar callout with additional classes <code>--alt</code> <code>--dark</code></h2>

				<AUcalloutCalendar
					alt
					dark
					description="description for second callout"
					datetime="2017-01-01T00:00:00+00:00"
					time="Sunday 32 Jun"
					subline="Your next appointment is"
					name="Talk to boss"
					className="testing"
				/>

				<hr />
				<h2>Calendar callout without optionals <code>--alt</code> <code>--dark</code></h2>

				<AUcalloutCalendar
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
