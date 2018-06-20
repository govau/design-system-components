import {
  Component,
  forwardRef,
  HostBinding,
  Input,
  ViewEncapsulation
} from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

export class AuAccordionBodyBase {
  /* The unique body id. */
  readonly id: string = `au-accordion-body-${auAccordionBodyId++}`;

  /** default class name*/
  defaultCSSClass = "au-accordion__body";

  /** class to use when the accordion is in open state*/
  get isAccordionOpen(): boolean {
    return this.expanded === true;
  }

  /** class to use when the accordion is in closed state*/
  get isAccordionClosed(): boolean {
    return this.expanded === false;
  }

  /** ARIA hidden attribute*/
  get isAriaHidden(): boolean {
    return this.isAccordionClosed;
  }

  /* expanded property */
  private _expanded = false;

  @Input()
  set expanded(value) {
    this._expanded = coerceBooleanProperty(value);
  }

  get expanded() {
    return this._expanded;
  }

  /* change the expanded state */
  toggle(): void {
    this.expanded = !this.expanded;
  }
}

/* generate unique id for each body */
let auAccordionBodyId = 0;

@Component({
  selector: "[au-accordion-body]",
  template: "<ng-content></ng-content>",
  host: {
    "[attr.id]": "id",
    "[class]": "defaultCSSClass",
    "[class.au-accordion--open]": "isAccordionOpen",
    "[class.au-accordion--closed]": "isAccordionClosed",
    "[attr.aria-hidden]": "isAriaHidden"
  },
  providers: [
    {
      provide: AuAccordionBodyBase,
      useExisting: forwardRef(() => AuAccordionBody)
    }
  ]
})
export class AuAccordionBody extends AuAccordionBodyBase {}

@Component({
  selector: "au-accordion-body",
  templateUrl: "au-accordion-body.html",
  providers: [
    {
      provide: AuAccordionBodyBase,
      useExisting: forwardRef(() => AuAccordionBodyContainer)
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuAccordionBodyContainer extends AuAccordionBodyBase {}
