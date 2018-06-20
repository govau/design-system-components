import { Component, ContentChildren, OnInit, QueryList } from "@angular/core";
import { CdkAccordion } from "@angular/cdk/accordion";
// import { AuAccordionItemBase } from "./au-accordion-item";

@Component({
  selector: "au-accordion-group, [au-accordion-group]",
  template: "<ng-content></ng-content>",
  exportAs: "auAccordionGroup"
})
export class AuAccordionGroup extends CdkAccordion implements OnInit {
  // @ContentChildren(AuAccordionItemBase) contentChildren: QueryList<AuAccordionItemBase>;

  ngOnInit() {}
}
