import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { AuAccordionDirective } from './au-accordion.directive';
import { AuAccordionHeaderDirective } from './au-accordion-header.directive';
import { AuAccordionBodyDirective } from './au-accordion-body.directive';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    CdkAccordionModule
  ],
  declarations: [AuAccordionDirective, AuAccordionHeaderDirective, AuAccordionBodyDirective],
  exports: [AuAccordionDirective, AuAccordionHeaderDirective, AuAccordionBodyDirective]
})
export class AccordionModule {
}
