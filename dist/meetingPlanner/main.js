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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer\r\n{\r\n    position: absolute;\r\n    bottom:0;\r\n    width:100%;\r\n    box-shadow: 0px 0px 10px grey;\r\n    background-color: #f5f5f5;\r\n\r\n    height:60px;\r\n    line-height:60px;\r\n    line-height: 60px;\r\n}\r\n\r\n.container\r\n{\r\n    width:auto;\r\n    padding:0 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLDZCQUE2QjtJQUM3Qix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFVBQVU7SUFDVixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3RlclxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JleTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblxyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDo2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIHBhZGRpbmc6MCAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n<footer class=\"footer\">\n    <div class=\"container text-center\">\n            © 2019 Copyright <span class=\"text-muted\">Karthikeyan</span>\n\n    </div>\n</footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meetingPlanner';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _calender_calender_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calender/calender.module */ "./src/app/calender/calender.module.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _error_page_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error-page/error/error.component */ "./src/app/error-page/error/error.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundPageComponent"],
                _error_page_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _calender_calender_module__WEBPACK_IMPORTED_MODULE_11__["CalenderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: 'pageNotFound',
                        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundPageComponent"]
                    },
                    {
                        path: 'error',
                        component: _error_page_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]
                    },
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: '*',
                        redirectTo: 'pageNotFound'
                    },
                    {
                        path: '**',
                        redirectTo: 'pageNotFound'
                    }
                ])
            ], providers: [_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"], _socket_service__WEBPACK_IMPORTED_MODULE_14__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calender/admin/admin.component.css":
/*!****************************************************!*\
  !*** ./src/app/calender/admin/admin.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh3 {\r\n    margin: 0 0 10px;\r\n  }\r\n  \r\n  pre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n  }\r\n  \r\n  .navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n  \r\n  .navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n  \r\n  .active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\n  \r\n  .not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n  \r\n  .nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n  \r\n  .not-active a:hover{\r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    border-radius: 5px;\r\n    \r\n}\r\n  \r\n  .circle\r\n{\r\n  width:50px;\r\n  height:50px;\r\n  text-align:center;\r\n  padding:8px 0;\r\n  font-size:16px;\r\n  line-height: 1.4;\r\n  border-radius: 50%;\r\n  margin-right:7vh;\r\n  background-color: indigo;\r\n  margin-bottom:7vh;\r\n}\r\n  \r\n  .btn-primary\r\n{\r\n    background-color: indigo;\r\n    border:1px solid indigo!important;\r\n    box-shadow:1px 2px 5px indigo;\r\n\r\n}\r\n  \r\n  .btn-outline-secondary\r\n{\r\n    \r\n    background-color:white!important;\r\n    color:indigo;\r\n    border:1px solid indigo!important;\r\n    box-shadow:1px 2px 5px indigo;\r\n}\r\n  \r\n  .calendar-view\r\n{\r\n    margin:1rem!important;\r\n}\r\n  \r\n  @media only screen and (min-width:768px)\r\n{\r\n\t\r\n.calendar-view\r\n{\r\n\tmargin:3rem!important;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kZXIvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBOztJQUVFLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtJQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0lBRTlILGdDQUFnQzs7O0FBR3BDOztFQUNBOztJQUVJLHFCQUFxQjtBQUN6Qjs7RUFFQTs7SUFFSSxpQkFBaUI7O0lBRWpCLHNDQUFzQzs7SUFFdEMsa0JBQWtCOztBQUV0Qjs7RUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztFQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7RUFHQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7O0FBRXRCOztFQUdBOztFQUVFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7RUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLDZCQUE2Qjs7QUFFakM7O0VBRUE7OztJQUdJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLDZCQUE2QjtBQUNqQzs7RUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0VBQ0E7OztBQUdBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kZXIvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMyB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICBwcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEyOTVhOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDNweCAgZ3JleTtcclxuICAgXHJcblxyXG59XHJcbi5uYXZiYXItYnJhbmRcclxue1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlIGFcclxue1xyXG4gICAgcGFkZGluZzogN3B4IDQwcHg7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYXtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogN3B4IDMwcHg7IFxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY2lyY2xlXHJcbntcclxuICB3aWR0aDo1MHB4O1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBhZGRpbmc6OHB4IDA7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0Ojd2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgbWFyZ2luLWJvdHRvbTo3dmg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGluZGlnbyFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OjFweCAycHggNXB4IGluZGlnbztcclxuXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnlcclxue1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlIWltcG9ydGFudDtcclxuICAgIGNvbG9yOmluZGlnbztcclxuICAgIGJvcmRlcjoxcHggc29saWQgaW5kaWdvIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6MXB4IDJweCA1cHggaW5kaWdvO1xyXG59XHJcblxyXG4uY2FsZW5kYXItdmlld1xyXG57XHJcbiAgICBtYXJnaW46MXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KVxyXG57XHJcblx0XHJcbi5jYWxlbmRhci12aWV3XHJcbntcclxuXHRtYXJnaW46M3JlbSFpbXBvcnRhbnQ7XHJcbn1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/calender/admin/admin.component.html":
/*!*****************************************************!*\
  !*** ./src/app/calender/admin/admin.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar  navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n        <li class=\"nav-item not-active \" >\n            <a class=\"nav-link \" (click)=\"goToAdminDashFunction()\" style=\"color:paleturquoise!important;\">Dashboard</a>\n          </li>  \n\n        <li class=\"nav-item not-active \" >\n            <a class=\"nav-link \" (click)=\"logoutFunction()\" style=\"color:paleturquoise!important;\">Logout </a>\n          </li>\n    \n          <li class=\"nav-item active \" >\n              <a class=\"nav-link \" [routerLink]=\"['/login']\" style=\"color:skyblue!important;\">{{userName | uppercase}} \n                <span class=\"online\">(online)</span> <span><i class=\"online-icon\"></i></span></a>\n                \n      \n            </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n\n<!-- calendar view  -->\n\n\n<div class='calendar-view'>\n    <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              mwlCalendarPreviousView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\n            >\n              Previous\n            </div>\n            <div\n              class=\"btn btn-outline-secondary\"\n              mwlCalendarToday\n              [(viewDate)]=\"viewDate\"\n            >\n              Today\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              mwlCalendarNextView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\n            >\n              Next\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h3 style=\"color:indigo\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"setView(CalendarView.Month)\"\n              [class.active]=\"view === CalendarView.Month\"\n            >\n              Month\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"setView(CalendarView.Week)\"\n              [class.active]=\"view === CalendarView.Week\"\n            >\n              Week\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"setView(CalendarView.Day)\"\n              [class.active]=\"view === CalendarView.Day\"\n            >\n              Day\n            </div>\n          </div>\n        </div>\n      </div>\n      <br />\n      <div [ngSwitch]=\"view\">\n        <mwl-calendar-month-view\n          *ngSwitchCase=\"CalendarView.Month\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          [activeDayIsOpen]=\"activeDayIsOpen\"\n          (dayClicked)=\"dayClicked($event.day)\" \n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\n        >\n        </mwl-calendar-month-view>\n        <mwl-calendar-week-view\n          *ngSwitchCase=\"CalendarView.Week\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\n        >\n        </mwl-calendar-week-view>\n        <mwl-calendar-day-view\n          *ngSwitchCase=\"CalendarView.Day\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\n        >\n        </mwl-calendar-day-view>\n    \n    \n      \n    \n</div>\n\n\n\n\n<div class=\"fixed-bottom\">\n    <div style=\"float: right;\">\n      <button type=\"button\" class=\"btn btn-danger circle\" (click)='ScheduleMeeting()' >+</button>\n    </div>\n  </div>\n \n\n\n\n\n\n  \n<ng-template #modalContent let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Event action occurred</h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div>\n        Action:\n        <pre>{{ modalData?.action }}</pre>\n      </div>\n      <div>\n        Event:\n        <pre>{{ modalData?.event | json }}</pre>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n        OK\n      </button>\n    </div>\n  </ng-template>\n\n\n  <ng-template #modalDeleteConfirmation let-close=\"close\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Delete Meeting</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6 class=\"card-title\">Are you sure you want to delete the following meeting?</h6>\n        <h4 class=\"card-title\" style=\"color:red\">{{modalData?.event.meetingTitle}}</h4>\n      </div>\n    \n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn btn-danger\" (click)=\"deleteMeeting(modalData?.event)\">Delete</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\n      </div>\n    </ng-template>\n  \n  <ng-template #modalScheduleMeeting let-close=\"close\">\n      <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Schedule Meeting</h5>\n          <button type=\"button\" class=\"close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <form>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-6\">\n                    <label for=\"hostid\">Host ID</label>\n                    <input type=\"text\" #hostid=\"ngModel\" [(ngModel)]=\"hostId\" name=\"hostId\" class=\"form-control\" id=\"hostid\" placeholder=\"\" readonly=true required=true>\n                    <div [hidden]=\"hostid.pristine || hostid.valid\" class=\"alert alert-warning\">\n                        <div  *ngIf=\"hostid.errors?.required\">\n                            Can't schedule meeting without host Id\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                    <label for=\"hostname\">Host name</label>\n                    <input type=\"text\" #hostname=\"ngModel\" [(ngModel)]=\"hostName\" name=\"hostName\" class=\"form-control\" id=\"hostname\" placeholder=\"\" readonly=true required=true>\n                    <div [hidden]=\"hostname.pristine || hostname.valid\" class=\"alert alert-warning\">\n                        <div  *ngIf=\"hostname.errors?.required\">\n                            Can't schedule meeting without host name\n                        </div>\n                    </div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"participantid\">Participant ID</label>\n                      <input type=\"text\" #participantid=\"ngModel\" [(ngModel)]=\"participantId\" name=\"participantId\" class=\"form-control\" id=\"participantid\" placeholder=\"\" readonly=true required=true>\n                      <div [hidden]=\"participantid.pristine || participantid.valid\" class=\"alert alert-warning\">\n                          <div  *ngIf=\"participantid.errors?.required\">\n                              Can't schedule meeting without participant id\n                         </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"participantname\">Participant Name</label>\n                      <input type=\"text\" #participantname=\"ngModel\" [(ngModel)]=\"participantName\" name=\"participantName\" class=\"form-control\" id=\"participantname\" placeholder=\"\" readonly=true required=true>\n                      <div [hidden]=\"participantname.pristine || participantname.valid\" class=\"alert alert-warning\">\n                          <div  *ngIf=\"participantname.errors?.required\">\n                              Can't schedule meeting without participant name\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                      <div class=\"form-group col-md-12\">\n                        <label for=\"participantemail\">Participant Email</label>\n                        <input type=\"text\" #participantemail=\"ngModel\" [(ngModel)]=\"participantEmail\" name=\"participantEmail\" class=\"form-control\" id=\"participantemail\" placeholder=\"\" readonly=true required=true>\n                        <div [hidden]=\"participantemail.pristine || participantemail.valid\" class=\"alert alert-warning\">\n                            <div  *ngIf=\"participantemail.errors?.required\">\n                                Can't schedule meeting without participant email\n                            </div>\n                        </div>\n                      \n                      </div>\n                    \n                    </div>\n                    <hr>\n  \n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                          <label for=\"meetingtitle\">Meeting Title</label>\n                          <input type=\"text\" #meetingtitle=\"ngModel\" [(ngModel)]=\"meetingTitle\" name=\"meetingTitle\" class=\"form-control\" id=\"meetingtitle\" placeholder=\"\"  required=true>\n                          <div [hidden]=\"meetingtitle.pristine || meetingtitle.valid\" class=\"alert alert-warning\">\n                              <div  *ngIf=\"meetingtitle.errors?.required\">\n                                  Can't schedule meeting without meeting title\n                              </div>\n                          </div>\n                        </div>\n                    \n                      </div>\n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-12\">\n                              <label for=\"meetingdescription\">Meeting Description</label>\n                              <input type=\"text\" #meetingdescription=\"ngModel\" [(ngModel)]=\"meetingDescription\" name=\"meetingDescription\" class=\"form-control\" id=\"meetingdescription\" placeholder=\"\"  required=true>\n                              <div [hidden]=\"meetingdescription.pristine || meetingdescription.valid\" class=\"alert alert-warning\">\n                                  <div  *ngIf=\"meetingdescription.errors?.required\">\n                                      Can't schedule meeting without meeting description\n                                  </div>\n                              </div>\n                            </div>\n                      </div>\n                        <hr>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-12\">\n                                <label for=\"\">When is meeting going to happen ?</label>\n                                \n                              </div>\n                          \n                          </div> \n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                              <label for=\"meetingstartdate\">Start Date</label>\n                              <input class=\"form-control\" #meetingstartdate=\"ngModel\" type=\"date\" mwlFlatpickr name=\"meetingStartDate\" [(ngModel)]=\"meetingStartDate\"\n                              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" required=true\n                              [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"  altFormat=\"F j, Y H:i\" placeholder=\"Not set\"/>\n                              <div [hidden]=\"meetingstartdate.pristine || meetingstartdate.valid\" class=\"alert alert-warning\">\n                                  <div  *ngIf=\"meetingstartdate.errors?.required\">\n                                      Can't schedule meeting without meeting start date\n                                  </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                              <label for=\"meetingenddate\">End Date</label>\n                              \n                              <input class=\"form-control\" #meetingenddate=\"ngModel\" type=\"date\" mwlFlatpickr  name=\"meetingEndDate\" [(ngModel)]=\"meetingEndDate\"\n                              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" required=true\n                              [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"  altFormat=\"F j, Y H:i\" placeholder=\"Not set\"/>\n  \n                              <div [hidden]=\"meetingenddate.pristine || meetingenddate.valid\" class=\"alert alert-warning\">\n                                  <div  *ngIf=\"meetingenddate.errors?.required\">\n                                      Can't schedule meeting without meeting end date\n                                  </div>\n                              </div>\n                            </div>\n                          </div>\n                     \n  \n  \n                \n                <div class=\"form-group\">\n                  <label for=\"meetingvenue\">Where is meeting going to happen ?</label>\n                  <input type=\"text\" #meetingvenue=\"ngModel\" [(ngModel)]=\"meetingPlace\" [value]=\"modalData\" name=\"meetingPlace\" class=\"form-control\" id=\"meetingvenue\" placeholder=\"Venue\" required=true>\n                  <div [hidden]=\"meetingvenue.pristine || meetingvenue.valid\" class=\"alert alert-warning\">\n                      <div  *ngIf=\"meetingvenue.errors?.required\">\n                          Can't schedule meeting without meeting place\n                      </div>\n                  </div>\n                </div>\n              </form>  \n        </div>\n      <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"CreateMeeting()\">Schedule</button>\n          \n      </div>\n    </ng-template>\n  \n    <ng-template #modalAlertToastr let-close=\"close\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Meeting Reminder</h5>\n          <button type=\"button\" class=\"close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h6 class=\"card-title\">Your meeting <span><i> {{modalData?.event.meetingTitle}} </i></span> will start soon!</h6>\n        </div>\n      \n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"modalData?.event.remindMe=true;reminder=true;close()\">Snooze</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modalData?.event.remindMe=false;reminder=true;close()\">Dismiss</button>\n        </div>\n      </ng-template>\n      \n\n    \n  <ng-template #modalUpdateMeeting let-close=\"close\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Schedule Meeting</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <form>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                  <label for=\"hostid\">Host ID</label>\n                  <input type=\"text\" #hostid=\"ngModel\" [(ngModel)]=\"hostId\" name=\"hostId\" class=\"form-control\" id=\"hostid\" placeholder=\"\" readonly=true required=true>\n                  <div [hidden]=\"hostid.pristine || hostid.valid\" class=\"alert alert-warning\">\n                      <div  *ngIf=\"hostid.errors?.required\">\n                          Can't schedule meeting without host Id\n                      </div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <label for=\"hostname\">Host name</label>\n                  <input type=\"text\" #hostname=\"ngModel\" [(ngModel)]=\"hostName\" name=\"hostName\" class=\"form-control\" id=\"hostname\" placeholder=\"\" readonly=true required=true>\n                  <div [hidden]=\"hostname.pristine || hostname.valid\" class=\"alert alert-warning\">\n                      <div  *ngIf=\"hostname.errors?.required\">\n                          Can't schedule meeting without host name\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <hr>\n              <div class=\"form-row\">\n                  <div class=\"form-group col-md-6\">\n                    <label for=\"participantid\">Participant ID</label>\n                    <input type=\"text\" #participantid=\"ngModel\" [(ngModel)]=\"participantId\" name=\"participantId\" class=\"form-control\" id=\"participantid\" placeholder=\"\" readonly=true required=true>\n                    <div [hidden]=\"participantid.pristine || participantid.valid\" class=\"alert alert-warning\">\n                        <div  *ngIf=\"participantid.errors?.required\">\n                            Can't schedule meeting without participant id\n                       </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                    <label for=\"participantname\">Participant Name</label>\n                    <input type=\"text\" #participantname=\"ngModel\" [(ngModel)]=\"participantName\" name=\"participantName\" class=\"form-control\" id=\"participantname\" placeholder=\"\" readonly=true required=true>\n                    <div [hidden]=\"participantname.pristine || participantname.valid\" class=\"alert alert-warning\">\n                        <div  *ngIf=\"participantname.errors?.required\">\n                            Can't schedule meeting without participant name\n                        </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-12\">\n                      <label for=\"participantemail\">Participant Email</label>\n                      <input type=\"text\" #participantemail=\"ngModel\" [(ngModel)]=\"participantEmail\" name=\"participantEmail\" class=\"form-control\" id=\"participantemail\" placeholder=\"\" readonly=true required=true>\n                      <div [hidden]=\"participantemail.pristine || participantemail.valid\" class=\"alert alert-warning\">\n                          <div  *ngIf=\"participantemail.errors?.required\">\n                              Can't schedule meeting without participant email\n                          </div>\n                      </div>\n                    \n                    </div>\n                  \n                  </div>\n                  <hr>\n\n                  <div class=\"form-row\">\n                      <div class=\"form-group col-md-6\">\n                        <label for=\"meetingtitle\">Meeting Title</label>\n                        <input type=\"text\" #meetingtitle=\"ngModel\" [(ngModel)]=\"meetingTitle\" name=\"meetingTitle\" class=\"form-control\" id=\"meetingtitle\" placeholder=\"\" required=true>\n                        <div [hidden]=\"meetingtitle.pristine || meetingtitle.valid\" class=\"alert alert-warning\">\n                            <div  *ngIf=\"meetingtitle.errors?.required\">\n                                Can't schedule meeting without meeting title\n                            </div>\n                        </div>\n                      </div>\n                  \n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"meetingdescription\">Meeting Description</label>\n                            <input type=\"text\" #meetingdescription=\"ngModel\" [(ngModel)]=\"meetingDescription\" name=\"meetingDescription\" class=\"form-control\" id=\"meetingdescription\" placeholder=\"\"  required=true>\n                            <div [hidden]=\"meetingdescription.pristine || meetingdescription.valid\" class=\"alert alert-warning\">\n                                <div  *ngIf=\"meetingdescription.errors?.required\">\n                                    Can't schedule meeting without meeting description\n                                </div>\n                            </div>\n                          </div>\n                    </div>\n                      <hr>\n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-12\">\n                              <label for=\"\">When is meeting going to happen ?</label>\n                              \n                            </div>\n                        \n                        </div> \n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"meetingstartdate\">Start Date</label>\n                            <input class=\"form-control\" #meetingstartdate=\"ngModel\" type=\"date\" mwlFlatpickr name=\"meetingStartDate\" [(ngModel)]=\"meetingStartDate\"\n                            (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" required=true\n                            [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"  altFormat=\"F j, Y H:i\" placeholder=\"Not set\"/>\n                            <div [hidden]=\"meetingstartdate.pristine || meetingstartdate.valid\" class=\"alert alert-warning\">\n                                <div  *ngIf=\"meetingstartdate.errors?.required\">\n                                    Can't schedule meeting without meeting start date\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"meetingenddate\">End Date</label>\n                            \n                            <input class=\"form-control\" #meetingenddate=\"ngModel\" type=\"date\" mwlFlatpickr  name=\"meetingEndDate\" [(ngModel)]=\"meetingEndDate\"\n                            (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" required=true\n                            [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"  altFormat=\"F j, Y H:i\" placeholder=\"Not set\"/>\n\n                            <div [hidden]=\"meetingenddate.pristine || meetingenddate.valid\" class=\"alert alert-warning\">\n                                <div  *ngIf=\"meetingenddate.errors?.required\">\n                                    Can't schedule meeting without meeting end date\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                   \n\n\n              \n              <div class=\"form-group\">\n                <label for=\"meetingvenue\">Where is meeting going to happen ?</label>\n                <input type=\"text\" #meetingvenue=\"ngModel\" [(ngModel)]=\"meetingPlace\" [value]=\"modalData\" name=\"meetingPlace\" class=\"form-control\" id=\"meetingvenue\" placeholder=\"Venue\" required=true>\n                <div [hidden]=\"meetingvenue.pristine || meetingvenue.valid\" class=\"alert alert-warning\">\n                    <div  *ngIf=\"meetingvenue.errors?.required\">\n                        Can't schedule meeting without meeting place\n                    </div>\n                </div>\n              </div>\n            </form>  \n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"UpdateMeeting()\">Update meeting</button>\n          \n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteMeetingConfirm()\">Delete</button>\n          \n      </div>\n    </ng-template>\n  "

/***/ }),

