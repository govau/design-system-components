import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuColorPaletteDirective } from './au-color-palette.directive';

describe('AuColorPaletteDirective', () => {
  let component: AuColorPaletteDirective;
  let fixture: ComponentFixture<AuColorPaletteDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuColorPaletteDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuColorPaletteDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
