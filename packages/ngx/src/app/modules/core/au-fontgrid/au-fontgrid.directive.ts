import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[au-fontgrid]"
})
export class AuFontgridDirective {

  private _font_grid: string;

  constructor() {
  }

  @HostBinding("class")
  _defaultCSSClass = "au-fontgrid";

  @HostBinding("class.au-fontgrid-0")
  get _au_font_grid_0() {
    return this._font_grid === "0";
  }

  @HostBinding("class.au-fontgrid-1")
  get _au_font_grid_1() {
    return this._font_grid === "1";
  }

  @HostBinding("class.au-fontgrid-2")
  get _au_font_grid_2() {
    return this._font_grid === "2";
  }

  @HostBinding("class.au-fontgrid-3")
  get _au_font_grid_3() {
    return this._font_grid === "3";
  }

  @HostBinding("class.au-fontgrid-4")
  get _au_font_grid_4() {
    return this._font_grid === "4";
  }

  @HostBinding("class.au-fontgrid-5")
  get _au_font_grid_5() {
    return this._font_grid === "5";
  }

  @HostBinding("class.au-fontgrid-6")
  get _au_font_grid_6() {
    return this._font_grid === "6";
  }

  @Input("au-fontgrid")
  set _au_fontgrid(value: string) {
    if (value) {
      this._font_grid = value;
    }
  }

}
