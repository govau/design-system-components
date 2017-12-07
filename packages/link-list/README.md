@gov.au/link-list
============

> A simple list of inline links..


## Contents

* [Install](#install)
* [Usage](#usage)
* [Dependency graph](#dependency-graph)
* [Build](#build)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/link-list
```

```shell
npm install @gov.au/link-list --save-dev
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
import LinkList from './link-list.js';

<LinkList items={[
	{
		link: 'link/one/',
		text: 'Link 1',
	},
	{
		link: 'link/two/',
		text: 'Link 2',
	},
	{
		link: 'link/three/',
		text: 'Link 3',
	},
]} />
```

All props:

```jsx
<LinkList
	inline={ false }          {/* The inline option to make the list inline, optional */}
	items={[                  {/* All links in a neat array */}
		{
			link: 'link/to/',     {/* The link for this item, optional */}
			text: 'Link title',   {/* The text for this item */}
			onClick={ () => {} }  {/* A function to execute when this link is clicked, optional */}
		},
	]},
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/link-list/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
link-list
├─ core
└─ body
   └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/link-list/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
