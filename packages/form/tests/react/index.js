import React from 'react';
import ReactDOM from 'react-dom';

import AUlabel from './form.js';
import AUtextInput from '@gov.au/text-inputs';

ReactDOM.render(<div><AUlabel title="Password" htmlFor="something" />
<AUtextInput id="text-input" /></div>,

	document.getElementById('root'),
);
