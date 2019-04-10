@gov.au/core CHANGELOG
======================

> Part of the [gov.au components](https://github.com/govau/design-system-components/) ecosystem.


## Contents

* [Versions](#install)
* [Release History](#release-history)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Versions

* [v3.4.1 - Remove --save-dev flag from readme instructions](#v341)
* [v3.4.0 - Update error and success alert colours to meet contrast requirements on `--alt` backgrounds](#v340)
* [v3.3.0 - Change error and success alert colours to make them accessible](#v330)
* [v3.2.0 - Add additional colour checks for incaccesble color combinations](#v320)
* [v3.1.2 - Removed uikit references](#v312)
* [v3.1.1 - Fix issue with A11yColor when white and black both pass](#v311)
* [v3.1.0 - Update font stack to accomodate linux users](#v310)
* [v3.0.3 - Update dependencies](#v303)
* [v3.0.2 - Removing web pack dev server, updating dependencies](#v302)
* [v3.0.1 - Focus outline offset to only apply on the default focus state, build scripts for Windows](#v301)
* [v3.0.0 - Binary search a11y color, replace node-sass with sass](#v300)
* [v2.0.3 - Change npm run watch browser-sync location](#v203)
* [v2.0.2 - Update dependencies](#v202)
* [v2.0.1 - Change homepage link](#v201)
* [v2.0.0 - Changing mix values for border and muted, focus colour, adding offset to focus](#v200)
* [v1.0.1 - Adjusting how colors are generated from other colors](#v101)
* [v1.0.0 - Moved to AU namespace, added new color themes and spacing](#v100)
* [v0.1.3 - Moved to System fonts](#v013)
* [v0.1.2 - Fixed newly introduced auds-svguri bug; ups](#v012)
* [v0.1.1 - Fixed auds-svguri bug](#v011)
* [v0.1.0 - 💥 Initial version](#v010)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

### v3.4.1

- Remove --save-dev flag from readme instructions


### v3.4.0

- Update error and success alert colours to meet contrast requirements on `--alt` backgrounds


### v3.3.0

- Update error alert color to meet a 4.5:1 ratio, since this will also be used for error text.
- Update success alert colour to a ratio of 3:1, for use to indicate successful entry on a form control.


### v3.2.0

- Add additional colour checks for incaccesble color combinations


### v3.1.2

- Removed uikit references


### v3.1.1

- Fix issue with A11yColor when white and black both pass


### v3.1.0

- Update the monospaced font to use a modern system font stack
- Update the font family to make the fonts less large and clunky on different linux distributions


### v3.0.3

- Update dependencies


### v3.0.2

- Removing web pack dev server, updating dependencies


### v3.0.1

- Fixed build scripts for Windows
- Focus outline offset to only apply on the default focus state


### v3.0.0

- A11yColor uses a binary search making it blazing fast
- Removed step property from A11yColor
- Made contrast tests silent by default
- Replace node-sass with sass


### v2.0.3

- Change npm run watch browser-sync location


### v2.0.2

- Update dependencies


### v2.0.1

- Change homepage link


### v2.0.0

- Bumped core version which changed to focus color and border/muted color mix


### v1.0.2

- Changing mix value for $AU-color-foreground-muted and $AU-color-foreground-border
- Moving away from error color red for focus
- Adding offset back to focus


### v1.0.1

- Adjusting how colors are generated from other colors


### v1.0.0

- Moved to AU namespace
- Added new color themes with dark and alt variants
- Added a new 4px based spacing system via line-height


### v0.1.3

- Moved to system fonts


### v0.1.2

- Fixed auds-svguri bug that was introduced in 0.1.1. Ups! We swear we make testing more automated :)


### v0.1.1

- Fixed auds-svguri bug where new lines would cause webpack to break CSS.


### v0.1.0

- 💥 Initial version


**[⬆ back to top](#contents)**


# };
