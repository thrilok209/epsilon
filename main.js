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

/***/ "./src/app/app-bootstrap/app-bootstrap.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-bootstrap/app-bootstrap.module.ts ***!
  \*******************************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router {\n  /*margin-bottom:  50em !important;*/\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet class=\"router\"></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'epsilon-site';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-bootstrap/app-bootstrap.module */ "./src/app/app-bootstrap/app-bootstrap.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./src/routes.ts");
/* harmony import */ var _pages_admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/admin-console/admin-console.component */ "./src/app/pages/admin-console/admin-console.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/reports-view/reports-view.component */ "./src/app/pages/reports-view/reports-view.component.ts");
/* harmony import */ var _pages_detail_report_view_detail_report_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/detail-report-view/detail-report-view.component */ "./src/app/pages/detail-report-view/detail-report-view.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _pages_admin_view_adding_summary_page_adding_summary_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin_view/adding-summary-page/adding-summary-page.component */ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.ts");
/* harmony import */ var _pages_under_construction_page_under_construction_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/under-construction-page/under-construction-page.component */ "./src/app/pages/under-construction-page/under-construction-page.component.ts");
/* harmony import */ var _pages_methodology_page_methodology_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/methodology-page/methodology-page.component */ "./src/app/pages/methodology-page/methodology-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _pages_detail_report_view_report_summary_report_summary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/detail-report-view/report-summary/report-summary.component */ "./src/app/pages/detail-report-view/report-summary/report-summary.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_10__["AdminConsoleComponent"],
                _pages_reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_12__["ReportsViewComponent"],
                _pages_detail_report_view_detail_report_view_component__WEBPACK_IMPORTED_MODULE_13__["DetailReportViewComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_16__["LandingPageComponent"],
                _pages_admin_view_adding_summary_page_adding_summary_page_component__WEBPACK_IMPORTED_MODULE_18__["AddingSummaryPageComponent"],
                _pages_under_construction_page_under_construction_page_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionPageComponent"],
                _pages_methodology_page_methodology_page_component__WEBPACK_IMPORTED_MODULE_20__["MethodologyPageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_21__["AboutPageComponent"],
                _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_22__["ContactPageComponent"],
                _pages_detail_report_view_report_summary_report_summary_component__WEBPACK_IMPORTED_MODULE_23__["ReportSummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_9__["routes"]),
                _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["AppBootstrapModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__["OwlModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n    background-color:var(--main-gray-color);\n    color: var(--main-txt-color);\n}\n\n.footer-icons { margin-left:-40px;}\n\n.footer-icons ul li {\n  display: inline-block;\n}\n\n.footer-icons ul li a {\n  border: 1px solid var(--main-txt-color);\n  color: var(--main-txt-color);\n  background-color: var(--main-bg-color);\n  display: block;\n  font-size: 16px;\n  height: 40px;\n  line-height: 38px;\n  margin-right: 5px;\n  text-align: center;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.footer-icons ul li a:hover{-webkit-transform: scale(1.2);transform: scale(1.2);}\n\n#footer-pages a{ color: inherit; text-decoration:none;}\n\n/*SUBSCRIPTION STYLES*/\n\n#subscribe-sect h3 {\n    font-size: 1.5rem;\n    font-weight: bolder;\n}\n\n#subscribe-sect .btn {\n    color:var(--main-bg-color);\n    background-color:var(--main-txt-color);\n    font-weight:bold;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n<div class=\"container-fluid\" id=\"footer\">\n\n\n                  <br>\n\n                <div class=\"row\">\n\n                        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n\n                            <div class=\"footer-logo\">\n                                    <h5>Pavi</h5>\n                            </div>\n\n                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>\n\n                                    <div class=\"footer-icons text-left\">\n                                          <ul>\n\n                                           <li>\n                                               <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                                          </li>\n                                           <li>\n                                               <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                                          </li>\n                                          <li>\n                                               <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                                         </li>\n\n                                          </ul>\n                                    </div>\n\n                        </div>\n\n\n                        <div class=\"col-lg-2 col-md-4 col-sm-6 col-xs-12 mx-auto my-2 text-left\" id=\"footer-pages\">\n                            <h5>PAGES</h5>\n                            <a href=\"#\">Home</a><br>\n                            <a href=\"#\">Market Insights</a><br>\n                            <a href=\"#\">Methodology</a><br>\n                            <a href=\"#\">Blog</a><br>\n                            <a href=\"#\">About</a><br>\n                            <a href=\"#\">Contact</a>\n                        </div>\n\n                        <div class=\"col-lg-2 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                            <h5>CONTACT</h5>\n                            <p> Connect with us through\n                            </p>\n                                <div class=\"footer-contacts\">\n                                    <p><span><i class=\"fa fa-phone\"></i></span> +91 9123456789</p>\n                                    <p><span><i class=\"fa fa-envelope\"></i></span> contact@example.com</p>\n                                  <p><span><i class=\"fa fa-map-marker\"></i></span> Hno.10, Doveton Road, Bolarum</p>\n\n                                </div>\n                        </div>\n\n                         <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2 left\" id=\"subscribe-sect\">\n                             <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>\n                             <p>Get weekly news updates on the startup ecosystem.</p>\n\n                              <form class=\"form-inline\">\n                                <div class=\"input-group mx-auto\">\n                                  <select class=\"form-control\" id=\"select\">\n                                    <option>All Industries</option>\n                                    <option>Financial Services</option>\n                                    <option>Healthcare</option>\n                                    <option>Aerospace and Defence</option>\n                                    <option>Automotive</option>\n                                    <option>Chemicals</option>\n                                    <option>ICT</option>\n                                    <option>Power and Mining</option>\n                                    <option>Oil and Gas</option>\n                                    <option>Industrial Manufacturing</option>\n                                    <option>Telecom</option>\n                                  </select>\n                                  <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Email Address\" required>\n                                  <div class=\"input-group-btn\">\n                                    <button type=\"button\" class=\"btn btn-default\">Sign Up</button>\n                                  </div>\n                                </div>\n                              </form>\n\n                        </div>\n\n\n                </div>\n\n\n                <div class=\"row\">\n                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"copyright text-center\">\n                                            <p> &copy; 2018 Copyright <strong>Pavi</strong>. All Rights Reserved</p>\n                                </div>\n                        </div>\n                </div>\n\n\n    </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header-icons {\n    background-color:var(--main-txt-color);\n    color:var(--main-bg-color);\n    font-size:1rem !important;\n    margin:0;\n    height:2rem;\n    line-height:2rem;\n}\n#header-icons a {\n   color:inherit;\n   margin-right:0.8rem;\n}\n#header-icons span {margin-right:2rem; }\n#header-icons a:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\n.navbar {\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    /*margin-bottom: 0.8rem;*/\n    margin-top:0rem;\n    background-color: var(--main-gray-color) ! important;\n    z-index: 9999;\n    border: 0;\n    font-size: 0.8rem;\n    line-height: 1.42857143;\n    letter-spacing: 0.025rem;\n    padding:0.8rem 1.5rem !important;\n}\n/* company*/\n#company-logo { font-size: 1.2rem; font-weight:bold;}\n/*navigation bar contents styles */\n.navbar li a, .navbar .navbar-brand {\n    color: var(--main-txt-color) !important;\n    margin:0px 2px 0px 2px;\n    font-weight: bolder;\n}\n/*navigation bar href contents styles on hover */\n.navbar-nav li a:hover, .navbar-nav li.active a {\n    background-color: var(--main-bg-color) !important ;\n    border-radius: 5%;\n    box-sizing: border-box;\n}\n.navbar-default .navbar-toggle {\n    border-color: transparent;\n    color: #000 !important;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n    <!--<div class=\"container-fluid\">\n\n          <div class=\"row\">\n\n              <div class=\"col text-right col-lg-12 col-md-12 col-sm-12\" id=\"header-icons\">\n\n                  <span><i class=\"fa fa-phone\"></i> +91 912456789</span>\n\n                  <span><i class=\"fa fa-envelope\"></i> contact@example.com</span>\n\n                  <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\n                  <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n\n                  <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n\n\n              </div>\n\n         </div>\n\n    </div>-->\n\n    <nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n\n        <a class=\"navbar-brand\" href=\"index.html\"><h1 id=\"company-logo\">Pavi</h1></a>\n              <button (click)=\"toggleCollapsed()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\">\n                  <span class=\"navbar-toggler-icon\"></span>\n              </button>\n\n              <div [class.show]=\"isCollapsed\" class=\"collapse navbar-collapse\" id=\"main-menu\">\n\n                  <ul class=\"navbar-nav ml-auto\">\n\n                          <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                              <a class=\"nav-link\" [routerLink]=\"['/Home']\">HOME</a>\n                          </li>\n\n                           <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"market_insights-home.html\" [routerLink]=\"['/uc/insights']\">MARKET INSIGHTS</a>\n                          </li>\n\n                           <!-- <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                              <a class=\"nav-link\" [routerLink]=\"['/uc/methodology']\" >METHODOLOGY</a>\n                          </li> -->\n\n                           <li  [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                              <a class=\"nav-link\"  [routerLink]=\"['/uc/blog']\" >BLOG</a>\n                          </li>\n\n                          <li  [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                              <a class=\"nav-link\" [routerLink]=\"['/uc/about']\" >ABOUT</a>\n                          </li>\n\n                           <li  [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                              <a class=\"nav-link\" [routerLink]=\"['/contact']\" >CONTACT</a>\n                          </li>\n\n                        <!--  <li class=\"nav-item\">\n                           <div class=\"header-icons text-left ml-auto\">\n                                    <ul>\n\n                                     <li>\n                                         <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                                    </li>\n                                     <li>\n                                         <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                                    </li>\n                                    <li>\n                                         <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                                   </li>\n\n                                    </ul>\n                              </div>\n                          </li>-->\n\n                   </ul>\n\n              </div>\n\n    </nav>\n\n\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isCollapsed = false;
    }
    HeaderComponent.prototype.toggleCollapsed = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
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

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/pages/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-console/admin-console.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin-console/admin-console.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin-console/admin-console.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin-console/admin-console.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form >\n  <div class=\"title\" [hidden]=\"titlePart\">\n  <div class=\"form-group\">\n    <label for=\"title\">Title Of the Report</label>\n    <input type=\"text\" #title class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Title\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"categroy\">Category</label>\n    <select class=\"form-control\"  (change)='selectChangeHandler($event)' id=\"categroy\">\n      <option (click)=\"selectCategory()\"  *ngFor=\"let options of category\" [value]=\"options\">{{options}}</option>\n    </select>\n  </div>\n  <!-- <div class=\"form-group\">\n    <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n    <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>5</option>\n      <option>4</option>\n    </select>\n  </div> -->\n  <button type=\"button\" (click)=\"addCoin(title.value)\" class=\"btn btn-primary\">Add Report</button>\n</div>\n\n<div class=\"imgUrl\" [hidden]=\"imgPart\">\n\n<div class=\"form-group\">\n<label for=\"exampleFormControlFile1\">Add Img</label>\n<input type=\"file\" class=\"form-control-file\" accept=\".png, .jpg, .jpeg\" (change)=\"uploadFile($event , 1)\" id=\"exampleFormControlFile1\">\n<div>{{ uploadPercent | async }}</div>\n<!-- <a [href]=\"downloadURL | async\">{{ downloadURL | async }}</a> -->\n</div>\n\n</div>\n\n<div class=\"pdfUrl\" [hidden]=\"pdfPart\">\n\n<div class=\"form-group\">\n<label for=\"exampleFormControlFile2\">Add PDF</label>\n<input type=\"file\" class=\"form-control-file\" accept=\".pdf\" (change)=\"uploadFile($event , 2)\" id=\"exampleFormControlFile2\">\n<!-- <div>{{ uploadPercent | async }}</div> -->\n<!-- <a [href]=\"downloadURL | async\">{{ downloadURL | async }}</a> -->\n</div>\n\n</div>\n\n<div class=\"last\" [hidden]=\"finalPart\">\n  <h1>DONE</h1>\n  <button type=\"button\" (click)=\"openPage(2)\" class=\"btn btn-primary\">Upload another file</button>\n  <button type=\"button\"  routerLink=\"/\" class=\"btn btn-primary\">HOME</button>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/admin-console/admin-console.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin-console/admin-console.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminConsoleComponent", function() { return AdminConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminConsoleComponent = /** @class */ (function () {
    function AdminConsoleComponent(storage, router, r, http) {
        this.storage = storage;
        this.router = router;
        this.r = r;
        this.http = http;
        this.category = ["a", "b", "c", "d", "e"];
        this.titlePart = false;
        this.imgPart = true;
        this.pdfPart = true;
        this.finalPart = true;
    }
    AdminConsoleComponent.prototype.ngOnInit = function () {
        // this.r.queryParams:this.submittedReportId
        this.router.navigate(['/create/summary/', "5bcf72497fd7661a0e2412ff"]);
    };
    AdminConsoleComponent.prototype.uploadFile = function (event, fileType) {
        var _this = this;
        var file = event.target.files[0];
        var filePath;
        if (fileType == 1) {
            filePath = this.submittedReportId + "/displayimg";
        }
        if (fileType == 2) {
            filePath = this.submittedReportId + "/buyPDF";
        }
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        var obj = {};
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            _this.downloadURL.subscribe(function (url) {
                var uri = 'http://localhost:4000/reports/update/' + _this.submittedReportId;
                console.log(url);
                if (fileType == 1) {
                    obj = {
                        imgUrl: url,
                        status: "uploaded img"
                    };
                }
                if (fileType == 2) {
                    obj = {
                        buyurl: url,
                        status: "uploaded pdf"
                    };
                }
                _this.http.post(uri, obj).subscribe(function (res) {
                    console.log(res);
                    if (fileType == 1) {
                        _this.imgPart = true;
                        _this.pdfPart = false;
                        _this.uploadPercent;
                    }
                    if (fileType == 2) {
                        _this.finalPart = false;
                        _this.pdfPart = true;
                    }
                });
            });
        }))
            .subscribe();
    };
    AdminConsoleComponent.prototype.selectCategory = function () {
        console.log("e");
    };
    AdminConsoleComponent.prototype.selectChangeHandler = function (event) {
        console.log(event.target.value); //option value will be sent as event
        this.optionSelected = event.target.value;
    };
    AdminConsoleComponent.prototype.addCoin = function (name) {
        var _this = this;
        var uri = 'http://localhost:4000/reports/add';
        var categoryArray = [];
        categoryArray.push(this.optionSelected);
        var obj = {
            title: name,
            category: categoryArray,
            status: "uploaded Title"
        };
        this.http.post(uri, obj)
            .subscribe(function (res) {
            _this.submittedReportId = res["_id"];
            console.log(res);
        });
        this.titlePart = true;
        this.imgPart = false;
    };
    AdminConsoleComponent.prototype.openPage = function (x) {
        if (x == 2) {
            location.reload();
        }
    };
    AdminConsoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-console',
            template: __webpack_require__(/*! ./admin-console.component.html */ "./src/app/pages/admin-console/admin-console.component.html"),
            styles: [__webpack_require__(/*! ./admin-console.component.css */ "./src/app/pages/admin-console/admin-console.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminConsoleComponent);
    return AdminConsoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form>\n  <div class=\"form-group\">\n    <label for=\"Textarea1\">Report summary</label>\n    <textarea #summary class=\"form-control\" id=\"Textarea1\" rows=\"25\"></textarea>\n    <a class=\"btn btn-default\" (click)=\"addContent(summary.value)\">Add summary</a>\n  </div>\n</form>\n -->\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <input  [(ngModel)]=\"title\" type=\"text\" class=\"form-control\" id=\"title\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"title of the summary\">\n  </div>\n  <p>{{title}}</p>\n\n      <div class=\"subheadingDiv pb-5\" *ngFor=\"let sideHeading of sideHeadingArray;let k =index\">\n\n      <div class=\"form-group\" >\n        <label for=\"subHeading\">Sub-Heading-{{k+1}}</label>\n        <input [(ngModel)]=\"sideHeadingArray[k].heading\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"subHeading\" placeholder=\"\">\n      </div>\n      <div class=\"form-group pl-5\" *ngFor=\"let point of sideHeading.points;let i =index\">\n        <label for=\"points{{i}}\">Point-{{i+1}}</label>\n        <input [(ngModel)]=\"sideHeadingArray[k].points[i]\" [ngModelOptions]=\"{standalone: true , updateOn: 'blur'}\"  type=\"text\" class=\"form-control\" id=\"points{{i}}\" placeholder=\"points\">\n      </div>\n      <button class=\"btn btn-default  pl-5 \" (click)=\"addContent('point' , k)\">Add Point to Sub-heading-{{k+1}}</button>\n    </div>\n\n    <button class=\"btn btn-default\" (click)=\"addContent('subheading' , null)\">Add Sub-Heading</button>\n    <button class=\"btn btn-default\" (click)=\"addContent('show' , null)\">Show all</button>\n    <button class=\"btn btn-default\" (click)=\"preview()\">preview</button>\n    <div [innerHTML]=\"htmlCode\">\n\n    </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddingSummaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingSummaryPageComponent", function() { return AddingSummaryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddingSummaryPageComponent = /** @class */ (function () {
    function AddingSummaryPageComponent(router, http) {
        this.router = router;
        this.http = http;
        this.sideHeadingArray = [{ 'heading': "cfv", points: [] }];
        this.title = "hy";
    }
    AddingSummaryPageComponent.prototype.ngOnInit = function () {
        this.ReportId = this.router.snapshot.paramMap.get('id');
        console.log(this.ReportId);
    };
    // addContent(text){
    //     const uri = 'http://localhost:4000/reports/update/'+ this.ReportId;
    //   let obj={
    //     reportSumUrl:text
    //   }
    //   this.http.post(uri, obj).subscribe(res => {
    //     console.log(res)
    // });
    // }
    AddingSummaryPageComponent.prototype.addContent = function (input, index) {
        console.log("before", this.sideHeadingArray);
        var x = this.sideHeadingArray;
        console.log(x);
        if (input == 'subheading') {
            this.sideHeadingArray.push({ 'heading': "", points: [""] });
            console.log("after", this.sideHeadingArray);
        }
        if (input == 'point') {
            this.sideHeadingArray[index].points.push("");
        }
        if (input == 'show') {
            console.log(this.sideHeadingArray);
        }
    };
    AddingSummaryPageComponent.prototype.preview = function () {
        var html = "<h1>" + this.title + "</h1>";
        for (var i = 0; i < this.sideHeadingArray.length; i++) {
            html = html + "<h2>" + this.sideHeadingArray[i].heading + " </h2>" + "<ul>";
            for (var j = 0; j < this.sideHeadingArray[i].points.length; j++) {
                html = html + "<li>" + this.sideHeadingArray[i].points[j] + "</li>";
            }
            html = html + "</ul>";
        }
        this.htmlCode = html;
        console.log(html);
    };
    AddingSummaryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adding-summary-page',
            template: __webpack_require__(/*! ./adding-summary-page.component.html */ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.html"),
            styles: [__webpack_require__(/*! ./adding-summary-page.component.css */ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddingSummaryPageComponent);
    return AddingSummaryPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: #FFFFFF;\n  width: 900px;\n  height: 650px;\n  margin: 5% auto;\n  position: relative;\n}\n.container .map {\n  width: 45%;\n  float: left;\n}\n.container .contact-form {\n  width: 53%;\n  margin-left: 2%;\n  float: left;\n}\n.container .contact-form .title {\n  font-size: 2.5em;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  color: var(--main-txt-color);\n  margin: 5% 8%;\n}\n.container .contact-form .subtitle {\n  font-size: 1.2em;\n  font-weight: 400;\n  color: var(--main-txt-color);\n  margin: 0 4% 5% 8%;\n}\n.container .form-group {\n  width: 330px;\n  padding: 3%;\n  margin: 2% 8%;\n\n}\n.container .contact-form input::-webkit-input-placeholder,\n.container .contact-form textarea::-webkit-input-placeholder {\n  /*color:var(--main-gray-color);*/\n}\n.container .contact-form input::-ms-input-placeholder,\n.container .contact-form textarea::-ms-input-placeholder {\n  /*color:var(--main-gray-color);*/\n}\n.container .contact-form input::placeholder,\n.container .contact-form textarea::placeholder {\n  /*color:var(--main-gray-color);*/\n}\n.container .contact-form .btn-send {\n  background-color: var(--main-txt-color);\n  color: var(--main-bg-color);\n  /*width: 180px;\n  height: 60px;*/\n  /*text-color: --main-bg-color;*/\n  font-weight: bold;\n  margin: 2% 8%;\n  /*border: none;*/\n}\n"

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"map\">\n    <iframe width=\"100%\" height=\"650px\" frameborder=\"0\" style=\"border:0\" allowfullscreensrc=\"https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed\"></iframe>\n\t</div>\n\t<div class=\"contact-form\">\n\t\t<h1 class=\"title\">Contact Us</h1>\n\t\t<h2 class=\"subtitle\">We are here assist you.</h2>\n\t\t<form action=\"\">\n      <div class=\"form-group\">\n         <label for=\"Name\"><strong>Name</strong></label>\n         <input type=\"text\" class=\"form-control\" id=\"Name\" placeholder=\"Your Name\">\n       </div>\n       <div class=\"form-group\">\n          <label for=\"e-mail\"><strong>Email</strong></label>\n          <input type=\"email\" class=\"form-control\" id=\"e-mail\" placeholder=\"Your E-mail Address\">\n        </div>\n        <div class=\"form-group\">\n           <label for=\"phone\"><strong>Phone</strong></label>\n           <input type=\"tel\" class=\"form-control\" id=\"phone\" placeholder=\"Your Phone Number\">\n         </div>\n         <div class=\"form-group\">\n             <label for=\"msg-box\"><strong>Message</strong></label>\n             <textarea class=\"form-control\" id=\"msg-box\" rows=\"3\"></textarea>\n         </div>\n\n\n\t\t\t<button class=\"btn btn-defult btn-send\">Get a Call Back</button>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
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

var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/pages/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/pages/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/detail-report-view/detail-report-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/detail-report-view/detail-report-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reportView report-card\">\n\n  <div class=\"media \">\n    <img class=\"align-self-center card-img cardImg mr-3\" src=\"{{reportData.imgUrl}}\" alt=\"Generic placeholder image\">\n    <div class=\"container reportPdfGrid\">\n    <div class=\"media-body\">\n       <p class=\"card-text\"><small class=\"text-muted\">Pubished: xyz</small></p>\n      <h2 class=\"mt-4 text-center \">{{reportData.title}}</h2>\n\n    </div>\n\n    <div class=\"row mt-1\">\n      <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-block btn-primary\" >Buy report</button>\n\n        </div>\n        <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-block btn-primary\" >Download Sample Report</button>\n\n        </div>\n    </div>\n\n  </div>\n</div>\n\n  <div class=\"tables pt-5 pb-5\">\n    <nav>\n      <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n        <a class=\"nav-item nav-link\" id=\"nav-home-tab\" (click)=\"summaryContentToDisplay('summary')\"  [routerLinkActive]=\"['active']\" [routerLink]=\"['./report-summary']\"  role=\"tab\" aria-controls=\"nav-home\" >Home</a>\n        <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" (click)=\"summaryContentToDisplay('table-content')\" [routerLinkActive]=\"['active']\" [routerLink]=\"['./table-content']\"  role=\"tab\" aria-controls=\"nav-profile\" >Profile</a>\n      </div>\n    </nav>\n    <div data-spy=\"scroll\" class=\"tab-content\" id=\"nav-tabContent\">\n      {{summaryContentData}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/detail-report-view/detail-report-view.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/detail-report-view/detail-report-view.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img {\n  height: 15em;\n  width: 15em; }\n\n.report-card {\n  margin: 4em 10em 0 10em; }\n"

/***/ }),

/***/ "./src/app/pages/detail-report-view/detail-report-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/detail-report-view/detail-report-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReportViewComponent", function() { return DetailReportViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailReportViewComponent = /** @class */ (function () {
    function DetailReportViewComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    DetailReportViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        var url = 'http://localhost:4000/reports/view/' + this.id;
        this.http.get(url).subscribe(function (res) {
            console.log(res);
            _this.reportData = res;
            _this.summaryContentToDisplay('summary');
        });
    };
    DetailReportViewComponent.prototype.summaryContentToDisplay = function (tab) {
        if (this.route.snapshot.firstChild.url[0].path == 'report-summary' || tab == 'summary') {
            this.summaryContentData = this.reportData.reportSumUrl;
        }
        if (this.route.snapshot.firstChild.url[0].path == 'table-content' || tab == 'table-content') {
            this.summaryContentData = "table of content";
        }
    };
    DetailReportViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-report-view',
            template: __webpack_require__(/*! ./detail-report-view.component.html */ "./src/app/pages/detail-report-view/detail-report-view.component.html"),
            styles: [__webpack_require__(/*! ./detail-report-view.component.scss */ "./src/app/pages/detail-report-view/detail-report-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DetailReportViewComponent);
    return DetailReportViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/detail-report-view/report-summary/report-summary.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/detail-report-view/report-summary/report-summary.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/detail-report-view/report-summary/report-summary.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/detail-report-view/report-summary/report-summary.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{reportData.reportSumUrl}}\n</p>\n"

/***/ }),

/***/ "./src/app/pages/detail-report-view/report-summary/report-summary.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/detail-report-view/report-summary/report-summary.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReportSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSummaryComponent", function() { return ReportSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportSummaryComponent = /** @class */ (function () {
    function ReportSummaryComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    ReportSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ReportId = this.router.snapshot.paramMap.get('id');
        console.log(this.ReportId);
        var url = 'http://localhost:4000/reports/view/' + this.ReportId;
        this.http.get(url).subscribe(function (res) {
            console.log(res);
            _this.reportData = res;
        });
    };
    ReportSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-summary',
            template: __webpack_require__(/*! ./report-summary.component.html */ "./src/app/pages/detail-report-view/report-summary/report-summary.component.html"),
            styles: [__webpack_require__(/*! ./report-summary.component.css */ "./src/app/pages/detail-report-view/report-summary/report-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportSummaryComponent);
    return ReportSummaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.home-inner {\n    margin:0;\n    padding:0;\n    max-width:100%;\n    height:100vh;\n    background-image: url(\"https://thrilok209.github.io/epsilon/assets/images/banner-home%20-%20Copy_1.jpg\");\n    /*background: 'url(../../../../assets/images/banner-home%20-%20Copy_1.jpg)';*/\n    background-size:auto;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    background-origin:border-box;\n    z-index:-1;\n    opacity:1;\n}\n\n/*caption*/\n\n.caption {\nmargin-top: -60vh !important;\ncolor: var(--main-txt-color);\npadding:20px;\nmax-width:100%;\nmargin:auto;\nopacity:0.99;\n}\n\n.caption h3 {\n    font-size: 1.5rem;\n    font-weight: bolder;\n}\n\n/*search-box styles*/\n\n#searchdiv {\n    position: relative;\n    margin-top: 0vh;\n}\n\n.input-group[input-type=text] {\n   width:1000px;\n}\n\n#search-button {\n    background-color: var(--main-txt-color);\n    color: var(--main-bg-color);\n}\n\n/*caption-under-searchbox*/\n\n.caption-under {\nmargin-top: 0vh !important;\ncolor: var(--main-txt-color);\npadding:20px;\nmax-width:100%;\nmargin:auto;\nopacity:0.99;\n}\n\n.caption-under h3 {\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n/*INDUSTRIES TRACKED STYLES*/\n\n#industries {\n    margin-top: 30vh;\n    margin-bottom: 5vh;\n    padding:3vh;\n    background-color: var(--main-bg-color);\n}\n\n#industries h3 {\n    font-size:1.5rem;\n    font-weight: bolder;\n    color: var(--main-txt-color);\n}\n\n#industries h5 {\n    font-size:  1.25rem;\n    font-weight: bold;\n    color: var(--main-txt-color);\n}\n\n/*PRODUCT SLIDER STYLES*/\n\n#product-slider {\n    background-color: var(--main-gray-color);\n    max-width: 100%;\n    padding:1rem 4rem;\n    box-sizing: border-box;\n}\n\n#product-slider h3 {\n    font-size: 1.5rem;\n    font-weight: bolder;\n    margin:0.5rem auto;\n    color:var(--main-txt-color);\n}\n\n/*Product Card Styles*/\n\n#product-slider .card .card-title {\n    line-height: 0;\n    font-size:1.4rem;\n    font-weight: bold;\n}\n\n.muted {font-size:1rem;font-weight:bold;}\n\n#product-slider .btn {\n    background-color: var(--main-txt-color);\n    color: var(--main-bg-color);\n    font-weight: bold;\n}\n\n#product-slider .card-body .btn {\n    background-color: var(--main-gray-color);\n    color: var(--main-txt-color);\n}\n\n/*WHY US SECTION STYLES*/\n\n#why-us {\n    margin: 5vh auto;\n    padding:3vh;\n    background-color: var(--main-bg-color);\n}\n\n#why-us h3 {\n    font-size:2rem;\n    font-weight: bolder;\n    color: var(--main-txt-color);\n}\n\n#why-us h5 {\n    font-size:  1.25rem;\n    font-weight: bold;\n    color: var(--main-txt-color);\n}\n\n/*BLOG POST SLIDER STYLES*/\n\n#blog-post-slider {\n    /*background-color:var(--main-txt-color);*/\n    margin-bottom: 3vh;\n    background-color: var(--main-gray-color);\n    max-width: 100%;\n    padding:1rem 4rem;\n    box-sizing: border-box;\n}\n\n#blog-post-slider h3 {\n    font-size: 1.5rem;\n    font-weight: bolder;\n    margin:0.5rem auto;\n    color:var(--main-txt-color);\n}\n\n/*Product Card Styles*/\n\n#blog-post-slider .card .card-title {\n    line-height: 1;\n    font-size:1.4rem;\n    font-weight: bold;\n}\n\n#blog-post-slider .btn {\n    background-color: var(--main-txt-color);\n    color: var(--main-bg-color);\n    font-weight: bold;\n}\n\n#blog-post-slider .card-body .btn {\n    background-color: var(--main-gray-color);\n    color: var(--main-txt-color);\n}\n\n/*FREE CONSULTATION STYLES*/\n\n#consult-sect {\n    color:var(--main-txt-color);\n    margin: 5vh auto;\n}\n\n#consult-sect h3 {font-size:1.5rem; font-weight:bolder;}\n\n#consult-sect p {font-size:1.2rem;}\n\n/*FREE CONSULTATION*/\n\n#msg-box {\n    height:8rem;\n}\n\n/*Place-holder*/\n\n#consult-sect .btn{\n    font-weight: bold;\n    color:var(--main-bg-color);\n    background-color:var(--main-txt-color);\n}\n"

/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--LANDING PAGE AREA-->\n\n            <!--Landing page image-->\n                <div  class=\"home-inner\">\n\n                    <!--background-image-->\n\n                </div>\n\n\n        <!--Landing page caption-->\n\n            <div class=\"caption center-block text-center\">\n                    <h3>MAKE INFORMED DECISIONS.</h3>\n\n            </div>\n\n\n\n        <!--Search box-->\n            <div class=\"row justify-content-md-center px-5\" id=\"searchdiv\">\n\n                <div class=\"col-lg-4 col-md-4 col-sm6\">\n\n                    <div class=\"input-group\" id=\"search-bar\">\n\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search Reports...\">\n                            <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" id=\"search-button\" type=\"submit\"> GO </button>\n                            </span>\n                   </div>\n\n                 </div>\n            </div>\n\n            <!--Caption under search-box-->\n             <div class=\"caption-under center-block text-center\">\n             <h3>Build your Portfolio Stratergy on the Framework of our Research.</h3>\n                    <h3>Market Research for VCs and PEs</h3>\n            </div>\n\n\n  <!--INDUSTRIES SECTION-->\n      <div class=\"container-fluid text-center\" id=\"industries\">\n\n              <h3>INDUSTRIES TRACKED</h3>\n\n              <br>\n\n            <div class=\"row\">\n\n                    <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/finance.png\" alt=\"\">\n                        <h5>Financial Services</h5>\n                    </div>\n\n                    <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/healthcare.png\" alt=\"\">\n                        <h5>Healthcare</h5>\n                    </div>\n\n                    <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/paper-plane.png\" alt=\"\">\n                        <h5>Aerospace and Defence</h5>\n                    </div>\n\n                    <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/steering-wheel.png\" alt=\"\">\n                        <h5>Automotive</h5>\n\n                    </div>\n\n                    <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/chemicals.png\" alt=\"\">\n                        <h5>Chemicals</h5>\n                    </div>\n\n\n            </div>\n\n\n            <div class=\"row\">\n\n                    <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/ict.png\" alt=\"\">\n                        <h5>Information and Communications Technology</h5>\n\n                    </div>\n\n                     <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/power&mining.png\" alt=\"\">\n                        <h5>Power and Mining</h5>\n\n                    </div>\n\n                     <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/oil&gas.png\" alt=\"\">\n                        <h5>Oil and Gas</h5>\n\n                    </div>\n\n                     <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/industrial_manufacturing.png\" alt=\"\">\n                        <h5>Industrial Manufacturing</h5>\n\n                    </div>\n\n                     <div class=\"col-lg-2 col-md-2 col-sm12 - col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/telecom.png\" alt=\"\">\n                        <h5>Telecom</h5>\n\n                    </div>\n\n            </div>\n\n\n      </div><!--End of Industries tracked section-->\n\n\n\n<!-- Reports Thumbnail Carousel ---------->\n<div class=\"container-fluid center-block text-center\" hidden=true id=\"product-slider\">\n  <h3>FEATURED SECTOR REPORTS</h3>\n  <br>\n\n\n  <div class=\"item active center-block text-center mx-auto\"><!--item2 start-->\n\n\n\n\n\n    <owl-carousel\n    [options]=\"reportCarousel\"\n    [items]=\"images\"\n    [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n      <div class=\"item\" *ngFor=\"let image of images;let i = index\">\n        <div class=\"card\"><!--card start-->\n\n          <img class=\"card-img-top img-responsive\" src=\"reports/images/ai_in_fintech.jpg\" alt=\"Card image cap AI in Fintech\">\n\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{image.title}}</h5>\n            <p class=\"card-text\"><small class=\"muted\">{{image.text}}</small></p>\n            <a href=\"#\" class=\"btn btn-default\">{{i}}</a>\n\n          </div>\n\n        </div><!--card end-->\n      </div>\n    </owl-carousel>\n  </div>\n\n  <br>\n\n  <a href=\"#\" class=\"btn btn-default\">Browse All Insights</a>\n\n</div>\n\n<!--Why us-->\n<div class=\"container-fluid text-center\" id=\"why-us\">\n\n              <h3>Why us?</h3>\n\n              <br>\n\n            <div class=\"row\">\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/1.png\" alt=\"\">\n                        <h5>Post Purchase Support</h5>\n                        <p>6 months post purchase analyst support</p>\n\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/2.png\" alt=\"\">\n                        <h5>Data in Excel</h5>\n                        <p>Data gathered and used in Analysis provided in Excelsheet</p>\n\n                    </div>\n\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/3.png\" alt=\"\">\n                        <h5>Exponential Mindset</h5>\n                        <p>will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.</p>\n\n                    </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                        <img class=\"img-responsive\" src=\"{{iconPath}}/4.png\" alt=\"\">\n                        <h5>Holistic Acceleration</h5>\n                        <p>will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.</p>\n\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                         <img class=\"img-responsive\" src=\"{{iconPath}}/5.png\" alt=\"\">\n                        <h5>Creativity</h5>\n                        <p>will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.</p>\n\n                    </div>\n\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mx-auto my-2\">\n                         <img class=\"img-responsive\" src=\"{{iconPath}}/6.png\" alt=\"\">\n                        <h5>Communication</h5>\n                        <p>will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.</p>\n\n                    </div>\n\n            </div>\n\n</div>\n\n\n<!--Featured Blog Posts-->\n\n  <div class=\"container-fluid\" id=\"blog-post-slider\" hidden=true>\n    <h3 class=\"text-center\">LATEST NEWS FROM OUR BLOG</h3>\n<br>\n        <div class=\"owl-carousel owl-theme\" id=\"blog-jquery-handle\">\n\n            <div class=\"item active mx-auto\"><!--item1 start-->\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Special title treatment</h5>\n                        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                        <a href=\"#\" class=\"btn btn-default\">Read more</a>\n                      </div>\n                    </div>\n                </div>\n\n            </div><!--item1 end-->\n\n            <div class=\"item mx-auto\"><!--item2 start-->\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Special title treatment</h5>\n                        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                        <a href=\"#\" class=\"btn btn-default\">Read more</a>\n                      </div>\n                    </div>\n                </div>\n\n            </div><!--item2 end-->\n\n            <div class=\"item mx-auto\"><!--item3 start-->\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Special title treatment</h5>\n                        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                        <a href=\"#\" class=\"btn btn-default\">Read more</a>\n                      </div>\n                    </div>\n                </div>\n\n            </div><!--item3 end-->\n\n            <div class=\"item mx-auto\"><!--item4 start-->\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Special title treatment</h5>\n                        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                        <a href=\"#\" class=\"btn btn-default\">Read more</a>\n                      </div>\n                    </div>\n                </div>\n\n            </div><!--item4 end-->\n\n\n        </div>\n\n       <br>\n\n      <div class=\"text-center\"><a href=\"#\" class=\"btn btn-default center\">Explore Blog</a></div>\n\n</div>\n\n\n<!--CONSULTATION SECTION-->\n  <div class=\"container-fluid center-block text-center\" id=\"consult-sect\">\n\n        <h3>LEAVE A MESSAGE</h3>\n        <p>Let us know about your requirement.</p>\n        <p>Leave a message and we'll get back to you as soon as possible.</p>\n        <form>\n        <div class=\"row\">\n\n                <div class=\"col col-lg-5 col-md-5 col-sm-10 mx-auto text-left\">\n\n                             <div class=\"form-group\">\n                                <label for=\"Name1\"><strong>Name</strong></label>\n                                <input type=\"text\" class=\"form-control\" id=\"Name1\" placeholder=\"\">\n                              </div>\n\n\n                              <div class=\"form-group\">\n                                <label for=\"Email1\"><strong>Email address</strong></label>\n                                <input type=\"email\" class=\"form-control\" id=\"Email1\" aria-describedby=\"emailHelp\" placeholder=\"\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                              </div>\n\n                 </div>\n\n\n                 <div class=\"col col-lg-5 col-md-5 col-sm-10 mx-auto text-left\">\n\n                            <div class=\"form-group\">\n                                <label for=\"msg-box\"><strong>Message</strong></label>\n                                <textarea class=\"form-control\" id=\"msg-box\" rows=\"3\"></textarea>\n                            </div>\n\n                 </div>\n\n\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary\">SEND MESSAGE</button>\n      </form>\n\n      <!--  </div>\n        <form class=\"form-inline\">\n            <div class=\"input-group mx-auto\">\n              <select class=\"form-control\" id=\"select\">\n                <option>All Industries</option>\n                <option>Financial Services</option>\n                <option>Healthcare</option>\n                <option>Aerospace and Defence</option>\n                <option>Automotive</option>\n                <option>Chemicals</option>\n                <option>ICT</option>\n                <option>Power and Mining</option>\n                <option>Oil and Gas</option>\n                <option>Industrial Manufacturing</option>\n                <option>Telecom</option>\n              </select>\n              <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Email Address\" required>\n              <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\">Subscribe</button>\n              </div>\n            </div>\n          </form>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.iconPath = "../../../../assets/images/icons";
        this.reportCarousel = {
            loop: true,
            margin: 10,
            dots: false,
            navigation: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            pagination: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                //breakpoint from 1000 up
                1000: {
                    items: 5
                }
            }
        };
        this.images = [{ "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
            { "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
            { "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
            { "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
            { "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
            { "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
            { "title": "AI in Fintech", "text": "Global Market Size, Share, Trends, Forecasts and Startup Profiles" },
        ];
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/pages/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/pages/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/methodology-page/methodology-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/methodology-page/methodology-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/methodology-page/methodology-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/methodology-page/methodology-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  methodology-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/methodology-page/methodology-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/methodology-page/methodology-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: MethodologyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodologyPageComponent", function() { return MethodologyPageComponent; });
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

var MethodologyPageComponent = /** @class */ (function () {
    function MethodologyPageComponent() {
    }
    MethodologyPageComponent.prototype.ngOnInit = function () {
    };
    MethodologyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-methodology-page',
            template: __webpack_require__(/*! ./methodology-page.component.html */ "./src/app/pages/methodology-page/methodology-page.component.html"),
            styles: [__webpack_require__(/*! ./methodology-page.component.css */ "./src/app/pages/methodology-page/methodology-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodologyPageComponent);
    return MethodologyPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/reports-view/reports-view.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/reports-view/reports-view.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*C - Market Insights Home Page Styles(mi-Market Insights) */\n\n/*mi-background-image*/\n\n.mi-home-inner {\n    margin:0;\n    padding:0;\n    max-width:100%;\n    height:40vh;\n    background-color:var(--main-txt-color);\n    z-index:-1;\n    opacity:1;\n}\n\n/*mi-caption*/\n\n.mi-home-caption {\nmargin-top: -28vh !important;\ncolor: var(--main-bg-color);\npadding:20px;\nmax-width:100%;\nmargin:auto;\nopacity:0.99;\n}\n\n/*mi-searchbox*/\n\n#mi-search-button {\n    background-color: var(--main-gray-color);\n    color: var(--main-txt-color);\n    font-weight: bold;\n    border: solid 1px #000;\n}\n\n/*mi-industries*/\n\n#mi-home-industries {\n    margin-top: 10vh;\n    margin-bottom: 5vh;\n    padding:3vh;\n    background-color: var(--main-bg-color);\n}\n\n#mi-home-industries h5 {\n    font-size:  0.9rem;\n    font-weight: bold;\n    color: var(--main-txt-color);\n}\n\n/*MI HOME SIDE BAR*/\n\n#industries-sidebar\n{\n    padding:1.5rem;\n    color:var(--main-txt-color);\n    background-color:var(--main-gray-color);\n    margin-bottom:5vh;\n\n}\n\n#industries-sidebar h5 { font-size:1.25rem; font-weight:bold;}\n\n.sector .list-group-item {\n    color:inherit;\n    background-color: var(--main-bg-color);\n    font-weight:bold;\n     margin-left:-0.9rem !important;\n    width:110%;\n}\n\n.sector .sub-menu .list-group-item {\n    font-weight:normal;\n}\n\n.sector a .fa {\n    margin-left:1rem;\n    font-size:0.7rem;\n    line-height: 0.7rem;\n}\n\n/*REPORTS GRID*/\n\n#reports-grid-title {\n    font-weight: bold;\n    font-size:1.5rem;\n    margin-bottom:5vh;\n\n}\n\n.report-col{\n    padding:10px;\n    background-color:var(--main-gray-color);\n}\n\n.report-col .card .card-title {\n    line-height: 0;\n    font-size:1.25rem;\n    font-weight:bold;\n}\n\n.muted {font-size:0.8rem;font-weight:;}\n\n.report-col .card-body .btn {\n    background-color: var(--main-txt-color);\n    color: var(--main-bg-color);\n}\n\n/*QUERY-BOX*/\n\n#add-border {\n    padding:1rem;\n    background-color: var(--main-gray-color);\n    color: var(--main-txt-color);\n    border-radius: 1%;\n\n}\n\n#add-border h5 { font-size:1rem; font-weight:bold; }\n\n#querybox .btn {\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n}\n"

/***/ }),

/***/ "./src/app/pages/reports-view/reports-view.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/reports-view/reports-view.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"reportslisting\">\n<div class=\"row\">\n<div class=\"col-md-4 mt-4\" *ngFor=\"let report of reports\">\n\n\n<a href=\"viewreport/{{report._id}}\" class=\"card btn btn-outline-info\" style=\"width: 18rem;\">\n<img class=\"card-img-top cardImg\" src=\"{{report.imgUrl}}\" alt=\"Card image cap\">\n<div class=\"card-body\">\n<h5 class=\"card-title\">{{report.title}}</h5>\n</div>\n</a>\n\n</div>\n</div>\n</div> -->\n\n<div id=\"marketInsights\">\n\n  <!--Landing page image-->\n  <div class=\"mi-home-inner\">\n\n    <!--background-image-->\n\n  </div>\n\n\n  <!--MI HOME Landing page caption-->\n\n  <div class=\"mi-home-caption center-block text-center\">\n    <h3>MARKET INSIGHTS</h3>\n\n  </div>\n\n\n\n  <!--Search box-->\n  <div class=\"row justify-content-md-center px-5\" id=\"searchdiv\">\n\n    <div class=\"col-lg-4 col-md-4 col-sm6\">\n\n      <div class=\"input-group\" id=\"search-bar\">\n\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search Reports...\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" id=\"mi-search-button\" type=\"submit\"> GO </button>\n        </span>\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!--BROWSE INDUSTRIES SECTION-->\n  <div class=\"container-fluid text-center\" id=\"mi-home-industries\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6  col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/finance.png\" alt=\"\">\n        <h5>Financial Services</h5>\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6  col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/healthcare.png\" alt=\"\">\n        <h5>Healthcare</h5>\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6  col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/paper-plane.png\" alt=\"\">\n        <h5>Aerospace and Defence</h5>\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6  col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/steering-wheel.png\" alt=\"\">\n        <h5>Automotive</h5>\n\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6 col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/chemicals.png\" alt=\"\">\n        <h5>Chemicals</h5>\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6 col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/ict.png\" alt=\"\">\n        <h5>Information and Communications Technology</h5>\n\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6 col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/power&mining.png\" alt=\"\">\n        <h5>Power and Mining</h5>\n\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6 col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/oil&gas.png\" alt=\"\">\n        <h5>Oil and Gas</h5>\n\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6 col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/industrial_manufacturing.png\" alt=\"\">\n        <h5>Industrial Manufacturing</h5>\n\n      </div>\n\n      <div class=\"col-lg-1 col-md-2 col-sm-6 col-xs-6 mx-auto my-2\">\n        <img class=\"img-responsive\" src=\"{{smalIconPath}}/telecom.png\" alt=\"\">\n        <h5>Telecom</h5>\n\n      </div>\n    </div>\n  </div><!--End of Browse Industries section-->\n\n\n\n\n  <!--INDUSTRIES SIDE-BAR & REPORTS GRID-->\n\n  <div class=\"container-fluid text-center d-none d-lg-block\">\n\n    <h4 id=\"reports-grid-title\">BROWSE REPORTS</h4>\n\n    <div class=\"row\">\n\n      <!--INDUSTRIES SIDE-BAR-->\n      <div class=\"col col-lg-3 text-left\" id=\"industries-sidebar\">\n\n        <h5>Explore Categories</h5>\n\n\n        <!--Start of Sector accordion 1 -->\n        <div class=\"sector list-group\" *ngFor=\"let category of reportsCategories;let i = index\" id=\"sector-{{i}}-accordion\">\n\n          <a class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#collapse-{{i}}\">\n            {{category.category}}<span class=\"fa fa-chevron-right\"></span>\n          </a>\n\n          <div class=\"sub-menu collapse hide\" id=\"collapse-{{i}}\" data-parent=\"#sector-0-accordion\">\n\n            <a href=\"#\" *ngFor=\"let subCategory of category.sub\" class=\"list-group-item\">{{subCategory}}</a>\n\n\n          </div>\n\n        </div><!--End of Sector accordion 1-->\n\n\n\n        <!--Start of Sector accordion 2 -->\n\n      </div>  <!--End of sidebar col-->\n\n\n\n      <!--COL CONTAINER OF REPORTS GRID-->\n      <div class=\"col lg-9\" id=\"reports-conatainer-col\">\n\n\n        <!--FIRST ROW OF REPORTS GRID-->\n        <div class=\"row\">\n\n\n\n\n\n          <!--items start-->\n          <div class=\"report-col col-lg-4\" *ngFor=\"let report of reports\">\n\n\n            <div class=\"item active center-block text-center mx-auto\"><!--item1 start-->\n\n              <div class=\"card\"><!--card start-->\n\n                <img class=\"card-img-top img-responsive\" src=\"{{report.imgUrl}}\" alt=\"Card image cap AI in Fintech\">\n\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">{{report.title}}</h5>\n                  <p class=\"card-text\"><small class=\"muted\">Global Market Size, Share, Trends, Forecasts and Startup Profiles.</small></p>\n                  <a href=\"viewreport/{{report._id}}\" class=\"btn btn-default\">View Report</a>\n\n                </div>\n\n              </div><!--card end-->\n\n            </div>\n\n          </div> <!--items end-->\n\n          <!-- <accordion>\n  <accordion-group heading=\"Static Header, initially expanded\">\n    <a href=\"viewreport/{{report._id}}\" class=\"btn btn-default\">View Report</a>\n      <a href=\"viewreport/{{report._id}}\" class=\"btn btn-default\">View Report</a>\n        <a href=\"viewreport/{{report._id}}\" class=\"btn btn-default\">View Report</a>\n  </accordion-group>\n  <accordion-group heading=\"Another group\">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading=\"Another group\">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading=\"Another group\">\n    <p>Some content</p>\n  </accordion-group>\n</accordion> -->\n        </div><!--First Row of Reports Grid End-->\n\n\n\n\n        <!--Second ROW OF REPORTS GRID-->\n\n\n      </div><!--COL CONTAINER OF REPORTS GRID-->\n\n\n      <!--QUERY-BOX START-->\n      <div class=\"col col-lg-2\" id=\"querybox\">\n\n\n        <div id=\"add-border\">\n          <h5>Have a query? </h5>\n\n          <div class=\"form-group\">\n\n            <label for=\"Email1\"><strong>Email address</strong></label>\n            <input type=\"email\" class=\"form-control\" id=\"Email1\" aria-describedby=\"emailHelp\" placeholder=\"\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\n            <label for=\"msg-box\"><strong>Message</strong></label>\n            <textarea class=\"form-control\" id=\"msg-box\" rows=\"3\"></textarea>\n\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">SEND MESSAGE</button>\n\n        </div>\n      </div><!--QUERY-BOX END-->\n\n    </div><!--START ROW END-->\n\n\n  </div><!--End of Industries Sidebar CONTAINER-->\n</div>\n"

/***/ }),

/***/ "./src/app/pages/reports-view/reports-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/reports-view/reports-view.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsViewComponent", function() { return ReportsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsViewComponent = /** @class */ (function () {
    function ReportsViewComponent(http) {
        this.http = http;
        this.smalIconPath = "../../../../assets/images/icons/icons-small";
        this.reportsCategories = [{ "category": "Financial Services", "sub": [1, 2, 3, 4] }, { "category": "Healthcare", sub: [1, 2, 3, 4] }];
    }
    ReportsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = 'http://localhost:4000/reports';
        this.http.get(url).subscribe(function (res) {
            _this.reports = res;
            console.log(_this.reports[0].title);
        });
    };
    ReportsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-view',
            template: __webpack_require__(/*! ./reports-view.component.html */ "./src/app/pages/reports-view/reports-view.component.html"),
            styles: [__webpack_require__(/*! ./reports-view.component.css */ "./src/app/pages/reports-view/reports-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportsViewComponent);
    return ReportsViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/under-construction-page/under-construction-page.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/under-construction-page/under-construction-page.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------------------------------------\nProject:  ComingSoon\nVersion:\nLast change:\nAssigned to:  Bach Le\nPrimary use:\n-------------------------------------------------------------------*/\n\n.p-l-75 {padding-left: 75px;}\n\n.p-r-75 {padding-right: 75px;}\n\n.p-t-45 {padding-top: 10em;}\n\n.p-b-45 {padding-bottom: 45px;}\n\n.p-t-50 {padding-top: 50px;}\n\n.p-b-60 {padding-bottom: 60px;}\n\n.p-b-36 {padding-bottom: 36px;}\n\n/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n\n@font-face {\n  font-family: Poppins-Regular;\n  src: url('https://thrilok209.github.io/epsilon/assets/fonts/Poppins/Poppins-Regular.ttf');\n}\n\n@font-face {\n  font-family: Poppins-Bold;\n  src: url('https://thrilok209.github.io/epsilon/assets/fonts/Poppins/Poppins-Bold.ttf');\n}\n\n@font-face {\n  font-family: Lato-Regular;\n  src: url('https://thrilok209.github.io/epsilon/assets/fonts/Lato/Lato-Regular.ttf');\n}\n\n@font-face {\n  font-family: Lato-Bold;\n  src: url('https://thrilok209.github.io/epsilon/assets/fonts/Lato/Lato-Bold.ttf');\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ RS PLUGIN ]*/\n\n/*---------------------------------------------*/\n\n.container {max-width: 1200px;}\n\n/*//////////////////////////////////////////////////////////////////\n[ Form ]*/\n\n.contact100-form {\n  width: 100%;\n}\n\n/*==================================================================\n    TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT\n==================================================================*/\n\n/*==================================================================\n[ Color ]*/\n\n.cl0 {color: #fff;}\n\n/*//////////////////////////////////////////////////////////////////\n[ S-Text 0 - 15 ]*/\n\n.s1-txt1 {}\n\n/*---------------------------------------------*/\n\n.s2-txt1 {\n  font-family: Lato-Bold;\n  font-size: 15px;\n  line-height: 1.5;\n  color: #555555;\n}\n\n.s2-txt2 {\n  font-family: Lato-Bold;\n  font-size: 15px;\n  line-height: 1.5;\n  color: #fff;\n}\n\n.s2-txt3 {\n  font-family: Lato-Regular;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #999999;\n}\n\n.s2-txt4 {\n  font-family: Lato-Regular;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ M-Text 16 - 25 ]*/\n\n.m1-txt1 {\n  font-family: Poppins-Regular;\n  font-size: 24px;\n  line-height: 1.5;\n  color: #555555;\n}\n\n.m1-txt2 {\n  font-family: Poppins-Bold;\n  font-size: 24px;\n  line-height: 1.5;\n  color: #555555;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ L-Text >= 26 ]*/\n\n.l1-txt1 {}\n\n/*---------------------------------------------*/\n\n.l2-txt1 {\n  font-family: Lato-Bold;\n  font-size: 40px;\n  line-height: 1;\n  color: #555555;\n}\n\n/*==================================================================\n   SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE\n==================================================================*/\n\n/*//////////////////////////////////////////////////////////////////\n[ Size ]*/\n\n.size1 {\n  width: 100%;\n  min-height: 100vh;\n}\n\n.size2 {\n  height: 100%;\n  width: 71%;\n}\n\n.size3 {\n  max-width: 650px;\n  min-height: 100vh;\n}\n\n.size4 {\n  width: 100%;\n  height: 50px;\n}\n\n.size5 {\n  width: 36px;\n  height: 36px;\n}\n\n.size6 {\n  width: 155px;\n  height: 155px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Width ]*/\n\n.wsize1 {\n  max-width: 650px;\n}\n\n.wsize2 {\n  max-width: 380px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Height ]*/\n\n.hsize1 {\n  min-height: 100vh;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Background ]*/\n\n.bg0 {background-color: #fff;}\n\n.bg1 {background-color: #57b846;}\n\n.bg3 {background-color: #3b5998;}\n\n.bg4 {background-color: #1da1f2;}\n\n.bg5 {background-color: #cd201f;}\n\n.bg-img1 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Border ]*/\n\n/*---------------------------------------------*/\n\n.bo1 {border: 1px solid #ebebeb;}\n\n/*---------------------------------------------*/\n\n.bor1 {\n  border-radius: 5px;\n}\n\n.bor2 {\n  border: 1px solid rgba(255,255,255,0.3);\n  border-radius: 50%;\n}\n\n/*==================================================================\n   WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE\n==================================================================*/\n\n.where1-parent {\n  position: relative;\n  z-index: 1;\n}\n\n.where1 {\n  position: absolute;\n  /*z-index: -1;*/\n  top: 0;\n  right: 0;\n}\n\n/*---------------------------------------------*/\n\n.where2 {\n  padding: 50px 50px 150px 320px;\n}\n\n/*==================================================================\n HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW\n==================================================================*/\n\n.how1 {\n  border-radius: 50%;\n  font-size: 22px;\n  color: #fff;\n}\n\n.how1:hover {\n  background-color: #555555;\n  color: #fff;\n}\n\n/*---------------------------------------------*/\n\n.parallax100 {\n  background-attachment: fixed;\n  background-position: center 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n@media (max-width: 992px) {\n  .parallax100 {\n    background-attachment: inherit;\n  }\n}\n\n/*---------------------------------------------*/\n\n.placeholder0::-webkit-input-placeholder { color: #999999;}\n\n.placeholder0:-moz-placeholder { color: #999999;}\n\n.placeholder0::-moz-placeholder { color: #999999;}\n\n.placeholder0:-ms-input-placeholder { color: #999999;}\n\n/*---------------------------------------------*/\n\n.overlay1 {\n  overflow: hidden;\n}\n\n.overlay1::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -3;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #042447;\n}\n\n.overlay1::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -2;\n  top: 0;\n  right: 100%;\n  width: 10000px;\n  height: 100%;\n  background-color: #fff;\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n  -webkit-transform: skewX(156deg);\n  transform: skewX(156deg);\n}\n\n/*---------------------------------------------*/\n\n.wrap-pic1 {\n  width: 50%;\n}\n\n.wrap-pic1 img {\n  max-width: 100%;\n}\n\n.skew-trail{\n  background-color: red !important;\n  z-index: 99999;\n\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Pseudo ]*/\n\n/*------------------------------------------------------------------\n[ Focus ]*/\n\n.focus-in0:focus::-webkit-input-placeholder { color:transparent; }\n\n.focus-in0:focus:-moz-placeholder { color:transparent; }\n\n.focus-in0:focus::-moz-placeholder { color:transparent; }\n\n.focus-in0:focus:-ms-input-placeholder { color:transparent; }\n\n/*------------------------------------------------------------------\n[ Hover ]*/\n\n.hov-cl0:hover {color: #fff;}\n\n.hov-bg0:hover {background-color: #fff;}\n\n/*---------------------------------------------*/\n\n.hov1:hover {\n  background-color: #555555;\n}\n\n/*==================================================================\n  RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE\n==================================================================*/\n\n/*//////////////////////////////////////////////////////////////////\n[ XXL ]*/\n\n@media (max-width: 1600px) {\n  .respon1 {\n    max-width: 38%;\n  }\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ XL ]*/\n\n@media (max-width: 1200px) {\n  .m-0-xl {margin: 0;}\n  .m-lr-0-xl {margin-left: 0; margin-right: 0;}\n  .m-lr-15-xl {margin-left: 15px; margin-right: 15px;}\n  .m-l-0-xl {margin-left: 0;}\n  .m-r-0-xl {margin-right: 0;}\n  .m-l-15-xl {margin-left: 15px;}\n  .m-r-15-xl {margin-right: 15px;}\n\n  .p-0-xl {padding: 0;}\n  .p-lr-0-xl {padding-left: 0; padding-right: 0;}\n  .p-lr-15-xl {padding-left: 15px; padding-right: 15px;}\n  .p-l-0-xl {padding-left: 0;}\n  .p-r-0-xl {padding-right: 0;}\n  .p-l-15-xl {padding-left: 15px;}\n  .p-r-15-xl {padding-right: 15px;}\n\n  .w-full-xl {width: 100%;}\n\n  /*---------------------------------------------*/\n  .respon1 {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ LG ]*/\n\n@media (max-width: 992px) {\n  .m-0-lg {margin: 0;}\n  .m-lr-0-lg {margin-left: 0; margin-right: 0;}\n  .m-lr-15-lg {margin-left: 15px; margin-right: 15px;}\n  .m-l-0-lg {margin-left: 0;}\n  .m-r-0-lg {margin-right: 0;}\n  .m-l-15-lg {margin-left: 15px;}\n  .m-r-15-lg {margin-right: 15px;}\n\n  .p-0-lg {padding: 0;}\n  .p-lr-0-lg {padding-left: 0; padding-right: 0;}\n  .p-lr-15-lg {padding-left: 15px; padding-right: 15px;}\n  .p-l-0-lg {padding-left: 0;}\n  .p-r-0-lg{padding-right: 0;}\n  .p-l-15-lg {padding-left: 15px;}\n  .p-r-15-lg {padding-right: 15px;}\n\n  .w-full-lg {width: 100%;}\n\n  /*---------------------------------------------*/\n  .respon1 {\n    max-width: 650px;\n    min-height: unset;\n    padding-top: 0;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n\n  /*---------------------------------------------*/\n  .respon2 {\n    position: relative;\n    width: 100%;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .respon2::after {\n    top: 100%;\n    right: 0;\n    width: 100%;\n    height: 10000px;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: skew(180deg, 8deg);\n    transform: skew(180deg, 8deg);\n  }\n\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ MD ]*/\n\n@media (max-width: 768px) {\n  .m-0-md {margin: 0;}\n  .m-lr-0-md {margin-left: 0; margin-right: 0;}\n  .m-lr-15-md {margin-left: 15px; margin-right: 15px;}\n  .m-l-0-md {margin-left: 0;}\n  .m-r-0-md {margin-right: 0;}\n  .m-l-15-md {margin-left: 15px;}\n  .m-r-15-md {margin-right: 15px;}\n\n  .p-0-md {padding: 0;}\n  .p-lr-0-md {padding-left: 0; padding-right: 0;}\n  .p-lr-15-md {padding-left: 15px; padding-right: 15px;}\n  .p-l-0-md {padding-left: 0;}\n  .p-r-0-md{padding-right: 0;}\n  .p-l-15-md {padding-left: 15px;}\n  .p-r-15-md {padding-right: 15px;}\n\n  .w-full-md {width: 100%;}\n  /*---------------------------------------------*/\n\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ SM ]*/\n\n@media (max-width: 576px) {\n  .m-0-sm {margin: 0;}\n  .m-lr-0-sm {margin-left: 0; margin-right: 0;}\n  .m-lr-15-sm {margin-left: 15px; margin-right: 15px;}\n  .m-l-0-sm {margin-left: 0;}\n  .m-r-0-sm {margin-right: 0;}\n  .m-l-15-sm {margin-left: 15px;}\n  .m-r-15-sm {margin-right: 15px;}\n\n  .p-0-sm {padding: 0;}\n  .p-lr-0-sm {padding-left: 0; padding-right: 0;}\n  .p-lr-15-sm {padding-left: 15px; padding-right: 15px;}\n  .p-l-0-sm {padding-left: 0;}\n  .p-r-0-sm{padding-right: 0;}\n  .p-l-15-sm {padding-left: 15px;}\n  .p-r-15-sm {padding-right: 15px;}\n\n  .w-full-sm {width: 100%;}\n  /*---------------------------------------------*/\n\n\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ SSM ]*/\n\n@media (max-width: 480px) {\n  .m-0-ssm {margin: 0;}\n  .m-lr-0-ssm {margin-left: 0; margin-right: 0;}\n  .m-lr-15-ssm {margin-left: 15px; margin-right: 15px;}\n  .m-l-0-ssm {margin-left: 0;}\n  .m-r-0-ssm {margin-right: 0;}\n  .m-l-15-ssm {margin-left: 15px;}\n  .m-r-15-ssm {margin-right: 15px;}\n\n  .p-0-ssm {padding: 0;}\n  .p-lr-0-ssm {padding-left: 0; padding-right: 0;}\n  .p-lr-15-ssm {padding-left: 15px; padding-right: 15px;}\n  .p-l-0-ssm {padding-left: 0;}\n  .p-r-0-ssm{padding-right: 0;}\n  .p-l-15-ssm {padding-left: 15px;}\n  .p-r-15-ssm {padding-right: 15px;}\n\n  .w-full-ssm {width: 100%;}\n  /*---------------------------------------------*/\n\n}\n"

/***/ }),

/***/ "./src/app/pages/under-construction-page/under-construction-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/under-construction-page/under-construction-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"size1 bg0 where1-parent\">\n  <!-- Coutdown -->\n  <div class=\"flex-c-m bg-img1 size2 where1 overlay1 where2 respon2 img-responsive\" style=\"background-image: url('assets/images/sign.png'); background-size:25em;\">\n    <div class=\"wsize2 flex-w flex-c-m cd100 js-tilt\">\n\n    </div>\n  </div>\n\n\n  <!-- Form -->\n  <div class=\"size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1\">\n\n    <div class=\"p-t-50 p-b-60\">\n      <p class=\"l2-txt1 p-b-36\">\n        {{caption | uppercase}}\n      </p>\n\n\n    </div>\n    <div class=\"p-t-50 p-b-60\">\n      <p class=\"m1-txt1 p-b-36\">\n        This page is Under Construction <span class=\"m1-txt2\">Coming Soon!</span>\n      </p>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/under-construction-page/under-construction-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/under-construction-page/under-construction-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: UnderConstructionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionPageComponent", function() { return UnderConstructionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnderConstructionPageComponent = /** @class */ (function () {
    function UnderConstructionPageComponent(actRoute, router) {
        this.actRoute = actRoute;
        this.router = router;
    }
    UnderConstructionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (params) {
            _this.caption = params['page'];
        });
        console.log(this.caption);
    };
    UnderConstructionPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under-construction-page',
            template: __webpack_require__(/*! ./under-construction-page.component.html */ "./src/app/pages/under-construction-page/under-construction-page.component.html"),
            styles: [__webpack_require__(/*! ./under-construction-page.component.css */ "./src/app/pages/under-construction-page/under-construction-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UnderConstructionPageComponent);
    return UnderConstructionPageComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBUYFUhzIck5yawupshKmXgl4kU8zngl6E",
        authDomain: "epsilon-e9dde.firebaseapp.com",
        databaseURL: "https://epsilon-e9dde.firebaseio.com",
        projectId: "epsilon-e9dde",
        storageBucket: "epsilon-e9dde.appspot.com",
        messagingSenderId: "807009149215"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: routes, reportViewRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportViewRoutes", function() { return reportViewRoutes; });
/* harmony import */ var _app_pages_admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/pages/admin-console/admin-console.component */ "./src/app/pages/admin-console/admin-console.component.ts");
/* harmony import */ var _app_pages_reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/pages/reports-view/reports-view.component */ "./src/app/pages/reports-view/reports-view.component.ts");
/* harmony import */ var _app_pages_detail_report_view_detail_report_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/pages/detail-report-view/detail-report-view.component */ "./src/app/pages/detail-report-view/detail-report-view.component.ts");
/* harmony import */ var _app_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/pages/landing-page/landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _app_pages_admin_view_adding_summary_page_adding_summary_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/pages/admin_view/adding-summary-page/adding-summary-page.component */ "./src/app/pages/admin_view/adding-summary-page/adding-summary-page.component.ts");
/* harmony import */ var _app_pages_methodology_page_methodology_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/pages/methodology-page/methodology-page.component */ "./src/app/pages/methodology-page/methodology-page.component.ts");
/* harmony import */ var _app_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _app_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _app_pages_under_construction_page_under_construction_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/pages/under-construction-page/under-construction-page.component */ "./src/app/pages/under-construction-page/under-construction-page.component.ts");









var routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'create',
        component: _app_pages_admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_0__["AdminConsoleComponent"]
    },
    { path: 'create/summary/:id',
        component: _app_pages_admin_view_adding_summary_page_adding_summary_page_component__WEBPACK_IMPORTED_MODULE_4__["AddingSummaryPageComponent"]
    },
    {
        path: 'viewreport/:id',
        component: _app_pages_detail_report_view_detail_report_view_component__WEBPACK_IMPORTED_MODULE_2__["DetailReportViewComponent"],
        children: [
            { path: '', redirectTo: 'report-summary', pathMatch: 'full' },
            {
                path: 'report-summary',
                component: _app_pages_detail_report_view_detail_report_view_component__WEBPACK_IMPORTED_MODULE_2__["DetailReportViewComponent"]
            },
            {
                path: 'table-content',
                component: _app_pages_detail_report_view_detail_report_view_component__WEBPACK_IMPORTED_MODULE_2__["DetailReportViewComponent"]
            }
        ]
    },
    { path: 'allreports',
        component: _app_pages_reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_1__["ReportsViewComponent"]
    },
    { path: 'Home',
        component: _app_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    },
    { path: 'methodology',
        component: _app_pages_methodology_page_methodology_page_component__WEBPACK_IMPORTED_MODULE_5__["MethodologyPageComponent"]
    },
    { path: 'about',
        component: _app_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__["AboutPageComponent"]
    },
    { path: 'contact',
        component: _app_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_7__["ContactPageComponent"]
    },
    { path: 'uc/:page',
        component: _app_pages_under_construction_page_under_construction_page_component__WEBPACK_IMPORTED_MODULE_8__["UnderConstructionPageComponent"]
    }
];
var reportViewRoutes = [];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thrilok/workspace/projects/epsilon-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map