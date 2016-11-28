/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../src/notification.component');
var import1 = require('@angular/core/src/change_detection/change_detection');
var import2 = require('@angular/core/src/linker/view_utils');
var import3 = require('@angular/core/src/linker/view');
var import5 = require('@angular/core/src/linker/element');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('../../src/notifications.service');
var import9 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import10 = require('@angular/core/src/zone/ng_zone');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var import13 = require('@angular/core/src/animation/animation_transition');
var import14 = require('@angular/core/src/animation/animation_style_util');
var import15 = require('@angular/core/src/animation/animation_sequence_player');
var import16 = require('@angular/core/src/animation/animation_styles');
var import17 = require('@angular/core/src/animation/animation_keyframe');
var import18 = require('@angular/core/src/animation/animation_player');
var import19 = require('../node_modules/@angular/common/src/directives/ng_class.ngfactory');
var import20 = require('../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import21 = require('../../src/max.pipe');
var import22 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import23 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import24 = require('@angular/core/src/linker/element_ref');
var import25 = require('@angular/core/src/linker/template_ref');
var import26 = require('@angular/common/src/directives/ng_if');
var import27 = require('@angular/common/src/directives/ng_class');
var import28 = require('@angular/core/src/security');
var import29 = require('../node_modules/@angular/common/src/directives/ng_style.ngfactory');
var import30 = require('@angular/common/src/directives/ng_style');
var Wrapper_NotificationComponent = (function () {
    function Wrapper_NotificationComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.NotificationComponent(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
    }
    Wrapper_NotificationComponent.prototype.check_timeOut = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.timeOut = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_showProgressBar = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.showProgressBar = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_pauseOnHover = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this.changed = true;
            this.context.pauseOnHover = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_clickToClose = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this.changed = true;
            this.context.clickToClose = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_maxLength = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this.changed = true;
            this.context.maxLength = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_theClass = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this.changed = true;
            this.context.theClass = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_rtl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_6, currValue))) {
            this.changed = true;
            this.context.rtl = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_animate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_7, currValue))) {
            this.changed = true;
            this.context.animate = currValue;
            this._expr_7 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_position = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_8, currValue))) {
            this.changed = true;
            this.context.position = currValue;
            this._expr_8 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.check_item = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_9, currValue))) {
            this.changed = true;
            this.context.item = currValue;
            this._expr_9 = currValue;
        }
    };
    Wrapper_NotificationComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NotificationComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NotificationComponent;
}());
exports.Wrapper_NotificationComponent = Wrapper_NotificationComponent;
var renderType_NotificationComponent_Host = null;
var _View_NotificationComponent_Host0 = (function (_super) {
    __extends(_View_NotificationComponent_Host0, _super);
    function _View_NotificationComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotificationComponent_Host0, renderType_NotificationComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_NotificationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'simple-notification', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NotificationComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NotificationComponent_0_4 = new Wrapper_NotificationComponent(this.parentInjector.get(import8.NotificationsService), this.parentInjector.get(import9.DomSanitizer), this.parentInjector.get(import10.NgZone));
        this._appEl_0.initComponent(this._NotificationComponent_0_4.context, [], compView_0);
        compView_0.create(this._NotificationComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NotificationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NotificationComponent) && (0 === requestNodeIndex))) {
            return this._NotificationComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_NotificationComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NotificationComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NotificationComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NotificationComponent_Host0.prototype.destroyInternal = function () {
        this._NotificationComponent_0_4.context.ngOnDestroy();
    };
    return _View_NotificationComponent_Host0;
}(import3.AppView));
function viewFactory_NotificationComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotificationComponent_Host === null)) {
        (renderType_NotificationComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_NotificationComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.NotificationComponentNgFactory = new import12.ComponentFactory('simple-notification', viewFactory_NotificationComponent_Host0, import0.NotificationComponent);
var styles_NotificationComponent = ['\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification svg {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 70px;\n            padding: 10px;\n            fill: #fff;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n    '];
var NotificationComponent_enterLeave_states = {
    fromRight: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    fromRightOut: {
        opacity: 0,
        transform: 'translateX(-5%)'
    },
    fromLeft: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    fromLeftOut: {
        opacity: 0,
        transform: 'translateX(5%)'
    },
    scale: {
        opacity: 1,
        transform: 'scale(1)'
    },
    scaleOut: {
        opacity: 0,
        transform: 'scale(0)'
    },
    rotate: {
        opacity: 1,
        transform: 'rotate(0deg)'
    },
    rotateOut: {
        opacity: 0,
        transform: 'rotate(-5deg)'
    },
    '*': {}
};
function NotificationComponent_enterLeave_factory(view, element, currentState, nextState) {
    view.animationContext.cancelActiveAnimation(element, 'enterLeave', (nextState == 'void'));
    var collectedStyles = {};
    var player = null;
    var totalTime = 0;
    var defaultStateStyles = NotificationComponent_enterLeave_states['*'];
    var startStateStyles = NotificationComponent_enterLeave_states[currentState];
    if ((startStateStyles == null)) {
        (startStateStyles = defaultStateStyles);
    }
    var endStateStyles = NotificationComponent_enterLeave_states[nextState];
    if ((endStateStyles == null)) {
        (endStateStyles = defaultStateStyles);
    }
    import14.renderStyles(element, view.renderer, import14.clearStyles(startStateStyles));
    if (((player == null) && (true && (nextState == 'fromRight')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 0,
                    transform: 'translateX(5%)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 400, 0, 'ease-in-out')]);
        totalTime = 400;
    }
    if (((player == null) && ((currentState == 'fromRight') && (nextState == 'fromRightOut')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 1,
                    transform: 'translateX(0)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 300, 0, 'ease-in-out')]);
        totalTime = 300;
    }
    if (((player == null) && (true && (nextState == 'fromLeft')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 0,
                    transform: 'translateX(-5%)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 400, 0, 'ease-in-out')]);
        totalTime = 400;
    }
    if (((player == null) && ((currentState == 'fromLeft') && (nextState == 'fromLeftOut')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 1,
                    transform: 'translateX(0)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 300, 0, 'ease-in-out')]);
        totalTime = 300;
    }
    if (((player == null) && (true && (nextState == 'scale')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 0,
                    transform: 'scale(0)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 400, 0, 'ease-in-out')]);
        totalTime = 400;
    }
    if (((player == null) && ((currentState == 'scale') && (nextState == 'scaleOut')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 1,
                    transform: 'scale(1)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 400, 0, 'ease-in-out')]);
        totalTime = 400;
    }
    if (((player == null) && (true && (nextState == 'rotate')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 0,
                    transform: 'rotate(5deg)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 400, 0, 'ease-in-out')]);
        totalTime = 400;
    }
    if (((player == null) && ((currentState == 'rotate') && (nextState == 'rotateOut')))) {
        player = new import15.AnimationSequencePlayer([view.renderer.animate(element, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    opacity: 1,
                    transform: 'rotate(0deg)'
                }
            ])), import14.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import17.AnimationKeyframe(0, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}]))),
                new import17.AnimationKeyframe(1, new import16.AnimationStyles(import14.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 400, 0, 'ease-in-out')]);
        totalTime = 400;
    }
    if ((player == null)) {
        (player = new import18.NoOpAnimationPlayer());
    }
    player.onDone(function () {
        import14.renderStyles(element, view.renderer, import14.prepareFinalAnimationStyles(startStateStyles, endStateStyles));
    });
    view.animationContext.queueAnimation(element, 'enterLeave', player);
    return new import13.AnimationTransition(player, currentState, nextState, totalTime);
}
var renderType_NotificationComponent = null;
var _View_NotificationComponent0 = (function (_super) {
    __extends(_View_NotificationComponent0, _super);
    function _View_NotificationComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotificationComponent0, renderType_NotificationComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_20 = import1.UNINITIALIZED;
        this._map_21 = import2.pureProxy6(function (p0, p1, p2, p3, p4, p5) {
            return {
                alert: p0,
                error: p1,
                success: p2,
                info: p3,
                bare: p4,
                'rtl-mode': p5
            };
        });
    }
    _View_NotificationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'class', 'simple-notification'), null);
        this._NgClass_1_3 = new import19.Wrapper_NgClass(this.parentInjector.get(import22.IterableDiffers), this.parentInjector.get(import23.KeyValueDiffers), new import24.ElementRef(this._el_1), this.renderer);
        this._text_2 = this.renderer.createText(this._el_1, '\n\n            ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._appEl_3 = new import5.AppElement(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import25.TemplateRef_(this._appEl_3, viewFactory_NotificationComponent1);
        this._NgIf_3_6 = new import20.Wrapper_NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(this._el_1, '\n            ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._appEl_5 = new import5.AppElement(5, 1, this, this._anchor_5);
        this._TemplateRef_5_5 = new import25.TemplateRef_(this._appEl_5, viewFactory_NotificationComponent3);
        this._NgIf_5_6 = new import20.Wrapper_NgIf(this._appEl_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_1, '\n\n            ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._appEl_7 = new import5.AppElement(7, 1, this, this._anchor_7);
        this._TemplateRef_7_5 = new import25.TemplateRef_(this._appEl_7, viewFactory_NotificationComponent4);
        this._NgIf_7_6 = new import20.Wrapper_NgIf(this._appEl_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_1, '\n\n        ', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_1, 'mouseenter', this.eventHandler(this._handle_mouseenter_1_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_1, 'mouseleave', this.eventHandler(this._handle_mouseleave_1_2.bind(this)));
        this._pipe_max_0 = new import21.MaxPipe();
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._text_9
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_NotificationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import26.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        if (((token === import25.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import26.NgIf) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        if (((token === import25.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import26.NgIf) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        if (((token === import27.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NgClass_1_3.context;
        }
        return notFoundResult;
    };
    _View_NotificationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_20 = this.context.item.state;
        if (import2.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            var animationTransition_enterLeave = this.componentType.animations['enterLeave'](this, this._el_1, ((this._expr_20 == import1.UNINITIALIZED) ? 'void' : this._expr_20), ((currVal_20 == import1.UNINITIALIZED) ? 'void' : currVal_20));
            this._expr_20 = currVal_20;
        }
        var currVal_1_0_0 = this.context.theClass;
        this._NgClass_1_3.check_klass(currVal_1_0_0, throwOnChange, false);
        var currVal_1_0_1 = this._map_21((this.context.item.type === 'alert'), (this.context.item.type === 'error'), (this.context.item.type === 'success'), (this.context.item.type === 'info'), (this.context.item.type === 'bare'), this.context.rtl);
        this._NgClass_1_3.check_ngClass(currVal_1_0_1, throwOnChange, false);
        this._NgClass_1_3.detectChangesInInputProps(this, this._el_1, throwOnChange);
        var currVal_3_0_0 = !this.context.item.html;
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.detectChangesInInputProps(this, this._anchor_3, throwOnChange);
        var currVal_5_0_0 = this.context.item.html;
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.detectChangesInInputProps(this, this._anchor_5, throwOnChange);
        var currVal_7_0_0 = this.context.showProgressBar;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.detectChangesInInputProps(this, this._anchor_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_1_3.detectChangesInHostProps(this, this._el_1, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NotificationComponent0.prototype.detachInternal = function () {
        var animationTransition_enterLeave = this.componentType.animations['enterLeave'](this, this._el_1, this._expr_20, 'void');
    };
    _View_NotificationComponent0.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.context.onClick($event) !== false);
        return (true && pd_1_0);
    };
    _View_NotificationComponent0.prototype._handle_mouseenter_1_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.context.onEnter() !== false);
        return (true && pd_1_0);
    };
    _View_NotificationComponent0.prototype._handle_mouseleave_1_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.context.onLeave() !== false);
        return (true && pd_1_0);
    };
    return _View_NotificationComponent0;
}(import3.AppView));
function viewFactory_NotificationComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotificationComponent === null)) {
        (renderType_NotificationComponent = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_NotificationComponent, { enterLeave: NotificationComponent_enterLeave_factory }));
    }
    return new _View_NotificationComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_NotificationComponent0 = viewFactory_NotificationComponent0;
var _View_NotificationComponent1 = (function (_super) {
    __extends(_View_NotificationComponent1, _super);
    function _View_NotificationComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotificationComponent1, renderType_NotificationComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    _View_NotificationComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'sn-title'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'sn-content'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n                ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_8 = new import5.AppElement(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import25.TemplateRef_(this._appEl_8, viewFactory_NotificationComponent2);
        this._NgIf_8_6 = new import20.Wrapper_NgIf(this._appEl_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_0, '\n            ', null);
        this._pipe_max_0_0 = import2.pureProxy2(this.parent._pipe_max_0.transform.bind(this.parent._pipe_max_0));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9
        ], [], []);
        return null;
    };
    _View_NotificationComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import26.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        return notFoundResult;
    };
    _View_NotificationComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_8_0_0 = (this.parent.context.item.type !== 'bare');
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.detectChangesInInputProps(this, this._anchor_8, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_13 = import2.interpolate(1, '', this.parent.context.item.title, '');
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_3, currVal_13);
            this._expr_13 = currVal_13;
        }
        valUnwrapper.reset();
        var currVal_14 = import2.interpolate(1, '', valUnwrapper.unwrap(import2.castByValue(this._pipe_max_0_0, this.parent._pipe_max_0.transform)(this.parent.context.item.content, this.parent.context.maxLength)), '');
        if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange, this._expr_14, currVal_14))) {
            this.renderer.setText(this._text_6, currVal_14);
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NotificationComponent1;
}(import3.AppView));
function viewFactory_NotificationComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_NotificationComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_NotificationComponent2 = (function (_super) {
    __extends(_View_NotificationComponent2, _super);
    function _View_NotificationComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotificationComponent2, renderType_NotificationComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import1.UNINITIALIZED;
    }
    _View_NotificationComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_NotificationComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this.parent.parent.context.safeSvg;
        if (import2.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import28.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NotificationComponent2;
}(import3.AppView));
function viewFactory_NotificationComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_NotificationComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_NotificationComponent3 = (function (_super) {
    __extends(_View_NotificationComponent3, _super);
    function _View_NotificationComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotificationComponent3, renderType_NotificationComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import1.UNINITIALIZED;
    }
    _View_NotificationComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_NotificationComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this.parent.context.item.html;
        if (import2.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import28.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NotificationComponent3;
}(import3.AppView));
function viewFactory_NotificationComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_NotificationComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_NotificationComponent4 = (function (_super) {
    __extends(_View_NotificationComponent4, _super);
    function _View_NotificationComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotificationComponent4, renderType_NotificationComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._map_5 = import2.pureProxy1(function (p0) {
            return { width: p0 };
        });
    }
    _View_NotificationComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'sn-progress-loader'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._NgStyle_2_3 = new import29.Wrapper_NgStyle(this.parent.parentInjector.get(import23.KeyValueDiffers), new import24.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_NotificationComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.NgStyle) && (2 === requestNodeIndex))) {
            return this._NgStyle_2_3.context;
        }
        return notFoundResult;
    };
    _View_NotificationComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._map_5((this.parent.context.progressWidth + '%'));
        this._NgStyle_2_3.check_ngStyle(currVal_2_0_0, throwOnChange, false);
        this._NgStyle_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgStyle_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NotificationComponent4;
}(import3.AppView));
function viewFactory_NotificationComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_NotificationComponent4(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=notification.component.ngfactory.js.map