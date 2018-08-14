import { DirectionLinkModule } from './direction-link.module';
import { DirectionLinkComponent } from './direction-link';
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe("au-direction-link", () => {

    it("new instance should be created", () => {
        const directionLinkInstance = new DirectionLinkComponent();
        expect(directionLinkInstance).toBeDefined();
    });

    it("should create an anchor if the link is not provided", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link link="#test" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("a")).toBeDefined();
    }));
    it("should create an button if the link is not provided", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("button")).toBeDefined();
    }));

    it("should print inner content", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("button").textContent.trim()).toBe("Hello world");
    }));

    it("should have the right default CSS class", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("button").classList[0]).toBe("au-direction-link");
    }));

    it("should have the right palette CSS class", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link palette="dark" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("button").classList).toContain("au-direction-link--dark");
    }));

    it("should have the right direction CSS class for left", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link link="#" direction="left" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("a").classList).toContain("au-direction-link--left");
    }));

    it("should have the right direction CSS class for right", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link link="#" direction="right" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("a").classList).toContain("au-direction-link--right");
    }));

    it("should have the right direction CSS class for up", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link link="#" direction="up" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("a").classList).toContain("au-direction-link--up");
    }));

    it("should have the right direction CSS class for down", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link link="#" direction="down" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("a").classList).toContain("au-direction-link--down");
    }));

    it("should not have direction CSS class if not specified", fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DirectionLinkModule],
            declarations: [TestComponent]
        })
            .overrideTemplate(
                TestComponent,
                `<au-direction-link link="#" text="Hello world">`
            )
            .compileComponents();

        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        expect(fixture.nativeElement.querySelector("a").classList.length).toBe(1);
    }));





});

@Component({
    selector: "test",
    template: ``
})
export class TestComponent {
}