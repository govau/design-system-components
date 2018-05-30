import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[au-accordion-body]'
})
export class AuAccordionBodyDirective {

  /* The unique body id. */
  @HostBinding("attr.id")
  readonly id: string = `au-accordion-body-${auAccordionBodyId++}`;

  /** default class name*/
  @HostBinding("class")
  _defaultCSSClass = "au-accordion__body";

  /** class to use when the accordion is in open state*/
  @HostBinding("class.au-accordion--open")
  get _isAccordionOpen(): boolean {
    return this.expanded === true;
  }

  /** class to use when the accordion is in closed state*/
  @HostBinding("class.au-accordion--closed")
  get _isAccordionClosed(): boolean {
    return this.expanded === false;
  }

  /** ARIA hidden attribute*/
  @HostBinding("attr.aria-hidden")
  get _isAriaHidden(): boolean {
    return this._isAccordionClosed;
  }

  /* expanded property */
  private _expanded = false;

  @Input()
  set expanded(value) {
    this._expanded = coerceBooleanProperty(value);
  }

  get expanded() {
    return this._expanded;
  };

  /* change the expanded state */
  toggle(): void {
    this.expanded = !this.expanded;
  }

}

/* generate unique id for each body */
let auAccordionBodyId = 0;
