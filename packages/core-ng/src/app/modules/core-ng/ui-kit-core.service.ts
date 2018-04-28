import { Injectable } from "@angular/core";

@Injectable()
export class UiKitCoreService {

  /**
   * Available color palettes
   * @type {string}
   */
  public static readonly LIGHT_COLOR_PALETTE = "light";
  public static readonly DARK_COLOR_PALETTE = "dark";

  readonly POSSIBLE_VALUES = [
    UiKitCoreService.LIGHT_COLOR_PALETTE,
    UiKitCoreService.DARK_COLOR_PALETTE
  ];

  /**
   * Default color palette is light
   * @type {string}
   * @private
   */
  private _colorPalette = UiKitCoreService.LIGHT_COLOR_PALETTE;


  /**
   * TODO: Font grid
   */


  /**
   * TODO: AU-Focus
   */


  constructor() {
  }

  /**
   * Sets the color palette for the page.
   * @param {string} name of the palette.
   */
  setColorPalette = (name: string): void => {
    if (name && name.length > 0) {
      if (this.POSSIBLE_VALUES.includes(name)) {
        this._colorPalette = name;
      } else {
        throw new Error(`Color palette name ${name} is not recognised`);
      }
    }
  };

  /**
   * Indicates if the light color palette is being used
   * @returns {boolean}
   */
  isUsingLightPalette = (): boolean => {
    return UiKitCoreService.LIGHT_COLOR_PALETTE === this._colorPalette;
  };


  /**
   * Indicates if the dark color palette is being used
   * @returns {boolean}
   */
  isUsingDarkPalette = (): boolean => {
    return UiKitCoreService.DARK_COLOR_PALETTE === this._colorPalette;
  };


}
