import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewEncapsulation
} from "@angular/core";
import { CdkAccordionItem } from "@angular/cdk/accordion";
import { UiKitCoreService } from "../core/ui-kit-core.service";
import { AuAccordionTitle, AuAccordionTitleBase } from "./au-accordion-title";
import {
  AuAccordionBodyDirective,
  AuAccordionBodyBase
} from "./au-accordion-body";
import { UniqueSelectionDispatcher } from "@angular/cdk/collections";
import { AuAccordionGroup } from "./au-accordion-group";

export class AuAccordionItemBase extends CdkAccordionItem
  implements AfterContentInit, OnDestroy, OnInit {
  /** Reference to the header directive */
  private _titleContentChild: AuAccordionTitle;

  /** Reference to the body directive */
  private _bodyContentChild: AuAccordionBodyDirective;

  /** Reference to the listeners*/
  private _headerClickEventSubscription: any;
  private _expansionListenerSubscription: any;

  constructor(
    private coreService: UiKitCoreService,
    @Optional() accordion: AuAccordionGroup,
    changeDetectorRef: ChangeDetectorRef,
    expansionDispatcher: UniqueSelectionDispatcher
  ) {
    super(accordion, changeDetectorRef, expansionDispatcher);
  }

  /** Default class for all accordion */
  defaultCSSClass = "au-accordion";

  /** set the dark theme for the element */
  private _auAccordionDark = false;

  @Input("au-accordion-item")
  set _au_accordion(value: string) {
    if (value && UiKitCoreService.DARK_COLOR_PALETTE === value) {
      this._auAccordionDark = true;
    }
  }

  /** Whether we should use dark theme or not */
  get isUsingDarkPalette(): boolean {
    return (
      this._auAccordionDark === true || this.coreService.isUsingDarkPalette()
    );
  }

  @ContentChild(AuAccordionTitleBase)
  set accordionHeader(child: AuAccordionTitleBase) {
    this._titleContentChild = child;
  }

  @ContentChild(AuAccordionBodyBase)
  set accordionBody(child: AuAccordionBodyBase) {
    this._bodyContentChild = child;
  }

  ngAfterContentInit() {
    /** Set the right aria-controls value*/
    this._titleContentChild.controllingAccordionBodyId = this._bodyContentChild.id;

    if (this.expanded) {
      this._titleContentChild.onClick();
    }

    this._titleContentChild.disabled = this.disabled;
  }

  ngOnInit() {
    this._expansionListenerSubscription = this.expandedChange.subscribe(
      value => {
        this._bodyContentChild.expanded = value;
        this._titleContentChild.expanded = value;
      }
    );

    /** Listen to the click event from the hearder directive*/
    this._headerClickEventSubscription = this._titleContentChild._clickEventEmitter.subscribe(
      () => {
        this._bodyContentChild.toggle();
        this.toggle();
      }
    );
  }

  ngOnDestroy() {
    this._headerClickEventSubscription.unsubscribe();
    this._expansionListenerSubscription.unsubscribe();
  }
}

@Component({
  selector: "[au-accordion-item]",
  template: "<ng-content></ng-content>",
  host: {
    "[class]": "defaultCSSClass",
    "[class.au-accordion--dark]": "isUsingDarkPalette"
  },
  providers: [
    {
      provide: AuAccordionItemBase,
      useExisting: forwardRef(() => AuAccordionItem)
    }
  ]
})
export class AuAccordionItem extends AuAccordionItemBase {
  constructor(
    coreService: UiKitCoreService,
    @Optional() accordion: AuAccordionGroup,
    changeDetectorRef: ChangeDetectorRef,
    expansionDispatcher: UniqueSelectionDispatcher
  ) {
    super(coreService, accordion, changeDetectorRef, expansionDispatcher);
  }
}

/* generate unique id for each item */
let auAccordionItemId = 0;

@Component({
  selector: "au-accordion-item",
  templateUrl: "au-accordion-item.html",
  providers: [
    {
      provide: AuAccordionItemBase,
      useExisting: forwardRef(() => AuAccordionItemContainer)
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuAccordionItemContainer extends AuAccordionItemBase {
  constructor(
    coreService: UiKitCoreService,
    @Optional() accordion: AuAccordionGroup,
    changeDetectorRef: ChangeDetectorRef,
    expansionDispatcher: UniqueSelectionDispatcher
  ) {
    super(coreService, accordion, changeDetectorRef, expansionDispatcher);
  }

  /* The unique accordion id. */
  readonly id: string = `au-accordion-item-${auAccordionItemId++}`;
}
