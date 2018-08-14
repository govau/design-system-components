
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectionLinkComponent } from "./direction-link";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DirectionLinkComponent
    ],
    exports: [
        DirectionLinkComponent
    ]
})
export class DirectionLinkModule { }