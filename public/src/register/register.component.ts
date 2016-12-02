/**
 * Created by epanteleyev on 02.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'register',
    template: `
        <input [(ngModel)]="u.login"  />
        <h1>{{u.login}}</h1>
        `
})

export class RegisterComponent implements OnInit{
    u: User;


    ngOnInit(): void {
        this.u = new User;
        this.u.login = 'asd';
    }
}