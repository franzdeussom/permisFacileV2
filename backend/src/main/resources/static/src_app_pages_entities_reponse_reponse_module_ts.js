"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_reponse_reponse_module_ts"],{

/***/ 8721:
/*!*************************************************!*\
  !*** ./src/app/pages/entities/reponse/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reponse": () => (/* reexport safe */ _reponse_model__WEBPACK_IMPORTED_MODULE_0__.Reponse),
/* harmony export */   "ReponseDetailPage": () => (/* reexport safe */ _reponse_detail__WEBPACK_IMPORTED_MODULE_2__.ReponseDetailPage),
/* harmony export */   "ReponsePage": () => (/* reexport safe */ _reponse__WEBPACK_IMPORTED_MODULE_3__.ReponsePage),
/* harmony export */   "ReponseService": () => (/* reexport safe */ _reponse_service__WEBPACK_IMPORTED_MODULE_1__.ReponseService)
/* harmony export */ });
/* harmony import */ var _reponse_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reponse.model */ 9179);
/* harmony import */ var _reponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse.service */ 5346);
/* harmony import */ var _reponse_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reponse-detail */ 9134);
/* harmony import */ var _reponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reponse */ 345);






/***/ }),

/***/ 9134:
/*!**********************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse-detail.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponseDetailPage": () => (/* binding */ ReponseDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reponse_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reponse-detail.html?ngResource */ 1932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _reponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse.service */ 5346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






let ReponseDetailPage = class ReponseDetailPage {
    constructor(navController, reponseService, activatedRoute, alertController) {
        this.navController = navController;
        this.reponseService = reponseService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.reponse = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.reponse = response.data;
        });
    }
    open(item) {
        this.navController.navigateForward('/tabs/entities/reponse/' + item.id + '/edit');
    }
    deleteModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm the deletion?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.reponseService.delete(item.id).subscribe(() => {
                                this.navController.navigateForward('/tabs/entities/reponse');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ReponseDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _reponse_service__WEBPACK_IMPORTED_MODULE_1__.ReponseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
ReponseDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'page-reponse-detail',
        template: _reponse_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ReponseDetailPage);



/***/ }),

/***/ 4626:
/*!**********************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse-update.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponseUpdatePage": () => (/* binding */ ReponseUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reponse_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reponse-update.html?ngResource */ 5966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reponse_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse.model */ 9179);
/* harmony import */ var _reponse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reponse.service */ 5346);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question */ 954);









let ReponseUpdatePage = class ReponseUpdatePage {
    constructor(activatedRoute, navController, formBuilder, platform, toastCtrl, questionService, reponseService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.questionService = questionService;
        this.reponseService = reponseService;
        this.isSaving = false;
        this.isNew = true;
        this.form = this.formBuilder.group({
            id: [null, []],
            intitule: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            reponseUnique: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            bonneReponse: ['false', []],
            question: [null, []],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }
    ngOnInit() {
        this.questionService.query()
            .subscribe(data => { this.questions = data.body; }, (error) => this.onError(error));
        this.activatedRoute.data.subscribe((response) => {
            this.reponse = response.data;
            this.isNew = this.reponse.id === null || this.reponse.id === undefined;
            this.updateForm(this.reponse);
        });
    }
    updateForm(reponse) {
        this.form.patchValue({
            id: reponse.id,
            intitule: reponse.intitule,
            reponseUnique: reponse.reponseUnique,
            bonneReponse: reponse.bonneReponse,
            question: reponse.question,
        });
    }
    save() {
        this.isSaving = true;
        const reponse = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.reponseService.update(reponse));
        }
        else {
            this.subscribeToSaveResponse(this.reponseService.create(reponse));
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res.error));
    }
    onSaveSuccess(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let action = 'updated';
            if (response.status === 201) {
                action = 'created';
            }
            this.isSaving = false;
            const toast = yield this.toastCtrl.create({ message: `Reponse ${action} successfully.`, duration: 2000, position: 'middle' });
            yield toast.present();
            yield this.navController.navigateBack('/tabs/entities/reponse');
        });
    }
    previousState() {
        window.history.back();
    }
    onError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isSaving = false;
            console.error(error);
            const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            yield toast.present();
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _reponse_model__WEBPACK_IMPORTED_MODULE_1__.Reponse()), { id: this.form.get(['id']).value, intitule: this.form.get(['intitule']).value, reponseUnique: this.form.get(['reponseUnique']).value, bonneReponse: this.form.get(['bonneReponse']).value, question: this.form.get(['question']).value });
    }
    compareQuestion(first, second) {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }
    trackQuestionById(index, item) {
        return item.id;
    }
};
ReponseUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _question__WEBPACK_IMPORTED_MODULE_3__.QuestionService },
    { type: _reponse_service__WEBPACK_IMPORTED_MODULE_2__.ReponseService }
];
ReponseUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'page-reponse-update',
        template: _reponse_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ReponseUpdatePage);



