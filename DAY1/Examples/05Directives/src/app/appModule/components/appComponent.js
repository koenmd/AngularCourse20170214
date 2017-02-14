"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.invoerRating = 4;
        this.movieRatings = [];
        this.movieRatings.push({ title: "The Matrix", rating: 4 });
        this.movieRatings.push({ title: "The Matrix Reloaded", rating: 5 });
        this.movieRatings.push({ title: "The Matrix Revolutions", rating: 3 });
    }
    AppComponent.prototype.testKnopActie = function () {
        alert("hello");
    };
    AppComponent.prototype.scoreHasChanged = function () {
        this.invoerRating--;
        alert("score aangepast!");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'todo',
        template: "\n    \n<div class=\"title\">Dit is de titel</div>\n\n    Dit is mijn eerste component\n    <hr>\n    Dit is mijn tweede component:<br />\n\n    {{invoerRating}}\n\n    <div *ngFor=\"let movie of movieRatings\">\n    {{movie.title}}\n    <rating (scoreChanged)=\"scoreHasChanged()\" [score]=\"movie.rating\"></rating>\n</div>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());
