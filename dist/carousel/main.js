(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ng-carousel/ng-carousel.component.html":
/*!********************************************************!*\
  !*** ./src/app/ng-carousel/ng-carousel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"calousel-box\" [ngStyle]=\"{'width': calousel_width+'px', 'height': calousel_height+'px'}\">\n  <div #calouselcontainer class=\"calousel-container\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"ng-carousel-item\" *ngFor=\"let item of Images;let index = index\"\n      [ngStyle]=\"{'transform': _translateX}\">\n      <img src=\"{{item}}\">\n    </div>\n    <div class=\"bt_index_array\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">\n      <span class=\"pointer bt_index\" *ngFor=\"let item of class_now_array\" (click)=\"fn_selectChange(item)\" [ngClass]=\"{'selected':(class_now_array.length<=4&&item===selectedIndex)||(class_now_array.length>4&&item===selectedIndex)}\"></span>\n    </div>\n  </div>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n  <a class=\"pointer\" (click)=\"fn_previous()\">bef</a>\n  <a class=\"pointer\" (click)=\"fn_next()\">nex</a>\n</div>\n"

/***/ }),

/***/ "./src/app/ng-carousel/ng-carousel.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ng-carousel/ng-carousel.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #calousel-box {\n  border: 1px solid red;\n  height: 350px;\n  width: 900px;\n  overflow: hidden; }\n  :host #calousel-box .calousel-container {\n    width: 100%;\n    height: 100%;\n    border: 2px solid red;\n    position: relative; }\n  :host #calousel-box .calousel-container .ng-carousel-item {\n      position: absolute;\n      cursor: pointer;\n      left: 0px;\n      width: 33.3%;\n      max-height: 60%;\n      transition: all .5s ease-out;\n      flex: 0 0 auto;\n      z-index: 10;\n      overflow: hidden;\n      box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.4); }\n  :host #calousel-box .calousel-container .ng-carousel-item img {\n        width: 100%; }\n  :host #calousel-box .calousel-container .bt_index_array {\n      position: absolute;\n      width: 100%;\n      bottom: 10px;\n      z-index: 50 !important; }\n  :host #calousel-box .calousel-container .bt_index_array span {\n        display: block;\n        width: 5px;\n        border-radius: 10px;\n        border: 3px solid red;\n        transition: width 1s ease; }\n  :host #calousel-box .calousel-container .bt_index_array span.selected {\n          width: 15px; }\n  .p1 {\n  -webkit-transform: translateX(-100%) !important;\n          transform: translateX(-100%) !important; }\n  .p2 {\n  z-index: 15 !important;\n  -webkit-transform: translateX(0%) !important;\n          transform: translateX(0%) !important; }\n  .p3 {\n  z-index: 30 !important;\n  width: 50% !important;\n  -webkit-transform: translateX(50%) !important;\n          transform: translateX(50%) !important; }\n  .p4 {\n  z-index: 20 !important;\n  -webkit-transform: translateX(200%) !important;\n          transform: translateX(200%) !important; }\n  .p5 {\n  -webkit-transform: translateX(300%) !important;\n          transform: translateX(300%) !important; }\n  .p6 {\n  -webkit-transform: translateX(400%) !important;\n          transform: translateX(400%) !important; }\n  .p7 {\n  -webkit-transform: translateX(500%) !important;\n          transform: translateX(500%) !important; }\n  .p8 {\n  -webkit-transform: translateX(600%) !important;\n          transform: translateX(600%) !important; }\n  .s1 {\n  z-index: 15 !important;\n  -webkit-transform: translateX(0%) !important;\n          transform: translateX(0%) !important; }\n  .s2 {\n  z-index: 30 !important;\n  width: 50% !important;\n  -webkit-transform: translateX(50%) !important;\n          transform: translateX(50%) !important; }\n  .s3 {\n  z-index: 20 !important;\n  -webkit-transform: translateX(200%) !important;\n          transform: translateX(200%) !important; }\n  .s4 {\n  -webkit-transform: translateX(100%) !important;\n          transform: translateX(100%) !important; }\n"

/***/ }),

/***/ "./src/app/ng-carousel/ng-carousel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ng-carousel/ng-carousel.component.ts ***!
  \******************************************************/
