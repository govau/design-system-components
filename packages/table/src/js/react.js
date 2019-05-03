/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * table function
 *
 * Used to display tabular data
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * The table component
 *
 * @param {string} caption - The description or summary of the table.
 * @param {object[]} headers - The column headings
 * @param {object[]} rows - The column data
 * @param {bool} striped - Colourise every other table row
 * @param {object} attributeOptions - Default HTML attributes
 */
const AUTable = ( { caption, headers, rows, striped, attributeOptions } ) => {
	return <table className={`au-table ${ striped ? 'au-table--striped' : ''}`} { ...attributeOptions }>
		<caption className="au-table__caption">{caption}</caption>
		<thead className="au-table__head">
			<tr>
				{
					headers.map( ( header, index ) => (
					<th
					key={ index }
					scope="col"
					className={`au-table__header au-table__header--width-${header.width}`}>
					{ header.text }
					</th>)
					 )
				}
			</tr>
		</thead>
		<tbody className="au-table__body">
			{
				rows.map( ( row, index ) => {
					let result = [];

					row.forEach( ( cell, index ) => {
						result.push( <td
							key={ index } className={`au-table__cell ${cell.alignment ? 'au-table__cell--align-' + cell.alignment : ' ' }`}>{ cell.text }
						</td> );
					});

					return <tr className="au-table__row" key={ index }>{ result }</tr>;
				})
			}
		</tbody>
	</table>
};


AUTable.propTypes = {
	caption: PropTypes.string.isRequired,
	headers: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			width: PropTypes.oneOf(['25','33', '50', '75']),
			alignment: PropTypes.string
		})
	).isRequired,
	rows: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
				alignment: PropTypes.string
			})
		)
	).isRequired,
	striped: PropTypes.bool,
};


export default AUTable;
