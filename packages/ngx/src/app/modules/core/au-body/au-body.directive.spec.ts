import { AuBodyDirective } from "./au-body.directive";
import { CoreModule } from "../core.module";
import { UiKitCoreService } from "../ui-kit-core.service";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { TestComponent } from "../test.component";

describe("AuBodyDirective", () => {
  it(
    "should work with any html element",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<p au-body></p>`)
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
        .overrideTemplate(TestComponent, `<div au-body></div>`)
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
        "au-body"
      );
      expect(fixture.nativeElement.querySelector("div").classList[1]).toBe(
        "au-body--dark"
      );
    })
  );

  it(
    "setting dark body value should set the right css class",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-body='dark'></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      // console.log(fixture.nativeElement.querySelector("div"));

      expect(fixture.nativeElement.querySelector("div").classList.length).toBe(
        2
      );
      expect(fixture.nativeElement.querySelector("div").classList[0]).toBe(
        "au-body"
      );
      expect(fixture.nativeElement.querySelector("div").classList[1]).toBe(
        "au-body--dark"
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
        .overrideTemplate(TestComponent, `<div au-body="light"></div>`)
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
        "au-body"
      );
    })
  );
});
