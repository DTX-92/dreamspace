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
var core_1 = require('@angular/core');
var components_1 = require("angular2-notifications/components");
var AppComponent = (function () {
    function AppComponent(_service) {
        this._service = _service;
        this._service.success('asd', 'bsd');
        console.log(123);
    }
    AppComponent.prototype.onClickMe = function () {
        console.log(112);
        this._service.success('asd');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<simple-notifications ></simple-notifications>\n<h1>Hello Angular!</h1>\n<button (click)=\"onClickMe()\">Button</button>"
        }), 
        __metadata('design:paramtypes', [components_1.NotificationsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map