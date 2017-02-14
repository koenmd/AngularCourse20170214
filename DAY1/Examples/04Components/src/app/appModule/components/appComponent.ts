import { Component } from '@angular/core';

@Component({
    selector: 'todo',
    template: `
    
<div class="title">Dit is de titel</div>

    Dit is mijn eerste component
    <hr>
    Dit is mijn tweede component:<br />

    {{invoerRating}}

    <rating (scoreChanged)="scoreHasChanged()" [score]="invoerRating"></rating>
      <rating score="5"></rating>
      <rating score="4"></rating>
    `
})
export class AppComponent {

    public invoerRating: number = 4;

    public testKnopActie() {
        alert("hello");
    }

    public scoreHasChanged() {
        this.invoerRating--;
        alert("score aangepast!");
    }

}