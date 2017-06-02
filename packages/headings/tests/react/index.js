import React from 'react';
import ReactDOM from 'react-dom';

import Heading from './headings.js';


ReactDOM.render(
	<div>
		<h2>headings</h2>

		<Heading size="6" level="1" text="Display 6 on h1" />
		<Heading size="5" level="2" text="Display 5 on h2" />
		<Heading size="4" level="3" text="Display 4 on h3" />
		<Heading size="3" level="6" text="Display 3 on h6" />
		<Heading size="2" level="4" text="Display 2 on h4" />
		<Heading size="1" level="5" text="Display 1 on h5" />
	</div>,

	document.getElementById('root'),
);
