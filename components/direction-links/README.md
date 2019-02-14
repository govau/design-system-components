@gov.au/direction-links
============

> Use direction links to link up and down within the DOM or back to a parent page.


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
yarn add @gov.au/direction-links
```

```shell
npm install @gov.au/direction-links --save-dev
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
import AUdirectionLink from './direction-links.js';

<AUdirectionLink link="/next/page/" text="Continue" />
```

All props:

```jsx
<AUdirectionLink
  text="Submitting"    {/* The text of the link */}
  link="link/to/page"  {/* The href link, optional */}
  direction="top"      {/* The direction the link goes */}
  dark={ false }       {/* A dark variation of the component */}
  linkComponent="a"    {/* The component used for the link, optional */}
  attributeOptions     {/* Any other attribute options */}
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/components/direction-links/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
direction-links
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/components/direction-links/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.1.5 - Removed uikit references
* v2.1.4 - Update dependencies
* v2.1.3 - Removing web pack dev server, updating dependencies
* v2.1.2 - Fixed build scripts for Windows
* v2.1.1 - Replace node-sass with sass
* v2.1.0 - React router support
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage link
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
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/components/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
