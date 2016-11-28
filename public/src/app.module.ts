import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {SimpleNotificationsModule} from './angular2-notifications';

@NgModule({
    imports: [BrowserModule, SimpleNotificationsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}