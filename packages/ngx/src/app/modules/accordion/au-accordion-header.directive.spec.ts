import { AuAccordionHeaderDirective } from './au-accordion-header.directive';
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { TestComponent } from "../core/test.component";
import { By } from "@angular/platform-browser";
import { AccordionModule } from '../../../public_api';

describe('AuAccordionHeaderDirective', () => {
  it("should attach the default CSS class", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("a").classList[0]).toContain("au-accordion__title");

  }));

  it("should attach the default role attribute", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("role").value).toBe("tab");

  }));

  it("should attach the right aria-controls attribute", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const headerDirectiveEl = fixture.debugElement.query(By.directive(AuAccordionHeaderDirective));
    const headerDirective = headerDirectiveEl.injector.get(AuAccordionHeaderDirective);
    headerDirective.controllingAccordionBodyId = "test-accordian";
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-controls").value).toBe("test-accordian");

  }));

  it("should attach the right aria-selected attribute", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const headerDirectiveEl = fixture.debugElement.query(By.directive(AuAccordionHeaderDirective));
    const headerDirective = headerDirectiveEl.injector.get(AuAccordionHeaderDirective);
    fixture.detectChanges();
    tick();

    /*Default behavior*/
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-selected").value).toBe("false");
    headerDirective.selected = true;
    fixture.detectChanges();
    tick();

    /*Default behavior after change*/
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-selected").value).toBe("true");

  }));

  it("should attach the right aria-expanded attribute", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const headerDirectiveEl = fixture.debugElement.query(By.directive(AuAccordionHeaderDirective));
    const headerDirective = headerDirectiveEl.injector.get(AuAccordionHeaderDirective);
    fixture.detectChanges();
    tick();

    /*Default behavior*/
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-expanded").value).toBe("false");
    headerDirective.expanded = true;
    fixture.detectChanges();
    tick();

    /*Default behavior after change*/
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-expanded").value).toBe("true");

  }));

  it("should broadcast click event", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const headerDirectiveEl = fixture.debugElement.query(By.directive(AuAccordionHeaderDirective));
    const headerDirective = headerDirectiveEl.injector.get(AuAccordionHeaderDirective);
    fixture.detectChanges();
    tick();

    spyOn(headerDirective._clickEventEmitter, "emit");
    const anchor = fixture.debugElement.query(By.css("a")).nativeElement;
    anchor.click();

    fixture.detectChanges();
    tick();

    expect(headerDirective._clickEventEmitter.emit).toHaveBeenCalledTimes(1);
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-expanded").value).toBe("true");
  }));


  it("should handle enter keyboard event", fakeAsync(() => {

    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const headerDirectiveEl = fixture.debugElement.query(By.directive(AuAccordionHeaderDirective));
    const headerDirective = headerDirectiveEl.injector.get(AuAccordionHeaderDirective);
    fixture.detectChanges();
    tick();

    spyOn(headerDirective._clickEventEmitter, "emit");
    const anchor = fixture.debugElement.query(By.css("a")).nativeElement;
    anchor.dispatchEvent(new KeyboardEvent("keydown", { key: 'Enter' }));

    fixture.detectChanges();
    tick();

    expect(headerDirective._clickEventEmitter.emit).toHaveBeenCalledTimes(1);
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-expanded").value).toBe("true");

    anchor.dispatchEvent(new KeyboardEvent("keydown", { key: 'Enter' }));

    fixture.detectChanges();
    tick();

    expect(headerDirective._clickEventEmitter.emit).toHaveBeenCalledTimes(2);
    expect(fixture.nativeElement.querySelector("a").attributes.getNamedItem("aria-expanded").value).toBe("false");
  }));

  it("should attach the right open and close class", fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    }).overrideTemplate(TestComponent, `<a au-accordion-header></a>`)
      .compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const headerDirectiveEl = fixture.debugElement.query(By.directive(AuAccordionHeaderDirective));
    const headerDirective = headerDirectiveEl.injector.get(AuAccordionHeaderDirective);
    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("a").classList).toContain("au-accordion--closed");

    spyOn(headerDirective._clickEventEmitter, "emit");
    const anchor = fixture.debugElement.query(By.css("a")).nativeElement;
    anchor.dispatchEvent(new KeyboardEvent("keydown", { key: 'Enter' }));

    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("a").classList).toContain("au-accordion--open");
    expect(fixture.nativeElement.querySelector("a").classList).not.toContain("au-accordion--closed");

    anchor.dispatchEvent(new KeyboardEvent("keydown", { key: 'Enter' }));

    fixture.detectChanges();
    tick();

    expect(fixture.nativeElement.querySelector("a").classList).not.toContain("au-accordion--open");
    expect(fixture.nativeElement.querySelector("a").classList).toContain("au-accordion--closed");

  }));


});
