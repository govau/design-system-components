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
 * @param {string}   caption            - The description or summary of the table.
 * @param {Object[]} headers            - The column headings
 * @param {Object[]} data               - The table data in the body
 * @param {bool}     striped            - Colourise every other table row
 * @param {string}   className          - An additional class, optional
 * @param {bool}     firstCellIsHeader  - If first cell is a header cell or not
 * @param {[]}       footer             - The footer cells
 *  @param {bool}    stripedFooter     - If the footer is for the striped table or not
 * @param {object}   attributeOptions   - Default HTML attributes
 */
const AUtable = ( { caption, headers, data, footer, stripedFooter, striped, className, firstCellIsHeader, ...attributeOptions} ) => {
	return (
	<table className={`au-table ${ striped ? 'au-table--striped ' : ' '} ${className}`} { ...attributeOptions }>
		{caption && <AUtableCaption tableCaption={caption} />}
		<AUtableHead>
		<AUtableRow>
				{headers.map( ( header, index ) => (
					<AUtableHeader
						title={header.title}
						key={index}
						type={header.type}
						width={header.width}
						/>
				))}
			</AUtableRow>
		</AUtableHead>
		<AUtableBody>
				{ data.map( (row, rowIndex ) => (
					<AUtableRow key={rowIndex}>
						{
							headers.map( (header, columnIndex) => {
								// check to render first cell in rows as a header or not
								if( columnIndex === 0 && firstCellIsHeader === true  ) {
									return (<AUtableHeader key={columnIndex} scope="row" title={row[header.key]? row[header.key] : ''} />)
								}
								else {
									return (
												<AUtableCell
													key={columnIndex}
													data={row[header.key]? row[header.key] : ''}
													type={header.type}
													render={header.render ? header.render( row[header.key], row ) : null}
												/>
											)
								}
								})
						}
						</AUtableRow>
							))}
		</AUtableBody>
		{
			footer &&
				 <AUtableFooter stripedTableFooter={stripedFooter}>
					<AUtableRow>
								{
										footer.map( ( data, footerIndex ) => (
										<AUtableCell key={footerIndex} data={ data } type={headers[footerIndex].type}/>)
								)
								}
					</AUtableRow>
				</AUtableFooter>
		}
	</table>
	)
};

AUtable.propTypes = {
	caption: PropTypes.string,
	headers: PropTypes.arrayOf( Object ).isRequired,
	data: PropTypes.arrayOf( Object ).isRequired,
	striped: PropTypes.bool,
	stripedFooter: PropTypes.bool,
	footer: PropTypes.array,
	className: PropTypes.string
};

AUtable.defaultProps = {
	striped: false,
	className: ''
};



/**
 * The table body component
 * @param  {string}  className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const AUtableBody = ({ className, ...attributeOptions }) => {
	return (
		<tbody className={`au-table__body ${className} `} {...attributeOptions}>

		</tbody>
	)
};

AUtableBody.propTypes = {
	className: PropTypes.string
};

AUtableBody.defaultProps = {
	className: ''
};



/**
 * The table head component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const AUtableHead = ({ children, className, ...attributeOptions }) => {
	return (
		<thead className={`au-table__head ${className}`} {...attributeOptions}>
			{children}
		</thead>
	)
};

AUtableHead.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

AUtableHead.defaultProps = {
	className: ''
};



/**
 * The table header component
 *
 * @param {string} title            - The title of table header/column
 * @param {string} type             - Type of the header, can be either text or numeric for left or right alignment respectively.
 * @param {string} width            - Width of the header/column
 * @param {string} scope            - Scope of the header, can be 'row' or 'col'
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 */
export const AUtableHeader = ( { title, type, width, scope, className, ...attributeOptions } ) => {
return 	<th className={`au-table__header ${className}` +
						`${type === "numeric" ? " au-table__header--numeric ": " "}` +
						`${ width ? " au-table__header--width-" + width : " "} `}
					scope={scope} {...attributeOptions}> {title} </th>
};

AUtableHeader.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'numeric']).isRequired,
	width: PropTypes.oneOf(['10', '20', '25', '33', '50', '75']),
	scope: PropTypes.oneOf(['row', 'col']),
	className: PropTypes.string
};

AUtableHeader.defaultProps = {
	className: '',
	scope: 'col',
	type: 'text'
};



/**
 * The data/cell component
 * @param {string} data       - The cell data
 * @param {string} type       - Type of the data, can be either text or numeric for left or right alignment respectively.
 * @param {string} className  - An additional class, optional
 * @param {object} render     - The function for customised rendering on all cells in this column
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const AUtableCell = ( { data, type, className, render,...attributeOptions } ) => {
	return 	<td className={`au-table__cell ${className} ${ type === "numeric" ? "au-table__cell--numeric ": " "}`}
						{...attributeOptions}>
						{ render ? render : data}
					</td>
};

AUtableCell.propTypes = {
	data: PropTypes.any,
	type: PropTypes.oneOf(['text', 'numeric']).isRequired,
	render: PropTypes.any
};

AUtableCell.defaultProps = {
	className: '',
	type: 'text'
};



/**
 * The table row component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 */
export const AUtableRow = ( { children, className,...attributeOptions } ) => {
	return <tr className={`au-table__row ${ className }`} { ...attributeOptions }>
		{children}
	</tr>
};

AUtableRow.defaultProps = {
	className: ''
};

AUtableRow.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}



/**
 * The table caption component
 * @param {string} tableCaption     - The title of the table caption
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const AUtableCaption = ({ tableCaption, className, ...attributeOptions }) => {
	return (
		<caption className={`au-table__caption ${className}`} {...attributeOptions}>
			{ tableCaption }
		</caption>
	)
};

AUtableCaption.propTypes = {
	tableCaption: PropTypes.string,
	className: PropTypes.string
}

AUtableCaption.defaultProps = {
	className: ''
};



/**
 * Table wrapper for responsive tables with horizontal scrolling on smaller devices
 * @param {node} children
 */
export const AUtableResponsiveWrapper = ({ children }) => {
	return (
		<div className="au-table__wrapper">
			{children}
		</div>
	)
};

AUtableResponsiveWrapper.propTypes = {
	children: PropTypes.node
};


/**
 * Table footer
 *
 * @param {string} className  - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 * @param {bool} stripedTableFooter  - variatin of footer for striped table
 * @param {string} type       - Type of the data, can be either text or numeric for left or right alignment respectively.
 * @param {node}   children
 *
 */
export const AUtableFooter = ({ type, className, stripedTableFooter, children, ...attributeOptions }) => (
	<tfoot className={`au-table__footer ${ stripedTableFooter  ? 'au-table__footer--striped ' : ' '} ${className} ${ type === "numeric" ? "au-table__cell--numeric ": " "}`} {...attributeOptions} >{ children }</tfoot>
);

AUtableFooter.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(['text', 'numeric']).isRequired,
	className: PropTypes.string,
	stripedTableFooter: PropTypes.bool,
}

AUtableFooter.defaultProps = {
	className: '',
	stripedTableFooter: false,
	type:'text',
}


export default AUtable;
