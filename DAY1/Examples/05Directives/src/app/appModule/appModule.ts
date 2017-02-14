import { NgModule } from "@angular/core"

import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from './components/appComponent';
import { RatingComponent } from './components/ratingComponent';

@NgModule({
    declarations: [AppComponent,RatingComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule { }