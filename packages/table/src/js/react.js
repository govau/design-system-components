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

const AUTable = ({ dark, alt, caption, head, body, foot }) => {
	// Deep assign default values for head  items ( isLink, href ), what's a better way to do this?
	// @see https://stackoverflow.com/questions/38123498/how-do-you-provide-default-props-for-nested-shape-in-react
	head.map(item => {
		if (item && !item.isLink && !item.href) {
			item.isLink = false;
			item.href = "";
		}
	});

	return (
		<table
			className={
				"au-table" +
				`${dark ? " au-table--dark" : ""}` +
				`${alt ? " au-table--alt" : ""}`
			}
		>
			<caption className="au-table__caption">{caption}</caption>
			<thead className="au-table__head">
				<tr className="au-table__row">
					{head.map((item, i) => {
						if (item.href && item.isLink == true) {
							return (
								<th key={i} className="au-table__header" scope="col">
									<a
										rel="noopener noreferrer"
										target="_blank"
										title={`Go to ${item.text}`}
										href={item.href}
									>
										{item.text}
									</a>
								</th>
							);
						} else {
							return (
								<th key={i} className="au-table__header" scope="col">
									{item.text}
								</th>
							);
						}
					})}
				</tr>
			</thead>
			<tbody className="au-table__body">
				{body.map((item, i) => (
					<tr key={i} className="au-table__row">
						{item.items.map((ele, i) => (
							<td key={i} className="au-table__cell">
								{ele}
							</td>
						))}
					</tr>
				))}
			</tbody>
			{foot ? (
				<tfoot className="au-table__footer">
					{foot.map((item, i) => (
						<tr key={i} className="au-table__row">
							{item.items.map((ele, i) => (
								<td key={i} className="au-table__cell">
									{ele}
								</td>
							))}
						</tr>
					))}
				</tfoot>
			) : (
				undefined
			)}
		</table>
	);
};

AUTable.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	caption: PropTypes.string,
	head: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			isLink: PropTypes.bool,
			href: PropTypes.string,
			format: PropTypes.node
		})
	).isRequired,
	body: PropTypes.arrayOf(
		PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.string)
		})
	).isRequired,
	foot: PropTypes.arrayOf(
		PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.string)
		})
	)
};

AUTable.defaultProps = {};

export default AUTable;
