import { Injectable } from "@angular/core";

@Injectable()
export class UiKitCoreService {

  /**
   * Available color palettes
   */
  public static readonly LIGHT_COLOR_PALETTE = "light";
  public static readonly DARK_COLOR_PALETTE = "dark";

  public static readonly POSSIBLE_VALUES = [
    UiKitCoreService.LIGHT_COLOR_PALETTE,
    UiKitCoreService.DARK_COLOR_PALETTE
  ];

  /**
   * Default color palette is light
   */
  private _colorPalette = UiKitCoreService.LIGHT_COLOR_PALETTE;


  /**
   * TODO: Font grid
   */

  constructor() {
  }

  /**
   * Sets the color palette for the page.
   */
  setColorPalette = (name: string): void => {
    if (name && name.length > 0) {
      if (UiKitCoreService.POSSIBLE_VALUES.indexOf(name) > -1) {
        this._colorPalette = name;
      } else {
        throw new Error(`Color palette name ${name} is not recognised`);
      }
    }
  }

  /**
   * Indicates if the light color palette is being used
   */
  isUsingLightPalette = (): boolean => {
    return UiKitCoreService.LIGHT_COLOR_PALETTE === this._colorPalette;
  }


  /**
   * Indicates if the dark color palette is being used
   */
  isUsingDarkPalette = (): boolean => {
    return UiKitCoreService.DARK_COLOR_PALETTE === this._colorPalette;
  }


}
