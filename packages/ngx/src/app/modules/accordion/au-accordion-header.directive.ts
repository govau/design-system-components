import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { coerceBooleanProperty } from "@angular/cdk/coercion";

@Directive({
  selector: '[au-accordion-header]'
})
export class AuAccordionHeaderDirective {

  /**
   * Default class
   */
  @HostBinding("class")
  _defaultCSSClass = "au-accordion__title";

  /* Default role*/
  @HostBinding("attr.role")
  _defaultRole = "tab";

  /* Name of accordion body that the hearer controls */
  @HostBinding("attr.aria-controls")
  controllingAccordionBodyId = "";

  /** Event emitted every time the AccordionItem is clicked. */
  @Output() _clickEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  /* ARIA expanded property */
  private _expanded = false;

  @HostBinding("attr.aria-expanded")
  @Input()
  set expanded(value) {
    this._expanded = coerceBooleanProperty(value);
  }

  get expanded() {
    return this._expanded;
  };

  /** ARIA expanded property */
  private _selected = false;
  @HostBinding("attr.aria-selected")
  @Input()
  set selected(value) {
    this._selected = coerceBooleanProperty(value);
  }

  get selected() {
    return this._selected;
  }

  private _toggleExpanded() {
    this._expanded = !this.expanded;
  }

  private _toggleSelected() {
    this._selected = !this.selected;
  };

  @HostListener('click')
  onClick() {
    this._toggleExpanded();
    this._toggleSelected();
    this._clickEventEmitter.emit();
  }

}
