@gov.au/breadcrumbs
============

> Breadcrumbs help users understand where they are in the service and how they got there.


## Contents

* [Install](#install)
* [Usage](#usage)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/breadcrumbs
```

```shell
npm install @gov.au/breadcrumbs --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### React

Usage:

```jsx
import AUbreadcrumbs from './breadcrumbs.js';

<AUbreadcrumbs label="Breadcrumb for this page" items={[
	{
		link: 'breadcrumb/one/',
		text: 'breadcrumb 1',
	},
	{
		link: 'breadcrumb/two/',
		text: 'breadcrumb 2',
	},
	{
		text: 'breadcrumb 3',
	},
]} />
```

All props:

```jsx
<AUbreadcrumbs
	label="The aria-label"        {/* Provide the aria label is a must */}
	dark={ false }                {/* A dark variation of the component */}
	items={[                      {/* An array of all breadcrumbs */}
		{
			link: 'breadcrumb/one/',  {/* The link of the breadcrumb, optional */}
			text: 'breadcrumb 1',     {/* The text of the breadcrumb */}
		},
	]},
	attributeOptions              {/* Any other attribute options */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/breadcrumbs/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
breadcrumbs
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.apps.b.cld.gov.au/packages/breadcrumbs/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.1 - Fixed interdependency with link-list
* v0.3.0 - Fixed react pipeline, background repeat
* v0.2.0 - Added react component
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
