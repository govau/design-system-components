import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuColorPaletteComponent } from "./au-color-palette/au-color-palette.component";
import { UiKitCoreService } from "./ui-kit-core.service";
import { AuOutlineDirective } from "./au-outline/au-outline.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuColorPaletteComponent, AuOutlineDirective],
  exports: [AuColorPaletteComponent, AuOutlineDirective],
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
