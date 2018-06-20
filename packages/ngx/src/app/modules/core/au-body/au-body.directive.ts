import { Directive, HostBinding, Input } from "@angular/core";
import { UiKitCoreService } from "../ui-kit-core.service";

@Directive({
  selector: "[au-body]"
})
export class AuBodyDirective {
  private _auBody = {
    dark: undefined,
    alt: undefined
  };

  constructor(private coreService: UiKitCoreService) {}

  @HostBinding("class") _defaultCSSClass = "au-body";

  @HostBinding("class.au-body--dark")
  get _usingDarkPalette(): boolean {
    return this._auBody.dark !== undefined
      ? this._auBody.dark
      : this.coreService.isUsingDarkPalette();
  }

  @HostBinding("class.au-body--alt")
  get _usingAltPalette(): boolean {
    return this._auBody.alt !== undefined
      ? this._auBody.alt
      : this.coreService.isUsingAltPalette();
  }

  @Input("au-body")
  set _au_outline(value: string) {
    if (value) {
      if (UiKitCoreService.DARK_COLOR_PALETTE === value) {
        this._auBody.dark = true;
      } else if (UiKitCoreService.ALT_COLOR_PALETTE === value) {
        this._auBody.alt = true;
      }
    }
  }
}
