import { AuFontgridDirective } from "./au-fontgrid.directive";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { CoreModule } from "../core.module";
import { TestComponent } from "../test.component";

describe("AuFontgridDirective", () => {
  it("should work with any html element", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<p au-fontgrid></p>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("p").classList.length).toBe(1);
    expect(fixture.nativeElement.querySelector("p").classList[0]).toBe("au-fontgrid");
  }));

  it("setting a value should reflect in class", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<div au-fontgrid="3"></div>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("div").classList.length).toBe(2);
    expect(fixture.nativeElement.querySelector("div").classList[0]).toBe("au-fontgrid");
    expect(fixture.nativeElement.querySelector("div").classList[1]).toBe("au-fontgrid-3");
  }));

});
