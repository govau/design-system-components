import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from './buttons.js';


ReactDOM.render(
	<form>
		<h2>primary button</h2>
		<ButtonPrimary text="Continue" /> <ButtonPrimary text="Continue" disabled />


		<hr />
		<h2>secondary button</h2>
		<ButtonSecondary text="Save" /> <ButtonSecondary text="Save" disabled />


		<hr />
		<h2>tertiary button</h2>
		<ButtonTertiary text="Cancel" /> <ButtonTertiary text="Cancel" disabled />


		<hr />
		<h2>buttons with block</h2>
		<ButtonPrimary text="Continue" block /> <ButtonSecondary text="Save" block /> <ButtonTertiary text="Cancel" block />


		<hr />
		<h2>buttons with different type</h2>
		<ButtonPrimary type="submit" text="Submit" /> <ButtonPrimary type="button" text="Button" /> <ButtonPrimary type="reset" text="Reset" />
	</form>,

	document.getElementById('root'),
);
