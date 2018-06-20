import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { CoreModule } from "../core.module";
import { TestComponent } from "../test.component";
import { UiKitCoreService } from "../ui-kit-core.service";

describe("AuFocusDirective", () => {
  it(
    "should work with any html element",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<p au-focus></p>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("p").classList.length).toBe(1);
    })
  );

  it(
    "should use dark css class for dark template",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-focus></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      const service: UiKitCoreService = fixture.debugElement.injector.get(
        UiKitCoreService
      );
      service.setColorPalettes("dark");

      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("div").classList.length).toBe(
        2
      );
      expect(fixture.nativeElement.querySelector("div").classList[0]).toBe(
        "au-focus"
      );
      expect(fixture.nativeElement.querySelector("div").classList[1]).toBe(
        "dark"
      );
    })
  );

  it(
    "setting dark outline value should set the right css class",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-focus = 'dark'></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("div").classList.length).toBe(
        2
      );
      expect(fixture.nativeElement.querySelector("div").classList[0]).toBe(
        "au-focus"
      );
      expect(fixture.nativeElement.querySelector("div").classList[1]).toBe(
        "dark"
      );
    })
  );

  it(
    "should be able to override UiKitCoreService color palette CSS class by setting empty value",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-focus="alt"></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      const service: UiKitCoreService = fixture.debugElement.injector.get(
        UiKitCoreService
      );
      service.setColorPalettes("dark");

      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("div").classList.length).toBe(
        1
      );
      expect(fixture.nativeElement.querySelector("div").classList[0]).toBe(
        "au-focus"
      );
    })
  );
});
