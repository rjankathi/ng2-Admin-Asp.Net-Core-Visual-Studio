webpackJsonp([9],{

/***/ 465:
/* exports provided: LoginModule */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(/*! @angular/common */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(/*! @angular/forms */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(/*! ../../theme/nga.module */ 29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__(/*! ./login.component */ 622);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing__ = __webpack_require__(/*! ./login.routing */ 727);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginModule\", function() { return LoginModule; });\n\r\n\r\n\r\n\r\n\r\n\r\nvar LoginModule = (function () {\r\n    function LoginModule() {\r\n    }\r\n    LoginModule = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"NgModule\"])({\r\n            imports: [\r\n                __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"CommonModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_2__angular_forms__[\"ReactiveFormsModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_2__angular_forms__[\"FormsModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__[\"a\" /* NgaModule */],\r\n                __WEBPACK_IMPORTED_MODULE_5__login_routing__[\"a\" /* routing */]\r\n            ],\r\n            declarations: [\r\n                __WEBPACK_IMPORTED_MODULE_4__login_component__[\"a\" /* Login */]\r\n            ]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], LoginModule);\r\n    return LoginModule;\r\n}());\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDY1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUudHM/NzNiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdhTW9kdWxlIH0gZnJvbSAnLi4vLi4vdGhlbWUvbmdhLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgcm91dGluZyB9ICAgICAgIGZyb20gJy4vbG9naW4ucm91dGluZyc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZ2FNb2R1bGUsXHJcbiAgICByb3V0aW5nXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvZ2luXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLm1vZHVsZS50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7QUFBQTtBQUFBO0FBWkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 622:
/* exports provided: Login */
/* exports used: Login */
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(/*! @angular/forms */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_login_scss__ = __webpack_require__(/*! style-loader!./login.scss */ 876);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_login_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_style_loader_login_scss__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Login; });\n\r\n\r\n\r\nvar Login = (function () {\r\n    function Login(fb) {\r\n        this.submitted = false;\r\n        this.form = fb.group({\r\n            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"Validators\"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"Validators\"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"Validators\"].minLength(4)])],\r\n            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"Validators\"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"Validators\"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"Validators\"].minLength(4)])]\r\n        });\r\n        this.email = this.form.controls['email'];\r\n        this.password = this.form.controls['password'];\r\n    }\r\n    Login.prototype.onSubmit = function (values) {\r\n        this.submitted = true;\r\n        if (this.form.valid) {\r\n        }\r\n    };\r\n    Login = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"Component\"])({\r\n            selector: 'login',\r\n            template: __webpack_require__(/*! ./login.html */ 839),\r\n        }), \r\n        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"FormBuilder\"]])\r\n    ], Login);\r\n    return Login;\r\n}());\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHM/MjFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgJ3N0eWxlLWxvYWRlciEuL2xvZ2luLnNjc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbG9naW4uaHRtbCcpLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW4ge1xyXG5cclxuICBwdWJsaWMgZm9ybTpGb3JtR3JvdXA7XHJcbiAgcHVibGljIGVtYWlsOkFic3RyYWN0Q29udHJvbDtcclxuICBwdWJsaWMgcGFzc3dvcmQ6QWJzdHJhY3RDb250cm9sO1xyXG4gIHB1YmxpYyBzdWJtaXR0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmYjpGb3JtQnVpbGRlcikge1xyXG4gICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKV0sXHJcbiAgICAgICdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pXVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lbWFpbCA9IHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TdWJtaXQodmFsdWVzOk9iamVjdCk6dm9pZCB7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgIC8vIHlvdXIgY29kZSBnb2VzIGhlcmVcclxuICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBTUE7QUFPQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBM0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUF5QkE7QUFBQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 727:
/* exports provided: routes, routing */
/* exports used: routing */
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.routing.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(/*! @angular/router */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(/*! ./login.component */ 622);\n/* unused harmony export routes */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return routing; });\n\r\n\r\n// noinspection TypeScriptValidateTypes\r\nvar routes = [\r\n    {\r\n        path: '',\r\n        component: __WEBPACK_IMPORTED_MODULE_1__login_component__[\"a\" /* Login */]\r\n    }\r\n];\r\nvar routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__[\"RouterModule\"].forChild(routes);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5yb3V0aW5nLnRzP2ZjNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBMb2dpblxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5yb3V0aW5nLnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 802:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./~/raw-loader!./~/sass-loader!./src/app/pages/login/login.scss ***!
  \***********************************************************************/
/***/ (function(module, exports) {

eval("module.exports = \"/*$assets-root: 'assets/';\\r\\n$images-root: $assets-root + 'img/';\\r\\n$fonts-root: $assets-root + 'fonts/';*/\\n/* Above Changed to*/\\n.auth-main {\\n  display: flex;\\n  align-items: center;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute; }\\n\\n.auth-block {\\n  width: 540px;\\n  margin: 0 auto;\\n  border-radius: 5px;\\n  background: rgba(0, 0, 0, 0.55);\\n  color: #fff;\\n  padding: 32px; }\\n  .auth-block h1 {\\n    font-weight: 300;\\n    margin-bottom: 28px;\\n    text-align: center; }\\n  .auth-block p {\\n    font-size: 16px; }\\n  .auth-block a {\\n    text-decoration: none;\\n    outline: none;\\n    transition: all 0.2s ease;\\n    color: #00abff; }\\n    .auth-block a:hover {\\n      color: #0091d9; }\\n  .auth-block .control-label {\\n    padding-top: 11px;\\n    color: #ffffff; }\\n  .auth-block .form-group {\\n    margin-bottom: 12px; }\\n\\n.auth-input {\\n  width: 300px;\\n  margin-bottom: 24px; }\\n  .auth-input input {\\n    display: block;\\n    width: 100%;\\n    border: none;\\n    font-size: 16px;\\n    padding: 4px 10px;\\n    outline: none; }\\n\\na.forgot-pass {\\n  display: block;\\n  text-align: right;\\n  margin-bottom: -20px;\\n  float: right;\\n  z-index: 2;\\n  position: relative; }\\n\\n.auth-link {\\n  display: block;\\n  font-size: 16px;\\n  text-align: center;\\n  margin-bottom: 33px; }\\n\\n.auth-sep {\\n  margin-top: 36px;\\n  margin-bottom: 24px;\\n  line-height: 20px;\\n  font-size: 16px;\\n  text-align: center;\\n  display: block;\\n  position: relative; }\\n  .auth-sep > span {\\n    display: table-cell;\\n    width: 30%;\\n    white-space: nowrap;\\n    padding: 0 24px;\\n    color: #ffffff; }\\n    .auth-sep > span > span {\\n      margin-top: -12px;\\n      display: block; }\\n  .auth-sep:before, .auth-sep:after {\\n    border-top: solid 1px #ffffff;\\n    content: \\\"\\\";\\n    height: 1px;\\n    width: 35%;\\n    display: table-cell; }\\n\\n.al-share-auth {\\n  text-align: center; }\\n  .al-share-auth .al-share {\\n    float: none;\\n    margin: 0;\\n    padding: 0;\\n    display: inline-block; }\\n    .al-share-auth .al-share li {\\n      margin-left: 24px; }\\n      .al-share-auth .al-share li:first-child {\\n        margin-left: 0; }\\n      .al-share-auth .al-share li i {\\n        font-size: 24px; }\\n\\n.btn-auth {\\n  color: #ffffff !important; }\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5zY3NzP2UyZDIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi8qJGFzc2V0cy1yb290OiAnYXNzZXRzLyc7XFxyXFxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XFxyXFxuJGZvbnRzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdmb250cy8nOyovXFxuLyogQWJvdmUgQ2hhbmdlZCB0byovXFxuLmF1dGgtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLmF1dGgtYmxvY2sge1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAzMnB4OyB9XFxuICAuYXV0aC1ibG9jayBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmF1dGgtYmxvY2sgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgLmF1dGgtYmxvY2sgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gICAgY29sb3I6ICMwMGFiZmY7IH1cXG4gICAgLmF1dGgtYmxvY2sgYTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMwMDkxZDk7IH1cXG4gIC5hdXRoLWJsb2NrIC5jb250cm9sLWxhYmVsIHtcXG4gICAgcGFkZGluZy10b3A6IDExcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAuYXV0aC1ibG9jayAuZm9ybS1ncm91cCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cXG5cXG4uYXV0aC1pbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAuYXV0aC1pbnB1dCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuXFxuYS5mb3Jnb3QtcGFzcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB6LWluZGV4OiAyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmF1dGgtbGluayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMzcHg7IH1cXG5cXG4uYXV0aC1zZXAge1xcbiAgbWFyZ2luLXRvcDogMzZweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuYXV0aC1zZXAgPiBzcGFuIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuYXV0aC1zZXAgPiBzcGFuID4gc3BhbiB7XFxuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5hdXRoLXNlcDpiZWZvcmUsIC5hdXRoLXNlcDphZnRlciB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZmZmZmZmO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH1cXG5cXG4uYWwtc2hhcmUtYXV0aCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hbC1zaGFyZS1hdXRoIC5hbC1zaGFyZSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICAuYWwtc2hhcmUtYXV0aCAuYWwtc2hhcmUgbGkge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4OyB9XFxuICAgICAgLmFsLXNoYXJlLWF1dGggLmFsLXNoYXJlIGxpOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuICAgICAgLmFsLXNoYXJlLWF1dGggLmFsLXNoYXJlIGxpIGkge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyB9XFxuXFxuLmJ0bi1hdXRoIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yYXctbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gODAyXG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 839:
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./src/app/pages/login/login.html ***!
  \****************************************/
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"auth-main\\\">\\r\\n  <div class=\\\"auth-block\\\">\\r\\n    <h1>Sign in to ng2-admin</h1>\\r\\n    <a routerLink=\\\"/register\\\" class=\\\"auth-link\\\">New to ng2-admin? Sign up!</a>\\r\\n\\r\\n    <form [formGroup]=\\\"form\\\" (ngSubmit)=\\\"onSubmit(form.value)\\\" class=\\\"form-horizontal\\\">\\r\\n      <div class=\\\"form-group row\\\" [ngClass]=\\\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\\\">\\r\\n        <label for=\\\"inputEmail3\\\" class=\\\"col-sm-2 control-label\\\">Email</label>\\r\\n\\r\\n        <div class=\\\"col-sm-10\\\">\\r\\n          <input [formControl]=\\\"email\\\" type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"inputEmail3\\\" placeholder=\\\"Email\\\">\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"form-group row\\\" [ngClass]=\\\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\\\">\\r\\n        <label for=\\\"inputPassword3\\\" class=\\\"col-sm-2 control-label\\\">Password</label>\\r\\n\\r\\n        <div class=\\\"col-sm-10\\\">\\r\\n          <input [formControl]=\\\"password\\\" type=\\\"password\\\" class=\\\"form-control\\\" id=\\\"inputPassword3\\\" placeholder=\\\"Password\\\">\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"form-group row\\\">\\r\\n        <div class=\\\"offset-sm-2 col-sm-10\\\">\\r\\n          <button [disabled]=\\\"!form.valid\\\" type=\\\"submit\\\" class=\\\"btn btn-default btn-auth\\\">Sign in</button>\\r\\n          <a routerLink=\\\"/login\\\" class=\\\"forgot-pass\\\">Forgot password?</a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </form>\\r\\n\\r\\n    <div class=\\\"auth-sep\\\"><span><span>or Sign in with one click</span></span></div>\\r\\n\\r\\n    <div class=\\\"al-share-auth\\\">\\r\\n      <ul class=\\\"al-share clearfix\\\">\\r\\n        <li><i class=\\\"socicon socicon-facebook\\\" title=\\\"Share on Facebook\\\"></i></li>\\r\\n        <li><i class=\\\"socicon socicon-twitter\\\" title=\\\"Share on Twitter\\\"></i></li>\\r\\n        <li><i class=\\\"socicon socicon-google\\\" title=\\\"Share on Google Plus\\\"></i></li>\\r\\n      </ul>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5odG1sPzhiNzgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImF1dGgtbWFpblxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhdXRoLWJsb2NrXFxcIj5cXHJcXG4gICAgPGgxPlNpZ24gaW4gdG8gbmcyLWFkbWluPC9oMT5cXHJcXG4gICAgPGEgcm91dGVyTGluaz1cXFwiL3JlZ2lzdGVyXFxcIiBjbGFzcz1cXFwiYXV0aC1saW5rXFxcIj5OZXcgdG8gbmcyLWFkbWluPyBTaWduIHVwITwvYT5cXHJcXG5cXHJcXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcm0udmFsdWUpXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6ICghZW1haWwudmFsaWQgJiYgZW1haWwudG91Y2hlZCksICdoYXMtc3VjY2Vzcyc6IChlbWFpbC52YWxpZCAmJiBlbWFpbC50b3VjaGVkKX1cXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW5wdXRFbWFpbDNcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sXT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaW5wdXRFbWFpbDNcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6ICghcGFzc3dvcmQudmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZCksICdoYXMtc3VjY2Vzcyc6IChwYXNzd29yZC52YWxpZCAmJiBwYXNzd29yZC50b3VjaGVkKX1cXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW5wdXRQYXNzd29yZDNcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaW5wdXRQYXNzd29yZDNcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvZmZzZXQtc20tMiBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFmb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWF1dGhcXFwiPlNpZ24gaW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL2xvZ2luXFxcIiBjbGFzcz1cXFwiZm9yZ290LXBhc3NcXFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhdXRoLXNlcFxcXCI+PHNwYW4+PHNwYW4+b3IgU2lnbiBpbiB3aXRoIG9uZSBjbGljazwvc3Bhbj48L3NwYW4+PC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsLXNoYXJlLWF1dGhcXFwiPlxcclxcbiAgICAgIDx1bCBjbGFzcz1cXFwiYWwtc2hhcmUgY2xlYXJmaXhcXFwiPlxcclxcbiAgICAgICAgPGxpPjxpIGNsYXNzPVxcXCJzb2NpY29uIHNvY2ljb24tZmFjZWJvb2tcXFwiIHRpdGxlPVxcXCJTaGFyZSBvbiBGYWNlYm9va1xcXCI+PC9pPjwvbGk+XFxyXFxuICAgICAgICA8bGk+PGkgY2xhc3M9XFxcInNvY2ljb24gc29jaWNvbi10d2l0dGVyXFxcIiB0aXRsZT1cXFwiU2hhcmUgb24gVHdpdHRlclxcXCI+PC9pPjwvbGk+XFxyXFxuICAgICAgICA8bGk+PGkgY2xhc3M9XFxcInNvY2ljb24gc29jaWNvbi1nb29nbGVcXFwiIHRpdGxlPVxcXCJTaGFyZSBvbiBHb29nbGUgUGx1c1xcXCI+PC9pPjwvbGk+XFxyXFxuICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA4Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 876:
/* unknown exports provided */
/*!*********************************************************!*\
  !*** ./~/style-loader!./src/app/pages/login/login.scss ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../~/raw-loader!../../../../~/sass-loader!./login.scss */ 802);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../../~/style-loader/addStyles.js */ 6)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../node_modules/raw-loader/index.js!../../../../node_modules/sass-loader/index.js!./login.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../node_modules/raw-loader/index.js!../../../../node_modules/sass-loader/index.js!./login.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODc2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5zY3NzPzFhZGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xvZ2luLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbG9naW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbG9naW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlciEuL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gODc2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

});