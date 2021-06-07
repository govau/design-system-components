@gov.au/tags
============

> Use tags to apply a taxonomy and link to similar content.


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
yarn add @gov.au/tags
```

```shell
npm install @gov.au/tags
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
import AUtag, {AUtagList} from './tags.js';

<AUtag text="Single tag" />
<AUtag text="Single tag anchor" link="#" />

<AUtagList dark tags={[
		{
			link: '#url',
			text: 'foo',
		},
		{
			link: '#url',
			text: 'bar',
			//attribute options on the tag
			attributeOptions: {
				role: "link",
				className: "extra class",
				onClick: event => { event.preventDefault(); console.log('This function is called when the tag is clicked') },

			},
			// attribute options on the li element
			li: {
				className: 'li-wrapping-class',
			}
		},
		{
			link: '#url',
			text: 'baz',
		},
		{
			//non-link tag
			text: 'boing',
		},
]} />
```

All props:

```jsx

<AUtag 
	text="Single tag anchor" 
	link="#" 
	dark={ false }           {/* A dark variation of the component */}
	/>

<AUtagList
  dark={ false }           {/* A dark variation of the component */}
  tags={[
    {
      link: 'url/to/tag',  {/* The href link of this tag, optional */}
      linkComponent: 'a',  {/* The component used for the link, optional. Can also use Link from React Router */}
			text: 'tagname',     {/* The text of the tag */}
			attributeOptions: {} {/* An object that will be spread into the tag element*/}
      li: {},              {/* An object that will be spread onto the <li> tag, optional */}
		},
		{
			/*Another tag*/
		}
  ]},
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/tags/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
tags
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/tags/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v4.0.1 - Update core package dependency to use the latest version
* v4.0.0 - Refactor tags so they don't have to be in a list
* v3.1.7 - Remove --save-dev flag from readme instructions
* v3.1.6 - Removed unused `Fragment` React import
* v3.1.5 - Removed uikit references
* v3.1.4 - Update dependencies
* v3.1.3 - Removing web pack dev server, updating dependencies
* v3.1.2 - Fixed build scripts for Windows
* v3.1.1 - Replace node-sass with sass
* v3.1.0 - React router support
* v3.0.0 - Remove support for Description List <DL> for accessibility, Update dependencies
* v2.0.2 - Change homepage links
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.1 - Fixed a11y contrast issue
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
