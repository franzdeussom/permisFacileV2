"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_question_question_module_ts"],{

/***/ 5513:
/*!************************************************************!*\
  !*** ./src/app/pages/entities/question/question-update.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionUpdatePage": () => (/* binding */ QuestionUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _question_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-update.html?ngResource */ 2712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.model */ 6629);
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.service */ 4554);








let QuestionUpdatePage = class QuestionUpdatePage {
    constructor(activatedRoute, navController, formBuilder, platform, toastCtrl, questionService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.questionService = questionService;
        this.isSaving = false;
        this.isNew = true;
        this.form = this.formBuilder.group({
            id: [null, []],
            intitule: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            image: [null, []],
            dateCreation: [null, []],
            lastUpdate: [null, []],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.question = response.data;
            this.isNew = this.question.id === null || this.question.id === undefined;
            this.updateForm(this.question);
        });
    }
    updateForm(question) {
        this.form.patchValue({
            id: question.id,
            intitule: question.intitule,
            image: question.image,
            dateCreation: this.isNew ? new Date().toISOString().split('T')[0] : question.dateCreation,
            lastUpdate: this.isNew ? new Date().toISOString().split('T')[0] : question.lastUpdate,
        });
    }
    save() {
        this.isSaving = true;
        const question = this.createFromForm();
        question.dateCreation = new Date(question.dateCreation).toISOString().split('T')[0];
        question.lastUpdate = new Date(question.lastUpdate).toISOString().split('T')[0];
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.questionService.update(question));
        }
        else {
            this.subscribeToSaveResponse(this.questionService.create(question));
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res.error));
    }
    onSaveSuccess(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let action = 'updated';
            if (response.status === 201) {
                action = 'created';
            }
            this.isSaving = false;
            const toast = yield this.toastCtrl.create({ message: `Question ${action} successfully.`, duration: 2000, position: 'middle' });
            yield toast.present();
            yield this.navController.navigateBack('/tabs/entities/question');
        });
    }
    previousState() {
        window.history.back();
    }
    onError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isSaving = false;
            console.error(error);
            const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            yield toast.present();
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _question_model__WEBPACK_IMPORTED_MODULE_1__.Question()), { id: this.form.get(['id']).value, intitule: this.form.get(['intitule']).value, image: this.form.get(['image']).value, dateCreation: this.form.get(['dateCreation']).value, lastUpdate: this.form.get(['lastUpdate']).value });
    }
};
QuestionUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _question_service__WEBPACK_IMPORTED_MODULE_2__.QuestionService }
];
QuestionUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'page-question-update',
        template: _question_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], QuestionUpdatePage);



/***/ }),

/***/ 8371:
/*!************************************************************!*\
  !*** ./src/app/pages/entities/question/question.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPageModule": () => (/* binding */ QuestionPageModule),
/* harmony export */   "QuestionResolve": () => (/* binding */ QuestionResolve)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/user-route-access.service */ 1284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ 3087);
/* harmony import */ var _question_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-update */ 5513);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ 954);













let QuestionResolve = class QuestionResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((response) => response.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((question) => question.body));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new ___WEBPACK_IMPORTED_MODULE_3__.Question());
    }
};
QuestionResolve.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_3__.QuestionService }
];
QuestionResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], QuestionResolve);

const routes = [
    {
        path: '',
        component: _question__WEBPACK_IMPORTED_MODULE_1__.QuestionPage,
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: 'new',
        component: _question_update__WEBPACK_IMPORTED_MODULE_2__.QuestionUpdatePage,
        resolve: {
            data: QuestionResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: ___WEBPACK_IMPORTED_MODULE_3__.QuestionDetailPage,
        resolve: {
            data: QuestionResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: _question_update__WEBPACK_IMPORTED_MODULE_2__.QuestionUpdatePage,
        resolve: {
            data: QuestionResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    }
];
let QuestionPageModule = class QuestionPageModule {
};
QuestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _question__WEBPACK_IMPORTED_MODULE_1__.QuestionPage,
            _question_update__WEBPACK_IMPORTED_MODULE_2__.QuestionUpdatePage,
            ___WEBPACK_IMPORTED_MODULE_3__.QuestionDetailPage
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)
        ]
    })
], QuestionPageModule);



/***/ }),

/***/ 2712:
/*!*************************************************************************!*\
  !*** ./src/app/pages/entities/question/question-update.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Question</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!isReadyToSave\" (click)=\"save()\" color=\"primary\">\n        <span *ngIf=\"platform.is('ios')\">{{'DONE_BUTTON' | translate}}</span>\n        <ion-icon name=\"checkmark\" *ngIf=\"!platform.is('ios')\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form *ngIf=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <ion-list>\n     <!-- <ion-item [hidden]=\"!form.id\">\n        <ion-label>ID</ion-label>\n        <ion-input type=\"hidden\" id=\"id\" formControlName=\"id\" readonly></ion-input>\n      </ion-item>-->\n      <ion-item>\n        <ion-label position=\"floating\">Intitule</ion-label>\n        <ion-input type=\"text\" name=\"intitule\" formControlName=\"intitule\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Image</ion-label>\n        <ion-input type=\"text\" name=\"image\" formControlName=\"image\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Date Creation</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"dateCreation\" id=\"field_dateCreation\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Last Update</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"lastUpdate\" id=\"field_lastUpdate\"></ion-datetime>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_question_question_module_ts.js.map