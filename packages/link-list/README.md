@gov.au/link-list
============

> A simple list of inline links..


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
import AUlinkList from './link-list.js';

<AUlinkList items={[
  {
    link: 'link/one/',
    text: 'Link 1',
  },
  {
    link: 'link/two/',
    text: 'Link 2',
    className: 'is-active',
    li: {
      className: 'li-wrapping-class',
    },
  },
  {
    text: 'Link 3',
    onClick: () => console.log('You clicked me!'),
  },
  {
    linkComponent: 'a',
    link: 'link/four/',
    text: 'Link 4',
  },
]} />
```

All props:

```jsx
<AUlinkList
  inline={ false }            {/* The inline option to make the list inline, optional */}
  linkComponent="a"           {/* The component used for the link, optional */}
  items={[                    {/* All links in a neat array */}
    {
      link: 'link/to/',       {/* The link for this item, optional */}
      linkComponent: 'a',     {/* The component used for the link, optional */}
      text: 'Link title',     {/* The text for this item */}
      li: {},                 {/* An object that will be spread onto the <li> tag, optional */}
      onClick={ () => {} }    {/* A function to execute when this link is clicked, optional */}
    },
  ]},
/>
```
_(💡 additional props are spread onto the component)_


For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/link-list/tests/react/index.js).


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


## Tests

The visual test: https://auds.service.gov.au/packages/link-list/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.0.3 - Fixing bug in link-list au-body
* v3.0.2 - Update dependencies
* v3.0.1 - Removing web pack dev server, updating dependencies
* v3.0.0 - Move children location in react, build scripts for Windows
* v2.1.1 - Replace node-sass with sass
* v2.1.0 - Support react router
* v2.0.3 - Add support for HTML in link, Update dependencies
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
