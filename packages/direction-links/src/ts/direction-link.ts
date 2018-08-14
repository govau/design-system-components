import { Component, Input, ViewEncapsulation, Output, EventEmitter } from "@angular/core";

/**
 * Angular component for Direction Link - https://designsystem.gov.au/components/direction-links.
 */
@Component({
    selector: "au-direction-link",
    exportAs: "auDirectionLink",
    encapsulation: ViewEncapsulation.None, 
    template: ` <a *ngIf="hasLink; else buttonTemplate"
                    [ngClass]="[defaultCSSClass, paletteClass, directionClass]"
                    [attr.href]="link">
                    {{text}}
                </a>
                <ng-template #buttonTemplate>
                    <button [ngClass]="[defaultCSSClass, paletteClass, directionClass]">
                        {{text}}
                    </button>
                </ng-template>`
})
export class DirectionLinkComponent {

    /**
    * Input binding for element text
    */
    @Input()
    text: string;

    /**
     * All direction options
     */
    directions = {
        up: 'au-direction-link--up',
        right: 'au-direction-link--right',
        down: 'au-direction-link--down',
        left: 'au-direction-link--left',
    };

    /**
     * Default CSS class
     */
    defaultCSSClass = 'au-direction-link'

    /**
     * Input data binding for link url attribute
     */
    hasLink: boolean = false; 
    private _link: string;
    @Input()
    set link(value: string) {
        this.hasLink = true;
        this._link = value;
    }
    get link() {
        return this._link;
    }

    /**
     * Input data binding for direction attribute
     */
    @Input()
    direction: string;

    /**
     * Which pallet to use
     */
    @Input()
    palette: string;

    get paletteClass() {
        if (this.palette) {
            return `${this.defaultCSSClass}--${this.palette}`;
        } else {
            return '';
        }
    }

    /**
     * Get the direction link CSS class name based on 
     * the specified direction
     */
    get directionClass(){
        if (this.direction) {
            return this.directions[this.direction];
        } else {
            return '';
        }
    }

}


