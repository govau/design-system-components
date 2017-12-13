@gov.au/tags
============

> Use tags to apply a taxonomy and link to similar content.


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
yarn add @gov.au/tags
```

```shell
npm install @gov.au/tags --save-dev
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
import Button from './tags.js';

<AUtags tags={[
	{
		link: 'link/to/tag1',
		text: 'tag1',
	},
	{
		link: 'link/to/tag2',
		text: 'tag2',
	},
	{
		link: 'link/to/tag3',
		text: 'tag3',
	},
]} />
```

All props:

```jsx
<AUtags
	dark={ false }           {/* A dark variation of the component */}
	tags={[
		{
			link: 'url/to/tag',  {/* The href link of this tag, optional */}
			text: 'tagname',     {/* The text of the tag */}
			onClick: () => {},   {/* A function to execute when the tag is clicked, optional */}
		},
	]},
	attributeOptions         {/* Any other attribute options */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/tags/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
tags
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/tags/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.1 - Fixed a11y contrast issue
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
