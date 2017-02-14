import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "rating",
    templateUrl: "ratingComponent.html",
    styleUrls: ["ratingComponent.css"],
    encapsulation: ViewEncapsulation.Native,
    inputs: ["score"]
   // outputs: ["scoreChanged"]
})
export class RatingComponent {

    public score: number = 0;

    @Output() public scoreChanged = new EventEmitter<void>();

    public verminderRating() {
        this.scoreChanged.emit();
        this.score--;
    }

    public ngOnInit() {
        console.log("init!");
    }

}