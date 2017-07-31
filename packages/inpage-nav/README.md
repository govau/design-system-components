@gov.au/inpage-nav
============

> Use inpage-nav links to help users scan and jump to content of a page.


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
import { InpageNavLinks, InpageNavSection } from './inpage-nav.js';

<InpageNavLinks sections={[
	{
		link: 'section1',
		title: 'Section 1',
	},
	{
		link: 'section2',
		title: 'Section 2',
	},
]} />

<InpageNavSection title="Section 1 headline" link="section1">
</InpageNavSection>

<InpageNavSection title="Section 2 headline" link="section2">
</InpageNavSection>
```

All props:

```jsx
<InpageNavLinks
	title="Contents"         {/* The title above all sections */}
	sections={[              {/* All section in a neat array */}
		{
			link: 'section1',    {/* The link to the section, this will be converted to a hash link */}
			title: 'Section 1',  {/* The link text of this section */}
			onClick: () => {},   {/* A function to be executed when a section is clicked, optional */}
		},
	]}
/>

<InpageNavLinks
	title="Section 1"                {/* The title of the section */}
	link="section1"                  {/* The link of this section, corresponds to the link inside InpageNavLinks */}
	level="2"                        {/* The semantic heading tag level, h1-h6, optional */}
	headingClass="uikit-display-3"   {/* Additional classes to be added to the headline, optional */}
	sectionLink="Link to section"    {/* The text for the section link, optional */}
	sectionLinkOnClick={ () => {} }  {/* A function to be executed when the section link is clicked, optional */}
/>
```

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


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/inpage-nav/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

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
