"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_generate-users_generate-users_module_ts"],{

/***/ 8907:
/*!********************************************************************************!*\
  !*** ./src/app/pages/entities/generate-users/generate-user-service.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateUserServiceService": () => (/* binding */ GenerateUserServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let GenerateUserServiceService = class GenerateUserServiceService {
    constructor(api) {
        this.api = api;
    }
    getDataUserGenerate() {
        return this.api.post('admin/users/generate', '');
    }
};
GenerateUserServiceService.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
GenerateUserServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GenerateUserServiceService);



/***/ }),

/***/ 8063:
/*!********************************************************************************!*\
  !*** ./src/app/pages/entities/generate-users/generate-users-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateUsersPageRoutingModule": () => (/* binding */ GenerateUsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _generate_users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-users.page */ 4614);




const routes = [
    {
        path: '',
        component: _generate_users_page__WEBPACK_IMPORTED_MODULE_0__.GenerateUsersPage
    }
];
let GenerateUsersPageRoutingModule = class GenerateUsersPageRoutingModule {
};
GenerateUsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GenerateUsersPageRoutingModule);



/***/ }),

/***/ 6128:
/*!************************************************************************!*\
  !*** ./src/app/pages/entities/generate-users/generate-users.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateUsersPageModule": () => (/* binding */ GenerateUsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _generate_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-users-routing.module */ 8063);
/* harmony import */ var _generate_users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-users.page */ 4614);







let GenerateUsersPageModule = class GenerateUsersPageModule {
};
GenerateUsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _generate_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.GenerateUsersPageRoutingModule
        ],
        declarations: [_generate_users_page__WEBPACK_IMPORTED_MODULE_1__.GenerateUsersPage]
    })
], GenerateUsersPageModule);



/***/ }),

/***/ 4614:
/*!**********************************************************************!*\
  !*** ./src/app/pages/entities/generate-users/generate-users.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateUsersPage": () => (/* binding */ GenerateUsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _generate_users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-users.page.html?ngResource */ 4386);
/* harmony import */ var _generate_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-users.page.scss?ngResource */ 9149);
/* harmony import */ var _services_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user/user.model */ 7673);
/* harmony import */ var _generate_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-user-service.service */ 8907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






let GenerateUsersPage = class GenerateUsersPage {
    constructor(apiGenerateService) {
        this.apiGenerateService = apiGenerateService;
    }
    ngOnInit() {
        this.data = new _services_user_user_model__WEBPACK_IMPORTED_MODULE_2__.User();
    }
    generateUser() {
        this.apiGenerateService.getDataUserGenerate().subscribe((resp) => {
            this.data = resp;
            console.log(this.data);
        }, (error) => {
            console.log('error', error.message);
        });
    }
};
GenerateUsersPage.ctorParameters = () => [
    { type: _generate_user_service_service__WEBPACK_IMPORTED_MODULE_3__.GenerateUserServiceService }
];
GenerateUsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-generate-users',
        template: _generate_users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generate_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GenerateUsersPage);



/***/ }),

/***/ 7673:
/*!*********************************************!*\
  !*** ./src/app/services/user/user.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
}


/***/ }),

/***/ 9149:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/entities/generate-users/generate-users.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZS11c2Vycy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4386:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/entities/generate-users/generate-users.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary \">\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Generate Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <p>ID :  {{ data.id }} </p><br>\n        <p>Login : {{ data.login }}  </p><br>\n        <p>Firstname : {{ data.firstName }} </p><br>\n        <p>Lastname : {{ data.lastName }} </p><br>\n        <p>Email : {{ data.email }} </p><br>\n        <p>Activated : {{ data.activated }} </p><br>\n        <p>CreateBy : {{ data.createdBy }} </p><br>\n        <p>Authorities : {{ data.authorities }} </p><br>\n        <p>Created Date : {{ data.createdDate }} </p><br>\n        <p>last Modified By : {{ data.lastModifiedBy }} </p><br>\n        <p>last Modified Date : {{ data.lastModifiedDate }} </p>\n        <p> </p>\n    </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" type=\"submit\" color=\"primary\" (click)=\"generateUser()\"> Generate </ion-button>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_generate-users_generate-users_module_ts.js.map