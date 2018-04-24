import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuColorPaletteDirective} from "./au-color-palette/au-color-palette.directive";
import {UiKitCoreService} from "./ui-kit-core.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuColorPaletteDirective],
  exports: [AuColorPaletteDirective],
  providers: [UiKitCoreService]
})
export class CoreNgModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreNgModule,
      providers: [UiKitCoreService]
    };
  }
}
