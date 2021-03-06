"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var text_component_1 = require("./text/text.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material/material/material.module");
var test_component_1 = require("./test/test.component");
var ngx_scroll_event_1 = require("ngx-scroll-event");
var progressbar_1 = require("ngx-bootstrap/progressbar");
var ng_circle_progress_1 = require("ng-circle-progress");
var ng2_animate_on_scroll_1 = require("ng2-animate-on-scroll");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                text_component_1.TextComponent,
                test_component_1.TestComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                ngx_scroll_event_1.NgxScrollEventModule,
                progressbar_1.ProgressbarModule.forRoot(),
                ng_circle_progress_1.NgCircleProgressModule.forRoot({}),
                ng2_animate_on_scroll_1.AnimateOnScrollModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
