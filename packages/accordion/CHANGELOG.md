@gov.au/accordion CHANGELOG
======================

> Part of the [gov.au components](https://github.com/govau/design-system-components/) ecosystem.


## Contents

* [Versions](#install)
* [Release History](#release-history)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Versions

* [v7.0.7 - Removed unused `Fragment` React import](#v707)
* [v7.0.6 - Resolve autoprefixer warning](#v706)
* [v7.0.5 - Fix pancake build path](#v705)
* [v7.0.4 - Updated deprecated `text-decoration-skip` property to `text-decoration-skip-ink`](#v704)
* [v7.0.3 - Remove aria-selected from accordion button](#v703)
* [v7.0.2 - Removed uikit references](#v702)
* [v7.0.1 - Fix issue with parent component re-rendering causing accordion to open and close](#v701)
* [v7.0.0 - Changed accordion title element to use `<button>` instead of `<a>`](#v700)
* [v6.0.1 - Fix issues with state not firing](#v601)
* [v6.0.0 - Add accordion group in a unordered list, remove `role="tab"`](#v600)
* [v5.0.2 - Update dependencies](#v502)
* [v5.0.1 - Removing web pack dev server, updating dependencies](#v501)
* [v5.0.0 - Removing unecessary aria-hidden as css display toggles screen reader ability](#v500)
* [v4.0.0 - State change more specific, remove style set on html, componentDidUpdate, build scripts for Windows](#v400)
* [v3.0.5 - Replace node-sass with sass](#v305)
* [v3.0.4 - Change npm run watch browser-sync location](#v304)
* [v3.0.3 - au-body--dark now changes accordion title colour](#v303)
* [v3.0.2 - Update dependencies](#v302)
* [v3.0.1 - React accordion open by default](#v301)
* [v3.0.0 - React accordion open by default](#v300)
* [v2.0.3 - Update homepage link](#v203)
* [v2.0.2 - Fix issue with scope inside AU.animate.Run](#v202)
* [v2.0.1 - Fix dependencies](#v201)
* [v2.0.0 - Change to focus colour and border/muted color mix](#v200)
* [v1.0.1 - IE8 spacing above triangle fixed](#v101)
* [v1.0.0 - Moved to AU namespace, added new color themes and spacing](#v100)
* [v0.3.0 - Added pancake-react plugin, ES5 main file](#v030)
* [v0.2.0 - Added react and jQuery component](#v020)
* [v0.1.0 - 💥 Initial version](#v010)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

### v7.0.7

- Removed unused `Fragment` React import


### v7.0.6

- Resolve autoprefixer warning


### v7.0.5

- Corrected an issue where certain components were published referencing a `src/` folder rather than `lib/`.


### v7.0.4

- Updated deprecated `text-decoration-skip` property to `text-decoration-skip-ink`


### v7.0.3

- Remove aria-selected from accordion button, as [`role="button"` doesn't support `aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#button)


### v7.0.2

- Removed uikit references


### v7.0.1

- Fix issue with parent component re-rendering causing accordion to open and close


### v7.0.0

- Changed accordion title element to use `<button>` instead of `<a>`


### v6.0.1

- Fix issues with state not firing


### v6.0.0

- Add accordion group in a unordered list, remove `role="tab"`


### v5.0.2

- Update dependencies


### v5.0.1

- Removing web pack dev server, updating dependencies


### v5.0.0

- Removing unecessary aria-hidden as css display toggles screen reader ability


### v4.0.0

- Open and close accordion when specific state changes
- Remove style set on html when closed in react
- Fix react test
- Fixed build scripts for Windows


### v3.0.5

- Replace node-sass with sass


### v3.0.4

- Fix the serve script for npm


### v3.0.3

- `au-body--dark` now changes accordion title colour


### v3.0.2

- Update dependencies


### v3.0.1

- Updating documentation


### v3.0.0

- React accordion open by default
- Removed open property replaced it with closed


### v2.0.3

- Update homepage link


### v2.0.2

- Fix issue with scope inside AU.animate.Run


### v2.0.1

- Fixed dependencies


### v2.0.0

- Bumped core version which changed to focus color and border/muted color mix


### v1.0.1

- IE8 spacing above triangle fixed [309](https://github.com/govau/design-system-components/issues/309)


### v1.0.0

- Moved to AU namespace
- Added new color themes with dark and alt variants
- Added a new 4px based spacing system via line-height


### v0.3.0

- Added pancake-react plugin
- Added transpiled react ES5 file as main entry file for `package.json`
- Added compiled css file that is automatically imported by ES5 react file


### v0.2.0

- Added react and jQuery component


### v0.1.0

- 💥 Initial version


**[⬆ back to top](#contents)**


# };
