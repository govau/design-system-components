import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'body[au-color-palette]',
  styleUrls: ['./au-color-palette.directive.css']
})
export class AuColorPaletteDirective implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
