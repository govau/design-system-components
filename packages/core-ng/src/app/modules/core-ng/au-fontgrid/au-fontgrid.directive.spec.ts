import { AuFontgridDirective } from "./au-fontgrid.directive";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { CoreNgModule } from "../core-ng.module";
import { TestComponent } from "../test.component";

describe("AuFontgridDirective", () => {
  it("should work with any html element", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [CoreNgModule.forRoot()],
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
      imports: [CoreNgModule.forRoot()],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<div au-fontgrid="3"></div>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();

    console.log(fixture.nativeElement.querySelector("div"));

    expect(fixture.nativeElement.querySelector("div").classList.length).toBe(2);
    expect(fixture.nativeElement.querySelector("div").classList[0]).toBe("au-fontgrid");
    expect(fixture.nativeElement.querySelector("div").classList[1]).toBe("au-fontgrid-3");
  }));

});
