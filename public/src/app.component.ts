import {Component} from '@angular/core';
import { NgZone} from '@angular/core';
import {NgIf} from '@angular/common';


@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular!</h1>
        <button (click)="onClickMe()">Button</button>
        <p>Progress: {{progress}}%</p>
        <register></register>
    `
})
export class AppComponent {
    progress: number = 0;
    label: string;
    start: number;

    constructor() {
        console.log(123);
    }

}