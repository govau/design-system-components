import React from 'react';
import ReactDOM from 'react-dom';

import AUPagination from './pagination.js';

const paginationNumbers = ["1", "2", "3"];

ReactDOM.render(
	<div>
		<AUPagination items={paginationNumbers}>
		</AUPagination>
	</div>,

	document.getElementById('root'),
);
