@gov.au/card
============

> Cards are used to organise information related to a single topic. Cards can contain multiple elements, such as images, links, buttons or text.


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/card
```

```shell
npm install @gov.au/card
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
card
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/card/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.3.0 - Remove AUcardBody export, restyle footers and headers, add light/dark theme variations and tests
* v0.2.0 - Remove styling for card image and use responsive media
* v0.1.4 - Remove uneccessary sass code and add comments
* v0.1.3 - Fix bug with spacing of class names in AUcard react component
* v0.1.2 - Remove console log and update naming
* v0.1.1 - Add background color to card
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };

## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
import AUcard, { AUcardInner, AUcardHeader, AUcardDivider, AUcardLink, AUcardFooter } from '@gov.au/card';

	<AUcard className="au-body">
		<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
			<AUcardInner>
				<span>Image caption or description</span>
			<AUcardFooter>
				<a href="#">Call to action</a>
			</AUcardFooter>
		</AUcardInner>
	</AUcard>

	//Entire card clickable and single anchor:
		<AUcard class="au-body">
			<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
				<AUcardInner>
						<h3 className="au-card__title"><AUcardLink link="#" text="Some link" /></h3>
				</AUcardInner>
		</AUcard>
```

All props:

```jsx

<AUcard 
link="#"                     {/* Wraps the card in an anchor, with the provided link*/}
shadow={true}                {/* Adds a box shadow to the card*/}
centered={true}              {/* Centers all card content*/}
clickable={true}             {/* Makes entire card clickable if there is anchor tag that has a class of .au-card__link */}
className="additional-class" {/* An additional class, optional*/}
/>

// Card inner container 
<AUcardInner
className=""                 {/* An additional class, optional*/}
/>


// Anchor tag. Useful
<AUcardLink 
link="/card-blog"             {/*The anchor tag url*/}
text="Blog about cards"       {/*The text of the anchor tag*/}
className= ""                 {/*An additional class, optional*/}
/>

//Horizontal rule to divide content
<AUcardDivider 
className=""                 {/*An additional class, optional*/}
/>

//Footer container
<AUcardFooter
className=""                 {/*An additional class, optional*/}
/>

//Card header container
<AUcardHeader
className=""                 {/*An additional class, optional*/}
/>
```
