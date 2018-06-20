import { fakeAsync, inject, TestBed, tick } from "@angular/core/testing";

import { UiKitCoreService } from "./ui-kit-core.service";
import { CoreModule } from "./core.module";
import { Component } from "@angular/core";

describe("UiKitCoreService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()]
    });
  });

  it("should be created", inject(
    [UiKitCoreService],
    (service: UiKitCoreService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("default palette should be light", inject(
    [UiKitCoreService],
    (service: UiKitCoreService) => {
      expect(service.isUsingLightPalette()).toBeTruthy();
      expect(service.isUsingDarkPalette()).toBeFalsy();
    }
  ));

  it("switching default palette should work", inject(
    [UiKitCoreService],
    (service: UiKitCoreService) => {
      service.setColorPalettes("dark");
      expect(service.isUsingLightPalette()).toBeFalsy();
      expect(service.isUsingDarkPalette()).toBeTruthy();
    }
  ));

  it("switching palette multiple times should work", inject(
    [UiKitCoreService],
    (service: UiKitCoreService) => {
      service.setColorPalettes("dark");
      expect(service.isUsingLightPalette()).toBeFalsy();
      expect(service.isUsingDarkPalette()).toBeTruthy();

      service.setColorPalettes("light");
      expect(service.isUsingLightPalette()).toBeTruthy();
      expect(service.isUsingDarkPalette()).toBeFalsy();

      service.setColorPalettes("dark");
      expect(service.isUsingLightPalette()).toBeFalsy();
      expect(service.isUsingDarkPalette()).toBeTruthy();
    }
  ));

  it("should be able to add multiple palettes", inject(
    [UiKitCoreService],
    (service: UiKitCoreService) => {
      service.setColorPalettes("dark,alt");
      expect(service.isUsingLightPalette()).toBeFalsy();
      expect(service.isUsingDarkPalette()).toBeTruthy();
      expect(service.isUsingAltPalette()).toBeTruthy();
    }
  ));

  it(
    "palette swithcing should trigger change in component",
    fakeAsync(() => {
      @Component({
        selector: "temp",
        template: `
        <div [ngClass] = "{'au-body--dark':isDarkBody}">Test</div>`
      })
      class TestComponent {
        constructor(private s: UiKitCoreService) {}

        get isDarkBody(): boolean {
          return this.s.isUsingDarkPalette();
        }
      }

      TestBed.configureTestingModule({
        imports: [CoreModule.forRoot()],
        declarations: [TestComponent]
      }).compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      expect(fixture.nativeElement.querySelector("div").classList.length).toBe(
        0
      );

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
        "au-body--dark"
      );
    })
  );
});
