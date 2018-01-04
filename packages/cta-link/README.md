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
  attributeOptions  {/* Any other attribute options */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/cta-link/tests/react/index.js).


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

The visual test: https://uikit.apps.b.cld.gov.au/packages/cta-link/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.0 - Moved to AU namespace, added new color themes and spacing
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
