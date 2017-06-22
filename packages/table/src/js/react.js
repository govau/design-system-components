/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * table function
 *
 * Table definitions for the UI Kit.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * DEFAULT
 * The table component.
 *
 * @param {array} headers
 * @param {array} rows
 * @param {string} caption
 */
const Table = ({ headers, rows, caption }) => (
	<table className="uikit--content-table">
		<caption>{ caption }</caption>
		<thead>
		<tr>
      { headers.map((header, i) => <th key={ i } scope="col" { ...header.options }>{ header.text }</th> ) }
		</tr>
		</thead>
		<tbody>
    { rows.map( (row, i) =>
			<tr key={ i }>
        { row.map( (item, n) => <td key={ n } data-label={ headers[n].text } { ...item.options }>{ item.text }</td> ) }
			</tr>
    )}
		</tbody>
	</table>
);

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.any),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  caption: PropTypes.string,
};

export default Table;
