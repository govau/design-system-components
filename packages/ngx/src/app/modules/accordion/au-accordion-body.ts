import { Component, forwardRef, Input, ViewEncapsulation } from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

/** Time and timing curve for expansion panel animations. */
export const ANIMATION_COLLAPSED = "250ms ease-in-out";
export const ANIMATION_EXPANDED = "250ms ease-in";

/** Animations used by the Material expansion panel. */
export const accordionBodyAnimations: {
  readonly bodyAnimation: AnimationTriggerMetadata;
} = {
  /** Animation that expands and collapses the panel content. */
  bodyAnimation: trigger("bodyAnimation", [
    state("collapsed", style({ height: "0px", visibility: "hidden" })),
    state("expanded", style({ height: "*", visibility: "visible" })),
    transition("expanded => collapsed", animate(ANIMATION_COLLAPSED)),
    transition("collapsed => expanded", animate(ANIMATION_EXPANDED))
  ])
};

export class AuAccordionBodyBase {
  /* The unique body id. */
  readonly id: string = `au-accordion-body-${auAccordionBodyId++}`;

  readonly ANIMATION_STATE_COLLAPSED = "collapsed";

  /** default class name*/
  defaultCSSClass = "au-accordion__body";

  _animatedState: string = this.ANIMATION_STATE_COLLAPSED;

  /** class to use when the accordion is in open state*/
  get isAccordionOpen(): boolean {
    return this.expanded === true;
  }

  /** class to use when the accordion is in closed state*/
  get isAccordionClosed(): boolean {
    return this.expanded === false && this._animatedState === "collapsed";
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

  getAnimationState(): string {
    return this.expanded === true ? "expanded" : "collapsed";
  }

  updateAnimatedState(): void {
    this._animatedState = this.getAnimationState();
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
  animations: [accordionBodyAnimations.bodyAnimation],
  host: {
    "[attr.id]": "id",
    "[class]": "defaultCSSClass",
    "[class.au-accordion--open]": "isAccordionOpen",
    "[class.au-accordion--closed]": "isAccordionClosed",
    "[attr.aria-hidden]": "isAriaHidden",

    "[@bodyAnimation]": "getAnimationState()",
    "(@bodyAnimation.done)": "updateAnimatedState()"
  },
  providers: [
    {
      provide: AuAccordionBodyBase,
      useExisting: forwardRef(() => AuAccordionBodyDirective)
    }
  ]
})
export class AuAccordionBodyDirective extends AuAccordionBodyBase {}

@Component({
  selector: "au-accordion-body",
  templateUrl: "au-accordion-body.html",
  animations: [accordionBodyAnimations.bodyAnimation],
  providers: [
    {
      provide: AuAccordionBodyBase,
      useExisting: forwardRef(() => AuAccordionBodyContainer)
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuAccordionBodyContainer extends AuAccordionBodyBase {}
