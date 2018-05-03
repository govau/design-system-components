import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuColorPaletteComponent } from "./au-color-palette/au-color-palette.directive";
import { UiKitCoreService } from "./ui-kit-core.service";
import { AuOutlineDirective } from "./au-outline/au-outline.directive";
import { AuFocusDirective } from "./au-focus/au-focus.directive";
import { AuFontgridDirective } from './au-fontgrid/au-fontgrid.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuColorPaletteComponent, AuOutlineDirective, AuFocusDirective, AuFocusDirective, AuFontgridDirective],
  exports: [AuColorPaletteComponent, AuOutlineDirective, AuFocusDirective, AuFontgridDirective],
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
