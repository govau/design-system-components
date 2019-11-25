import React from 'react';
import ReactDOM from 'react-dom';

import AUPagination from './pagination.js';





ReactDOM.render(
	<div>
		 <AUPagination totalResults={100} recordsPerPage={10} />
	</div>,

	document.getElementById('root'),
);
