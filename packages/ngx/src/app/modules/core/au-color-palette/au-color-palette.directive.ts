import { Directive, HostBinding, Input } from "@angular/core";
import { UiKitCoreService } from "../ui-kit-core.service";

@Directive({
  selector: "[au-color-palette]"
})
export class AuColorPaletteDirective {
  constructor(private coreService: UiKitCoreService) {}

  @Input("au-color-palette")
  set _palette(value: string) {
    if (value) {
      this.coreService.setColorPalettes(value);
    }
  }
}
