"use strict";
var testing_1 = require("@angular/core/testing");
var ratingComponent_1 = require("./ratingComponent");
describe("ratingComponent", function () {
    /* Configure a dummy-module */
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [ratingComponent_1.RatingComponent]
        }).compileComponents();
    }));
    var fixture;
    var comp;
    /* Get an instance of the component-element */
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(ratingComponent_1.RatingComponent);
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
