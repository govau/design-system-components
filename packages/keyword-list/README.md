@gov.au/keyword-list
============

> A list style for emphasising parts of a list item, useful for repeating phrases across that list’s items.


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
yarn add @gov.au/keyword-list
```

```shell
npm install @gov.au/keyword-list 
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
import AUkeywordList from './keyword-list.js';

<AUkeywordList
  repeatedName='Department of'
  items={[
    {
      link: 'http://www.agriculture.gov.au/',
      name: 'Agriculture and Water Resources',
    },
    {
      link: 'https://www.communications.gov.au/',
      name: 'Communications and the Arts',
      li: {
        className: 'li-wrapping-class',
      },
    },
    {
      link: 'https://www.finance.gov.au/',
      name: 'Finance',
    },
  ]}
/>
```

All props:

```jsx
<AUkeywordList
  dark={ false }                                {/* A dark variation of the component */}
  repeatedName="Department of"                  {/* The text That is repeated in each item */}
  linkComponent="a"                             {/* The component used for the link, optional */}
  items={[                                      {/* All items in a neat array */}
    {
      link: 'http://www.agriculture.gov.au/',   {/* The URL of this item, optional */}
      linkComponent: 'a',                       {/* The component used for the link, optional */}
      name: 'Agriculture and Water Resources',  {/* The name of the item */}
      li: {},                                   {/* An object that will be spread onto the <li> tag, optional */}
    },
  ]},
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/keyword-list/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
keyword-list
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/keyword-list/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.0.5 - Remove --save-dev flag from readme instructions
* v3.0.4 - Removed unused `Fragment` React import
* v3.0.3 - Removed uikit references
* v3.0.2 - Update dependencies
* v3.0.1 - Removing web pack dev server, updating dependencies
* v3.0.0 - Updated dependency version of link-list, build scripts for Windows
* v2.1.1 - Replace node-sass with sass
* v2.1.0 - React router support
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage links
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
