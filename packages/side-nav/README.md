@gov.au/side-nav
============

> A vertical list of links for site navigation typically placed next to the body content.


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
yarn add @gov.au/side-nav
```

```shell
npm install @gov.au/side-nav 
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
import AUsideNav from './side-nav.js';

<AUsideNav
  dark
  alt
  linkComponent={ Link }
  accordionHeader="In this section"
  menuHeaderLink="#"
  menuHeader="Lodging your tax return"
  ariaLabel="side navigation"
  items={[
    {
      link: 'one',
      text: 'Change to route one',
      active: true,
    },
    {
      link: 'two',
      text: 'Change to route two',
    },
  ]}
/>
```

All props:

```jsx
<AUaccordion
  speed="250"                 {/* Speed of the animation in ms, optional */}
  onOpen={ () => {} }         {/* A function executed when the accordion opens, optional */}
  afterOpen={ () => {} }      {/* A function executed after the accordion opened, optional */}
  onClose={ () => {} }        {/* A function executed when the accordion closes, optional */}
  afterClose={ () => {} }     {/* A function executed after the accordion opened, optional */}
  closed={ true }             {/* Default state for accordion */}
  dark={ false }              {/* A dark variation of the component */}
  alt={ false }               {/* An alt variation of the component */}
  accordionHeader="Header"    {/* The accordion header */}
  menuHeader="Tax return"     {/* The menu title */}
  menuHeaderLink="/tax"       {/* The menu link */}
  linkComponent="a"           {/* The link component */}
  items={}                    {/* The menu items, link locations and active state */}
>
  Some content for this accordion.
</AUaccordion>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/accordion/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
side-nav
├─ core
├─ animate
├─ accordion
│  ├─ animate
│  └─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/side-nav/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v5.0.8 - Removed developer dependecies of the package
* v5.0.7 - Removed unused `Fragment` React import
* v5.0.6 - Resolve autoprefixer warning
* v5.0.5 - Fix pancake build path
* v5.0.4 - Updated deprecated `text-decoration-skip` property to `text-decoration-skip-ink`
* v5.0.3 - Remove aria-selected from side-nav toggle button
* v5.0.2 - Removed uikit references
* v5.0.1 - Update accordion dependency
* v5.0.0 - Update accordion dependency (use `<button>` instead of `<a>` for title)
* v4.0.1 - Update accordion, add a test with state toggle, update side-nav react test examples
* v4.0.0 - Active items are no longer wrapped in `<a>` for accessibility
* v3.0.0 - Updated accordion, see accordion v6.0.0
* v2.0.6 - Added an aria-label attribute to the aside element
* v2.0.5 - Fix active state children getting active style
* v2.0.4 - Update dependencies
* v2.0.3 - Fixing order of dependencies
* v2.0.2 - Added active state for react, Removing web pack dev server, updating dependencies
* v2.0.1 - Removed incorrect margin from desktop side navigation
* v2.0.0 - Update side-nav to use `<aside>` instead of `<nav>`
* v1.0.0 - Update pancake dependency, release first version
* v0.1.1 - Updating dependency in accordion
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };