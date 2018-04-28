import { Directive, ElementRef, HostBinding, Input } from "@angular/core";
import { UiKitCoreService } from "../ui-kit-core.service";

@Directive({
  selector: "[au-outline]"
})
export class AuOutlineDirective {

  private _auOutlineDark: boolean = undefined;

  constructor(private elementRef: ElementRef, private coreService: UiKitCoreService) {
  }

  @HostBinding("class")
  _defaultCSSClass = "au-outline";

  @HostBinding("class.dark")
  get _usingDarkPalette(): boolean {
    return this._auOutlineDark === undefined
      ? this.coreService.isUsingDarkPalette() : this._auOutlineDark;
  }

  @Input("au-outline")
  set _au_outline(value: string) {
    if (value) {
      if (UiKitCoreService.DARK_COLOR_PALETTE === value) {
        this._auOutlineDark = true;
      } else {
        this._auOutlineDark = false;
        (this.elementRef.nativeElement as HTMLElement).classList.add(value);
      }
      console.log("au-outline value - " + value);
    }
  }
}
