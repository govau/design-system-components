import React from 'react';
import ReactDOM from 'react-dom';

import { PageAlertInfo, PageAlertWarning, PageAlertError, PageAlertSuccess } from './react.js';


ReactDOM.render(
	<div>
		<h2><code>--info</code> variant</h2>

		<PageAlertInfo>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlertInfo>


		<hr />
		<h2><code>--success</code> variant</h2>

		<PageAlertSuccess>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlertSuccess>


		<hr />
		<h2><code>--warning</code> variant</h2>

		<PageAlertWarning>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlertWarning>


		<hr />
		<h2><code>--error</code> variant</h2>

		<PageAlertError>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlertError>

	</div>,

	document.getElementById('root'),
);
