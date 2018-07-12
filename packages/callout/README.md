@gov.au/callout
============

> Use callout to notify and alert users of important snippets of information.


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
import { AUcallout, AUcalloutCalendar } from './callout.js';

<AUcallout description="Description for this callout">
  AUcallout content
</AUcallout>

<AUcalloutCalendar
  description="description for this callout"
  datetime="2017-01-01T00:00:00+00:00"
  time="Sunday 32 Jun"
  subline="Your next appointment is"
  name="Talk to boss"
/>
```

All props:

```jsx
<AUcallout
  description="Description for this callout"  {/* The label is a must for screen readers */}
  attributeOptions                            {/* Any other attribute options */}
>
  Callout content
</AUcallout>

<AUcalloutCalendar
  description="description for this callout"  {/* The label is a must for screen readers */}
  datetime="2017-01-01T00:00:00+00:00"        {/* The date time string */}
  time="Sunday 32 Jun"                        {/* The same date but human readable */}
  subline="Your next appointment is"          {/* Your subline, optional */}
  name="Talk to boss"                         {/* The name of the event, optional */}
  dark={ false }                              {/* A dark variation of the component */}
/>
```
_(💡 additional props are spread onto the component)_

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


## Tests

The visual test: https://uikit.service.gov.au/packages/callout/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.0.6 - Fixed build scripts for Windows
* v2.0.5 - Replace node-sass with sass
* v2.0.4 - Change npm run watch browser-sync location
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage link
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
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
