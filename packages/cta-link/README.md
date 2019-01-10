@gov.au/cta-link
============

> Use cta links to draw attention to a primary call to action.


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
yarn add @gov.au/more-link
```

```shell
npm install @gov.au/more-link --save-dev
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
import AUctaLink from './cta-link.js';

<AUctaLink link="/signup" text="Sign up" />
```

All props:

```jsx
<AUctaLink
  text="Sign up"    {/* The text of the CTA link */}
  dark={ false }    {/* A dark variation of the component */}
  link="/signup"    {/* The location the CTA link takes the user */}
  linkComponent="a" {/* The component used for the link, optional */}
  attributeOptions  {/* Any other attribute options */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/cta-link/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
cta-link
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/cta-link/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.1.4 - Update dependencies
* v2.1.3 - Removing web pack dev server, updating dependencies
* v2.1.2 - Fixed build scripts for Windows
* v2.1.1 - Replace node-sass with sass
* v2.1.0 - Add support for react router
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
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
