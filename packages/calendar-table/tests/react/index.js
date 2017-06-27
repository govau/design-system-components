import React from 'react';
import ReactDOM from 'react-dom';

import CalendarTable from './calendar-table.js';

const rows = [
  {
    attributes: { dateTime: '2017-01-01' },
    date: { fullday: 'Sunday', daynum: '1', month: 'January' },
    content: { title: "New Year's Day" }
  },
  {
    attributes: { dateTime: '2017-01-02' },
    date: { fullday: 'Monday', daynum: '2', month: 'January' },
    content: {
      title: "New Year's Day holiday",
      info: "The Holiday Act provides for an extra public holiday to be added when New Year's Day falls on a weekend."
    }
  },
  {
    attributes: { dateTime: '2017-01-26' },
    date: { fullday: 'Thursday', daynum: '26', month: 'January' },
    content: { title: 'Australia Day' }
  }
];

ReactDOM.render(
	<div>
		<CalendarTable rows={ rows } caption="New South Wales public holidays, January 2017">
		</CalendarTable>
	</div>,

	document.getElementById('root'),
);
