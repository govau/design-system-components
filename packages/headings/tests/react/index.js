import React from 'react';
import ReactDOM from 'react-dom';

import Heading from './headings.js';


ReactDOM.render(
	<div>
		<h2>headings</h2>

		<Heading size="6" level="1" text="Display 6" />
		<Heading size="5" level="2" text="Display 5" />
		<Heading size="4" level="3" text="Display 4" />
		<Heading size="3" level="6" text="Display 3" />
		<Heading size="2" level="4" text="Display 2" />
		<Heading size="1" level="5" text="Display 1" />
	</div>,

	document.getElementById('root'),
);
