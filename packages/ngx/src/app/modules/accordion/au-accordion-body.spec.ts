import { AuAccordionBodyDirective } from "./au-accordion-body";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { TestComponent } from "../core/test.component";
import { AccordionModule } from "./accordion.module";
import { By } from "@angular/platform-browser";

describe("AuAccordionBodyDirective", () => {
  it(
    "should attach the default CSS classes",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-accordion-body></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("div").classList).toContain(
        "au-accordion__body"
      );
      expect(fixture.nativeElement.querySelector("div").classList).toContain(
        "au-accordion--closed"
      );
    })
  );

  it(
    "should attach the right css class for expanded mode",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<div au-accordion-body [expanded]="true"></div>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("div").classList).toContain(
        "au-accordion--open"
      );
    })
  );

  it(
    "should attach the right aria-hidden attribute",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-accordion-body></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(
        fixture.nativeElement
          .querySelector("div")
          .attributes.getNamedItem("aria-hidden").value
      ).toBe("true");

      const auAccordionBodyDirectiveEl = fixture.debugElement.query(
        By.directive(AuAccordionBodyDirective)
      );
      const directiveInstance = auAccordionBodyDirectiveEl.injector.get(
        AuAccordionBodyDirective
      );

      directiveInstance.expanded = true;
      fixture.detectChanges();
      tick();

      expect(
        fixture.nativeElement
          .querySelector("div")
          .attributes.getNamedItem("aria-hidden").value
      ).toBe("false");
    })
  );

  it(
    "should attach id attribute",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(TestComponent, `<div au-accordion-body></div>`)
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("div").id).toMatch(
        "au-accordion-body"
      );
    })
  );

  it(
    "should work as a component",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<au-accordion-body>hello</au-accordion-body>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      // console.log(fixture.nativeElement.querySelector("div.au-accordion__body-wrapper"));
      expect(fixture.nativeElement.querySelector("div").id).toMatch(
        "au-accordion-body"
      );
      expect(
        fixture.nativeElement
          .querySelector("div.au-accordion__body-wrapper")
          .textContent.trim()
      ).toBe("hello");
    })
  );
});