/***/ }),

/***/ 9179:
/*!*********************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reponse": () => (/* binding */ Reponse)
/* harmony export */ });
class Reponse {
    constructor(id, intitule, reponseUnique, bonneReponse, isChecked, question) {
        this.id = id;
        this.intitule = intitule;
        this.reponseUnique = reponseUnique;
        this.bonneReponse = bonneReponse;
        this.isChecked = isChecked;
        this.question = question;
        this.isChecked = false;
        this.reponseUnique = false;
        this.bonneReponse = false;
    }
}


/***/ }),

/***/ 8755:
/*!**********************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponsePageModule": () => (/* binding */ ReponsePageModule),
/* harmony export */   "ReponseResolve": () => (/* binding */ ReponseResolve)
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
/* harmony import */ var _reponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse */ 345);
/* harmony import */ var _reponse_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reponse-update */ 4626);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ 8721);













let ReponseResolve = class ReponseResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((response) => response.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((reponse) => reponse.body));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new ___WEBPACK_IMPORTED_MODULE_3__.Reponse());
    }
};
ReponseResolve.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_3__.ReponseService }
];
ReponseResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], ReponseResolve);

const routes = [
    {
        path: '',
        component: _reponse__WEBPACK_IMPORTED_MODULE_1__.ReponsePage,
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: 'new',
        component: _reponse_update__WEBPACK_IMPORTED_MODULE_2__.ReponseUpdatePage,
        resolve: {
            data: ReponseResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: ___WEBPACK_IMPORTED_MODULE_3__.ReponseDetailPage,
        resolve: {
            data: ReponseResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: _reponse_update__WEBPACK_IMPORTED_MODULE_2__.ReponseUpdatePage,
        resolve: {
            data: ReponseResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    }
];
let ReponsePageModule = class ReponsePageModule {
};
ReponsePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _reponse__WEBPACK_IMPORTED_MODULE_1__.ReponsePage,
            _reponse_update__WEBPACK_IMPORTED_MODULE_2__.ReponseUpdatePage,
            ___WEBPACK_IMPORTED_MODULE_3__.ReponseDetailPage
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
], ReponsePageModule);



/***/ }),

/***/ 5346:
/*!***********************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponseService": () => (/* binding */ ReponseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/api.service */ 5146);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ 1679);





let ReponseService = class ReponseService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/reponses';
    }
    create(reponse) {
        return this.http.post(this.resourceUrl, reponse, { observe: 'response' });
    }
    update(reponse) {
        return this.http.put(`${this.resourceUrl}/${reponse.id}`, reponse, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
};
ReponseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ReponseService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], ReponseService);



/***/ }),

/***/ 345:
/*!***************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponsePage": () => (/* binding */ ReponsePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reponse_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reponse.html?ngResource */ 6526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _reponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse.service */ 5346);






