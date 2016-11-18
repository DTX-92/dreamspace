import {Component} from '@angular/core';
import {NotificationsService} from "angular2-notifications/components";


@Component({
    selector: 'my-app',
    template: `<simple-notifications ></simple-notifications>
<h1>Hello Angular!</h1>
<button (click)="onClickMe()">Button</button>`
})
export class AppComponent {

    constructor(private _service:NotificationsService) {
        this._service.success('asd', 'bsd');
        console.log(123);
    }

    onClickMe() {
        console.log(112);
        this._service.success('asd');
    }

}