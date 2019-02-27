import React    from 'react';
import ReactDOM from 'react-dom';

import AUtextInput from './text-inputs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>Default</h2>
			<label htmlFor="1">Hello</label>
			<AUtextInput id="1" />

			<h2>Text input type number</h2>
			<label htmlFor="1-number">Hello</label>
			<AUtextInput id="1-number" type="number" />

			<hr />
			<h2>Default with additional classes</h2>
			<label htmlFor="1c">Hello</label>
			<AUtextInput id="1c" className="testing" />

			<hr />
			<h2>Block</h2>
			<label htmlFor="2">Hello</label>
			<AUtextInput id="2" defaultValue="abc" block />

			<hr />
			<h2>Block Invalid</h2>
			<label htmlFor="3">Hello</label>
			<AUtextInput id="3" defaultValue="abc" block status="invalid" />

			<hr />
			<h2>Block Valid</h2>
			<label htmlFor="4">Hello</label>
			<AUtextInput id="4" block status="valid" />

			<hr />
			<h2>Disabled</h2>
			<label htmlFor="5">Hello</label>
			<AUtextInput id="5" disabled />

			<hr />
			<h2>Textarea</h2>
			<label htmlFor="6">Hello</label>
			<AUtextInput id="6" as="textarea" />

			<hr />
			<h2>Textarea valid</h2>
			<label htmlFor="6">Hello</label>
			<AUtextInput status="valid" id="6" as="textarea" defaultValue="ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340" />

			<hr />
			<h2>Textarea invalid</h2>
			<label htmlFor="6">Hello</label>
			<AUtextInput status="invalid" id="6" as="textarea" defaultValue="ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340" />

			<hr />
			<h2>Textarea with additional classes</h2>
			<label htmlFor="6c">Hello</label>
			<AUtextInput id="6c" as="textarea" className="testing" />

			<hr />
			<h2>Textarea Block</h2>
			<label htmlFor="7">Hello</label>
			<AUtextInput id="7" defaultValue="abc" as="textarea" block />

			<hr />
			<h2>Textarea default value disabled</h2>
			<label htmlFor="8">Hello</label>
			<AUtextInput id="8" defaultValue="abc" as="textarea" disabled />

			<hr />
			<h2>Text inputs different widths</h2>
			<label htmlFor="width-2" className="label">Width 2</label>
			<AUtextInput id="width-2" defaultValue="07" width="2" />
			<label htmlFor="width-4" className="label">Width 4</label>
			<AUtextInput id="width-4" defaultValue="2600" width="4" />
			<label htmlFor="width-10" className="label">Width 10</label>
			<AUtextInput id="width-10" defaultValue="0400 000 000" width="10" />
		</div>
		<div className="split split--dark">
			<h2>Default</h2>
			<label htmlFor="1d">Hello</label>
			<AUtextInput id="1d" dark />

			<h2>Text input type number</h2>
			<label htmlFor="1d-number">Hello</label>
			<AUtextInput id="1d-number" type="number" dark />

			<hr />
			<h2>Default with additional classes</h2>
			<label htmlFor="1dc">Hello</label>
			<AUtextInput dark id="1dc" className="testing" />

			<hr />
			<h2>Block</h2>
			<label htmlFor="2d">Hello</label>
			<AUtextInput id="2d" defaultValue="abc" dark block />

			<hr />
			<h2>Block Invalid</h2>
			<label htmlFor="3d">Hello</label>
			<AUtextInput id="3d" defaultValue="abc" dark block status="invalid" />

			<hr />
			<h2>Block Valid</h2>
			<label htmlFor="4d">Hello</label>
			<AUtextInput id="4d" dark block status="valid" />

			<hr />
			<h2>Disabled</h2>
			<label htmlFor="5d">Hello</label>
			<AUtextInput id="5d" dark disabled />

			<hr />
			<h2>Textarea</h2>
			<label htmlFor="6d">Hello</label>
			<AUtextInput id="6d" as="textarea" dark />

			<hr />
			<h2>Textarea valid</h2>
			<label htmlFor="6">Hello</label>
			<AUtextInput status="valid" id="6" as="textarea" dark defaultValue="ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340" />

			<hr />
			<h2>Textarea invalid</h2>
			<label htmlFor="6">Hello</label>
			<AUtextInput status="invalid" id="6" as="textarea" dark defaultValue="ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340" />

			<hr />
			<h2>Textarea with additional classes</h2>
			<label htmlFor="6dc">Hello</label>
			<AUtextInput id="6dc" as="textarea" className="testing" dark />

			<hr />
			<h2>Textarea Block</h2>
			<label htmlFor="7d">Hello</label>
			<AUtextInput id="7d" as="textarea" defaultValue="abc" dark block />

			<hr />
			<h2>Textarea default value disabled</h2>
			<label htmlFor="8d">Hello</label>
			<AUtextInput as="textarea" id="8d" defaultValue="abc" disabled dark />

			<hr />
			<h2>Textarea default value disabled</h2>
			<label htmlFor="width-2-dark" className="label">Width 2</label>
			<AUtextInput id="width-2-dark" defaultValue="07" width="2" />
			<label htmlFor="width-4-dark" className="label">Width 4</label>
			<AUtextInput id="width-4-dark" defaultValue="2600" width="4" />
			<label htmlFor="width-10-dark" className="label">Width 10</label>
			<AUtextInput id="width-10-dark" defaultValue="0400 000 000" width="10" />
		</div>
	</div>,

	document.getElementById('root'),
);
