import {Directive, HostBinding, Input} from "@angular/core";
import {UiKitCoreService} from "../ui-kit-core.service";

@Directive({
  selector: "[au-color-palette]"
})
export class AuColorPaletteComponent {

  constructor(private coreService: UiKitCoreService) {
  }

  @HostBinding("class")
  _defaultCSSClass = "au-body";

  @HostBinding("class.au-body--dark")
  get _usingDarkPalette(): boolean {
    return this.coreService.isUsingDarkPalette();
  }

  @Input("au-color-palette")
  set _palette(value: string) {
    if (value && value.length > 0) {
      this.coreService.setColorPalette(value);
    }
  }


}