/***/ "./src/app/calender/admin/admin.component.ts":
/*!***************************************************!*\
  !*** ./src/app/calender/admin/admin.component.ts ***!
  \***************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");












var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var AdminComponent = /** @class */ (function () {
    function AdminComponent(modal, meetingService, userService, avticatedRoute, toastr, router, socketService) {
        var _this = this;
        this.modal = modal;
        this.meetingService = meetingService;
        this.userService = userService;
        this.avticatedRoute = avticatedRoute;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.reminder = true;
        this.viewDate = new Date();
        this.actions = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        this.deleteMeetingConfirm = function () {
            _this.modal.open(_this.modalDeleteConfirmation, { size: 'sm' });
        };
        this.deleteMeeting = function (userData) {
            console.log(_this.participantId);
            _this.meetingService.deleteMeeting(userData.meetingId, _this.authToken)
                .subscribe(function (success) {
                if (success.status == 200) {
                    _this.toastr.success('Meeting deleted Successfully');
                    _this.modal.dismissAll(_this.modalDeleteConfirmation);
                    _this.modal.dismissAll(_this.modalScheduleMeeting);
                    _this.getAllMeetingDetails();
                    var data = {
                        userId: _this.participantId,
                        message: _this.meetingTitle + " : Meeting has been deleted  by " + _this.hostName
                    };
                    _this.notifyUpdatedFromAdminToUsers(data);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                _this.toastr.error(error.message);
            });
        };
        this.notifyUpdatedFromAdminToUsers = function (data) {
            _this.socketService.notifyUsers(data);
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.avticatedRoute.snapshot.paramMap.get('userId');
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken');
        this.userInfo = this.userService.getLocalStorage();
        this.hostId = ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId');
        this.hostName = ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName');
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName');
        this.participantId = this.userId;
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName') != undefined &&
            this.userService.getLocalStorage() != null &&
            this.userService.getLocalStorage() != undefined) {
            this.getUserDetails();
            this.getAllMeetingDetails();
            this.authErrorFunction();
            setInterval(function () {
                _this.sendReminderToast();
            }, 5000);
            setInterval(function () {
                _this.sendReminderToastToUser();
            }, 35000);
        }
        else {
            this.router.navigate(['/error']);
        }
    };
    AdminComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    AdminComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    AdminComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.participantEmail = event.participantEmail;
        this.participantId = event.participantId;
        this.participantName = event.participantName;
        this.meetingTitle = event.title;
        this.meetingStartDate = event.start;
        this.meetingEndDate = event.end;
        this.meetingDescription = event.meetingDescription;
        this.meetingPlace = event.meetingPlace;
        this.modal.open(this.modalUpdateMeeting, { size: 'lg' });
    };
    AdminComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    AdminComponent.prototype.setView = function (view) {
        this.view = view;
    };
    AdminComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    //functions
    AdminComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userService.getSingleUserDetails(this.userId, this.authToken)
            .subscribe(function (success) {
            if (success.status === 200) {
                _this.participantId = success.data.userId;
                _this.participantEmail = success.data.email;
                _this.participantName = success.data.userName;
            }
            if (success.status == 404) {
                _this.toastr.error('Page not found');
            }
            if (success.status == 500) {
                _this.toastr.error('Failed to feth details');
            }
        }, function (error) {
            _this.toastr.error(error);
        });
    };
    AdminComponent.prototype.ScheduleMeeting = function () {
        this.getUserDetails();
        this.meetingTitle = '';
        this.meetingStartDate = '';
        this.meetingEndDate = '';
        this.meetingDescription = '';
        this.meetingPlace = '';
        this.modal.open(this.modalScheduleMeeting, { size: 'lg' });
    };
    AdminComponent.prototype.getAllMeetingDetails = function () {
        var _this = this;
        this.meetingService.getAllMeetingDetails(this.userId, this.authToken)
            .subscribe(function (success) {
            if (success.status == 200) {
                var event_2 = success.data;
                for (var _i = 0, event_1 = event_2; _i < event_1.length; _i++) {
                    var data = event_1[_i];
                    data.title = data.meetingTitle;
                    var startDate = new Date(data.meetingStartDate);
                    startDate.setHours(startDate.getHours() - 5);
                    startDate.setMinutes(startDate.getMinutes() - 30);
                    data.start = startDate;
                    var endDate = new Date(data.meetingEndDate);
                    endDate.setHours(endDate.getHours() - 5);
                    endDate.setMinutes(endDate.getMinutes() - 30);
                    data.end = endDate;
                    data.remindMe = true;
                    data.color = colors.green;
                    data.actions = _this.actions;
                    data.remindMe = true;
                }
                _this.events = event_2;
                _this.refresh.next();
            }
            else {
                if (success.status == 404) {
                    _this.events = [];
                    _this.refresh.next();
                    _this.toastr.error(success.message);
                }
            }
        }, function (error) {
            _this.toastr.error(error.message);
        });
    }; //end get all meeting details 
    //send notification
    AdminComponent.prototype.sendReminderToast = function () {
        var currentTime = new Date().getTime();
        var allMeetings = this.events;
        for (var _i = 0, allMeetings_1 = allMeetings; _i < allMeetings_1.length; _i++) {
            var meeting = allMeetings_1[_i];
            //need to delete
            console.log(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(new Date(), meeting.start));
            console.log(new Date(meeting.start).getTime() - currentTime <= 60000);
            console.log(new Date(meeting.start).getTime() > currentTime);
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(new Date(), meeting.start) && new Date(meeting.start).getTime() - currentTime <= 60000
                && new Date(meeting.start).getTime() > currentTime) {
                if (meeting.remindMe && this.reminder) {
                    this.modalData = { action: 'clicked', event: meeting };
                    this.modal.open(this.modalAlertToastr, { size: 'sm' });
                    this.reminder = false;
                }
            }
            else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(new Date(), meeting.start) && currentTime - new Date(meeting.start).getTime() < 7000
                && new Date(meeting.start).getTime() < currentTime) {
                this.toastr.success(meeting.meetingTitle + " : meeting stared");
            }
        }
    };
    AdminComponent.prototype.sendReminderToastToUser = function () {
        var currentTime = new Date().getTime();
        var allMeetings = this.events;
        for (var _i = 0, allMeetings_2 = allMeetings; _i < allMeetings_2.length; _i++) {
            var meeting = allMeetings_2[_i];
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(new Date(), meeting.start) && new Date(meeting.start).getTime() - currentTime <= 60000
                && new Date(meeting.start).getTime() > currentTime) {
                var data = {
                    userId: meeting.participantId,
                    message: this.meetingTitle + " :  scheduled meeting will start in mins"
                };
                this.notifyUpdatedFromAdminToUsers(data);
            }
            else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(new Date(), meeting.start) && currentTime - new Date(meeting.start).getTime() < 35000
                && new Date(meeting.start).getTime() < currentTime) {
                var data = {
                    userId: meeting.participantId,
                    message: this.meetingTitle + " :  Meeting Started"
                };
                this.notifyUpdatedFromAdminToUsers(data);
            }
        }
    };
    //validate start end date
    AdminComponent.prototype.validateStartEndDate = function (startDate, endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        if (end < start) {
            return true;
        }
        else {
            return false;
        }
    };
    //validate  meeting date
    AdminComponent.prototype.validateMeetingDate = function (startDate) {
        var start = new Date(startDate);
        var end = new Date();
        if (start < end) {
            return true;
        }
        else {
            return false;
        }
    };
    //create meeting 
    AdminComponent.prototype.CreateMeeting = function () {
        var _this = this;
        if (!this.hostId) {
            this.toastr.warning('Host Id is missing !');
        }
        else if (!this.hostName) {
            this.toastr.warning('Host Name is missing !');
        }
        else if (!this.participantId) {
            this.toastr.warning('Participant Id is missing !');
        }
        else if (!this.participantName) {
            this.toastr.warning('Participant Name is missing !');
        }
        else if (!this.participantEmail) {
            this.toastr.warning('Participant Email is missing !');
        }
        else if (!this.meetingTitle) {
            this.toastr.warning('Meeting Title  is missing !');
        }
        else if (!this.meetingDescription) {
            this.toastr.warning('Meeting Description is missing !');
        }
        else if (!this.meetingStartDate) {
            this.toastr.warning('Start Date is missing !');
        }
        else if (!this.meetingEndDate) {
            this.toastr.warning('End Date is missing !');
        }
        else if (!this.meetingPlace) {
            this.toastr.warning('Meeting Place is missing !');
        }
        else if (this.validateStartEndDate(this.meetingStartDate, this.meetingEndDate)) {
            this.toastr.warning('End Date/Time cannot be before Start Date/Time');
        }
        else if (this.validateMeetingDate(this.meetingStartDate)) {
            this.toastr.warning("Meeting can't be schedule in back date/time");
        }
        else {
            var data = {
                hostId: this.hostId,
                hostName: this.hostName,
                participantId: this.participantId,
                participantName: this.participantName,
                participantEmail: this.participantEmail,
                meetingTitle: this.meetingTitle,
                meetingDescription: this.meetingDescription,
                meetingStartDate: this.meetingStartDate,
                meetingEndDate: this.meetingEndDate,
                meetingPlace: this.meetingPlace,
                authToken: this.authToken
            };
            this.meetingService.createMeeting(data)
                .subscribe(function (success) {
                if (success.status === 200) {
                    _this.toastr.success('Meeting Scheduled Successfully');
                    _this.modal.dismissAll(_this.modalScheduleMeeting);
                    _this.getAllMeetingDetails();
                    var data_1 = {
                        userId: _this.userId,
                        message: _this.meetingTitle + " :  " + _this.hostName + " scheduled meeting for you at " + _this.meetingPlace
                    };
                    _this.notifyUpdatedFromAdminToUsers(data_1);
                }
                else if (success.status == 404) {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.error("one or more parameter is missing ");
                }
            });
        }
    };
    // end create meeting
    // update meeting
    AdminComponent.prototype.UpdateMeeting = function () {
        var _this = this;
        if (!this.hostId) {
            this.toastr.warning('Host Id is missing !');
        }
        else if (!this.hostName) {
            this.toastr.warning('Host Name is missing !');
        }
        else if (!this.participantId) {
            this.toastr.warning('Participant Id is missing !');
        }
        else if (!this.participantName) {
            this.toastr.warning('Participant Name is missing !');
        }
        else if (!this.participantEmail) {
            this.toastr.warning('Participant Email is missing !');
        }
        else if (!this.meetingTitle) {
            this.toastr.warning('Meeting Title  is missing !');
        }
        else if (!this.meetingDescription) {
            this.toastr.warning('Meeting Description is missing !');
        }
        else if (!this.meetingStartDate) {
            this.toastr.warning('Start Date is missing !');
        }
        else if (!this.meetingEndDate) {
            this.toastr.warning('End Date is missing !');
        }
        else if (!this.meetingPlace) {
            this.toastr.warning('Meeting Place is missing !');
        }
        else if (this.validateStartEndDate(this.meetingStartDate, this.meetingEndDate)) {
            this.toastr.warning('End Date/Time cannot be before Start Date/Time');
        }
        else if (this.validateMeetingDate(this.meetingStartDate)) {
            this.toastr.warning("Meeting can't be schedule in back date/time");
        }
        else {
            var data = {
                participantEmail: this.participantEmail,
                meetingTitle: this.meetingTitle,
                meetingDescription: this.meetingDescription,
                meetingStartDate: this.meetingStartDate,
                meetingEndDate: this.meetingEndDate,
                meetingPlace: this.meetingPlace,
                authToken: this.authToken,
                meetingId: this.modalData.event.meetingId
            };
            this.meetingService.updateMeeting(data)
                .subscribe(function (success) {
                if (success.status === 200) {
                    _this.toastr.success('Meeting Updated Successfully');
                    _this.modal.dismissAll(_this.modalScheduleMeeting);
                    _this.getAllMeetingDetails();
                    var data_2 = {
                        userId: _this.userId,
                        message: _this.meetingTitle + " : " + _this.hostName + " updated meeting for you at " + _this.meetingPlace + " "
                    };
                    _this.notifyUpdatedFromAdminToUsers(data_2);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                _this.toastr.error(error.message);
            });
        }
    }; //end update meeting
    AdminComponent.prototype.goToAdminDashFunction = function () {
        this.router.navigate(['/admin-dashboard']);
    };
    AdminComponent.prototype.logoutFunction = function () {
        var _this = this;
        this.userService.logotFunction(this.hostId, this.authToken)
            .subscribe(function (success) {
            if (success.status === 200) {
                localStorage.clear();
                ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].delete('authToken', '/');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].delete('userId', '/');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].delete('userName', '/');
                _this.socketService.disconnectedSocket();
                _this.socketService.disconnect();
                _this.toastr.success(success.message);
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error(success.message);
            }
        }, function (err) {
            if (err.status == 404) {
                _this.toastr.error("Logout Failed ", "Already Logged out or Invalid User");
            }
            else {
                _this.toastr.error("Some Error Occured", "Error!");
                // this.router.navigate() sever erroor page
            }
        });
    };
    //socket functions here
    // auth error 
    AdminComponent.prototype.authErrorFunction = function () {
        var _this = this;
        this.socketService.listenAuthError().
            subscribe(function (data) {
            _this.toastr.info("Missing Authorization Key", "Please login again");
            _this.router.navigate(['/login']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalScheduleMeeting'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminComponent.prototype, "modalScheduleMeeting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalDeleteConfirmation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminComponent.prototype, "modalDeleteConfirmation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalAlertToastr'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminComponent.prototype, "modalAlertToastr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalUpdateMeeting'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminComponent.prototype, "modalUpdateMeeting", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/calender/admin/admin.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"]],
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/calender/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _meeting_service__WEBPACK_IMPORTED_MODULE_7__["MeetingService"],
            _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/calender/calender.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calender/calender.module.ts ***!
  \*********************************************/
/*! exports provided: CalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderModule", function() { return CalenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/calender/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/calender/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var CalenderModule = /** @class */ (function () {
    function CalenderModule() {
    }
    CalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_3__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_3__["OwlNativeDateTimeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild([
                    {
                        path: 'admin-dashboard/user-meeting/:userId',
                        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]
                    },
                    {
                        path: 'user-dashboard/meeting',
                        component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"]
                    }
                ]),
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
                }),
            ]
        })
    ], CalenderModule);
    return CalenderModule;
}());



