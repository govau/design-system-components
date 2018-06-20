import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuColorPaletteDirective } from "./au-color-palette/au-color-palette.directive";
import { UiKitCoreService } from "./ui-kit-core.service";
import { AuOutlineDirective } from "./au-outline/au-outline.directive";
import { AuFocusDirective } from "./au-focus/au-focus.directive";
import { AuFontgridDirective } from "./au-fontgrid/au-fontgrid.directive";
import { AuBodyDirective } from "./au-body/au-body.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [
    AuColorPaletteDirective,
    AuOutlineDirective,
    AuFocusDirective,
    AuFontgridDirective,
    AuBodyDirective
  ],
  exports: [
    AuColorPaletteDirective,
    AuOutlineDirective,
    AuFocusDirective,
    AuFontgridDirective,
    AuBodyDirective
  ],
  providers: [UiKitCoreService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [UiKitCoreService]
    };
  }
}
