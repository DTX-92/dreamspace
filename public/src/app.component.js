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
var core_2 = require('@angular/core');
var components_1 = require("src/angular2-notifications/components");
var AppComponent = (function () {
    function AppComponent(_service, _ngZone) {
        this._service = _service;
        this._ngZone = _ngZone;
        this.progress = 0;
        this._service.success('asd', 'bsd');
        console.log(123);
    }
    AppComponent.prototype.processWithinAngularZone = function () {
        this.start = new Date().getTime();
        this.label = 'inside';
        this.progress = 0;
        this._increaseProgress(function () { return console.log('Inside Done!'); });
    };
    // Loop outside of the Angular zone
    // so the UI DOES NOT refresh after each setTimeout cycle
    AppComponent.prototype.processOutsideOfAngularZone = function () {
        var _this = this;
        this.start = new Date().getTime();
        this.label = 'outside';
        this.progress = 0;
        this._ngZone.runOutsideAngular(function () {
            _this._increaseProgress(function () {
                // reenter the Angular zone and display done
                _this._ngZone.run(function () { console.log('Outside Done!'); });
            });
        });
    };
    AppComponent.prototype.sleep = function (ms) {
        ms += new Date().getTime();
        while (new Date() < ms) { }
    };
    AppComponent.prototype._increaseProgress = function (doneCallback) {
        var _this = this;
        this.progress += 1;
        //console.log(`Current progress: ${this.progress}%`);
        if (this.progress < 100) {
            window.setTimeout(function () { return _this._increaseProgress(doneCallback); }, 10);
        }
        else {
            doneCallback();
            console.log(new Date().getTime() - this.start);
        }
    };
    AppComponent.prototype.onClickMe = function () {
        console.log(112);
        //this._service.success('asd');
        this._service.success('asd', 'bsd');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <simple-notifications ></simple-notifications>\n        <h1>Hello Angular!</h1>\n        <button (click)=\"onClickMe()\">Button</button>\n        <p>Progress: {{progress}}%</p>\n        <p *ngIf=\"progress >= 100\">Done processing {{label}} of Angular zone!</p>\n        <button (click)=\"processWithinAngularZone()\">Process within Angular zone</button>\n        <button (click)=\"processOutsideOfAngularZone()\">Process outside of Angular zone</button>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof components_1.NotificationsService !== 'undefined' && components_1.NotificationsService) === 'function' && _a) || Object, core_2.NgZone])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map