/***/ }),

/***/ "./src/app/calender/user/user.component.css":
/*!**************************************************!*\
  !*** ./src/app/calender/user/user.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 0px 1px 5px skyblue;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.not-active a:hover{\r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    border-radius: 5px;\r\n    \r\n}\r\n.online\r\n{\r\n\r\ncolor:green;\r\n\r\ndisplay:inline-block;\r\n}\r\n.online-icon{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n.btn-primary\r\n{\r\n    background-color: indigo;\r\n    border:1px solid indigo!important;\r\n    box-shadow:1px 2px 5px indigo;\r\n\r\n}\r\n.btn-outline-secondary\r\n{\r\n    \r\n    background-color:white!important;\r\n    color:indigo;\r\n    border:1px solid indigo!important;\r\n    box-shadow:1px 2px 5px indigo;\r\n\r\n}\r\n.calendar-view\r\n{\r\n    margin:1rem!important;\r\n}\r\n@media only screen and (min-width:768px)\r\n{\r\n\t\r\n.calendar-view\r\n{\r\n\tmargin:3rem!important;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kZXIvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ1UsK0JBQStCO0FBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTs7SUFFMUgsZ0NBQWdDOzs7QUFHcEM7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFFQTs7SUFFSSxpQkFBaUI7O0lBRWpCLCtCQUErQjs7SUFFL0Isa0JBQWtCOztBQUV0QjtBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFHQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7O0FBRXRCO0FBRUE7OztBQUdBLFdBQVc7O0FBRVgsb0JBQW9CO0FBQ3BCO0FBR0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtBQUdGOztJQUVJLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsNkJBQTZCOztBQUVqQztBQUVBOzs7SUFHSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyw2QkFBNkI7O0FBRWpDO0FBR0E7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7OztBQUdBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kZXIvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEyOTVhOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCAzcHggIGdyZXk7XHJcbiAgIFxyXG5cclxufVxyXG4ubmF2YmFyLWJyYW5kXHJcbntcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZSBhXHJcbntcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCBza3libHVlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYXtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogN3B4IDMwcHg7IFxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5vbmxpbmVcclxue1xyXG5cclxuY29sb3I6Z3JlZW47XHJcblxyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuIFxyXG4ub25saW5lLWljb257XHJcblxyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuXHJcbi5idG4tcHJpbWFyeVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGluZGlnbyFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OjFweCAycHggNXB4IGluZGlnbztcclxuXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnlcclxue1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlIWltcG9ydGFudDtcclxuICAgIGNvbG9yOmluZGlnbztcclxuICAgIGJvcmRlcjoxcHggc29saWQgaW5kaWdvIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6MXB4IDJweCA1cHggaW5kaWdvO1xyXG5cclxufVxyXG5cclxuXHJcbi5jYWxlbmRhci12aWV3XHJcbntcclxuICAgIG1hcmdpbjoxcmVtIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpXHJcbntcclxuXHRcclxuLmNhbGVuZGFyLXZpZXdcclxue1xyXG5cdG1hcmdpbjozcmVtIWltcG9ydGFudDtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/calender/user/user.component.html":
/*!***************************************************!*\
  !*** ./src/app/calender/user/user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar  navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\" >\n      \n      <li class=\"nav-item not-active \" >\n        <a class=\"nav-link \" (click)=\"logoutFunction()\" style=\"color:paleturquoise!important;\">Logout </a>\n      </li>\n\n      <li class=\"nav-item active \" >\n          <a class=\"nav-link \" [routerLink]=\"['/login']\" style=\"color:skyblue!important;\">{{userName | uppercase}} \n            <span class=\"online\"> (online)</span> <span><i class=\"online-icon\"></i></span></a>\n            \n  \n        </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n<!-- calendar view  -->\n\n\n<div class='calendar-view'>\n    <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              mwlCalendarPreviousView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\n            >\n              Previous\n            </div>\n            <div\n              class=\"btn btn-outline-secondary\"\n              mwlCalendarToday\n              [(viewDate)]=\"viewDate\"\n            >\n              Today\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              mwlCalendarNextView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\n            >\n              Next\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h3 style=\"color:indigo\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"setView(CalendarView.Month)\"\n              [class.active]=\"view === CalendarView.Month\"\n            >\n              Month\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"setView(CalendarView.Week)\"\n              [class.active]=\"view === CalendarView.Week\"\n            >\n              Week\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"setView(CalendarView.Day)\"\n              [class.active]=\"view === CalendarView.Day\"\n            >\n              Day\n            </div>\n          </div>\n        </div>\n      </div>\n      <br />\n      <div [ngSwitch]=\"view\">\n        <mwl-calendar-month-view\n          *ngSwitchCase=\"CalendarView.Month\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          [activeDayIsOpen]=\"activeDayIsOpen\"\n          (dayClicked)=\"dayClicked($event.day)\" \n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\n        >\n        </mwl-calendar-month-view>\n        <mwl-calendar-week-view\n          *ngSwitchCase=\"CalendarView.Week\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\n        >\n        </mwl-calendar-week-view>\n        <mwl-calendar-day-view\n          *ngSwitchCase=\"CalendarView.Day\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\n        >\n        </mwl-calendar-day-view>\n    \n    \n      \n    \n</div>\n\n\n       \n  <ng-template #modalUpdateMeeting let-close=\"close\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Schedule Meeting</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <form>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                  <label for=\"hostid\">Host ID</label>\n                  <input type=\"text\" [(ngModel)]=\"hostId\" name=\"hostId\" class=\"form-control\" id=\"hostid\" placeholder=\"\" readonly=true>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <label for=\"hostname\">Host name</label>\n                  <input type=\"text\" [(ngModel)]=\"hostName\" name=\"hostName\" class=\"form-control\" id=\"hostname\" placeholder=\"\" readonly=true>\n                </div>\n              </div>\n              <hr>\n              <div class=\"form-row\">\n                  <div class=\"form-group col-md-6\">\n                    <label for=\"participantid\">Participant ID</label>\n                    <input type=\"text\" [(ngModel)]=\"participantId\" name=\"participantId\" class=\"form-control\" id=\"participantid\" placeholder=\"\" readonly=true>\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                    <label for=\"participantname\">Participant Name</label>\n                    <input type=\"text\" [(ngModel)]=\"participantName\" name=\"participantName\" class=\"form-control\" id=\"participantname\" placeholder=\"\" readonly=true>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-12\">\n                      <label for=\"participantemail\">Participant Email</label>\n                      <input type=\"text\" [(ngModel)]=\"participantEmail\" name=\"participantEmail\" class=\"form-control\" id=\"participantemail\" placeholder=\"\" readonly=true>\n                    </div>\n                  \n                  </div>\n                  <hr>\n\n                  <div class=\"form-row\">\n                      <div class=\"form-group col-md-6\">\n                        <label for=\"meetingtitle\">Meeting Title</label>\n                        <input type=\"text\" [(ngModel)]=\"meetingTitle\" name=\"meetingTitle\" class=\"form-control\" id=\"meetingtitle\" placeholder=\"\" >\n                      </div>\n                      \n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"meetingdescription\">Meeting Description</label>\n                            <input type=\"text\" [(ngModel)]=\"meetingDescription\" name=\"meetingDescription\" class=\"form-control\" id=\"meetingdescription\" placeholder=\"\" >\n                          </div>\n                    </div>\n                      <hr>\n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-12\">\n                              <label for=\"\">When is meeting going to happen ?</label>\n                            </div>\n                        \n                        </div> \n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"meetingstartdate\">Start Date</label>\n                            <input class=\"form-control\" type=\"date\" mwlFlatpickr name=\"meetingStartDate\" [(ngModel)]=\"meetingStartDate\"\n                            (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\"\n                            [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"  altFormat=\"F j, Y H:i\" placeholder=\"Not set\"/>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"meetingenddate\">End Date</label>\n                            \n                            <input class=\"form-control\" type=\"date\" mwlFlatpickr  name=\"meetingEndDate\" [(ngModel)]=\"meetingEndDate\"\n                            (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\"\n                            [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"  altFormat=\"F j, Y H:i\" placeholder=\"Not set\"/>\n                          </div>\n                        </div>\n                   \n\n\n              \n              <div class=\"form-group\">\n                <label for=\"meetingvenue\">Where is meeting going to happen ?</label>\n                <input type=\"text\" [(ngModel)]=\"meetingPlace\" [value]=\"modalData\" name=\"meetingPlace\" class=\"form-control\" id=\"meetingvenue\" placeholder=\"Venue\">\n              </div>\n            </form>  \n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"close()\">close</button>\n        \n      </div>\n    </ng-template>\n    "

/***/ }),

