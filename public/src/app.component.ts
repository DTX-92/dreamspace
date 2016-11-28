import {Component} from '@angular/core';
import { NgZone} from '@angular/core';
import {NgIf} from '@angular/common';
import {NotificationsService} from "src/angular2-notifications/components";


@Component({
    selector: 'my-app',
    template: `
        <simple-notifications ></simple-notifications>
        <h1>Hello Angular!</h1>
        <button (click)="onClickMe()">Button</button>
        <p>Progress: {{progress}}%</p>
        <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
        <button (click)="processWithinAngularZone()">Process within Angular zone</button>
        <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
    `
})
export class AppComponent {
    progress: number = 0;
    label: string;
    start: number;

    constructor(private _service:NotificationsService, private _ngZone: NgZone) {
        this._service.success('asd', 'bsd');
        console.log(123);
    }

    processWithinAngularZone() {
        this.start = new Date().getTime();
        this.label = 'inside';
        this.progress = 0;
        this._increaseProgress(() => console.log('Inside Done!'));
    }
    // Loop outside of the Angular zone
    // so the UI DOES NOT refresh after each setTimeout cycle
    processOutsideOfAngularZone() {
        this.start = new Date().getTime();
        this.label = 'outside';
        this.progress = 0;
        this._ngZone.runOutsideAngular(() => {
            this._increaseProgress(() => {
                // reenter the Angular zone and display done
                this._ngZone.run(() => {console.log('Outside Done!') });
            })});
    }
    sleep(ms) {

        ms += new Date().getTime();
        while (new Date() < ms){}
    }
    _increaseProgress(doneCallback: () => void) {
        this.progress += 1;
        //console.log(`Current progress: ${this.progress}%`);
        if (this.progress < 100) {
                window.setTimeout(() => this._increaseProgress(doneCallback), 10)
        } else {
            doneCallback();
            console.log(new Date().getTime() - this.start);
        }
    }

    onClickMe() {
        console.log(112);
        //this._service.success('asd');
        this._service.success('asd', 'bsd');
    }

}