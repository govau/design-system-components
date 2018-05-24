@gov.au/header
============

> Headers provide a consistent start to pages.


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
yarn add @gov.au/header
```

```shell
npm install @gov.au/header --save-dev
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
import AUheader from './header.js';

<AUheader title="Page title" />
```

All props:

```jsx
<AUheader
  title="Page title"  {/* The headline content, optional */}
  level="1"           {/* The headline tag level, h1-h6, optional */}
  subline="Subline"   {/* The subline content, optional */}
  alt={ false }       {/* An alternate variation of the component, optional */}
  dark={ false }      {/* A dark variation of the component, optional */}
  hero={ false }      {/* The hero option, optional, optional */}
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/header/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
header
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/header/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v4.0.0 - Added crest, and optional grid layout
* v3.0.2 - Change homepage link
* v3.0.1 - Fix dependencies
* v3.0.0 - Change to focus colour and border/muted color mix
* v2.0.0 - Moved to AU namespace, added new color themes and spacing
* v1.2.0 - Added pancake-react plugin, ES5 main file, added children
* v1.1.0 - Added react component
* v1.0.0 - Removed the side spacing #147
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
