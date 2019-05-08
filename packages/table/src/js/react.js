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
 * @param {string}               caption - The description or summary of the table.
 * @param {[object]}             headers - The column headings
 * @param {[headerContentTypes]} caption - The types of the data in each column.
 * @param {[object]}             data - The table data in the in the body
 * @param {bool}                 striped - Colourise every other table row
 * @param {object}               attributeOptions - Default HTML attributes
 */
const AUtable = ( { caption, headers, headerContentTypes, data, striped, ...attributeOptions} ) => {
	return (
	<table className={`au-table ${ striped ? 'au-table--striped' : ''}`} { ...attributeOptions }>
		<AUtableCaption tableCaption={caption} />
		<AUtableHead>
		<AUtableRow>
				{headers.map( ( header, index ) => (
					<AUtableHeader
						title={ header.title }
						key={index}
						type={headerContentTypes[index]}
						width={header.width}
						/>
				))}
			</AUtableRow>
		</AUtableHead>
		<AUtableBody>
				{ data.map( (row, index ) => (
					<AUtableRow key={index}>
						{
							Object.values( row ).map( ( data, index ) => (
									<AUtableCell
										key={index}
										data={data}
										type={headerContentTypes[index]}
										render={headers[index].render ? headers[index].render( data ) : null }
										/>
								)
							)
						}
						</AUtableRow>
							))}
		</AUtableBody>
	</table>
	)
};

AUtable.propTypes = {
	caption: PropTypes.string,
	headers: PropTypes.arrayOf(Object).isRequired,
	headerContentTypes: PropTypes.array.isRequired,
	data: PropTypes.arrayOf(Object).isRequired,
	striped: PropTypes.bool
};

AUtable.defaultProps = {
	striped: false
};


/**
 * The table header component
 *
 * @param {string} title - The title of table header
 * @param {string} type  - Type of the header, can be either text or numeric for left or right alignment respectively.
 * @param {string} width - Width of the header and column
 * @param {object} attributeOptions - Default HTML attributes
 */
export const AUtableHeader = ( { title, type, width, ...attributeOptions } ) => {
return 	<th className={`au-table__header
						${type === "numeric" ? "au-table__header--align-right": ""}
						${ width ? "au-table__header--width-" + width : ""}
						`
						}
					scope="col" {...attributeOptions}> {title} </th>
};

AUtableHeader.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'numeric']).isRequired,
	width: PropTypes.oneOf(['25', '33', '50', '75']),
}

/**
 * The table data/cell component
 * @param {string}   data - The cell data
 * @param {string}   type - Type of the data, can be either text or numeric for left or right alignment respectively.
 * @param {object} render - The function for customised rendering on all cells in this column
 */
export const AUtableCell = ( { data, type, render, ...attributeOptions } ) => {
	return 	<td className={`au-table__cell
							${ type === "numeric" ? "au-table__cell--align-right": ""}
							`
							}
						 {...attributeOptions}> { render ? render : data} </td>
};

AUtableCell.propTypes = {
	data: PropTypes.any.isRequired,
	type: PropTypes.oneOf(['text', 'numeric']).isRequired,
	render: PropTypes.object
};

/**
 * The table row component
 * @param {object} attributeOptions - Default HTML attributes
 */
export const AUtableRow = ( {...attributeOptions } ) => {
	return <tr className="au-table__row" { ...attributeOptions }>

	</tr>
};

/**
 * Table wrapper
 * @param {node} children
 */
export const AUtableWrapper = ({ children }) => {
	return (
		<div className="au-table__wrapper">
			{children}
		</div>
	)
};

AUtableWrapper.propTypes = {
	children: PropTypes.node.isRequired
};


export const AUtableBody = ({ children, ...attributeOptions }) => {
	return (
		<tbody className="au-table__body" {...attributeOptions}>
			{ children }
		</tbody>
	)
};


export const AUtableCaption = ({ tableCaption, ...attributeOptions }) => {
	return (
		<caption className="au-table__caption" {...attributeOptions}>
			{ tableCaption }
		</caption>
	)
}

export const AUtableHead = ({ children, ...attributeOptions }) => {
	return (
		<thead className="au-table__head" {...attributeOptions}>
			{children}
		</thead>
	)
}
export default AUtable;
