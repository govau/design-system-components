import React from 'react';
import ReactDOM from 'react-dom';

import PageAlert from './page-alerts.js';


ReactDOM.render(
	<div>
		<h2><code>--info</code> variant</h2>

		<PageAlert as='info'>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--success</code> variant</h2>

		<PageAlert as='success'>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--warning</code> variant</h2>

		<PageAlert as='warning'>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--error</code> variant</h2>

		<PageAlert as='error'>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>

	</div>,

	document.getElementById('root'),
);
