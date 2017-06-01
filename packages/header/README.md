@gov.au/header
============

> Headers provide a consistent start to pages.


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
import Header from './header.js';

<Header title="Page title" />
```

All props:

```jsx
<Header
	title="Page title"  {/* The headline content */}
	level="1"           {/* The headline tag level, h1-h6, optional */}
	subline="Subline"   {/* The subline content, optional */}
	theme="light"       {/* The theme, 'light', 'dark', optional */}
	hero={ false }      {/* The hero option, optional */}
/>
```

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


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/header/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

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
