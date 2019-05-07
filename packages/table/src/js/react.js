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
const AUTable = ( { caption, headers, headerContentTypes, data, striped, attributeOptions, render } ) => {
	return <table className={`au-table ${ striped ? 'au-table--striped' : ''}`} { ...attributeOptions }>
		<caption className="au-table__caption">{caption}</caption>
		<thead className="au-table__head">
		<AUTableRow>
				{headers.map( ( header, index ) => (
					<AUTableHeader
						text={ header.title }
						key={index}
						type={headerContentTypes[index]}
						width={header.width}
						/>
				))}
			</AUTableRow>
		</thead>
		<tbody className="au-table__body">
				{ data.map( (row, index ) => (
					<AUTableRow key={index}>
						{
							Object.values( row ).map( ( data, index ) => (
									<AUTableCell
										key={index}
										data={data}
										type={headerContentTypes[index]}
										render={headers[index].render && headers[index].render( data )}
										/>
								)
							)
						}
						</AUTableRow>
							))}
		</tbody>
	</table>
};


const AUTableHeader = ( { text, type, width, ...attributeOptions } ) => {
return 	<th className={`au-table__header
						${type === "numeric" ? "au-table__header--align-right": ""}
						${ width ? "au-table__header--width-" + width : ""}
						`
						}
					{...attributeOptions}> {text} </th>
}


const AUTableCell = ( { data, type, render, ...attributeOptions } ) => {
	return 	<td className={`au-table__cell
							${ type === "numeric" ? "au-table__cell--align-right": ""}
							`
							}
						 {...attributeOptions}> { render ? render : data} </td>
	}

	const AUTableRow = ( { text, ...attributeOptions } ) => {
		return <tr className="au-table__row" { ...attributeOptions }>

		</tr>
	};


export default AUTable;
