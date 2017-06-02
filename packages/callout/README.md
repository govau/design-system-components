@gov.au/callout
============

> Use callout to notify and alert users of important snippets of information.


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
yarn add @gov.au/callout
```

```shell
npm install @gov.au/callout --save-dev
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
import { Callout, CalloutCalendar } from './callout.js';

<Callout description="Description for this callout">
	Callout content
</Callout>

<CalloutCalendar
	description="description for this callout"
	datetime="2017-01-01T00:00:00+00:00"
	time="Sunday 32 Jun"
	subline="Your next appointment is"
	name="Talk to boss"
/>
```

All props:

```jsx
<Callout
	description="Description for this callout"  {/* The label is a must for screen readers */}
>
	Callout content
</Callout>

<CalloutCalendar
	description="description for this callout"  {/* The label is a must for screen readers */}
	datetime="2017-01-01T00:00:00+00:00"        {/* The date time string */}
	time="Sunday 32 Jun"                        {/* The same date but human readable */}
	subline="Your next appointment is"          {/* Your subline, optional */}
	name="Talk to boss"                         {/* The name of the event, optional */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/callout/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
callout
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/callout/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

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
