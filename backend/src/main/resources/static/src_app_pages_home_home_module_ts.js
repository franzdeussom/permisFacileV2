"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../login/login.page */ 3058);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 1284);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 678);










const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__.UserRouteAccessService],
    },
    {
        path: 'login', component: _login_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'question-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_entities_question-details_question-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../entities/question-details/question-details.module */ 5055)).then(m => m.QuestionDetailsPageModule)
    },
];
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _check_account_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-account-type.service */ 3016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/account.service */ 150);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login/login.service */ 8762);
/* harmony import */ var _entities_question_globalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/question/globalService */ 5546);
/* harmony import */ var _entities_local_save_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./..//entities/local-save.service */ 6244);
/* harmony import */ var _entities_details_id_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entities/details-id.service */ 373);
/* harmony import */ var _entities_question__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entities/question */ 954);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/network */ 4984);















let HomePage = class HomePage {
    constructor(navController, accountService, loginService, param, globalService, localSave, questionService, toastCtrl, typeAccount) {
        this.navController = navController;
        this.accountService = accountService;
        this.loginService = loginService;
        this.param = param;
        this.globalService = globalService;
        this.localSave = localSave;
        this.questionService = questionService;
        this.toastCtrl = toastCtrl;
        this.typeAccount = typeAccount;
        this.questions = [];
    }
    ngOnInit() {
        this.accountService.identity().then((account) => {
            if (account === null) {
                this.goBackToHomePage();
            }
            else {
                this.account = account;
            }
        });
        //loading questions from globalService
        this.init();
        this.typeAccount.isAdmin();
    }
    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_10__.Network.getStatus();
            console.log('Network status:', status);
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.get({ key: 'questions' });
            if (!status.connected) {
                if (!value || value.length === 0 || value === "[]") {
                    // no question and no connection
                    const toast = yield this.toastCtrl.create({ message: 'Besoin d internet pour le chargement!', duration: 2000, position: 'middle' });
                    yield toast.present();
                }
                else {
                    this.questions = JSON.parse(value);
                    this.globalService.globalQuestion = this.questions;
                }
            }
            if (status.connected) {
                if (!value || value.length === 0 || value === "[]") {
                    this.questionService.query().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)((res) => res.body))
                        .subscribe((response) => {
                        this.questions = response;
                        this.globalService.globalQuestion = this.questions;
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.set({
                            key: 'questions',
                            value: JSON.stringify(this.questions)
                        });
                    });
                }
                else {
                    this.questions = JSON.parse(value);
                    this.questionService.queryFromIndex(this.questions.length).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)((res) => res.body))
                        .subscribe((response) => {
                        this.questions.concat(response);
                        //set singleton and save
                        this.globalService.globalQuestion = this.questions;
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.set({
                            key: 'questions',
                            value: JSON.stringify(this.questions)
                        });
                    });
                }
            }
        });
    }
    logout() {
        this.loginService.logout();
        this.typeAccount.isAdministrator = false;
        this.goBackToHomePage();
    }
    favourite(idQuestion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        this.navController.navigateForward('/question-details');
    }
    goBackToHomePage() {
        this.navController.navigateRoot('login');
    }
    countNbrPlay() {
        let count = 0;
        console.log('nbr of questions done :', count);
        alert(count);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController },
    { type: _services_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService },
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _entities_details_id_service__WEBPACK_IMPORTED_MODULE_7__.DetailsParamService },
    { type: _entities_question_globalService__WEBPACK_IMPORTED_MODULE_5__.GlobalService },
    { type: _entities_local_save_service__WEBPACK_IMPORTED_MODULE_6__.LocalSaveService },
    { type: _entities_question__WEBPACK_IMPORTED_MODULE_8__.QuestionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController },
    { type: _check_account_type_service__WEBPACK_IMPORTED_MODULE_2__.CheckAccountTypeService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".hipster {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url('jhipster_family_member_0.svg') no-repeat center top;\n  background-size: contain;\n}\n\n.lastAnswer {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-right: 5%;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n.lastAnswer .valid {\n  color: #45c445;\n  font-size: 20px;\n}\n\n.lastAnswer .failed {\n  color: red;\n  font-size: 20px;\n}\n\n.lastAnswer .neutral {\n  color: gray;\n  font-size: 20px;\n}\n\n#favv {\n  font-size: 25px;\n  padding-left: 10px;\n}\n\n.favourite {\n  color: yellow;\n}\n\nimg {\n  width: 100%;\n}\n\n.BtnEnd {\n  margin-right: 15%;\n}\n\n.red {\n  color: red;\n}\n\n.green {\n  color: greenyellow;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url('jhipster_family_member_0.svg') no-repeat center top;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9FQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQURFO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHTjs7QUFERTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBR047O0FBREU7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdOOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtBQU1GOztBQUpBO0VBQ0UsVUFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7QUFRRjs7QUFMQSwwRkFBQTs7QUFDQTtFQU1FO0lBQ0Usb0VBQUE7SUFDQSx3QkFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlwc3RlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM0N3B4O1xuICBoZWlnaHQ6IDQ5N3B4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvamhpcHN0ZXJfZmFtaWx5X21lbWJlcl8wLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ubGFzdEFuc3dlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgLnZhbGlke1xuICAgICAgY29sb3I6IHJnYig2OSwgMTk2LCA2OSk7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmZhaWxlZHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLm5ldXRyYWx7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuI2ZhdnZ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmZhdm91cml0ZXtcbiAgY29sb3I6IHllbGxvdztcbn1cbmltZ3tcbiAgd2lkdGg6IDEwMCU7XG59XG4uQnRuRW5ke1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cbi5yZWR7XG4gIGNvbG9yOiByZWQ7XG59XG4uZ3JlZW57XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLyogd2FpdCBhdXRvcHJlZml4ZXIgdXBkYXRlIHRvIGFsbG93IHNpbXBsZSBnZW5lcmF0aW9uIG9mIGhpZ2ggcGl4ZWwgZGVuc2l0eSBtZWRpYSBxdWVyeSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gIC5oaXBzdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvamhpcHN0ZXJfZmFtaWx5X21lbWJlcl8wLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title> {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}} </ion-title>\n    <ion-buttons slot=\"end\">\n      \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ion-margin\">\n    <h3><span>{{ questions.length }} Questions </span></h3>\n  </div>\n  <div class=\"card\">\n    <div *ngIf=\"questions.length === 0\" >\n        Chargement...\n    </div>\n    <ion-list>\n      <div *ngFor=\"let item of questions; let index = index\">\n        <ion-item class=\"ion-margin\"  id=\"label\">\n          <ion-label (click)=\"goDetail(index, questions)\" text-wrap><sup>{{ index+1 }}  </sup><br> &nbsp; &nbsp;  {{ item.intitule }} </ion-label>\n          <span (click)=\"favourite(index)\" [ngClass]=\"{'favourite':  questions[index].favourite} \" id=\"favv\">\n            <div class=\"lastAnswer\">\n              <span slot=\"end\" *ngIf=\"item.rep1 == 'TRUEANSWER'\" class=\"valid\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span>\n              <span slot=\"end\" *ngIf=\"item.rep1 == 'FALSEANSWER'\" class=\"failed\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n              <span slot=\"end\" *ngIf=\"item.rep1 == 'NEUTRALANSWER'\" class=\"neutral\"><ion-icon name=\"remove-circle-outline\"></ion-icon></span>\n              \n              <span slot=\"end\" *ngIf=\"item.rep2 == 'TRUEANSWER'\" class=\"valid\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span>\n              <span slot=\"end\" *ngIf=\"item.rep2 == 'FALSEANSWER'\" class=\"failed\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n              <span slot=\"end\" *ngIf=\"item.rep2 == 'NEUTRALANSWER'\" class=\"neutral\"><ion-icon name=\"remove-circle-outline\"></ion-icon></span>\n  \n              <span slot=\"end\" *ngIf=\"item.rep3 == 'TRUEANSWER'\" class=\"valid\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span>\n              <span slot=\"end\" *ngIf=\"item.rep3 == 'FALSEANSWER'\" class=\"failed\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n              <span slot=\"end\" *ngIf=\"item.rep3 == 'NEUTRALANSWER'\" class=\"neutral\"><ion-icon name=\"remove-circle-outline\"></ion-icon></span>\n          </div>\n            <ion-icon name='star' slot=\"end\"></ion-icon>\n          </span>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map