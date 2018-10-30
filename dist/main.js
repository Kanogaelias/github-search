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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n\tfont-family: 'Noto Serif', serif; \n}\n\np{\n\tfont-family: 'PT Serif', serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlDQUFpQztDQUNqQzs7QUFFRDtDQUNDLCtCQUErQjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmJywgc2VyaWY7IFxufVxuXG5we1xuXHRmb250LWZhbWlseTogJ1BUIFNlcmlmJywgc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-top: 10%;\">\n\t<div class=\"container-fluid\">\n\t\t<h2>About My App</h2>\n\t\t<hr>\n\t\t<p>An Angular App that lets us search for a github user. </p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Noto+Serif|PT+Serif');\n\nbody{\n    padding-top: 10%;\n}\n\n.bg-dark{\n    background-color: pink;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: rgb(60, 211, 14);\n    font-family: 'Noto Serif', serif; \n    text-align: center;\n}\n\nli {\n    float: left;\n    font-family: 'PT Serif', serif;\n}\n\n.active {\n    background-color: pink;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 30px;\n    text-decoration: none;\n}\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n    background-color: rgb(17, 17, 17);\n}\n\n.background{\n\tbackground-image: url('wolf.jpg'); \n\tbackground-repeat: no-repeat; \n/*\tbackground-attachment: fixed;\n*/\tbackground-size: cover;\n\tbackground-position: center; \n\tpadding: 0;\n\tmargin: 0; \n\theight:100vh;\n    margin-top: 5%;\n}\n\n.fa{\n\tfont-size:50px; \n\tcolor:blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0NBQ3pCOztBQUVELG9EQUFvRDs7QUFDcEQ7SUFDSSxrQ0FBa0M7Q0FDckM7O0FBRUQ7Q0FDQyxrQ0FBNEM7Q0FDNUMsNkJBQTZCO0FBQzlCO0VBQ0UsQ0FBQyx1QkFBdUI7Q0FDekIsNEJBQTRCO0NBQzVCLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsYUFBYTtJQUNWLGVBQWU7Q0FDbEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2VyaWZ8UFQrU2VyaWYnKTtcblxuYm9keXtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgMjExLCAxNCk7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmJywgc2VyaWY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2VyaWYnLCBzZXJpZjtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cblxubGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG5saSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XG59XG5cbi5iYWNrZ3JvdW5ke1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy93b2xmLmpwZycpOyBcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4vKlx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiovXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7IFxuXHRoZWlnaHQ6MTAwdmg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5mYXtcblx0Zm9udC1zaXplOjUwcHg7IFxuXHRjb2xvcjpibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar fixed-top navbar-expand-md navbar-light bg-dark\" >\n<!--     <i class=\"fa fa-github\"></i>\n -->  <a class=\"navbar-brand\" style=\"font-family: 'PT Serif', serif;size: 150px; color: #e2490c; font-weight: bolder\" href=\"\"><span class=\"fa fa-github\"></span> GitHub Search</a>\n  <ul class=\"nav nav-pills \">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink='/search'><span class=\"glyphicon glyphicon-search\"></span>Search</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink='/profile'><span class=\"glyphicon glyphicon-user\"></span>My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink='/about'><span class=\"glyphicon glyphicon-info-sign\"></span>About</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"background\">\n  <router-outlet>\n    \n  </router-outlet>\n</div>\n<!-- <app-profile>Loading the creator's profile...</app-profile>\n-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([
                    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] },
                    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
                    { path: "", redirectTo: "/search", pathMatch: "full" },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-dark {\n    background-color: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\" *ngIf=\"user\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<h3>{{user.name}}</h3>\n\t\t\t\t\t<img class=\"img-thumbnail github-avatar\" src=\"{{user.avatar_url}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"stats\">\n\t\t\t\t\t\t<span class=\"label label-default\">Public Repos: {{user.public_repos}}</span>\n\t\t\t\t\t\t<span class=\"label label-primary\">Followers: {{user.followers}}</span>\n\t\t\t\t\t\t<span class=\"label label-success\">Following: {{user.following}}</span>\n\t\t\t\t\t\t<span class=\"label label-info\">Public Gists: {{user.public_gists}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>Username: </strong>{{user.login}}</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>Location: </strong>{{user.location}}</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>Email: </strong>{{user.email}}</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>Blog: </strong>{{user.blog}}</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>Member Since: </strong>{{user.created_at}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t</div>\n\n\n\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_profileService) {
        var _this = this;
        this._profileService = _profileService;
        console.log('Github component Init... ');
        this._profileService.getUser().subscribe(function (user) {
            _this.user = user;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\n\tpadding-top: 20%;\n}\n\ninput{\n\tborder-color: rgb(175, 76, 142);\n\tborder-width: 20px;\n\topacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoe1xuXHRwYWRkaW5nLXRvcDogMjAlO1xufVxuXG5pbnB1dHtcblx0Ym9yZGVyLWNvbG9yOiByZ2IoMTc1LCA3NiwgMTQyKTtcblx0Ym9yZGVyLXdpZHRoOiAyMHB4O1xuXHRvcGFjaXR5OiAwLjk7XG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search\" >\n\t<div class=\"col-md-6 offset-md-3\">\n\n\t\t<form  #searchForm='ngForm'>\n\t\t\t<div class=\"form-group \">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Github Username\" name=\"username\" [(ngModel)]=\"username\" (keyup)=\"search()\">\n\t\t\t</div>\n\t\t</form>\n\n\t\t<div *ngIf = \"user\">\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<img class=\"img-thumbnail github-avatar\" src=\"{{user.avatar_url}}\">\n\t\t\t\n\t\t\t\t<span class=\"label label-default\">Public Repos: {{user.public_repos}}</span>\n\t\t\t\t<span class=\"label label-default\">Followers: {{user.followers}}</span>\n\t\t\t\t<span class=\"label label-default\">Following: {{user.following}}</span>\n\t\t\t\t<span class=\"label label-default\">Public Gists: {{user.public_gists}}</span>\n\t\t\t\t<span class=\"label label-default\">Public Repos: {{user.public_repos}}</span>\n\n<!-- \t\t\t\t<h1> {{user.name}}</h1>\n -->\t\t\t\t<!-- <h2>{{user.public_repos}} Public Repos</h2> -->\n\t\t</div>\n\t\t\t<div>\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\"><strong>Username: </strong>{{user.login}}</li>\n\t\t\t\t\t<li class=\"list-group-item\"><strong>Location: </strong>{{user.location}}</li>\n\t\t\t\t\t<li class=\"list-group-item\"><strong>Email: </strong>{{user.email}}</li>\n\t\t\t\t\t<li class=\"list-group-item\"><strong>Blog: </strong>{{user.blog}}</li>\n\t\t\t\t\t<li class=\"list-group-item\"><strong>Member Since: </strong>{{user.created_at}}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n<!-- \t<div class=\"col-md-6\">\n\t\t<form  #searchForm='ngForm'>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Github Repository\" name=\"reponame\" [(ngModel)]=\"reponame\" (keyup.enter)=\"searchReponame()\">\n\t\t\t</div>\n\t\t</form>\n\t\t<div *ngIf=\"reponame\">\n\t\t\t<div >\n\n\t\t\t\t<div class=\"row\" *ngFor= \"let name of reponame\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>{{name.full_name}}</li>\n\t\t\t\t\t</ul>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n --></div>\n<!--  -->"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(_profileService) {
        this._profileService = _profileService;
        console.log('Github component Init... ');
    }
    SearchComponent.prototype.search = function () {
        var _this = this;
        console.log(this.username);
        this._profileService.updateUsername(this.username);
        this._profileService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this._profileService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    SearchComponent.prototype.searchReponame = function () {
        var _this = this;
        console.log(this.reponame);
        this._profileService.updateReponame(this.reponame);
        this._profileService.searchRepos().subscribe(function (reponame) {
            return _this.reponame = reponame;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")],
            providers: [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(_http) {
        this._http = _http;
        this.reponame = '';
        this.username = 'kanogaelias';
        this.client_id = '6228816eae502586b23a';
        this.client_secret = '02d3234aeae94509c9b75c42d35813c59e53dc9e';
        this.token_key = 'fa2e3db99d8c17e5bba023a0c8986898a523e8dd';
        console.log('Github service Init...');
    }
    ProfileService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.token_key)
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getRepos = function () {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.token_key)
            .map(function (res) { return res; });
    };
    ProfileService.prototype.updateUsername = function (username) {
        this.username = username;
    };
    ProfileService.prototype.updateReponame = function (reponame) {
        this.reponame = reponame;
    };
    ProfileService.prototype.searchRepos = function () {
        return this._http.get('https://api.github.com/search/repositories?q=' + this.reponame)
            .map(function (res) { return res; });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "https://api.github.com/users/"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/elias/Github-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map