/*! exports provided: NgCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCarouselComponent", function() { return NgCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgCarouselComponent = /** @class */ (function () {
    function NgCarouselComponent(render, element) {
        this.render = render;
        this.element = element;
        this.selectedIndex = 0;
        this._listenClick = [];
        this._setTimeout = null;
        this.calousel_width = 900;
        this.alousel_height = 350;
        this.item_doms = [];
        this.item_doms_bt = [];
        this.item_doms_length = 0;
        this.class_now_array = [];
        this.class_before_array = [];
        this.Images = [];
    }
    NgCarouselComponent.prototype.ngOnInit = function () {
    };
    NgCarouselComponent.prototype.ngAfterViewInit = function () {
        if (this.Images.length <= 4) {
            this.selectedIndex = 2;
        }
        else {
            this.selectedIndex = 3;
        }
        this.item_doms = this.element.nativeElement.querySelectorAll('.ng-carousel-item');
        console.log(this.item_doms_bt);
        this.item_doms_length = this.item_doms.length;
        for (var i = 0; i < this.item_doms_length; i++) {
            this.class_now_array.push(i + 1);
        }
        this.fn_domaddClass();
        this.fn_listenClick();
    };
    NgCarouselComponent.prototype.fn_next = function () {
        var _this = this;
        clearTimeout(this._setTimeout);
        this._setTimeout = setTimeout(function () {
            _this.class_before_array = Object.assign([], _this.class_now_array);
            var _shift = _this.class_now_array.pop();
            _this.class_now_array.unshift(_shift);
            _this.fn_domRemoveClass();
            _this.fn_domaddClass();
            _this.fn_removelisten();
            _this.fn_listenClick();
        }, 500);
    };
    NgCarouselComponent.prototype.fn_previous = function () {
        var _this = this;
        clearTimeout(this._setTimeout);
        this._setTimeout = setTimeout(function () {
            _this.class_before_array = Object.assign([], _this.class_now_array);
            var _shift = _this.class_now_array.shift();
            _this.class_now_array.push(_shift);
            _this.fn_domRemoveClass();
            _this.fn_domaddClass();
            _this.fn_removelisten();
            _this.fn_listenClick();
        }, 500);
    };
    NgCarouselComponent.prototype.fn_domaddClass = function () {
        for (var i = 0; i < this.item_doms_length; i++) {
            if (this.Images.length <= 4) {
                this.render.addClass(this.item_doms[i], 's' + this.class_now_array[i]);
            }
            if (this.Images.length > 4) {
                this.render.addClass(this.item_doms[i], 'p' + this.class_now_array[i]);
            }
        }
    };
    NgCarouselComponent.prototype.fn_domRemoveClass = function () {
        for (var i = 0; i < this.item_doms_length; i++) {
            if (this.Images.length <= 4) {
                this.render.removeClass(this.item_doms[i], 's' + this.class_before_array[i]);
            }
            if (this.Images.length > 4) {
                this.render.removeClass(this.item_doms[i], 'p' + this.class_before_array[i]);
            }
        }
    };
    NgCarouselComponent.prototype.fn_listenClick = function () {
        var _preview = null;
        var _next = null;
        if (this.Images.length <= 4) {
            _preview = this.element.nativeElement.querySelectorAll('.s1');
            _next = this.element.nativeElement.querySelectorAll('.s3');
        }
        if (this.Images.length > 4) {
            _preview = this.element.nativeElement.querySelectorAll('.p2');
            _next = this.element.nativeElement.querySelectorAll('.p4');
        }
        this._listenClick[0] = this.render.listen(_preview[0], 'click', this.fn_previous.bind(this));
        this._listenClick[1] = this.render.listen(_next[0], 'click', this.fn_next.bind(this));
    };
    NgCarouselComponent.prototype.fn_removelisten = function () {
        for (var _i = 0, _a = this._listenClick; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry) {
                entry();
            }
        }
    };
    NgCarouselComponent.prototype.fn_selectChange = function (index) {
        if (this.Images.length <= 4) {
            this.class_before_array = Object.assign([], this.class_now_array);
            if (index - 2 < 0) {
                var _concat = this.class_now_array.splice(0, -(index - 2));
                this.class_now_array = this.class_now_array.concat(_concat);
                console.log(this.class_now_array);
            }
            if (index - 2 > 0) {
                var _concat = this.class_now_array.splice(this.item_doms_length - (index - 2), index - 2);
                this.class_now_array = _concat.concat(this.class_now_array);
                console.log(this.class_now_array);
            }
            this.fn_domRemoveClass();
            this.fn_domaddClass();
            this.fn_removelisten();
            this.fn_listenClick();
        }
        else {
            this.class_before_array = Object.assign([], this.class_now_array);
            if (index - 3 < 0) {
                var _concat = this.class_now_array.splice(0, -(index - 3));
                this.class_now_array = this.class_now_array.concat(_concat);
                console.log(this.class_now_array);
            }
            if (index - 3 > 0) {
                var _concat = this.class_now_array.splice(this.item_doms_length - (index - 3), index - 3);
                this.class_now_array = _concat.concat(this.class_now_array);
                console.log(this.class_now_array);
            }
        }
        this.fn_domRemoveClass();
        this.fn_domaddClass();
        this.fn_removelisten();
        this.fn_listenClick();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgCarouselComponent.prototype, "Images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('calouselcontainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NgCarouselComponent.prototype, "_container", void 0);
    NgCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ng-carousel',
            template: __webpack_require__(/*! ./ng-carousel.component.html */ "./src/app/ng-carousel/ng-carousel.component.html"),
            styles: [__webpack_require__(/*! ./ng-carousel.component.scss */ "./src/app/ng-carousel/ng-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NgCarouselComponent);
    return NgCarouselComponent;
}());



/***/ }),

/***/ "./src/app/ng6-carousel.module.ts":
/*!****************************************!*\
  !*** ./src/app/ng6-carousel.module.ts ***!
  \****************************************/
/*! exports provided: Ng6CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng6CarouselModule", function() { return Ng6CarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_carousel_ng_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-carousel/ng-carousel.component */ "./src/app/ng-carousel/ng-carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Ng6CarouselModule = /** @class */ (function () {
    function Ng6CarouselModule() {
    }
    Ng6CarouselModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [_ng_carousel_ng_carousel_component__WEBPACK_IMPORTED_MODULE_2__["NgCarouselComponent"]],
            declarations: [
                _ng_carousel_ng_carousel_component__WEBPACK_IMPORTED_MODULE_2__["NgCarouselComponent"]
            ],
            providers: [],
        })
    ], Ng6CarouselModule);
    return Ng6CarouselModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_ng6_carousel_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/ng6-carousel.module */ "./src/app/ng6-carousel.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_ng6_carousel_module__WEBPACK_IMPORTED_MODULE_3__["Ng6CarouselModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\文件系列\例子\Repository\ng-carousel\ng-carousel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map