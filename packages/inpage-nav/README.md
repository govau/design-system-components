@gov.au/inpage-nav
============

> Use inpage-nav links to help users scan and jump to content of a page.


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
yarn add @gov.au/inpage-nav
```

```shell
npm install @gov.au/inpage-nav --save-dev
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
import { AUinpageNavLinks, AUinpageNavSection } from './inpage-nav.js';

<AUinpageNavLinks sections={[
  {
    link: 'section1',
    title: 'Section 1',
  },
  {
    link: 'section2',
    title: 'Section 2',
    li: {
      className: 'li-wrapping-class',
    },
  },
]} />

<AUinpageNavSection title="Section 1 headline" link="section1">
</AUinpageNavSection>

<AUinpageNavSection title="Section 2 headline" link="section2">
</AUinpageNavSection>
```

All props:

```jsx
<AUinpageNavLinks
  title="Contents"                {/* The title above all sections */}
  ariaLabel="in page navigation"  {/* Aria-label attribute on the root element */}
  sections={[                     {/* All section in a neat array */}
    {
      link: 'section1',           {/* The link to the section, this will be converted to a hash link */}
      title: 'Section 1',         {/* The link text of this section */}
      li: {},                     {/* An object that will be spread onto the <li> tag, optional */}
      onClick: () => {},          {/* A function to be executed when a section is clicked, optional */}
    },
  ]}
/>

<AUinpageNavSection
  title="Section 1"              {/* The title of the section */}
  link="section1"                {/* The link of this section, corresponds to the link inside AUinpageNavLinks */}
  level="2"                      {/* The semantic heading tag level, h1-h6, optional */}
  headingClass="au-display-lg"   {/* Additional classes to be added to the headline, optional */}
  sectionLink="Link to section"  {/* The text for the section link, optional */}
  dark={ false }                 {/* A dark variation of the component */}
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/inpage-nav/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
inpage-nav
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/inpage-nav/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.0.3 - Added an aria-label attribute to the nav element
* v3.0.2 - Update dependencies
* v3.0.1 - Removing web pack dev server, updating dependencies
* v3.0.0 - Updated dependency version of link-list, build scripts for Windows
* v2.0.5 - Replace node-sass with sass
* v2.0.4 - Change npm run watch browser-sync location
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage links
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
