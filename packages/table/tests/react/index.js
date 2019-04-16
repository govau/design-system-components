import React from 'react';
import ReactDOM from 'react-dom';

import AUTable from './table.js';


ReactDOM.render(
	<div>
		<h2>Default</h2>
		<AUTable 
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location"
				},
				{
					text: "Population"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400"
					}
				],
				[
					{
						text: "Queensland"
					},
					{
						text: "4,808,8000"
					}
				],
				[
					{
						text: "Western Australia"
					},
					{
						text: "2,603,900"
					}
				],
				[
					{
						text: "South Australia"
					},
					{
						text: "1,702,800"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400"
					}
				],
				[
					{
						text: "Northern Territory"
					},
					{
						text: "244,000"
					}
				],
				[
					{
						text: "Australian Capital Territory"
					},
					{
						text: "393,000"
					}
				]
			]}
		/>

		<h2>Default <code>--alt</code></h2>
		<AUTable
			alt
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location"
				},
				{
					text: "Population"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400"
					}
				],
				[
					{
						text: "Queensland"
					},
					{
						text: "4,808,8000"
					}
				],
				[
					{
						text: "Western Australia"
					},
					{
						text: "2,603,900"
					}
				],
				[
					{
						text: "South Australia"
					},
					{
						text: "1,702,800"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400"
					}
				],
				[
					{
						text: "Northern Territory"
					},
					{
						text: "244,000"
					}
				],
				[
					{
						text: "Australian Capital Territory"
					},
					{
						text: "393,000"
					}
				]
			]}
		/>

		<h2>Default <code>--dark</code></h2>
		<AUTable
			dark
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location"
				},
				{
					text: "Population"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400"
					}
				],
				[
					{
						text: "Queensland"
					},
					{
						text: "4,808,8000"
					}
				],
				[
					{
						text: "Western Australia"
					},
					{
						text: "2,603,900"
					}
				],
				[
					{
						text: "South Australia"
					},
					{
						text: "1,702,800"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400"
					}
				],
				[
					{
						text: "Northern Territory"
					},
					{
						text: "244,000"
					}
				],
				[
					{
						text: "Australian Capital Territory"
					},
					{
						text: "393,000"
					}
				]
			]}
		/>

		<h2>Default <code>--stripped</code></h2>
		<AUTable
			stripped
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location"
				},
				{
					text: "Population"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400"
					}
				],
				[
					{
						text: "Queensland"
					},
					{
						text: "4,808,8000"
					}
				],
				[
					{
						text: "Western Australia"
					},
					{
						text: "2,603,900"
					}
				],
				[
					{
						text: "South Australia"
					},
					{
						text: "1,702,800"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400"
					}
				],
				[
					{
						text: "Northern Territory"
					},
					{
						text: "244,000"
					}
				],
				[
					{
						text: "Australian Capital Territory"
					},
					{
						text: "393,000"
					}
				]
			]}
		/>
		
	</div>,

	document.getElementById('root'),
);
