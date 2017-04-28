@gov.au/animate CHANGELOG
======================

> Part of the [gov.au UI-Kit](https://github.com/govau/uikit/) ecosystem.


## Contents

* [Versions](#install)
* [Release History](#release-history)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Versions

* [v0.1.3 - Exposed GetCSSPropertyBecauseIE publicly, added prefunction, postfunction](v013)
* [v0.1.2 - Removed core as dependency](v012)
* [v0.1.1 - 💥 Initial version](v011)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

### v0.1.3

- `GetCSSPropertyBecauseIE` is now part of the public API so we can reuse it in other modules
- We added a `prefunction` and `postfunction` key to the settings object of toggle. These functions will run before and after each animation and passes two
	things, the element and the direction of the animation. This is great if you want to change classes on animation and don’t want to have to find out what
	direction the toggle is going.


### v0.1.2

- Removed core as dependency


### v0.1.1

- 💥 Initial version


**[⬆ back to top](#contents)**


# };
