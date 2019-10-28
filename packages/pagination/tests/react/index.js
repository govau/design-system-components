import React from 'react';
import ReactDOM from 'react-dom';

import AUPagination from './pagination.js';

const paginationNumbers = [];
for (var i = 1; i <= 10; i++) {
    paginationNumbers.push(i);
}


ReactDOM.render(
	<div>
		<AUPagination items={paginationNumbers}>
		</AUPagination>
	</div>,

	document.getElementById('root'),
);
