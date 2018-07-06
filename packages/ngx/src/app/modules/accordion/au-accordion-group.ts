import { Component } from "@angular/core";
import { CdkAccordion } from "@angular/cdk/accordion";

@Component({
  selector: "au-accordion-group, [au-accordion-group]",
  template: "<ng-content></ng-content>",
  exportAs: "auAccordionGroup"
})
export class AuAccordionGroup extends CdkAccordion {
}
