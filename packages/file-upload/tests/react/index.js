import React from 'react';
import ReactDOM from 'react-dom';

import AUfileUpload from './file-upload';


ReactDOM.render(
	<div>
		<AUfileUpload id="upload" name="upload" text="Upload a file"></AUfileUpload>
	</div>,

	document.getElementById('root'),
);
