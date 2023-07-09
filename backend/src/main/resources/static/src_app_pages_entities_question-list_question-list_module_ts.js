"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_question-list_question-list_module_ts"],{

/***/ 7765:
/*!******************************************************************************!*\
  !*** ./src/app/pages/entities/question-list/question-list-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionListPageRoutingModule": () => (/* binding */ QuestionListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favourite_list_favourite_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../favourite-list/favourite-list.page */ 500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _question_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-list.page */ 1810);





const routes = [
    {
        path: '',
        component: _question_list_page__WEBPACK_IMPORTED_MODULE_1__.QuestionListPage
    },
    {
        path: 'question-details', component: _question_list_page__WEBPACK_IMPORTED_MODULE_1__.QuestionListPage
    },
    {
        path: 'favourite-list', component: _favourite_list_favourite_list_page__WEBPACK_IMPORTED_MODULE_0__.FavouriteListPage
    }
];
let QuestionListPageRoutingModule = class QuestionListPageRoutingModule {
};
QuestionListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], QuestionListPageRoutingModule);



/***/ }),

/***/ 8178:
/*!**********************************************************************!*\
  !*** ./src/app/pages/entities/question-list/question-list.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionListPageModule": () => (/* binding */ QuestionListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _question_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-list-routing.module */ 7765);
/* harmony import */ var _question_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-list.page */ 1810);







let QuestionListPageModule = class QuestionListPageModule {
};
QuestionListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _question_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionListPageRoutingModule
        ],
        declarations: [_question_list_page__WEBPACK_IMPORTED_MODULE_1__.QuestionListPage]
    })
], QuestionListPageModule);



/***/ }),

/***/ 1810:
/*!********************************************************************!*\
  !*** ./src/app/pages/entities/question-list/question-list.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionListPage": () => (/* binding */ QuestionListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _question_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-list.page.html?ngResource */ 5410);
/* harmony import */ var _question_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-list.page.scss?ngResource */ 1657);
/* harmony import */ var _local_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../local-save.service */ 6244);
/* harmony import */ var _details_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../details-id.service */ 373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _question_globalService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question/globalService */ 5546);








let QuestionListPage = class QuestionListPage {
    constructor(route, param, globalService, goToFavourite, localSave) {
        this.route = route;
        this.param = param;
        this.globalService = globalService;
        this.goToFavourite = goToFavourite;
        this.localSave = localSave;
        this.questions = [];
    }
    ngOnInit() {
        //loading questions from globalService
        this.questions = this.globalService.globalQuestion;
    }
    favourite(idQuestion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.questions[idQuestion].favourite) {
                this.questions[idQuestion].favourite = false;
            }
            else {
                this.questions[idQuestion].favourite = true;
            }
            yield this.localSave.localSave(this.questions);
        });
    }
    goDetail(id, quizz) {
        this.param.setIdQuestion(id, quizz, false);
        this.route.navigateByUrl('question-details');
    }
    goToFavouriteList() {
        this.goToFavourite.navigateByUrl('favourite-list');
    }
};
QuestionListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _details_id_service__WEBPACK_IMPORTED_MODULE_3__.DetailsParamService },
    { type: _question_globalService__WEBPACK_IMPORTED_MODULE_4__.GlobalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _local_save_service__WEBPACK_IMPORTED_MODULE_2__.LocalSaveService }
];
QuestionListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-question-list',
        template: _question_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionListPage);



/***/ }),

/***/ 1657:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/entities/question-list/question-list.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "#favv {\n  font-size: 25px;\n  padding-left: 10px;\n}\n\n.favourite {\n  color: yellow;\n}\n\nimg {\n  width: 100%;\n}\n\n.BtnEnd {\n  margin-right: 15%;\n}\n\n.red {\n  color: red;\n}\n\n.green {\n  color: greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSiIsImZpbGUiOiJxdWVzdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmYXZ2e1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZmF2b3VyaXRle1xuICAgIGNvbG9yOiB5ZWxsb3c7XG59XG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uQnRuRW5ke1xuICAgIG1hcmdpbi1yaWdodDogMTUlO1xufVxuLnJlZHtcbiAgICBjb2xvcjogcmVkO1xufVxuLmdyZWVue1xuICAgIGNvbG9yOiBncmVlbnllbGxvdztcbn0iXX0= */";

/***/ }),

/***/ 5410:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/entities/question-list/question-list.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header color=\"secondary\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Quizz</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"goToFavouriteList()\" slot=\"end\">\n              Mes Favories\n            <ion-icon slot=\"end\" name=\"star\" class=\"favourite\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content class=\"ion-padding\">\n  <div class=\"ion-margin\">\n    <h3><span>{{ questions.length }} Questions </span></h3>\n  </div>\n  <div class=\"card\">\n    \n    <ion-list>\n      <div *ngFor=\"let item of questions; let index = index\">\n        <ion-item class=\"ion-margin\"  id=\"label\">\n          <ion-label (click)=\"goDetail(index, questions)\" text-wrap><sup>{{ index+1 }}  </sup><br> &nbsp; &nbsp;  {{ item.intitule }} </ion-label>\n          <span (click)=\"favourite(index)\" [ngClass]=\"{'favourite':  questions[index].favourite} \" id=\"favv\">\n            <ion-icon name='star' slot=\"end\"></ion-icon>\n          </span>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_question-list_question-list_module_ts.js.map