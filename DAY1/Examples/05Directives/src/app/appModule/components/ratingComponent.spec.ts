
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './ratingComponent';

describe("ratingComponent", function () {

    /* Configure a dummy-module */
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RatingComponent]
        }).compileComponents();
    }));

    var fixture: ComponentFixture<RatingComponent>;
    var comp: RatingComponent;

    /* Get an instance of the component-element */
    beforeEach(() => {
        fixture = TestBed.createComponent(RatingComponent);
        comp = fixture.componentInstance;
    });

    it("should display 0 as default value", function () {

        fixture.detectChanges();
        var initValue = fixture.nativeElement.innerHTML;

        expect(comp.score).toBe(0);

    });

    it("should display -1 when the score has been reduced", function () {

        fixture.detectChanges();
        var initValue = fixture.nativeElement.innerHTML;

        comp.verminderRating();
        expect(comp.score).toBe(-1);

    });

});