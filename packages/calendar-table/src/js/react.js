/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * calendar-table function
 *
 * Calendar table displays events in a tabular format.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * DEFAULT
 * The table component.
 *
 * @param {array} rows
 * @param {string} caption
 */
const CalendarTable = ({ rows, caption }) => (
	<table className="calendar-table">
		<caption>{ caption }</caption>
    <tbody>
      { rows.map( (row, i) => (
        <tr key={ i }>
          <th>
            <time { ...row.attributes }>{ row.date.fullday } <span>{ row.date.daynum }</span> { row.date.month }</time>
          </th>
          <td>
            { row.content.title }
            <span className="date-info">{ row.content.info }</span>
          </td>
        </tr>
      ))}
    </tbody>
	</table>
);

CalendarTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  caption: PropTypes.string,
};

export default CalendarTable;
