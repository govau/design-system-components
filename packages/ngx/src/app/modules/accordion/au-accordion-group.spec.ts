import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuAccordionGroup } from "./au-accordion-group";
import { AccordionModule } from "./accordion.module";

xdescribe("AuAccordionGroup", () => {
  let component: AuAccordionGroup;
  let fixture: ComponentFixture<AuAccordionGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [AuAccordionGroup]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuAccordionGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
