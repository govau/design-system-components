import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { AuAccordionItem, AuAccordionItemContainer } from "./au-accordion-item";
import {
  AuAccordionTitle,
  AuAccordionTitleContainer
} from "./au-accordion-title";
import { AuAccordionBody, AuAccordionBodyContainer } from "./au-accordion-body";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { AuAccordionGroup } from "./au-accordion-group";

@NgModule({
  imports: [CommonModule, CoreModule.forRoot(), CdkAccordionModule],
  declarations: [
    AuAccordionItem,
    AuAccordionItemContainer,
    AuAccordionTitle,
    AuAccordionTitleContainer,
    AuAccordionBody,
    AuAccordionBodyContainer,
    AuAccordionGroup
  ],
  exports: [
    AuAccordionItem,
    AuAccordionItemContainer,
    AuAccordionTitle,
    AuAccordionTitleContainer,
    AuAccordionBody,
    AuAccordionBodyContainer,
    AuAccordionGroup
  ]
})
export class AccordionModule {}
