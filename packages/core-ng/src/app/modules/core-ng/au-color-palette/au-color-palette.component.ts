import { Component, HostBinding, Input } from "@angular/core";
import { UiKitCoreService } from "../ui-kit-core.service";

@Component({
  selector: "body[au-color-palette], div[au-color-palette]",
  exportAs: "auColorPalette",
  templateUrl: "au-color-palette.component.html",
  styleUrls: ["au-color-palette.component.css"]
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
