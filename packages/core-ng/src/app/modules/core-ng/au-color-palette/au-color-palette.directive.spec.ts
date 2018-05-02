import { fakeAsync, TestBed, tick } from "@angular/core/testing";

import { AuColorPaletteComponent } from "./au-color-palette.directive";
import { CoreNgModule } from "../core-ng.module";
import { UiKitCoreService } from "../ui-kit-core.service";
import { TestComponent } from "../test.component";


describe("AuColorPaletteComponent", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreNgModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<body au-color-palette></body>`)
      .compileComponents();
  });

  it("attaching to html body element should work", fakeAsync(() => {

    const fixture = TestBed.createComponent(TestComponent);

    const service: UiKitCoreService = fixture.debugElement.injector.get(UiKitCoreService);
    service.setColorPalette("dark");

    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("body").classList.length).toBe(2);

  }));

  it("attaching to html div element should work", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreNgModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<div au-color-palette></div>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);

    const service: UiKitCoreService = fixture.debugElement.injector.get(UiKitCoreService);
    service.setColorPalette("dark");

    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("div").classList.length).toBe(2);

  }));

  it("switching color palette should work", fakeAsync(() => {

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("body").classList.length).toBe(1);
    expect(fixture.nativeElement.querySelector("body").classList[0]).toBe("au-body");

    const service: UiKitCoreService = fixture.debugElement.injector.get(UiKitCoreService);
    service.setColorPalette("dark");

    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("body").classList.length).toBe(2);
    expect(fixture.nativeElement.querySelector("body").classList[0]).toBe("au-body");
    expect(fixture.nativeElement.querySelector("body").classList[1]).toBe("au-body--dark");
  }));

  it("setting color palette value should work", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreNgModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<div au-color-palette = 'dark'></div>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("div").classList.length).toBe(2);

  }));

});
