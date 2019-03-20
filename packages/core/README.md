@gov.au/core
============

> The core module all [gov.au components modules](https://github.com/govau/design-system-components/) depend on.


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
yarn add @gov.au/core
```

```shell
npm install @gov.au/core --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [Sass](#sass)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### Sass


#### AU-color-contrast

Get the contrast ratio of two colors and warn when it is below WCAG 2.0 AA standard 4.5:1

`AU-color-contrast( foreground, background, silent, rounded )`


The paramaters are:

`foreground` - Color one

`background` - Color two

`silent` - If the logs get printed in the terminal

`rounded` - If the value is rounded or not


Example:
```
content: AU-color-contrast( red, blue );
```


#### AU-color-a11y

The function to find the nearest accessible color.

`AU-color-a11y( toMakeA11y, background, ratioKey, steps )`


The paramaters are:

`toMakeA11y` - The color that is to be changed.

`background` - The background color to compare against toMakeA11y for the contrast.

`ratioKey` - The keyword `small` or `large` to set the WCAG 2.1 contrast ration or 3.0 or 4.5.

`steps` - The step size our function is searching for a new color in. The bigger the number the faster the process the rougher the found color. Must be from 0.1 to 100.


Example:
```
background: AU-color-a11y( red, blue );
```


#### AU-svguri

Generate an optimized SVG data-uri.

`AU-svguri( svg )`


The paramaters are:

`svg` - The SVG data to be converted.


Example:
```
background-image: AU-svguri('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
  <path fill="red" d="M128 64l-64 64-16-16 64-64"/>
  <path fill="red" d="M128 64l-16 16-64-64L64 0"/>
</svg>');
```


#### AU-media

Create media queries and wraps the @content code inside of it.

`AU-media( breakpoint )`


The paramaters are:

`breakpoint` - Either one of the following keywords: `xs`, `sm`, `md`, `lg`


Example:
```
@include AU-media( sm ) {
  width: 48%;
}
```


#### AU-fontgrid

Mixin for setting font-size and line-height that snaps to the grid.

`AU-fontgrid( fontsize, lineheight )`


The paramaters are:

`fontsize` - Either one of the following keywords: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`.

`lineheight` - Either one of the following keywords: `heading`, `nospace`, `default`.


Example:
```
@include AU-fontgrid( md, heading );
```


#### AU-space

Mixin for setting a properties value to snap to the grid, with a fallback for REM.

`AU-space( property, value )`


The paramaters are:

`property` - The css property to apply the spacing ( `padding`, `margin`, `border` )

`value` - The values of the property ( `0`, `20px`, `1unit`, `5%` )


Example:
```
@include AU-space( margin, 1unit 10% );
```


#### AU-focus

Add the outline to focus.

`AU-focus( dark )`


The paramaters are:

`theme` - Either one of the following keywords: `light` or `dark`.


Example:
```
@include AU-focus();
```


#### AU-sronly

Hide an element from the screen but not a screen reader.

`AU-sronly()`


Example:
```
@include AU-sronly();
```


#### AU-clearfix

Clearing floats.

`AU-clearfix()`


Example:
```
@include AU-clearfix();
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/core/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.4.0 - Update error and success alert colours to meet contrast requirements on `--alt` backgrounds
* v3.3.0 - Change error and success alert colours to make them WCAG contrast requirements
* v3.2.0 - Add additional colour checks for incaccesble color combinations
* v3.1.2 - Removed uikit references
* v3.1.1 - Fix issue with A11yColor when white and black both pass
* v3.1.0 - Update font stack to accomodate linux users
* v3.0.3 - Update dependencies
* v3.0.2 - Removing web pack dev server, updating dependencies
* v3.0.1 - Focus outline offset to only apply on the default focus state, build scripts for Windows
* v3.0.0 - Binary search a11y color, replace node-sass with sass
* v2.0.3 - Change npm run watch browser-sync location
* v2.0.2 - Update dependencies
* v2.0.1 - Change homepage link
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.2 - Changing mix values for border and muted, focus colour, adding offset to focus
* v1.0.1 - Adjusting how colors are generated from other colors
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.1.3 - Moved to System fonts
* v0.1.2 - Fixed newly introduced auds-svguri bug; ups
* v0.1.1 - Fixed auds-svguri bug
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
