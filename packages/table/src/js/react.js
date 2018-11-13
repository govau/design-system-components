/*! table v0.1.0 */
/***************************************************************************************************************************************************************
 *
 * AUTable function
 *
 * Allow users to easily scan rows of data
 *
 **************************************************************************************************************************************************************/

import React from "react";
import PropTypes from "prop-types";

const AUTable = ({ dark, alt, caption, head, body, foot }) => (
	<table
		className={
			"au-table" +
			`${dark ? " au-table--dark" : ""}` +
			`${alt ? " au-table--alt" : ""}`
		}
	>
		<caption tabIndex="0" className="au-table__caption">{caption}</caption>
		<thead className="au-table__head">
			<tr className="au-table__row">
				{head.map((item, i) => (
					<th tabIndex={i} key={i} className="au-table__header" scope="col">{item.text}</th>
				))}
			</tr>
		</thead>
		<tbody className="au-table__body">
			{body.map((item, i) => (
				<tr key={i} className="au-table__row">
					{item.items.map((ele, i) => (
						<td tabIndex={i % body.length} key={i} className="au-table__cell">{ele}</td>
					))}
				</tr>
			))}
		</tbody>
		{foot ? (
			<tfoot className="au-table__footer">
				{foot.map((item, i) => (
					<tr key={i} className="au-table__row">
						{item.items.map((ele, i) => (
							<td key={i} className="au-table__cell">{ele}</td>
						))}
					</tr>
				))}
			</tfoot>
		) : (
			undefined
		)}
	</table>
);

AUTable.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	caption: PropTypes.string,
	head: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			format: PropTypes.node
		})
	).isRequired,
	body: PropTypes.arrayOf(
		PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.string),
			format: PropTypes.node
		})
	).isRequired,
	foot: PropTypes.arrayOf(
		PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.string),
			format: PropTypes.node
		})
	)
};

AUTable.defaultProps = {};

export default AUTable;
