import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { AuAccordionItem, AuAccordionItemContainer } from "./au-accordion-item";
import {
  AuAccordionTitle,
  AuAccordionTitleContainer
} from "./au-accordion-title";
import {
  AuAccordionBodyDirective,
  AuAccordionBodyContainer
} from "./au-accordion-body";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { AuAccordionGroup } from "./au-accordion-group";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    CdkAccordionModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AuAccordionItem,
    AuAccordionItemContainer,
    AuAccordionTitle,
    AuAccordionTitleContainer,
    AuAccordionBodyDirective,
    AuAccordionBodyContainer,
    AuAccordionGroup
  ],
  exports: [
    AuAccordionItem,
    AuAccordionItemContainer,
    AuAccordionTitle,
    AuAccordionTitleContainer,
    AuAccordionBodyDirective,
    AuAccordionBodyContainer,
    AuAccordionGroup
  ]
})
export class AccordionModule {}
