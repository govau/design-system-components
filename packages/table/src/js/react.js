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
	return <table tabIndex={0} className={`au-table ${ striped ? 'au-table--striped' : ''}`} { ...attributeOptions }>
		<caption>{caption}</caption>
		<thead>
			<tr>
				{
					headers.map( ( item, index ) => <th key={ index } scope="col">{ item.text }</th> )
				}
			</tr>
		</thead>
		<tbody>
			{
				rows.map( ( item, index ) => {
					let result = [];

					item.forEach( ( item, index ) => {
						result.push( <td
							key={ index }>{ item.text }
						</td> ); 
					});

					return <tr key={ index }>{ result }</tr>;
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
		})
	).isRequired,
	rows: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
			})
		)
	).isRequired,
	striped: PropTypes.bool,
};


AUTable.defaultProps = {
	caption: "Title of the table",
	headers: [
		{
			text: "Row 1, heading 1"
		},
		{
			text: "Row 1, heading 2"
		}
	],
	rows: [
		[
			{
				text: "Row 2, heading 1, cell 1"
			},
			{
				text: "Row 2, heading 2, cell 2"
			}
		],
		[
			{
				text: "Row 3, heading 1, cell 3"
			},
			{
				text: "Row 3, heading 2, cell 4"
			}
		]
	]
};


export default AUTable;
