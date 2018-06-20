import { Injectable } from "@angular/core";

@Injectable()
export class UiKitCoreService {
  /**
   * Available color palettes
   */
  public static readonly LIGHT_COLOR_PALETTE = "light";
  public static readonly DARK_COLOR_PALETTE = "dark";
  public static readonly ALT_COLOR_PALETTE = "alt";

  public static readonly POSSIBLE_VALUES = [
    UiKitCoreService.LIGHT_COLOR_PALETTE,
    UiKitCoreService.DARK_COLOR_PALETTE,
    UiKitCoreService.ALT_COLOR_PALETTE
  ];

  /**
   * Default color palette is light
   */
  private _colorPalette = UiKitCoreService.LIGHT_COLOR_PALETTE;

  constructor() {}

  /**
   * Sets the color palette for the page.
   */
  setColorPalettes = (names: string): void => {
    if (names && names.length > 0) {
      this._colorPalette = "";
      names.split(",").forEach(name => {
        if (UiKitCoreService.POSSIBLE_VALUES.indexOf(name.trim()) > -1) {
          this._colorPalette += name.trim() + "-";
        } else {
          throw new Error(`Color palette name ${name} is not recognised`);
        }
      });
    }
  };

  /**
   * Indicates if the light color palette is being used
   */
  isUsingLightPalette = (): boolean => {
    return (
      this._colorPalette.indexOf(UiKitCoreService.LIGHT_COLOR_PALETTE) > -1
    );
  };

  /**
   * Indicates if the dark color palette is being used
   */
  isUsingDarkPalette = (): boolean => {
    return this._colorPalette.indexOf(UiKitCoreService.DARK_COLOR_PALETTE) > -1;
  };

  /**
   * Indicates if the alt color palette is being used
   */
  isUsingAltPalette = (): boolean => {
    return this._colorPalette.indexOf(UiKitCoreService.ALT_COLOR_PALETTE) > -1;
  };
}
