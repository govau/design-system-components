import { AfterContentInit, ChangeDetectorRef, ContentChild, Directive, HostBinding, Input, OnDestroy, Optional } from '@angular/core';
import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { UiKitCoreService } from "../core/ui-kit-core.service";
import { AuAccordionHeaderDirective } from "./au-accordion-header.directive";
import { AuAccordionBodyDirective } from "./au-accordion-body.directive";
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@Directive({
  selector: '[au-accordion-item]'
})
export class AuAccordionDirective extends CdkAccordionItem implements AfterContentInit, OnDestroy {

  /** Reference to the header directive */
  private _headerDirective: AuAccordionHeaderDirective;

  /** Reference to the body directive */
  private _bodyDirective: AuAccordionBodyDirective;

  /** Reference to the click listener from the accordion header*/
  private _headerClickEventSubscription: any;

  constructor(private coreService: UiKitCoreService,
    @Optional() accordion: CdkAccordion,
    changeDetectorRef: ChangeDetectorRef,
    expansionDispatcher: UniqueSelectionDispatcher) {
    super(accordion, changeDetectorRef, expansionDispatcher);
  }

  /** Default class for all accordion */
  @HostBinding("class")
  _defaultCSSClass = "au-accordion";

  /** set the dark theme for the element */
  private _auAccordionDark = false;

  @Input("au-accordion-item")
  set _au_accordion(value: string) {
    if (value && UiKitCoreService.DARK_COLOR_PALETTE === value) {
      this._auAccordionDark = true;
    }
  }

  /* The default accordion behavior to stay closed*/
  private _accordion_open = false;

  @Input("open")
  set _open_accordion(value: boolean) {
    if (value) {
      this._accordion_open = value;
    }
  }


  /** Whether we should use dark theme or not */
  @HostBinding("class.au-accordion--dark")
  get _usingDarkPalette(): boolean {
    return this._auAccordionDark === true
      || this.coreService.isUsingDarkPalette();
  }

  @ContentChild(AuAccordionHeaderDirective)
  set accordionHeader(directive: AuAccordionHeaderDirective) {
    this._headerDirective = directive;
  }

  @ContentChild(AuAccordionBodyDirective)
  set accordionBody(directive: AuAccordionBodyDirective) {
    this._bodyDirective = directive;
  }

  ngAfterContentInit() {
    /** Set the right aria-controls value*/
    this._headerDirective.controllingAccordionBodyId = this._bodyDirective.id;

    /** Listen to the click event from the hearder directive*/
    this._headerClickEventSubscription = this._headerDirective._clickEventEmitter
      .subscribe(() => this._bodyDirective.toggle());

    if (this._accordion_open) {
      this._headerDirective.onClick();
    }

  }

  ngOnDestroy() {
    if (this._headerClickEventSubscription) {
      this._headerClickEventSubscription.unsubscribe();
    }
  }

}
