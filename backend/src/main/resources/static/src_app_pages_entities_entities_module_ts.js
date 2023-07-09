"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_entities_module_ts"],{

/***/ 43:
/*!***************************************************!*\
  !*** ./src/app/pages/entities/entities.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesPageModule": () => (/* binding */ EntitiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 1284);
/* harmony import */ var _entities_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities.page */ 7887);









const routes = [
    {
        path: '',
        component: _entities_page__WEBPACK_IMPORTED_MODULE_1__.EntitiesPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: 'question',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_entities_question_globalService_ts-node_modules_capacitor_storage_dist_-0d7e83"), __webpack_require__.e("default-src_app_pages_entities_question_index_ts"), __webpack_require__.e("src_app_pages_entities_question_question_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./question/question.module */ 8371)).then(m => m.QuestionPageModule)
    },
    {
        path: 'reponse',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_entities_question_globalService_ts-node_modules_capacitor_storage_dist_-0d7e83"), __webpack_require__.e("default-src_app_pages_entities_question_index_ts"), __webpack_require__.e("src_app_pages_entities_reponse_reponse_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reponse/reponse.module */ 8755)).then(m => m.ReponsePageModule)
    },
    {
        path: 'user-device',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_entities_user-device_user-device_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-device/user-device.module */ 8788)).then(m => m.UserDevicePageModule)
    },
    {
        path: 'question-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_entities_question_globalService_ts-node_modules_capacitor_storage_dist_-0d7e83"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_entities_question-list_question-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./question-list/question-list.module */ 8178)).then(m => m.QuestionListPageModule)
    },
    {
        path: 'favourite-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_entities_question_globalService_ts-node_modules_capacitor_storage_dist_-0d7e83"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_entities_favourite-list_favourite-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./favourite-list/favourite-list.module */ 7063)).then(m => m.FavouriteListPageModule)
    },
    {
        path: 'score-stat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_entities_question_globalService_ts-node_modules_capacitor_storage_dist_-0d7e83"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_entities_score-stat_score-stat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./score-stat/score-stat.module */ 3841)).then(m => m.ScoreStatPageModule)
    },
    {
        path: 'generate-users',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_entities_generate-users_generate-users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./generate-users/generate-users.module */ 6128)).then(m => m.GenerateUsersPageModule)
    }
    /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];
let EntitiesPageModule = class EntitiesPageModule {
};
EntitiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
        declarations: [_entities_page__WEBPACK_IMPORTED_MODULE_1__.EntitiesPage],
    })
], EntitiesPageModule);



/***/ }),

/***/ 7887:
/*!*************************************************!*\
  !*** ./src/app/pages/entities/entities.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesPage": () => (/* binding */ EntitiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _entities_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities.page.html?ngResource */ 4668);
/* harmony import */ var _entities_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities.page.scss?ngResource */ 537);
/* harmony import */ var _home_check_account_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../home/check-account-type.service */ 3016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let EntitiesPage = class EntitiesPage {
    constructor(navController, checkAccount) {
        this.navController = navController;
        this.checkAccount = checkAccount;
        this.entities = [
            { name: 'Question', component: 'QuestionPage', route: 'question' },
            { name: 'Reponse', component: 'ReponsePage', route: 'reponse' },
            { name: 'User Device', component: 'UserDevicePage', route: 'user-device' },
            { name: 'Mes Favorits', component: 'QuestionFavouriteListPage', route: 'favourite-list' },
            { name: 'Score && Statistiques', component: 'QuestionScoreStat', route: 'score-stat' },
            { name: 'Generate Users', component: 'GenerateUsers', route: 'generate-users' }
            /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
        ];
        this.entitiesUser = [
            { name: 'Mes Favorits', component: 'QuestionFavouriteListPage', route: 'favourite-list' },
            { name: 'Score && Statistiques', component: 'QuestionScoreStat', route: 'score-stat' },
        ];
    }
    ngOnInit() {
        this.showAllEntities = false;
        this.isAdmin();
    }
    openPage(page) {
        this.navController.navigateForward('/tabs/entities/' + page.route);
    }
    isAdmin() {
        if (this.checkAccount.isAdministrator) {
            this.showAllEntities = true;
        }
        else {
            this.showAllEntities = false;
        }
    }
};
EntitiesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _home_check_account_type_service__WEBPACK_IMPORTED_MODULE_2__.CheckAccountTypeService }
];
EntitiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-entities',
        template: _entities_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_entities_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EntitiesPage);



/***/ }),

/***/ 537:
/*!**************************************************************!*\
  !*** ./src/app/pages/entities/entities.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".trash {\n  position: absolute;\n  margin-left: 205px;\n  margin-top: -125px;\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiZW50aXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjA1cHg7XG4gIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 4668:
/*!**************************************************************!*\
  !*** ./src/app/pages/entities/entities.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <div *ngIf=\"showAllEntities\" >\n        <div *ngFor=\"let entity of entities\" >\n          <div>\n            <ion-item (click)=\"openPage(entity)\">\n              <h2>{{entity.name}}</h2>\n            </ion-item>\n          </div>\n        </div>     \n      </div>\n      <div *ngIf=\"!showAllEntities\" >\n        <div *ngFor=\"let entity of entitiesUser\" >\n          <div>\n            <ion-item (click)=\"openPage(entity)\">\n              <h2>{{entity.name}}</h2>\n            </ion-item>\n          </div>\n        </div>     \n      </div> \n  </ion-list>\n\n  <div *ngIf=\"entities.length === 0\">{{ 'EMPTY_ENTITIES_MESSAGE' | translate }}</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_entities_module_ts.js.map