import { Component } from '@angular/core';

@Component({
    selector: 'todo',
    template: `
    
<div class="title">Dit is de titel</div>

    Dit is mijn eerste component
    <hr>
    Dit is mijn tweede component:<br />

    {{invoerRating}}

    <div *ngFor="let movie of movieRatings">
    {{movie.title}}
    <rating (scoreChanged)="scoreHasChanged()" [score]="movie.rating"></rating>
</div>
    `
})
export class AppComponent {

    public invoerRating: number = 4;

    public movieRatings: Movie[] = [];

    constructor() {

        this.movieRatings.push({title: "The Matrix", rating: 4});
        this.movieRatings.push({title: "The Matrix Reloaded", rating: 5});
        this.movieRatings.push({title: "The Matrix Revolutions", rating: 3});

    }

    public testKnopActie() {
        alert("hello");
    }

    public scoreHasChanged() {
        this.invoerRating--;
        alert("score aangepast!");
    }

}

class Movie {
    public title: string;
    public rating: number;
}