/***/ "./src/app/calender/user/user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/calender/user/user.component.ts ***!
  \*************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");












var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var UserComponent = /** @class */ (function () {
    function UserComponent(modal, meetingService, userService, avticatedRoute, toastr, socketService, router) {
        var _this = this;
        this.modal = modal;
        this.meetingService = meetingService;
        this.userService = userService;
        this.avticatedRoute = avticatedRoute;
        this.toastr = toastr;
        this.socketService = socketService;
        this.router = router;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        // socket scripts
        this.verifyUser = function () {
            _this.socketService.verifyUser().
                subscribe(function () {
                _this.socketService.setUser(_this.authToken);
            });
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('authToken');
        this.userInfo = this.userService.getLocalStorage();
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('userId');
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('userName');
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('authToken') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('userId') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('userName') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('authToken') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('userId') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].get('userName') != undefined &&
            this.userService.getLocalStorage() != null &&
            this.userService.getLocalStorage() != undefined) {
            if (this.userInfo.isAdmin == 'false') {
                this.verifyUser();
                this.notificationFromAdmin();
                this.getAllMeetingDetails();
                this.authErrorFunction();
            }
            else {
                this.router.navigate(['/admin-dashboard']);
            }
        }
        else {
            this.toastr.error('Either Logged out or some important parameters missing');
            this.router.navigate(['/error']);
        }
    };
    UserComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    UserComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    UserComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.meetingTitle = event.title;
        this.meetingStartDate = event.start;
        this.meetingEndDate = event.end;
        this.meetingDescription = event.meetingDescription;
        this.meetingPlace = event.meetingPlace;
        this.hostId = event.hostId;
        this.hostName = event.hostName;
        this.participantId = event.participantId;
        this.participantName = event.participantName;
        this.participantEmail = event.participantEmail;
        this.modal.open(this.modalUpdateMeeting, { size: 'lg' });
    };
    UserComponent.prototype.setView = function (view) {
        this.view = view;
    };
    UserComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    //functions
    UserComponent.prototype.getAllMeetingDetails = function () {
        var _this = this;
        this.meetingService.getAllMeetingDetails(this.userId, this.authToken)
            .subscribe(function (success) {
            if (success.status == 200) {
                var event_2 = success.data;
                for (var _i = 0, event_1 = event_2; _i < event_1.length; _i++) {
                    var data = event_1[_i];
                    data.title = data.meetingTitle,
                        data.start = new Date(data.meetingStartDate),
                        data.end = new Date(data.meetingEndDate),
                        data.color = colors.green,
                        data.actions = _this.actions,
                        data.remindMe = true;
                }
                _this.events = event_2;
                _this.refresh.next();
            }
            else {
                if (success.status == 404) {
                    _this.toastr.error(success.message);
                }
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Error getting meetin details");
                _this.router.navigate(['/pageNotFound']);
            }
            else {
                _this.toastr.warning("Error getting meetin details");
                _this.router.navigate(['/error']);
            }
        });
    }; //end get all meeting details 
    UserComponent.prototype.logoutFunction = function () {
        var _this = this;
        this.userService.logotFunction(this.userId, this.authToken)
            .subscribe(function (success) {
            if (success.status === 200) {
                localStorage.clear();
                ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].delete('authToken');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].delete('userId');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_10__["Cookie"].delete('userName');
                _this.socketService.disconnectedSocket();
                _this.socketService.exitSocket();
                _this.toastr.success(success.message);
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
            else {
                _this.toastr.error(success.message);
            }
        }, function (err) {
            if (err.status == 404) {
                _this.toastr.error("Logout Failed ", "Already Logged out or Invalid User");
            }
            else {
                _this.toastr.error("Some Error Occured", "Error!");
                // this.router.navigate() sever erroor page
            }
        });
    };
    // auth error 
    UserComponent.prototype.authErrorFunction = function () {
        var _this = this;
        this.socketService.listenAuthError().
            subscribe(function (data) {
            _this.toastr.info("Missing Authorization Key", "Please login again");
            _this.router.navigate(['/login']);
        });
    };
    // listening own id
    UserComponent.prototype.notificationFromAdmin = function () {
        var _this = this;
        this.socketService.notificationFromAdmin(this.userId)
            .subscribe(function (success) {
            _this.getAllMeetingDetails();
            _this.toastr.info('Update from admin', success.message);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalScheduleMeeting'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserComponent.prototype, "modalScheduleMeeting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalUpdateMeeting'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserComponent.prototype, "modalUpdateMeeting", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/calender/user/user.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]],
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/calender/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"],
            _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin-user/admin-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/admin-user/admin-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.not-active a:hover{\r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    border-radius: 5px;\r\n    \r\n}\r\n.Details\r\n{\r\n    position:relative;\r\n    top:2vh;\r\n}\r\n.card\r\n{\r\n    /* border:1px solid grey; */\r\n    box-shadow:2px 5px 5px grey;\r\n    height:21rem;\r\n}\r\nth\r\n{\r\n    background-color: #41295a;\r\n    font-weight: 24px;\r\n    color:white;\r\n    padding:5px;\r\n}\r\ntd,th\r\n{\r\n    padding:6px;\r\n    border:1px solid purple;\r\n    text-align:left;\r\n\r\n}\r\nth{\r\n    text-align: center;\r\n}\r\n.mt-10\r\n{\r\n    margin-top:20vh;\r\n}\r\n.card-title\r\n{\r\n    color: blue;\r\n    padding:5px 8px;\r\n    font-weight: 500;\r\n    \r\n}\r\n.offline\r\n{\r\n    color:white;\r\n    background-color:red;\r\n    border-radius: 30px;\r\n    padding:5px 3px;\r\n    width:30%;\r\n    text-align:center;\r\n    opacity: 0.8;\r\n    \r\n\r\n}\r\n.online\r\n{\r\n    color:white;\r\n    background-color:green;\r\n    border-radius: 30px;\r\n    padding:5px 3px;\r\n    width:30%;\r\n    text-align:center;\r\n    opacity: 0.8;\r\n    \r\n\r\n}\r\n.heading\r\n{\r\n    color:darkorchid;\r\n    text-decoration:underline;\r\n    text-align: center;\r\n    margin:2vw;\r\n    font-weight:bold;\r\n    \r\n}\r\na{\r\n    cursor: pointer;\r\n}\r\n.card:hover\r\n{\r\n    background-color:whitesmoke;\r\n    position: relative;\r\n    top:-1vh;\r\n    box-shadow: 0px 5px 15px blueviolet!important;\r\n}\r\n.form-control\r\n{\r\n    box-shadow: 2px 5px 10px grey!important;\r\n    \r\n}\r\n#filter\r\n{\r\n    position: relative;\r\n    z-index:1;\r\n    left:-25px;\r\n    top:1px;\r\n    color:black;\r\n    width:0;\r\n}\r\n@media only screen and (max-width: 1024px) {\r\n    \r\n    .today-agenda\r\n    {\r\n        margin:center;\r\n        width:100%!important;\r\n    }\r\n}\r\n@media only screen and (min-width:358px)\r\n{\r\n    .card\r\n    {\r\n        width:16rem;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width:1025px)\r\n{\r\n    .card\r\n    {\r\n        width:19rem;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FkbWluLXVzZXIvYWRtaW4tdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNVLCtCQUErQjtBQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0lBRTFILCtCQUErQjs7O0FBR25DO0FBQ0E7O0lBRUkscUJBQXFCO0FBQ3pCO0FBRUE7O0lBRUksaUJBQWlCOztJQUVqQixzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7QUFFdEI7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDO0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCO0FBR0E7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCOztBQUV0QjtBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixPQUFPO0FBQ1g7QUFFQTs7SUFFSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxlQUFlO0FBQ25CO0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCO0FBR0E7O0lBRUksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBR0E7O0lBRUksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw2Q0FBNkM7QUFDakQ7QUFFQTs7SUFFSSx1Q0FBdUM7O0FBRTNDO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7SUFDWCxPQUFPO0FBQ1g7QUFFQTs7SUFFSTs7UUFFSSxhQUFhO1FBQ2Isb0JBQW9CO0lBQ3hCO0FBQ0o7QUFFQTs7SUFFSTs7UUFFSSxXQUFXO0lBQ2Y7O0FBRUo7QUFDQTs7SUFFSTs7UUFFSSxXQUFXO0lBQ2Y7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYWRtaW4tdXNlci9hZG1pbi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEyOTVhOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCAzcHggZ3JleTtcclxuICAgXHJcblxyXG59XHJcbi5uYXZiYXItYnJhbmRcclxue1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlIGFcclxue1xyXG4gICAgcGFkZGluZzogN3B4IDQwcHg7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYXtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogN3B4IDMwcHg7IFxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5EZXRhaWxzXHJcbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjJ2aDtcclxufVxyXG5cclxuLmNhcmRcclxue1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBncmV5OyAqL1xyXG4gICAgYm94LXNoYWRvdzoycHggNXB4IDVweCBncmV5O1xyXG4gICAgaGVpZ2h0OjIxcmVtO1xyXG59XHJcbnRoXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTI5NWE7XHJcbiAgICBmb250LXdlaWdodDogMjRweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbnRkLHRoXHJcbntcclxuICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBwdXJwbGU7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcblxyXG59XHJcbnRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXQtMTBcclxue1xyXG4gICAgbWFyZ2luLXRvcDoyMHZoO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmc6NXB4IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5vZmZsaW5lXHJcbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzo1cHggM3B4O1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4ub25saW5lXHJcbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOjVweCAzcHg7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIFxyXG5cclxufVxyXG4uaGVhZGluZ1xyXG57XHJcbiAgICBjb2xvcjpkYXJrb3JjaGlkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjoydnc7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgXHJcbn1cclxuYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZDpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6LTF2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCBibHVldmlvbGV0IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbFxyXG57XHJcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggZ3JleSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4jZmlsdGVyXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGxlZnQ6LTI1cHg7XHJcbiAgICB0b3A6MXB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICB3aWR0aDowO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgXHJcbiAgICAudG9kYXktYWdlbmRhXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luOmNlbnRlcjtcclxuICAgICAgICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM1OHB4KVxyXG57XHJcbiAgICAuY2FyZFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjE2cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNXB4KVxyXG57XHJcbiAgICAuY2FyZFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjE5cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/admin-user/admin-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/admin-user/admin-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:rgb(250, 252, 253)\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n      \n        <li class=\"nav-item not-active \" >\n            <a class=\"nav-link \" (click)=\"goToMyMeetingFunction()\" style=\"color:paleturquoise!important;\">My Meetings </a>\n        \n          </li>\n    \n      \n        <li class=\"nav-item not-active \" >\n            <a class=\"nav-link \" (click)=\"logoutFunction()\" style=\"color:paleturquoise!important;\">Logout </a>\n        \n          </li>\n    \n          <li class=\"nav-item active \" >\n              <a class=\"nav-link \" [routerLink]=\"['/login']\" style=\"color:skyblue!important;\">{{userName | uppercase}} \n                <span class=\"\">(online)</span> <span><i class=\"online-icon\"></i></span></a>\n                \n      \n            </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n\n<div class=\"d-xl-flex flex-xl-nowrap d-sm-flex  flex-sm-wrap\" >\n   \n    <div class=\"container mt-5\" >\n        \n         <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\" Start searching for a user   \">\n          \n    \n      <div class=\"d-xl-flex flex-xl-nowrap d-sm-flex mb-3 flex-sm-wrap  mt-3\" *ngIf='allUsers;else second' >\n            <div class=\"p-1 mt-1 d-xl-flex flex-xl-wrap d-sm-flex flex-sm-wrap\" >\n            <div *ngFor='let user of allUsers | filter:searchText | paginate:{currentPage:p,itemsPerPage:12}'>\n                \n              <div class=\"card m-4\">\n       \n                    <div class=\"card-body\" >\n                        <h5 class=\"card-title\" >{{user.userName| uppercase}}</h5>\n                      \n                        <span *ngIf=\"user.status != 'online'\" ><p class=\"card-text offline  justify-content-center\"><b style=\"color:purple\"></b>{{user.status}}</p></span>\n                        \n                        <span *ngIf=\"user.status == 'online'\" ><p class=\"card-text online  justify-content-center\"><b style=\"color:purple\"></b>{{user.status}}</p></span>\n                       \n                        <hr style=\"border:1px solid darkgrey\">\n                        <h6 class=\"card-subtitle mb-3 text-muted \" style=\"color:#15c!important\" ><u>{{user.email}}</u></h6>\n                        <p class=\"card-text\" style=\"color:black\"><b style=\"color: black;opacity:0.8\">Mobile No. : </b> {{user.mobileNumber}}</p>\n                        <p class=\"card-text\" style=\"color:black\"><b style=\"color: black;opacity:0.8\">Country : </b>{{user.countryName}}</p>\n                        <a (click)=\"goToCalenderView(user.userId)\" class=\"card-link p-2\" style=\"color:whitesmoke;box-shadow:2px 2px 10px grey;background-color:slateblue;border-radius:5px\">Schedule meeting >>></a>\n                    </div>\n                      \n                  </div>\n              \n          </div>\n          </div>\n     </div> <!--end class flex-->\n     \n       <pagination-controls (pageChange)=\"p=$event\" class=\"my-pagination\"></pagination-controls>\n    \n    </div>\n    \n    <ng-template #second ><h4 style=\"text-align:center;color:purple;\" class=\"mt-5\">No users found</h4>\n    </ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/admin-user/admin-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/admin-user/admin-user.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserComponent", function() { return AdminUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AdminUserComponent = /** @class */ (function () {
    function AdminUserComponent(meetingService, userService, toastr, socketService, router) {
        var _this = this;
        this.meetingService = meetingService;
        this.userService = userService;
        this.toastr = toastr;
        this.socketService = socketService;
        this.router = router;
        //socket functions
        //verify user event funtion
        this.verifyUser = function () {
            _this.socketService.verifyUser().
                subscribe(function (success) {
                _this.socketService.setUser(_this.authToken);
            }, function (error) {
                _this.router.navigate(['/error']);
            });
        }; //end veify user function
        //get online user list from socket
        this.getOnlineUser = function () {
            _this.socketService.onlineUserList().
                subscribe(function (data) {
                _this.allOnlineUsersList = [];
                for (var x in data) {
                    _this.allOnlineUsersList.push(x);
                }
                for (var _i = 0, _a = _this.allUsers; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (_this.allOnlineUsersList.includes(user.userId)) {
                        user.status = 'online';
                    }
                    else {
                        user.status = 'offline';
                    }
                }
            });
        }; // end  get online user list
    }
    AdminUserComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId');
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName');
        this.userInfo = this.userService.getLocalStorage();
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName') != undefined &&
            this.userService.getLocalStorage() != null &&
            this.userService.getLocalStorage() != undefined) {
            if (this.userInfo.isAdmin == 'true') {
                this.verifyUser();
                this.getOnlineUser();
                this.getAllUserDetails();
                this.authErrorFunction();
            }
            else {
                this.router.navigate(['/user-dashboard/meeting']);
            }
        }
        else {
            this.toastr.error('Either Logged out or some important parameters missing');
            this.router.navigate(['/error']);
        }
    };
    //get all user details starts here
    AdminUserComponent.prototype.getAllUserDetails = function () {
        var _this = this;
        if (this.authToken != null) {
            this.userService.getAllUsers(this.authToken)
                .subscribe(function (success) {
                if (success.status === 200) {
                    _this.allUsers = success.data;
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, //end success func
            function (error) {
                _this.toastr.error('Some error occured');
            } //end error
            );
        } //end if 
        else {
            this.toastr.error('Authorization missing please login again');
            this.router.navigate(['/login']);
        }
    }; //end get all user function
    //go to calender view function
    AdminUserComponent.prototype.goToCalenderView = function (userId) {
        this.router.navigate(['/admin-dashboard/user-meeting/', userId]);
    }; // end calender view function
    // auth error 
    AdminUserComponent.prototype.authErrorFunction = function () {
        var _this = this;
        this.socketService.listenAuthError().
            subscribe(function (data) {
            _this.toastr.info("Missing Authorization Key", "Please login again");
            _this.router.navigate(['/login']);
        });
    };
    //go to meeting funtion  starts
    AdminUserComponent.prototype.goToMyMeetingFunction = function () {
        this.router.navigate(['/admin-dashboard/user-meeting/', this.userId]);
    }; // go to meeting function 
    //logout funtion 
    AdminUserComponent.prototype.logoutFunction = function () {
        var _this = this;
        this.userService.logotFunction(this.userId, this.authToken)
            .subscribe(function (success) {
            if (success.status === 200) {
                localStorage.clear();
                ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authToken');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userId', '/');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName', '/');
                _this.socketService.disconnectedSocket();
                _this.socketService.disconnect();
                _this.toastr.success(success.message);
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
            else if (success.status == 404) {
                _this.toastr.error('Already logout or invalid authorization token ! login again');
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error(success.message);
                _this.router.navigate(['/error']);
            }
        }, function (err) {
            if (err.status == 404) {
                _this.toastr.error("Logout Failed ", "Already Logged out or Invalid User");
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error("Some Error Occured", "Error!");
                _this.router.navigate(['/error']);
            }
        });
    }; // end logout function
    AdminUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user',
            template: __webpack_require__(/*! ./admin-user.component.html */ "./src/app/dashboard/admin-user/admin-user.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]],
            styles: [__webpack_require__(/*! ./admin-user.component.css */ "./src/app/dashboard/admin-user/admin-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AdminUserComponent);
    return AdminUserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user/admin-user.component */ "./src/app/dashboard/admin-user/admin-user.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_4__["AdminUserComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'admin-dashboard',
                        component: _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_4__["AdminUserComponent"],
                    }
                ])
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/error-page/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/error-page/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.card\r\n{\r\n    box-shadow: 5px 0px 10px darkmagenta;\r\n}\r\nh1\r\n{\r\n    font-size:6vw;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}\r\n.btn\r\n{\r\n    background-color: #2F0743;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZS9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNVLCtCQUErQjtBQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0lBRTFILGdDQUFnQzs7O0FBR3BDO0FBQ0E7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksaUJBQWlCOztJQUVqQixzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7QUFFdEI7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDO0FBR0E7OztJQUdJLHNDQUFzQzs7SUFFdEMsa0JBQWtCOzs7O0FBSXRCO0FBR0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDO0FBQ0E7O0lBRUksYUFBYTtJQUNiO0FBQ0o7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZS9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciBcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzQxMjk1YTsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkYwNzQzLCAjNDEyOTVhKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggM3B4ICBncmV5O1xyXG4gICBcclxuXHJcbn1cclxuLm5hdmJhci1icmFuZFxyXG57XHJcbiAgICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZSBhXHJcbntcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcGFsZXR1cnF1b2lzZTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxucFxyXG57XHJcbiAgICBjb2xvcjogbWVkaXVtb3JjaGlkO1xyXG59XHJcblxyXG4ubm90LWFjdGl2ZSBhe1xyXG4gICAgcGFkZGluZzogN3B4IDQwcHg7XHJcbiAgICBib3JkZXI6IDNweCB3aGl0ZXNtb2tlIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYTpob3ZlcntcclxuXHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDdweCAzMHB4OyBcclxufVxyXG5cclxuLmNhcmRcclxue1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCAxMHB4IGRhcmttYWdlbnRhO1xyXG59XHJcbmgxXHJcbntcclxuICAgIGZvbnQtc2l6ZTo2dnc7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxufVxyXG4uYnRuXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjA3NDM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/error-page/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/error-page/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n</nav>\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div style=\"margin-top: 8vh;\" class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\n        <div class=\"card border-info\">\n    \n          <div class=\"card-body text-center\">\n            <div class=\"text-center\">\n              \n                <div >\n                    <h5> <span style=\"color:Tomato\">Oops! </span></h5>\n                    <h3>Internal Server Error</h3>\n                </div>\n                \n                  <div >\n                      <h1> <span style=\"color:red \"> 500 :(   </span> </h1>\n                    </div>\n\n                    <div >\n                           </div>\n                      \n                  \n              \n              <div>\n                  \n              </div>\n       \n            </div>\n          </div>\n    \n          <div class=\"card-footer text-center\">\n            <div class=\"col-md-12 control\">\n                <button type=\"button\" class=\"btn\" (click)=\"goToLogin()\">\n                    Redirect to Login Page\n                  </button>\n                \n            </div>\n          </div>\n    \n        </div>\n    \n      </div>\n    \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/error-page/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.goToLogin = function () {
        this.route.navigate(['/login']);
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error-page/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error-page/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/meeting.service.ts":
/*!************************************!*\
  !*** ./src/app/meeting.service.ts ***!
  \************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.baseUrl = 'http://api.meetinplanner.xyz/api/v1.0.0/meeting';
    }
    //functions  start here 
    MeetingService.prototype.createMeeting = function (meetingData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('meetingTitle', meetingData.meetingTitle)
            .set('hostId', meetingData.hostId)
            .set('hostName', meetingData.hostName)
            .set('participantId', meetingData.participantId)
            .set('participantName', meetingData.participantName)
            .set('participantEmail', meetingData.participantEmail)
            .set('meetingDescription', meetingData.meetingDescription)
            .set('meetingStartDate', meetingData.meetingStartDate)
            .set('meetingEndDate', meetingData.meetingEndDate)
            .set('meetingPlace', meetingData.meetingPlace)
            .set('authToken', meetingData.authToken);
        return this.http.post(this.baseUrl + "/create", params);
    }; //end create meeting
    // get meeting details
    MeetingService.prototype.getMeetingDetails = function (meetingId, authToken) {
        return this.http.get(this.baseUrl + "/details/" + meetingId + "?authtoken=" + authToken);
    };
    //get all meeting details
    MeetingService.prototype.getAllMeetingDetails = function (userId, authToken) {
        return this.http.get(this.baseUrl + "/view/all/" + userId + "?authToken=" + authToken);
    };
    //update meeting
    MeetingService.prototype.updateMeeting = function (meetingData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('meetingTitle', meetingData.meetingTitle)
            .set('meetingDescription', meetingData.meetingDescription)
            .set('meetingStartDate', meetingData.meetingStartDate)
            .set('meetingEndDate', meetingData.meetingEndDate)
            .set('meetingPlace', meetingData.meetingPlace)
            .set('authToken', meetingData.authToken)
            .set('participantEmail', meetingData.participantEmail);
        return this.http.put(this.baseUrl + "/update/" + meetingData.meetingId, params);
    }; //end update meeting
    MeetingService.prototype.deleteMeeting = function (meetingId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', authToken);
        return this.http.post(this.baseUrl + "/delete/" + meetingId, params);
    };
    MeetingService.prototype.sentNotifications = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', authToken)
            .set('userId', userId);
        return this.http.post(this.baseUrl + "/sendNotifications", params);
    };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.card\r\n{\r\n    box-shadow: 5px 0px 10px darkmagenta;\r\n}\r\nh1\r\n{\r\n    font-size:6vw;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}\r\n.btn\r\n{\r\n    background-color: #2F0743;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDVSwrQkFBK0I7QUFDakcsdURBQXVELEVBQUUscUVBQXFFOztJQUUxSCxnQ0FBZ0M7OztBQUdwQztBQUNBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJLGlCQUFpQjs7SUFFakIsc0NBQXNDOztJQUV0QyxrQkFBa0I7O0FBRXRCO0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQztBQUdBOzs7SUFHSSxzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7OztBQUl0QjtBQUdBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUVBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBOztJQUVJLGFBQWE7SUFDYjtBQUNKO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEyOTVhOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCAzcHggIGdyZXk7XHJcbiAgIFxyXG5cclxufVxyXG4ubmF2YmFyLWJyYW5kXHJcbntcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlIGFcclxue1xyXG4gICAgcGFkZGluZzogN3B4IDQwcHg7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG5wXHJcbntcclxuICAgIGNvbG9yOiBtZWRpdW1vcmNoaWQ7XHJcbn1cclxuXHJcbi5ub3QtYWN0aXZlIGF7XHJcbiAgICBwYWRkaW5nOiA3cHggNDBweDtcclxuICAgIGJvcmRlcjogM3B4IHdoaXRlc21va2UhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubm90LWFjdGl2ZSBhOmhvdmVye1xyXG5cclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHBhbGV0dXJxdW9pc2U7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogN3B4IDMwcHg7IFxyXG59XHJcblxyXG4uY2FyZFxyXG57XHJcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDEwcHggZGFya21hZ2VudGE7XHJcbn1cclxuaDFcclxue1xyXG4gICAgZm9udC1zaXplOjZ2dztcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG59XHJcbi5idG5cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGMDc0MztcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n</nav>\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div style=\"margin-top: 8vh;\" class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\n        <div class=\"card border-info\">\n    \n          <div class=\"card-body text-center\">\n            <div class=\"text-center\">\n              \n                <div >\n                    <h5> <span style=\"color:Tomato\">Oops! </span></h5>\n                    <h3>Page not found</h3>\n                </div>\n                \n                  <div >\n                      <h1> <span style=\"color:red \"> 404 :(   </span> </h1>\n                    </div>\n\n                    <div >\n                        <h5>You are looking for something that doesn't actually exist.\n                          </h5>\n                           </div>\n                      \n                  \n              \n              <div>\n                  \n              </div>\n       \n            </div>\n          </div>\n    \n          <div class=\"card-footer text-center\">\n            <div class=\"col-md-12 control\">\n                <button type=\"button\" class=\"btn\" (click)=\"goBack()\">\n                    Go back \n                  </button>\n                \n            </div>\n          </div>\n    \n        </div>\n    \n      </div>\n    \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent(Location) {
        this.Location = Location;
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent.prototype.goBack = function () {
        this.Location.back();
    };
    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = "http://api.meetinplanner.xyz";
        //start listening verify user socket
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('verify-user', function (data) {
                    observer.next(data);
                });
            });
        }; //end verify user
        // online user list 
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('onlineuserlist', function (allOnlineUsers) {
                    observer.next(allOnlineUsers);
                });
            });
        }; //end online user list 
        this.disconnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function (data) {
                    observer.next(data);
                });
            });
        }; //end disconnect
        this.listenAuthError = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('auth-error', function (data) {
                    observer.next(data);
                });
            });
        };
        this.notificationFromAdmin = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                });
            });
        }; //end notification from admin
        //end event that has been listened
        //emitted events
        this.setUser = function (authToken) {
            _this.socket.emit('setuser', authToken);
        };
        this.notifyUsers = function (userData) {
            _this.socket.emit('notify-updates', userData);
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        };
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", '');
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.baseUrl);
    }
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://api.meetinplanner.xyz/api/v1.0.0/users';
        this.setLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        this.getLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
    }
    //signup function api call
    UserService.prototype.signup = function (signupdata) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', signupdata.firstName)
            .set('lastName', signupdata.lastName)
            .set('mobileNumber', signupdata.mobileNumber)
            .set('email', signupdata.email)
            .set('password', signupdata.password)
            .set('countryName', signupdata.countryName)
            .set('userName', signupdata.userName)
            .set('isAdmin', signupdata.isAdmin);
        return this.http.post(this.baseUrl + "/signup", params);
    };
    //login function api call
    UserService.prototype.login = function (logindata) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', logindata.email)
            .set('password', logindata.password);
        return this.http.post(this.baseUrl + "/login", params);
    };
    //reset password api call
    UserService.prototype.forgotPassword = function (resetdata) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', resetdata);
        return this.http.post(this.baseUrl + "/forgot-password", params);
    };
    //update password api call
    UserService.prototype.updatePassword = function (updatedata) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('validationToken', updatedata.validationToken)
            .set('password', updatedata.password);
        return this.http.put(this.baseUrl + "/update-password", params);
    };
    UserService.prototype.verifyEmail = function (userId) {
        console.log('called');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.put(this.baseUrl + "/verifyEmail", params);
    };
    UserService.prototype.getAllUsers = function (authToken) {
        return this.http.get(this.baseUrl + "/view/all?authToken=" + authToken);
    };
    UserService.prototype.getSingleUserDetails = function (userId, authToken) {
        return this.http.get(this.baseUrl + "/view/details/" + userId + "?authToken=" + authToken);
    };
    //logout function
    UserService.prototype.logotFunction = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.post(this.baseUrl + "/logout?authToken=" + authToken, params);
    };
    //get country names
    UserService.prototype.getCountryNames = function () {
        return this.http.get('./../assets/countryNames.json');
    };
    //get country code  numbers
    UserService.prototype.getCountryNumbers = function () {
        return this.http.get("./../assets/countryPhoneCodes.json");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.mt-10\r\n{\r\n    margin-top:6vw;\r\n}\r\n.card\r\n{\r\n    \r\n    border:1px solid purple;\r\n  box-shadow: 15px 15px 10px grey;\r\n    /* box-shadow: 0px 5px 5px 5px purple; */\r\n}\r\n.card-header\r\n{\r\n    background-color:purple;\r\n    color:white;\r\n}\r\n.card-title\r\n{\r\n    color:blue;\r\n}\r\ninput\r\n{\r\n    border:2px solid rebeccapurple;\r\n}\r\na\r\n{\r\n    background-color: #2F0743;\r\n    color:white!important;\r\n    margin-top:2vw;\r\n}\r\na:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ1UsK0JBQStCO0FBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTs7SUFFMUgsZ0NBQWdDOzs7QUFHcEM7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxpQkFBaUI7O0lBRWpCLHNDQUFzQzs7SUFFdEMsa0JBQWtCOztBQUV0QjtBQUVBOztJQUVJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7QUFHQTs7O0lBR0ksc0NBQXNDOztJQUV0QyxrQkFBa0I7Ozs7QUFJdEI7QUFHQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFHQTs7SUFFSSxjQUFjO0FBQ2xCO0FBRUE7OztJQUdJLHVCQUF1QjtFQUN6QiwrQkFBK0I7SUFDN0Isd0NBQXdDO0FBQzVDO0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUVBOztJQUVJLFVBQVU7QUFDZDtBQUNBOztJQUVJLDhCQUE4QjtBQUNsQztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUVBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIgXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM0MTI5NWE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkYwNzQzLCAjNDEyOTVhKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDNweCAgZ3JleTtcclxuICAgXHJcblxyXG59XHJcbi5uYXZiYXItYnJhbmRcclxue1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmUgYVxyXG57XHJcbiAgICBwYWRkaW5nOiA3cHggNDBweDtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHBhbGV0dXJxdW9pc2U7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbnBcclxue1xyXG4gICAgY29sb3I6IG1lZGl1bW9yY2hpZDtcclxufVxyXG5cclxuLm5vdC1hY3RpdmUgYXtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5ub3QtYWN0aXZlIGE6aG92ZXJ7XHJcblxyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcGFsZXR1cnF1b2lzZTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiA3cHggMzBweDsgXHJcbn1cclxuXHJcblxyXG4ubXQtMTBcclxue1xyXG4gICAgbWFyZ2luLXRvcDo2dnc7XHJcbn1cclxuXHJcbi5jYXJkXHJcbntcclxuICAgIFxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBwdXJwbGU7XHJcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IDEwcHggZ3JleTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDVweCBwdXJwbGU7ICovXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnB1cnBsZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcbmlucHV0XHJcbntcclxuICAgIGJvcmRlcjoycHggc29saWQgcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuYVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYwNzQzO1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDoydnc7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n       \n      <li class=\"nav-item not-active \" >\n        <a class=\"nav-link \" [routerLink]=\"['/login']\" style=\"color:paleturquoise!important;\">Login </a>\n      </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n<div class='container mt-10'>\n  \n\n<div class=\"card text-center\">\n    <div class=\"card-header\">\n      Forgot password    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Please provide your email to send details for reset password</h5>\n      \n      <div class=\"card-title mt-4\">\n          <form>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-lg-8  col-md-8 col-sm-12\">\n                  <input type=\"email\" #emailModal=\"ngModel\" [(ngModel)]=\"email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\" placeholder=\"email\" required=true>\n                  <div [hidden]=\"emailModal.pristine || emailModal.valid\" class=\"alert alert-danger\" >\n                    <div  *ngIf=\"emailModal.errors?.required\">\n                        Please enter your email\n                    </div>\n                    <div *ngIf=\"emailModal.errors?.pattern\">\n                      Please enter valid email\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </form>\n\n      </div>\n      <p class=\"card-text\">We will not share this email to anyone.</p>\n      <a class=\"btn\" (click)=\"forgotPasswordFunction()\">Submit</a>\n    </div>\n \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        this.userService.forgotPassword(this.email)
            .subscribe(function (success) {
            if (success.status == 200) {
                _this.toastr.success("Reset password details has been sent to your mail");
            }
            else {
                _this.toastr.error(success.message);
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.form-group input\r\n{\r\n    border-left:5px solid purple!important;\r\n    border:1px solid mediumorchid;\r\n}\r\n.form-group select\r\n{\r\n    \r\n    border-left:5px solid purple!important;\r\n    border:1px solid mediumorchid;\r\n}\r\n.input-group-text\r\n{\r\n    border-right:2px solid purple!important;\r\n    border:1px solid mediumorchid;\r\n}\r\n.form-group label\r\n{\r\n    color: indigo;\r\n}\r\n.custom-heading\r\n{\r\n    text-align: center;\r\n   \r\n    color:darkviolet;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNVLCtCQUErQjtBQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0lBRTFILGdDQUFnQzs7O0FBR3BDO0FBQ0E7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksaUJBQWlCOztJQUVqQixzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7QUFFdEI7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDO0FBR0E7OztJQUdJLHNDQUFzQzs7SUFFdEMsa0JBQWtCOzs7O0FBSXRCO0FBR0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBR0E7O0lBRUksc0NBQXNDO0lBQ3RDLDZCQUE2QjtBQUNqQztBQUVBOzs7SUFHSSxzQ0FBc0M7SUFDdEMsNkJBQTZCO0FBQ2pDO0FBRUE7O0lBRUksdUNBQXVDO0lBQ3ZDLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLGFBQWE7QUFDakI7QUFHQTs7SUFFSSxrQkFBa0I7O0lBRWxCLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEyOTVhOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCAzcHggIGdyZXk7XHJcbiAgIFxyXG5cclxufVxyXG4ubmF2YmFyLWJyYW5kXHJcbntcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlIGFcclxue1xyXG4gICAgcGFkZGluZzogN3B4IDQwcHg7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG5wXHJcbntcclxuICAgIGNvbG9yOiBtZWRpdW1vcmNoaWQ7XHJcbn1cclxuXHJcbi5ub3QtYWN0aXZlIGF7XHJcbiAgICBwYWRkaW5nOiA3cHggNDBweDtcclxuICAgIGJvcmRlcjogM3B4IHdoaXRlc21va2UhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubm90LWFjdGl2ZSBhOmhvdmVye1xyXG5cclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHBhbGV0dXJxdW9pc2U7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogN3B4IDMwcHg7IFxyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXRcclxue1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIHB1cnBsZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIG1lZGl1bW9yY2hpZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgc2VsZWN0XHJcbntcclxuICAgIFxyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIHB1cnBsZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIG1lZGl1bW9yY2hpZDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHRcclxue1xyXG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCBwdXJwbGUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBtZWRpdW1vcmNoaWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsXHJcbntcclxuICAgIGNvbG9yOiBpbmRpZ287XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWhlYWRpbmdcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICAgIGNvbG9yOmRhcmt2aW9sZXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n        <li class=\"nav-item not-active\">\n            <a class=\"nav-link\" [routerLink]=\"['/signup']\" style=\"color:paleturquoise!important;\">Signup <span class=\"sr-only\">(current)</span></a>\n          </li>\n      <li class=\"nav-item active \" >\n        <a class=\"nav-link \" href=\"#\" style=\"color:paleturquoise!important;\">Login </a>\n      </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\" style=\"color: darkviolet\">Meeting Planner</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" >\n            <h6  class=\"p-2\" style=\"color:white;background-color:darkorchid\"> 1) User Slots management system (Flow for Admin User)\n              </h6>\n            <p class=\"ml-3\">\n                Upon login, admin User will be taken to a dashboard, showing all\n                normal users in a list format\n                <br> Upon clicking on any user, admin will be taken to user's current\n                calendar, with current date selected, by default.\n                <br> Admin has an option to  add/delete/update meetings on any day, by\n                clicking on a appropriate day-cell/timeline.\n                \n            </p>\n\n            <h6  class=\"p-2\" style=\"color:white;background-color:darkorchid\"> 2)User Slots management system (Flow for normal User) \n              </h6>\n            <p class=\"ml-3\"> \n              Upon login, normal User will be taken to a dashboard showing his\n                current months', planned meetings, in the form of a calendar. \n                <br> User will be able to only view his meeting slots and he will not be\n                able to make any changes\n            </p>\n            \n\n            <h6  class=\"p-2\" style=\"color:white;background-color:darkorchid\"> 3) User alerts management system</h6>\n            <p class=\"ml-3\">\n                Normal User will also be notified in real time, though an alert if he is\n                online, and email (irrespective of whether he is online or offline), when\n                <br>\n                A meeting is created by admin\n                <br>A meeting is changed by admin\n                 <br>1 minute before meeting, with an option to snooze or dismiss. If\n                snoozed, alert will come again in 5 seconds, if snoozed again, it\n                will re-appear in next 5 seconds and so on. Once dismissed,\n                alert will no longer appear\n            </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" style=\"background-color: darkviolet\" >Close</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n<div class=\"container\">\n  <div class=\"d-xl-flex flex-xl-nowrap d-sm-flex mb-3 flex-sm-wrap  mt-5\">\n      <div class=\"p-2 m-3 w-75\" >\n          <div class=\"jumborton\">\n                  <h1 class=\"display-6\" style=\"color: darkviolet\">Welcome to Meeting Planner</h1>\n                  <p class=\"lead\" style=\"color:mediumorchid\">This is a simple meeting planner where you can schedule your meeting in a easy way </p>\n                  <hr class=\"my-4\" style=\"border-top:2px solid darkviolet\">\n                  <p class=\"display-6\" style=\"color: darkviolet\">You will get notification and alerts(if you are online) before 5 mins of meeting and has snooze option.</p>\n                  <button type=\"button\" class=\"btn btn-lg\"  data-toggle=\"modal\" data-target=\"#exampleModalCenter\" style=\"background-color:purple;color:white\" >more</button>\n                \n          </div>\n      </div>\n\n      <div class=\"p-2 m-3 w-75\" >\n          <h6 class=\"custom-heading\">login here</h6>\n          <hr>\n          <div class=\"jumborton\">\n            <form>\n\n\n                    \n              <div class=\"form-row\">\n                  <div class=\"form-group col-md-12\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" [(ngModel)]='email' pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name='email' #mail='ngModel' class=\"form-control\" id=\"email\" placeholder=\"email\" required>\n                    <div [hidden]=\"mail.pristine || mail.valid\" class=\"alert alert-warning\">\n                        <div *ngIf=\"mail.errors?.required\">\n                            Please enter email\n                        </div>\n                        <div *ngIf=\"mail.errors?.pattern\">\n                          please enter valid mail address\n                        </div>\n\n                    </div>\n                 \n                  </div>\n                  <div class=\"form-group col-md-12\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" [(ngModel)]='password' (keydown)=\"loginUsingKeypress($event)\" pattern=\"^[A-Za-z0-9@#^&?$!%]{8,14}$\" name=\"password\" minlength=\"8\" #pass='ngModel' class=\"form-control\" style=\"border-left:5px solid darkviolet\" id=\"password\" placeholder=\"password\" required>\n                    <div [hidden]='pass.pristine || pass.valid' class=\"alert alert-warning\">\n                      <div *ngIf='pass.errors?.required'>\n                        please enter password\n                      </div>\n                      <div *ngIf=\"pass.errors?.pattern\">\n                          please enter valid password \n                      </div>\n                      <div *ngIf=\"pass.errors?.minlength\">\n                          password must have 8 characters\n                      </div>\n\n\n                    </div>\n                  \n                  </div>\n                </div>\n               \n              <button type=\"button\" (click)=\"loginFunction()\" class=\"m-2 btn btn-primary\" style=\"background-color: purple;border:none\">Sign in</button>\n              <button type=\"button\" (click)=\"goToForgotPasswordFunction()\" class=\"m-2 btn btn-primary\" style=\"background-color: purple;border:none\">Forgot Password</button>\n            \n            </form>\n      </div>\n\n      </div>\n    </div>\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, userService, Router, location) {
        var _this = this;
        this.toastr = toastr;
        this.userService = userService;
        this.Router = Router;
        this.location = location;
        this.goToAdminDashboard = function () {
            _this.Router.navigate(['/admin-dashboard']);
        };
        this.goToNormalDashboard = function () {
            _this.Router.navigate(['/user-dashboard/meeting']);
        };
        this.loginUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.loginFunction();
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken'));
        console.log(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'));
        console.log(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'));
        console.log(this.userService.getLocalStorage());
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName') != null &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') != undefined &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName') != '' &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken') != '' &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') != '' &&
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName') != undefined &&
            this.userService.getLocalStorage() != null &&
            this.userService.getLocalStorage() != undefined) {
            var userDetails = this.userService.getLocalStorage();
            if (userDetails.isAdmin === 'true') {
                this.goToAdminDashboard();
            }
            else {
                this.goToNormalDashboard();
            }
        }
    };
    //got to login starts
    //login function starts
    LoginComponent.prototype.loginFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning('Email is missing');
        }
        else if (!this.password) {
            this.toastr.warning('password is missing');
        }
        else {
            var logindata = {
                email: this.email,
                password: this.password
            };
            this.userService.login(logindata)
                .subscribe(function (success) {
                if (success.status === 200) {
                    _this.toastr.success('Login Success ');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authToken', success.data.authToken);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userId', success.data.userDetails.userId);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userName', success.data.userDetails.userName);
                    _this.userService.setLocalStorage(success.data.userDetails);
                    setTimeout(function () {
                        if (success.data.userDetails.isAdmin === 'true') {
                            _this.goToAdminDashboard();
                        }
                        else {
                            _this.goToNormalDashboard();
                        }
                    }, 3000);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Login Failed", "User Not Found!");
                    _this.Router.navigate(['/error']);
                }
                else if (error.status == 400) {
                    _this.toastr.warning("Login Failed", "Wrong password");
                }
                else {
                    _this.toastr.warning("Login Failed", "Some error occured");
                    _this.Router.navigate(['/error']);
                }
            });
        }
    };
    LoginComponent.prototype.goToForgotPasswordFunction = function () {
        this.Router.navigate(['/forgot-password']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.mt-10\r\n{\r\n    margin-top:7vw;\r\n}\r\n.card\r\n{\r\n    \r\n    border:1px solid purple;\r\n  box-shadow: 15px 15px 10px grey;\r\n    /* box-shadow: 0px 5px 5px 5px purple; */\r\n}\r\n.card-header\r\n{\r\n    background-color:purple;\r\n    color:white;\r\n}\r\n.card-title\r\n{\r\n    color:blue;\r\n}\r\ninput\r\n{\r\n    border:2px solid rebeccapurple;\r\n}\r\na\r\n{\r\n    background-color: #2F0743;\r\n    color:white!important;\r\n    margin-top:2vw;\r\n}\r\na:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNVLCtCQUErQjtBQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0lBRTFILGdDQUFnQzs7O0FBR3BDO0FBQ0E7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksaUJBQWlCOztJQUVqQixzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7QUFFdEI7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDO0FBR0E7OztJQUdJLHNDQUFzQzs7SUFFdEMsa0JBQWtCOzs7O0FBSXRCO0FBR0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksY0FBYztBQUNsQjtBQUVBOzs7SUFHSSx1QkFBdUI7RUFDekIsK0JBQStCO0lBQzdCLHdDQUF3QztBQUM1QztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7QUFDQTs7SUFFSSw4QkFBOEI7QUFDbEM7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFFQTs7SUFFSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciBcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzQxMjk1YTsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyRjA3NDMsICM0MTI5NWEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkYwNzQzLCAjNDEyOTVhKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggM3B4ICBncmV5O1xyXG4gICBcclxuXHJcbn1cclxuLm5hdmJhci1icmFuZFxyXG57XHJcbiAgICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZSBhXHJcbntcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcGFsZXR1cnF1b2lzZTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxucFxyXG57XHJcbiAgICBjb2xvcjogbWVkaXVtb3JjaGlkO1xyXG59XHJcblxyXG4ubm90LWFjdGl2ZSBhe1xyXG4gICAgcGFkZGluZzogN3B4IDQwcHg7XHJcbiAgICBib3JkZXI6IDNweCB3aGl0ZXNtb2tlIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLm5vdC1hY3RpdmUgYTpob3ZlcntcclxuXHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBwYWxldHVycXVvaXNlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDdweCAzMHB4OyBcclxufVxyXG5cclxuLm10LTEwXHJcbntcclxuICAgIG1hcmdpbi10b3A6N3Z3O1xyXG59XHJcblxyXG4uY2FyZFxyXG57XHJcbiAgICBcclxuICAgIGJvcmRlcjoxcHggc29saWQgcHVycGxlO1xyXG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxMHB4IGdyZXk7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggNXB4IDVweCA1cHggcHVycGxlOyAqL1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpwdXJwbGU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGVcclxue1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG5pbnB1dFxyXG57XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuXHJcbmFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGMDc0MztcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6MnZ3O1xyXG59XHJcblxyXG5hOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n    \n      \n    </ul>\n  \n    \n  </div>\n</nav>\n\n<div class='container mt-10'>\n  \n\n<div class=\"card text-center\">\n    <div class=\"card-header\">\n      Reset password    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Please provide new password for your account</h5>\n      \n      <div class=\"card-title mt-4\">\n          <form>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-lg-6  col-md-6 col-sm-12\">\n                  <input type=\"password\" #passwordModal=\"ngModel\" [(ngModel)]=\"password\" name=\"password\" pattern=\"^[A-Za-z0-9@#^&?$!%]{8,14}$\" class=\"form-control\" placeholder=\"Password\" required=true>\n                  <div [hidden]=\"passwordModal.pristine || passwordModal.valid\" class=\"alert alert-danger\" >\n                    <div  *ngIf=\"passwordModal.errors?.required\">\n                        Please enter password\n                    </div>\n                    <div *ngIf=\"passwordModal.errors?.pattern\">\n                      Please enter valid passwords\n                    </div>\n                  </div>\n                </div>\n             \n                    \n                \n              </div>\n              <div class=\"row justify-content-center mt-4\">\n                  <div class=\"col-lg-6  col-md-6 col-sm-12\">\n                    <input type=\"password\" #repasswordModal=\"ngModel\" [(ngModel)]=\"retypepassword\" name=\"retypepassword\" pattern=\"^[A-Za-z0-9@#^&?$!%]{8,14}$\" class=\"form-control\" placeholder=\"Retype password\" required=true>\n                    <div [hidden]=\"repasswordModal.pristine || repasswordModal.valid\" class=\"alert alert-danger\" >\n                      <div  *ngIf=\"repasswordModal.errors?.required\">\n                          Please enter password\n                      </div>\n                      <div *ngIf=\"repasswordModal.errors?.pattern\">\n                        Please enter valid passwords\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </form>\n\n      </div>\n      <p class=\"card-text\">We will not share this email to anyone.</p>\n      <a class=\"btn\" (click)=\"resetPasswordFunction()\">Submit</a>\n    </div>\n \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(userService, toastr, route, _route) {
        this.userService = userService;
        this.toastr = toastr;
        this.route = route;
        this._route = _route;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.authToken = this.route.snapshot.queryParamMap.get('authToken');
    };
    ResetPasswordComponent.prototype.resetPasswordFunction = function () {
        var _this = this;
        if (!this.password) {
            this.toastr.warning('Password is missing');
        }
        else if (!this.retypepassword) {
            this.toastr.warning('Password is missing');
        }
        else if (this.password != this.retypepassword) {
            this.toastr.warning('Password mismatch');
        }
        else {
            var data = {
                validationToken: this.authToken,
                password: this.password
            };
            this.userService.updatePassword(data)
                .subscribe(function (success) {
                if (success.status == 200) {
                    _this.toastr.success('Password changed successfully');
                    setTimeout(function () {
                        _this._route.navigate(['/login']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
            });
        }
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.form-group input\r\n{\r\n    border-left:5px solid purple!important;\r\n    border:1px solid mediumorchid;\r\n}\r\n.form-group select\r\n{\r\n    \r\n    border-left:5px solid purple!important;\r\n    border:1px solid mediumorchid;\r\n}\r\n.input-group-text\r\n{\r\n    border-right:2px solid purple!important;\r\n    border:1px solid mediumorchid;\r\n}\r\n.form-group label\r\n{\r\n    color: indigo;\r\n}\r\n.custom-heading\r\n{\r\n    text-align: center;\r\n   \r\n    color:darkviolet;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDVSwrQkFBK0I7QUFDakcsdURBQXVELEVBQUUscUVBQXFFOztJQUUxSCxnQ0FBZ0M7OztBQUdwQztBQUNBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJLGlCQUFpQjs7SUFFakIsc0NBQXNDOztJQUV0QyxrQkFBa0I7O0FBRXRCO0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQztBQUdBOzs7SUFHSSxzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7OztBQUl0QjtBQUdBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUdBOztJQUVJLHNDQUFzQztJQUN0Qyw2QkFBNkI7QUFDakM7QUFFQTs7O0lBR0ksc0NBQXNDO0lBQ3RDLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLHVDQUF1QztJQUN2Qyw2QkFBNkI7QUFDakM7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCO0FBR0E7O0lBRUksa0JBQWtCOztJQUVsQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIgXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM0MTI5NWE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkYwNzQzLCAjNDEyOTVhKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDNweCAgZ3JleTtcclxuICAgXHJcblxyXG59XHJcbi5uYXZiYXItYnJhbmRcclxue1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmUgYVxyXG57XHJcbiAgICBwYWRkaW5nOiA3cHggNDBweDtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHBhbGV0dXJxdW9pc2U7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbnBcclxue1xyXG4gICAgY29sb3I6IG1lZGl1bW9yY2hpZDtcclxufVxyXG5cclxuLm5vdC1hY3RpdmUgYXtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5ub3QtYWN0aXZlIGE6aG92ZXJ7XHJcblxyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcGFsZXR1cnF1b2lzZTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiA3cHggMzBweDsgXHJcbn1cclxuXHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dFxyXG57XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgcHVycGxlIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgbWVkaXVtb3JjaGlkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBzZWxlY3Rcclxue1xyXG4gICAgXHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgcHVycGxlIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgbWVkaXVtb3JjaGlkO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dFxyXG57XHJcbiAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHB1cnBsZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIG1lZGl1bW9yY2hpZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWxcclxue1xyXG4gICAgY29sb3I6IGluZGlnbztcclxufVxyXG5cclxuXHJcbi5jdXN0b20taGVhZGluZ1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgY29sb3I6ZGFya3Zpb2xldDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\" style=\"color:paleturquoise!important;\">Signup <span class=\"sr-only\">(current)</span></a>\n          </li>\n      <li class=\"nav-item not-active \" >\n        <a class=\"nav-link \" [routerLink]=\"['/login']\" style=\"color:paleturquoise!important;\">Login </a>\n      </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\" style=\"color: darkviolet\">Meeting Planner</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" >\n            <h6  class=\"p-2\" style=\"color:white;background-color:darkorchid\"> 1) User Slots management system (Flow for Admin User)\n              </h6>\n            <p class=\"ml-3\">\n                Upon login, admin User will be taken to a dashboard, showing all\n                normal users in a list format\n                <br> Upon clicking on any user, admin will be taken to user's current\n                calendar, with current date selected, by default.\n                <br> Admin has an option to  add/delete/update meetings on any day, by\n                clicking on a appropriate day-cell/timeline.\n                \n            </p>\n\n            <h6  class=\"p-2\" style=\"color:white;background-color:darkorchid\"> 2)User Slots management system (Flow for normal User) \n              </h6>\n            <p class=\"ml-3\"> \n              Upon login, normal User will be taken to a dashboard showing his\n                current months', planned meetings, in the form of a calendar. \n                <br> User will be able to only view his meeting slots and he will not be\n                able to make any changes\n            </p>\n            \n\n            <h6  class=\"p-2\" style=\"color:white;background-color:darkorchid\"> 3) User alerts management system</h6>\n            <p class=\"ml-3\">\n                Normal User will also be notified in real time, though an alert if he is\n                online, and email (irrespective of whether he is online or offline), when\n                <br>\n                A meeting is created by admin\n                <br>A meeting is changed by admin\n                 <br>1 minute before meeting, with an option to snooze or dismiss. If\n                snoozed, alert will come again in 5 seconds, if snoozed again, it\n                will re-appear in next 5 seconds and so on. Once dismissed,\n                alert will no longer appear\n            </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" style=\"background-color: darkviolet\" >Close</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n<div class=\"container\">\n  <div class=\"d-xl-flex flex-xl-nowrap d-sm-flex mb-3 flex-sm-wrap  mt-5\">\n      <div class=\"p-2 m-3 w-75\">\n          <div class=\"jumborton\">\n                  <h1 class=\"display-6\" style=\"color: darkviolet\">Welcome to Meeting Planner</h1>\n                  <p class=\"lead\" style=\"color:mediumorchid\">This is a simple meeting planner where you can schedule your meeting in a easy way </p>\n                  <hr class=\"my-4\" style=\"border-top:2px solid darkviolet\">\n                  <p class=\"display-6\" style=\"color: darkviolet\">You will get notification and alerts(if you are online) before 5 mins of meeting and has snooze option.</p>\n                  <button type=\"button\" class=\"btn btn-lg\"  data-toggle=\"modal\" data-target=\"#exampleModalCenter\" style=\"background-color:purple;color:white\" >more</button>\n                \n          </div>\n      </div>\n\n      <div class=\"p-2 m-3 w-75\" >\n        \n          <h6 class=\"custom-heading\">Register here</h6>\n          <hr>\n          <div class=\"jumborton mt-2\">\n              <form>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"firstname\">Firstname</label>\n                      <input type=\"text\" [(ngModel)]='firstName' name='firstName' #firstname='ngModel' class=\"form-control\" id=\"firstname\" placeholder=\"firstname\" required>\n                      <div [hidden]=\"firstname.pristine || firstname.valid\" class=\"alert alert-warning\">\n                          <div *ngIf=\"firstname.errors?.required\">\n                              Please enter firstname\n                          </div>\n                      </div>\n                   \n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"lastname\">Lastname</label>\n                      <input type=\"text\" [(ngModel)]='lastName' name=\"lastName\" #lastname='ngModel' class=\"form-control\" style=\"border-left:5px solid darkviolet\" id=\"lastname\" placeholder=\"lastname\" required>\n                      <div [hidden]='lastname.pristine || lastname.valid' class=\"alert alert-warning\">\n                        <div *ngIf='lastname.errors?.required'>\n                          please enter lastname\n                        </div>\n                      </div>\n                    \n                    </div>\n                  </div>\n\n\n                  <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" [(ngModel)]='userName' pattern=\"^\\w+[\\-]+Admin$\" name=\"userName\" #user='ngModel' style=\"border-left:5px solid darkviolet\" class=\"form-control\" id=\"username\" placeholder=\"username\" required>\n                    <div [hidden]='user.pristine || user.valid' >\n                      <div *ngIf='user.errors?.required' class=\"alert alert-warning\">\n                        user name is required\n                      </div>\n                      \n             \n                        <div *ngIf=\"isAdmin == true && userName\" >\n                            <div *ngIf=\"user.errors?.pattern\" class=\"alert alert-warning\">\n                                Admin user should have '-Admin' at the end of User Name\n                              </div>\n                        </div>\n\n                        \n                    </div>\n                  </div>\n\n  \n\n\n                  <div class=\"form-row\">\n\n                      <div class=\"form-group col-md-4\">\n                          <label for=\"countrylist\">Country</label>\n                          <select [(ngModel)]=\"countryName\" #Country=\"ngModel\" name=\"countryName\" (change)=\"onclickCountryCode()\" (click)=\"onclickCountryCode()\" class=\"form-control\" id=\"inputCountry\" \n                         required>\n                          <option value=\"\">Select</option>\n                          <option *ngFor=\"let country of countryNames\" [value]=\"country.id\">{{country.name}}</option>\n                          </select>\n                      </div>\n\n\n                        <div class=\"form-group col-md-8\">\n                          <label for=\"mobileNumber\">MobileNumber</label>\n                          <div class=\"input-group\">\n                            <div class=\"input-group-text\">+{{countryCode}}</div>\n                              <input type=\"text\" #mobileNum=\"ngModel\" pattern=\"^\\d{10}$\" id=\"mobileNumber\" class=\"form-control\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\"\n                                placeholder=\"MobileNumber\" required>\n                                \n                            </div>\n                            <div [hidden]=\"mobileNum.pristine || mobileNum.valid\" class=\"alert alert-warning\">\n                                <div *ngIf=\"mobileNum.errors?.required\">\n                                    Please enter mobile number\n                               </div>\n                               <div *ngIf=\"mobileNum.errors?.pattern\">\n                                  Please enter valid mobile number\n                               </div>\n                            </div>\n                          </div>\n                        </div>\n\n\n\n                        \n                  <div class=\"form-row\">\n                      <div class=\"form-group col-md-6\">\n                        <label for=\"email\">email</label>\n                        <input type=\"email\" [(ngModel)]='email' pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name='email' #mail='ngModel' class=\"form-control\" id=\"email\" placeholder=\"email\" required>\n                        <div [hidden]=\"mail.pristine || mail.valid\" class=\"alert alert-warning\">\n                            <div *ngIf=\"mail.errors?.required\">\n                                Please enter email\n                            </div>\n                            <div *ngIf=\"mail.errors?.pattern\">\n                              please enter valid mail address\n                            </div>\n\n                        </div>\n                     \n                      </div>\n                      <div class=\"form-group col-md-6\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" [(ngModel)]='password'  pattern=\"^[A-Za-z0-9@#^&?$!%]{8,14}$\" name=\"password\" minlength=\"8\" #pass='ngModel' class=\"form-control\" style=\"border-left:5px solid darkviolet\" id=\"password\" placeholder=\"password\" required>\n                        <div [hidden]='pass.pristine || pass.valid' class=\"alert alert-warning\">\n                          <div *ngIf='pass.errors?.required'>\n                            please enter password\n                          </div>\n                          <div *ngIf=\"pass.errors?.pattern\">\n                              please enter valid password \n                          </div>\n                          <div *ngIf=\"pass.errors?.minlength\">\n                              password must have 8 characters\n                          </div>\n\n\n                        </div>\n                      \n                      </div>\n                    </div>\n                    <div class=\"input-group\">\n                        <div class=\"checkbox\">\n                          <label> \n                            <input id=\"inputAdmin\" [(ngModel)]=\"isAdmin\" (change)=\"changeIsAdminValue(isAdmin)\" type=\"checkbox\" name=\"isAdmin\" > \n                            Give me Admin access\n                          </label>\n                        </div>\n                      </div>\n\n                  <button type=\"button\" (click)=\"signupFunction()\" class=\"btn btn-primary\" style=\"background-color: purple;border:none\">Sign in</button>\n                </form>\n      </div>\n\n      </div>\n    </div>\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(toastr, userService, router) {
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.countryNames = [];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.getCountryNames();
        this.getCountryNumbers();
        this.isAdmin = false;
    };
    SignUpComponent.prototype.onclickCountryCode = function () {
        this.countryCode = this.allCountryCodes[this.countryName];
    };
    SignUpComponent.prototype.changeIsAdminValue = function (data) {
        this.isAdmin = data;
    };
    //check user name if its admin access
    SignUpComponent.prototype.validateUserName = function (name) {
        if (name.substr(name.length - 6, name.length - 1) == '-Admin') {
            return true;
        }
        else {
            return false;
        }
    };
    SignUpComponent.prototype.getCountryNumbers = function () {
        var _this = this;
        this.userService.getCountryNumbers()
            .subscribe(function (data) {
            _this.allCountryCodes = data;
        });
    };
    SignUpComponent.prototype.getCountryNames = function () {
        var _this = this;
        this.userService.getCountryNames()
            .subscribe(function (data) {
            _this.allCountryNames = data;
            for (var country in data) {
                var obj = {
                    id: country,
                    name: data[country]
                };
                _this.countryNames.push(obj);
                _this.countryNames = _this.countryNames.sort(function (first, second) {
                    return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : 1;
                });
            }
        });
    };
    SignUpComponent.prototype.getCountryCodes = function () {
        var _this = this;
        this.userService.getCountryNumbers().subscribe(function (data) {
            _this.allCountryCodes = data;
        });
    };
    SignUpComponent.prototype.goToLoginPage = function () {
        this.router.navigate(['/login']);
    };
    SignUpComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning('Firstname is missing');
        }
        else if (!this.lastName) {
            this.toastr.warning('lastname is missing');
        }
        else if (!this.userName) {
            this.toastr.warning('username is missing');
        }
        else if (!this.countryName) {
            this.toastr.warning('countryname is missing');
        }
        else if (!this.mobileNumber) {
            this.toastr.warning('mobilenumber is missing');
        }
        else if (!this.email) {
            this.toastr.warning('email is missing');
        }
        else if (!this.password) {
            this.toastr.warning('password is missing');
        }
        else {
            if (this.isAdmin == undefined) {
                this.isAdmin = false;
            }
            var signupdata = {
                firstName: this.firstName,
                lastName: this.lastName,
                userName: this.userName,
                email: this.email,
                password: this.password,
                countryName: this.countryName,
                mobileNumber: this.mobileNumber,
                isAdmin: this.isAdmin
            };
            this.userService.signup(signupdata)
                .subscribe(function (success) {
                if (success.status == 200) {
                    _this.toastr.success('User created Successfully. Verification has been send to your mail');
                    setTimeout(function () {
                        _this.goToLoginPage();
                    }, 2000);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.router.navigate(['/error']);
                }
                else if (error.status == 400) {
                    _this.toastr.warning("signup Failed", "Wrong password");
                }
                else {
                    _this.toastr.warning("signup Failed", "Some error occured");
                    _this.router.navigate(['/error']);
                }
            });
        }
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
                    },
                    {
                        path: 'signup',
                        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"]
                    },
                    {
                        path: 'user/resetPassword',
                        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]
                    },
                    {
                        path: 'forgot-password',
                        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]
                    },
                    {
                        path: 'verify-email/:userId',
                        component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailComponent"]
                    }
                ])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n    background: #41295a;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    box-shadow: 0 3px 20px 3px  grey;\r\n   \r\n\r\n}\r\n.navbar-brand\r\n{\r\n    color:white!important;\r\n}\r\n.active a\r\n{\r\n    padding: 7px 40px;\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n}\r\np\r\n{\r\n    color: mediumorchid;\r\n}\r\n.not-active a{\r\n    padding: 7px 40px;\r\n    border: 3px whitesmoke!important;\r\n    \r\n}\r\n.not-active a:hover{\r\n\r\n    \r\n    box-shadow: 1px 1px 10px paleturquoise;\r\n    \r\n    border-radius: 5px;\r\n\r\n    \r\n    \r\n}\r\n.nav-item {\r\n    \r\n    padding: 7px 30px; \r\n}\r\n.mt-10\r\n{\r\n    margin-top:6vw;\r\n}\r\n.card\r\n{\r\n    \r\n    border:1px solid purple;\r\n  box-shadow: 15px 15px 10px grey;\r\n    /* box-shadow: 0px 5px 5px 5px purple; */\r\n}\r\n.card-header\r\n{\r\n    background-color:purple;\r\n    color:white;\r\n}\r\n.card-title\r\n{\r\n    color:blue;\r\n}\r\ninput\r\n{\r\n    border:2px solid rebeccapurple;\r\n}\r\na\r\n{\r\n    background-color: #2F0743;\r\n    color:white!important;\r\n    margin-top:2vw;\r\n}\r\na:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ1UsK0JBQStCO0FBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTs7SUFFMUgsZ0NBQWdDOzs7QUFHcEM7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxpQkFBaUI7O0lBRWpCLHNDQUFzQzs7SUFFdEMsa0JBQWtCOztBQUV0QjtBQUVBOztJQUVJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7QUFHQTs7O0lBR0ksc0NBQXNDOztJQUV0QyxrQkFBa0I7Ozs7QUFJdEI7QUFHQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFHQTs7SUFFSSxjQUFjO0FBQ2xCO0FBRUE7OztJQUdJLHVCQUF1QjtFQUN6QiwrQkFBK0I7SUFDN0Isd0NBQXdDO0FBQzVDO0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUVBOztJQUVJLFVBQVU7QUFDZDtBQUNBOztJQUVJLDhCQUE4QjtBQUNsQztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUVBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIgXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM0MTI5NWE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkYwNzQzLCAjNDEyOTVhKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJGMDc0MywgIzQxMjk1YSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDNweCAgZ3JleTtcclxuICAgXHJcblxyXG59XHJcbi5uYXZiYXItYnJhbmRcclxue1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmUgYVxyXG57XHJcbiAgICBwYWRkaW5nOiA3cHggNDBweDtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHBhbGV0dXJxdW9pc2U7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbnBcclxue1xyXG4gICAgY29sb3I6IG1lZGl1bW9yY2hpZDtcclxufVxyXG5cclxuLm5vdC1hY3RpdmUgYXtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5ub3QtYWN0aXZlIGE6aG92ZXJ7XHJcblxyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcGFsZXR1cnF1b2lzZTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiA3cHggMzBweDsgXHJcbn1cclxuXHJcblxyXG4ubXQtMTBcclxue1xyXG4gICAgbWFyZ2luLXRvcDo2dnc7XHJcbn1cclxuXHJcbi5jYXJkXHJcbntcclxuICAgIFxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBwdXJwbGU7XHJcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IDEwcHggZ3JleTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDVweCBwdXJwbGU7ICovXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnB1cnBsZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcbmlucHV0XHJcbntcclxuICAgIGJvcmRlcjoycHggc29saWQgcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuYVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYwNzQzO1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDoydnc7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> <h3 style=\"color:skyblue\"> Meeting Planner</h3>\n  <hr>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end mr-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-5\" >\n       \n      <li class=\"nav-item not-active \" >\n        <a class=\"nav-link \" [routerLink]=\"['/login']\" style=\"color:paleturquoise!important;\">Login </a>\n      </li>\n    </ul>\n  \n    \n  </div>\n</nav>\n\n<div class='container mt-10'>\n  \n\n<div class=\"card text-center\">\n    <div class=\"card-header\">\n      Verify Account   </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{message}}</h5>\n      \n    </div>\n \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(route, useService, toastr, router) {
        this.route = route;
        this.useService = useService;
        this.toastr = toastr;
        this.router = router;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('userId');
        this.verifyEmail();
    };
    VerifyEmailComponent.prototype.verifyEmail = function () {
        var _this = this;
        this.useService.verifyEmail(this.userId)
            .subscribe(function (success) {
            console.log(success);
            _this.message = success.message;
            if (success.status == 200) {
                _this.toastr.success('User Verified successfully');
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                _this.toastr.error(_this.message);
                setTimeout(function () {
                    _this.router.navigate(['/error']);
                }, 3000);
            }
        });
        ;
    };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/user/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/user/verify-email/verify-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
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
    production: false
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\production\meetingPlanner\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map