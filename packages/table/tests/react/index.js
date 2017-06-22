import React from 'react';
import ReactDOM from 'react-dom';

import Table from './table.js';

const headers = [
  { attributes: { id: 'Test' }, text: 'Location' },
  { attributes: {}, text: 'Population' }
];

const rows = [
  [
    { attributes: {}, text: 'New South Wales' },
    { attributes: {}, text: '7,670,700' },
  ],
  [
    { attributes: {}, text: 'Victoria' },
    { attributes: {}, text: '5,996,400' },
  ],
  [
    { attributes: {}, text: 'Queensland' },
    { attributes: {}, text: '4,808,800' },
  ],
  [
    { attributes: {}, text: 'Western Australia' },
    { attributes: {}, text: '2,603,900' },
  ],
  [
    { attributes: {}, text: 'South Australia' },
    { attributes: {}, text: '1,702,800' },
  ],
  [
    { attributes: {}, text: 'Tasmania' },
    { attributes: {}, text: '517,400' },
  ],
  [
    { attributes: {}, text: 'Northern Territory' },
    { attributes: {}, text: '244,000' },
  ],
  [
    { attributes: {}, text: 'Australian Capital Territory' },
    { attributes: {}, text: '393,000' },
  ],
];

ReactDOM.render(
	<div>
    <Table headers={ headers } rows={ rows } caption="Population of Australian states and territories, December 2015" />
	</div>,

	document.getElementById('root'),
);
