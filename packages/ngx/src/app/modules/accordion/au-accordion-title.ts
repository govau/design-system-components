import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewEncapsulation
} from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

export class AuAccordionTitleBase {
  /*Disable the header? default false */
  _disabled = false;

  _default_active_class = "au-accordion__title";
  _default_disabled_class = "au-accordion__title_disabled";

  get cssClasses() {
    return !this.disabled
      ? this._default_active_class
      : this._default_disabled_class;
  }


  controllingAccordionBodyId = "";

  /** Event emitted every time the AccordionItem is clicked. */
  @Output() _clickEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  /* ARIA expanded property */
  _expanded = false;

  @Input()
  set expanded(value) {
    this._expanded = coerceBooleanProperty(value);
  }

  get expanded() {
    return this._expanded;
  }

  /*Default href to get focus from tabbing*/
  get attributeHref() {
    return !this.disabled ? "#" : null;
  }

  get isAccordionOpen(): boolean {
    return this.expanded === true;
  }

  get isAccordionClosed(): boolean {
    return this.expanded === false;
  }

  /** ARIA expanded property */
  private _selected = false;

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
  }

  /* Input binding for disabled property */
  @Input()
  get disabled() {
    return this._disabled;
  }

  set disabled(disabled: any) {
    this._disabled = coerceBooleanProperty(disabled);
  }

  @HostListener("click")
  onClick(): boolean {
    return this._simulateClick();
  }

  @HostListener("keydown", ["$event"])
  onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      return this._simulateClick();
    }
  }

  private _simulateClick(): boolean {
    if (!this.disabled) {
      this._toggleExpanded();
      this._toggleSelected();
      this._clickEventEmitter.emit();
    }
    return false;
  }
}

@Component({
  selector: "[au-accordion-title]",
  template: "<ng-content></ng-content>",
  styleUrls: ["au-accordion-header.css"],
  host: {
    "[attr.href]": "attributeHref",
    "[class]": "cssClasses",
    "[class.au-accordion--open]": "isAccordionOpen",
    "[class.au-accordion--closed]": "isAccordionClosed",
    "role": "tab",
    "[attr.aria-controls]": "controllingAccordionBodyId",
    "[attr.aria-expanded]": "expanded",
    "[attr.aria-selected]": "selected"
  },
  providers: [
    {
      provide: AuAccordionTitleBase,
      useExisting: forwardRef(() => AuAccordionTitle)
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuAccordionTitle extends AuAccordionTitleBase {
}

@Component({
  selector: "au-accordion-title",
  templateUrl: "au-accordion-title.html",
  styleUrls: ["au-accordion-header.css"],
  providers: [
    {
      provide: AuAccordionTitleBase,
      useExisting: forwardRef(() => AuAccordionTitleContainer)
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuAccordionTitleContainer extends AuAccordionTitleBase {
}