let ReponsePage = class ReponsePage {
    // todo: add pagination
    constructor(navController, reponseService, toastCtrl, plt) {
        this.navController = navController;
        this.reponseService = reponseService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.reponses = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadAll();
        });
    }
    loadAll(refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.reponseService.query().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.body))
                .subscribe((response) => {
                this.reponses = response;
                if (typeof (refresher) !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                console.error(error);
                const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
                yield toast.present();
            }));
        });
    }
    trackId(index, item) {
        return item.id;
    }
    new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/reponse/new');
        });
    }
    edit(item, reponse) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/reponse/' + reponse.id + '/edit');
            yield item.close();
        });
    }
    delete(reponse) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.reponseService.delete(reponse.id).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({ message: 'Reponse deleted successfully.', duration: 3000, position: 'middle' });
                yield toast.present();
                yield this.loadAll();
            }), (error) => console.error(error));
        });
    }
    view(reponse) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/reponse/' + reponse.id + '/view');
        });
    }
};
ReponsePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _reponse_service__WEBPACK_IMPORTED_MODULE_1__.ReponseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
ReponsePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'page-reponse',
        template: _reponse_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ReponsePage);



/***/ }),

/***/ 1932:
/*!***********************************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse-detail.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reponse</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"fixed\">ID</ion-label>\n      <div item-content>\n        <span id=\"id-content\">{{reponse.id}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Intitule</ion-label>\n      <div item-content>\n        <span id=\"intitule-content\">{{reponse.intitule}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Reponse Unique</ion-label>\n      <div item-content>\n        <span id=\"reponseUnique-content\">{{reponse.reponseUnique}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Bonne Reponse</ion-label>\n      <div item-content>\n        <span id=\"bonneReponse-content\">{{reponse.bonneReponse}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Question</ion-label>\n      <div item-content *ngIf=\"reponse.question\">\n        <a>{{reponse.question?.id}}</a>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"open(reponse)\">{{ 'EDIT_BUTTON' | translate }}</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"deleteModal(reponse)\">{{ 'DELETE_BUTTON' | translate }}</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 5966:
/*!***********************************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse-update.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reponse</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!isReadyToSave\" (click)=\"save()\" color=\"primary\">\n        <span *ngIf=\"platform.is('ios')\">{{'DONE_BUTTON' | translate}}</span>\n        <ion-icon name=\"checkmark\" *ngIf=\"!platform.is('ios')\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form *ngIf=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <ion-list>\n      <!--<ion-item [hidden]=\"!form.id\">\n        <ion-label>ID</ion-label>\n        <ion-input type=\"hidden\" id=\"id\" formControlName=\"id\" readonly></ion-input>\n      </ion-item>-->\n      <ion-item>\n        <ion-label position=\"floating\">Intitule</ion-label>\n        <ion-input type=\"text\" name=\"intitule\" formControlName=\"intitule\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Reponse Unique</ion-label>\n        <ion-checkbox formControlName=\"reponseUnique\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Bonne Reponse</ion-label>\n        <ion-checkbox formControlName=\"bonneReponse\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Question</ion-label>\n        <ion-select id=\"field_question\" formControlName=\"question\" [compareWith]=\"compareQuestion\">\n          <ion-select-option [value]=\"null\"></ion-select-option>\n          <ion-select-option [value]=\"questionOption\" *ngFor=\"let questionOption of questions; trackBy: trackQuestionById\"\n            >{{questionOption.id}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 6526:
/*!****************************************************************!*\
  !*** ./src/app/pages/entities/reponse/reponse.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reponses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- todo: add elasticsearch support -->\n<ion-content class=\"ion-padding\">\n  <ion-refresher [disabled]=\"plt.is('desktop')\" slot=\"fixed\" (ionRefresh)=\"loadAll($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let reponse of reponses; trackBy: trackId\" #slidingItem>\n      <ion-item (click)=\"view(reponse)\">\n        <ion-label text-wrap>\n          <p>{{reponse.id}}</p>\n          <p>{{reponse.intitule}}</p>\n          <p>{{reponse.reponseUnique}}</p>\n          <p>{{reponse.bonneReponse}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"edit(slidingItem, reponse)\"> {{ 'EDIT_BUTTON' | translate }} </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(reponse)\"> {{ 'DELETE_BUTTON' | translate }} </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-item *ngIf=\"!reponses?.length\">\n    <ion-label> No Reponses found. </ion-label>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"new()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_reponse_reponse_module_ts.js.map