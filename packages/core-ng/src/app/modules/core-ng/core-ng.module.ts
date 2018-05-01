import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuColorPaletteComponent } from "./au-color-palette/au-color-palette.component";
import { UiKitCoreService } from "./ui-kit-core.service";
import { AuOutlineDirective } from "./au-outline/au-outline.directive";
import { AuFocusDirective } from "./au-focus/au-focus.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuColorPaletteComponent, AuOutlineDirective, AuFocusDirective, AuFocusDirective],
  exports: [AuColorPaletteComponent, AuOutlineDirective, AuFocusDirective],
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
