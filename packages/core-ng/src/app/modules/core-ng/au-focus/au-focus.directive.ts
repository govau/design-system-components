import { Directive, HostBinding, Input, ElementRef } from "@angular/core";
import { UiKitCoreService } from "../ui-kit-core.service";

@Directive({
  selector: "[au-focus]"
})
export class AuFocusDirective {

  private _auFocusDark: boolean = undefined;

  constructor(private elementRef: ElementRef, private coreService: UiKitCoreService) {
  }

  @HostBinding("class")
  _defaultCSSClass = "au-focus";

  @HostBinding("class.dark")
  get _usingDarkPalette(): boolean {
    return this._auFocusDark === undefined
      ? this.coreService.isUsingDarkPalette() : this._auFocusDark;
  }


  @Input("au-focus")
  set _au_focus(value: string) {
    if (value) {
      if (UiKitCoreService.DARK_COLOR_PALETTE === value) {
        this._auFocusDark = true;
      } else {
        this._auFocusDark = false;
        (this.elementRef.nativeElement as HTMLElement).classList.add(value);
      }
    }
  }
}
