@gov.au/form
============

> 


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/form
```

```shell
npm install @gov.au/form --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
form
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/form/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
import { AUhintText } from '@gov.au/form';
<AUlabel title="Email" />
<AUhintText title="We will only use this email to respond to your query." />
<AUerrorText title="Enter an email address in the correct format, like name@example.com" />

<AUformGroup>
    // labels, hint text, and form controls here
</AUformGroup>

<AUfieldset>
    // legend, form controls in here.
</AUfieldset>


```

All props:

```jsx
<AUlabel 
title="Email" {/* The text of the label */}
dark = { true }              {/* The dark variation of the component */}
inline={ true }              {/* Label inline*/}
/>

<AUhintText
title="We will only use this email to respond to your query."
/>
```