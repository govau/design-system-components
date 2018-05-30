import { fakeAsync, TestBed, tick } from "@angular/core/testing";

import { AuColorPaletteDirective } from "./au-color-palette.directive";
import { CoreModule } from "../core.module";
import { UiKitCoreService } from "../ui-kit-core.service";
import { TestComponent } from "../test.component";


describe("AuColorPaletteDirective", () => {

  it("attaching to html div element should work", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<div au-color-palette></div>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);

    const service: UiKitCoreService = fixture.debugElement.injector.get(UiKitCoreService);
    service.setColorPalettes("dark");

    fixture.detectChanges();
    tick();

    expect(service.isUsingDarkPalette()).toBeTruthy();
    expect(service.isUsingLightPalette()).toBeFalsy();
    expect(service.isUsingAltPalette()).toBeFalsy();

  }));


  it("setting multiple color palette value should work", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<div au-color-palette = 'dark, alt'></div>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();
    tick();

    const service: UiKitCoreService = fixture.debugElement.injector.get(UiKitCoreService);

    expect(service.isUsingDarkPalette()).toBeTruthy();
    expect(service.isUsingLightPalette()).toBeFalsy();
    expect(service.isUsingAltPalette()).toBeTruthy();


  }));

});
