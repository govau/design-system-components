import React from "react";
import ReactDOM from "react-dom";

import AUTable from "./table.js";

ReactDOM.render(
	<div>
		<h1>Test: table</h1>
		<AUTable
			caption="Caption here"
			head={[
				{
					text: "Heading 1"
				},
				{
					text: "Heading 2"
				},
				{
					text: "Heading 3"
				}
			]}
			body={[
				{
					items: ["item1", "item2", "item3"]
				},
				{
					items: ["item4", "item4", "item5"]
				},
				{
					items: ["item6", "item7", "item8"]
				},
			]}
		/>

		<h1>Test: table dark</h1>
		<AUTable
			caption="Caption here"
			dark
			head={[
				{
					text: "Heading 1"
				},
				{
					text: "Heading 2"
				},
				{
					text: "Heading 3"
				}
			]}
			body={[
				{
					items: ["item1", "item2", "item3"]
				},
				{
					items: ["item4", "item4", "item5"]
				},
				{
					items: ["item6", "item7", "item8"]
				},
			]}
		/>

		<h1>Test: table alt</h1>
		<AUTable
			caption="Caption here"
			alt
			head={[
				{
					text: "Heading 1"
				},
				{
					text: "Heading 2"
				},
				{
					text: "Heading 3"
				}
			]}
			body={[
				{
					items: ["item1", "item2", "item3"]
				},
				{
					items: ["item4", "item4", "item5"]
				},
				{
					items: ["item6", "item7", "item8"]
				},
			]}
		/>

		<h1>Test: table w/ footer</h1>
		<AUTable
			caption="Caption here"
			head={[
				{
					text: "Heading 1"
				},
				{
					text: "Heading 2"
				},
				{
					text: "Heading 3"
				}
			]}
			body={[
				{
					items: ["item1", "item2", "item3"]
				},
				{
					items: ["item4", "item4", "item5"]
				},
				{
					items: ["item6", "item7", "item8"]
				},
			]}
			foot={[
				{
					items: ["Item summary:", "", "1234"]
				}
			]}
		/>

		<h1>Test: table w/ text</h1>
		<AUTable
			caption="Caption here"
			head={[
				{
					text: "This is a long heading"
				},
				{
					text: "This is a longer heading that anybody could possibly imagine."
				},
				{
					text: "Heading 3"
				}
			]}
			body={[
				{
					items: ["unusually long item", "item2", "item3"]
				},
				{
					items: ["<PUT A LINK HERE>", "item4", "item5"]
				},
				{
					items: ["item6", "item7", "This is a sentence! How the heck does this even make sense."]
				},
			]}
		/>
	</div>,

	document.getElementById("root")
);
