import { AuAccordionItem } from "./au-accordion-item";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { TestComponent } from "../core/test.component";
import { AccordionModule } from "../../../public_api";
import { By } from "@angular/platform-browser";
import { AuAccordionTitle } from "./au-accordion-title";

describe("AuAccordionItem", () => {
  it(
    "should have the default CSS class",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item>
                  <a au-accordion-title></a>
                  <div au-accordion-body></div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("section").classList[0]).toBe(
        "au-accordion"
      );
    })
  );

  it(
    "click event on header should set the right aria classes",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item>
                  <a au-accordion-title></a>
                  <div au-accordion-body></div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(
        fixture.nativeElement
          .querySelector("section a")
          .attributes.getNamedItem("aria-selected").value
      ).toBe("false");
      expect(
        fixture.nativeElement
          .querySelector("section a")
          .attributes.getNamedItem("aria-expanded").value
      ).toBe("false");

      fixture.nativeElement
        .querySelector("section a")
        .dispatchEvent(new Event("click"));
      fixture.detectChanges();
      tick();

      expect(
        fixture.nativeElement
          .querySelector("section a")
          .attributes.getNamedItem("aria-selected").value
      ).toBe("true");
      expect(
        fixture.nativeElement
          .querySelector("section a")
          .attributes.getNamedItem("aria-expanded").value
      ).toBe("true");
    })
  );

  it(
    "setting dark palette should set the right aria classes",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item="dark">
                  <a au-accordion-title></a>
                  <div au-accordion-body></div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("section").classList[0]).toBe(
        "au-accordion"
      );
      expect(fixture.nativeElement.querySelector("section").classList[1]).toBe(
        "au-accordion--dark"
      );
    })
  );

  it(
    "should set the right controlling body id",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item>
                  <a au-accordion-title></a>
                  <div au-accordion-body></div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      const anchorControls = fixture.nativeElement
        .querySelector("section a")
        .attributes.getNamedItem("aria-controls").value;
      const bodyId = fixture.nativeElement.querySelector("section div").id;
      expect(anchorControls).toBe(bodyId);
    })
  );

  it(
    "should toggle the body directive when the header has been clicked",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item>
                  <a au-accordion-title>Click me</a>
                  <div au-accordion-body>Hello World!</div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      const anchor = fixture.debugElement.query(By.css("section a"))
        .nativeElement;
      anchor.click();
      fixture.detectChanges();
      tick();

      expect(
        fixture.nativeElement
          .querySelector("section div")
          .attributes.getNamedItem("aria-hidden").value
      ).toBe("false");
      expect(
        fixture.nativeElement.querySelector("section div").classList
      ).toContain("au-accordion--open");
    })
  );

  it("should work with open input binding", () => {});

  it(
    "should not have href for disabled item",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item [disabled] = "true">
                  <a au-accordion-title>Click me</a>
                  <div au-accordion-body>Hello World!</div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(
        fixture.nativeElement
          .querySelector("section a")
          .attributes.getNamedItem("href")
      ).toBeNull();
    })
  );

  it(
    "should not trigger click on the header when disabled",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<section au-accordion-item [disabled] = "true">
                  <a au-accordion-title>Click me</a>
                  <div au-accordion-body>Hello World!</div>
              </section>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      const headerDirectiveEl = fixture.debugElement.query(
        By.directive(AuAccordionTitle)
      );
      const headerDirective = headerDirectiveEl.injector.get(AuAccordionTitle);
      spyOn(headerDirective._clickEventEmitter, "emit");

      const anchor = fixture.debugElement.query(By.css("a")).nativeElement;
      anchor.click();

      fixture.detectChanges();
      tick();

      expect(headerDirective._clickEventEmitter.emit).toHaveBeenCalledTimes(0);

      anchor.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

      fixture.detectChanges();
      tick();

      expect(headerDirective._clickEventEmitter.emit).toHaveBeenCalledTimes(0);
    })
  );

  it(
    "should work as component",
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccordionModule],
        declarations: [TestComponent]
      })
        .overrideTemplate(
          TestComponent,
          `<au-accordion-item>
                  <au-accordion-title>Hello</au-accordion-title>
                  <au-accordion-body>World</au-accordion-body>
              </au-accordion-item>`
        )
        .compileComponents();

      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector("section").classList[0]).toBe(
        "au-accordion"
      );

      // console.log(fixture.nativeElement);
    })
  );
});
