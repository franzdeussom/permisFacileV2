"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_entities_question_index_ts"],{

/***/ 954:
/*!**************************************************!*\
  !*** ./src/app/pages/entities/question/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question": () => (/* reexport safe */ _question_model__WEBPACK_IMPORTED_MODULE_0__.Question),
/* harmony export */   "QuestionDetailPage": () => (/* reexport safe */ _question_detail__WEBPACK_IMPORTED_MODULE_2__.QuestionDetailPage),
/* harmony export */   "QuestionPage": () => (/* reexport safe */ _question__WEBPACK_IMPORTED_MODULE_3__.QuestionPage),
/* harmony export */   "QuestionService": () => (/* reexport safe */ _question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionService)
/* harmony export */ });
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.model */ 6629);
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.service */ 4554);
/* harmony import */ var _question_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-detail */ 5427);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question */ 3087);






/***/ }),

/***/ 5427:
/*!************************************************************!*\
  !*** ./src/app/pages/entities/question/question-detail.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailPage": () => (/* binding */ QuestionDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _question_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-detail.html?ngResource */ 7201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.service */ 4554);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






let QuestionDetailPage = class QuestionDetailPage {
    constructor(navController, questionService, activatedRoute, alertController) {
        this.navController = navController;
        this.questionService = questionService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.question = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.question = response.data;
        });
    }
    open(item) {
        this.navController.navigateForward('/tabs/entities/question/' + item.id + '/edit');
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
                            this.questionService.delete(item.id).subscribe(() => {
                                this.navController.navigateForward('/tabs/entities/question');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
QuestionDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
QuestionDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'page-question-detail',
        template: _question_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], QuestionDetailPage);



/***/ }),

/***/ 6629:
/*!***********************************************************!*\
  !*** ./src/app/pages/entities/question/question.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question": () => (/* binding */ Question)
/* harmony export */ });
class Question {
    constructor(id, intitule, image, dateCreation, lastUpdate, favourite, rep1, rep2, rep3, reponses) {
        this.id = id;
        this.intitule = intitule;
        this.image = image;
        this.dateCreation = dateCreation;
        this.lastUpdate = lastUpdate;
        this.favourite = favourite;
        this.rep1 = rep1;
        this.rep2 = rep2;
        this.rep3 = rep3;
        this.reponses = reponses;
    }
}


/***/ }),

/***/ 4554:
/*!*************************************************************!*\
  !*** ./src/app/pages/entities/question/question.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionService": () => (/* binding */ QuestionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/api.service */ 5146);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ 1679);





let QuestionService = class QuestionService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/questions';
    }
    create(question) {
        return this.http.post(this.resourceUrl, question, { observe: 'response' });
    }
    update(question) {
        return this.http.put(`${this.resourceUrl}/${question.id}`, question, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    queryFromIndex(lastIndex, req) {
        const options = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl + "/from/" + lastIndex, { params: options, observe: 'response' });
    }
    query(req) {
        const options = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
};
QuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
QuestionService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], QuestionService);



/***/ }),

/***/ 3087:
/*!*****************************************************!*\
  !*** ./src/app/pages/entities/question/question.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPage": () => (/* binding */ QuestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _question_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.html?ngResource */ 6822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.service */ 4554);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _globalService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalService */ 5546);









let QuestionPage = class QuestionPage {
    // todo: add pagination
    constructor(navController, questionService, toastCtrl, globalService, plt) {
        this.navController = navController;
        this.questionService = questionService;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.plt = plt;
        this.questions = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //await this.loadAll();
            yield this.init();
        });
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.getStatus();
            console.log('Network status:', status);
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'questions' });
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
                    this.questionService.query().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((res) => res.body))
                        .subscribe((response) => {
                        this.questions = response;
                        this.globalService.globalQuestion = this.questions;
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                            key: 'questions',
                            value: JSON.stringify(this.questions)
                        });
                    });
                }
                else {
                    this.questions = JSON.parse(value);
                    this.questionService.queryFromIndex(this.questions.length).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((res) => res.body))
                        .subscribe((response) => {
                        this.questions.concat(response);
                        //set singleton and save
                        this.globalService.globalQuestion = this.questions;
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                            key: 'questions',
                            value: JSON.stringify(this.questions)
                        });
                    });
                }
            }
        });
    }
    loadAll(refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.questionService.query().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((res) => res.body))
                .subscribe((response) => {
                this.questions = response;
                if (typeof (refresher) !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/question/new');
        });
    }
    edit(item, question) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/question/' + question.id + '/edit');
            yield item.close();
        });
    }
    delete(question) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.questionService.delete(question.id).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({ message: 'Question deleted successfully.', duration: 3000, position: 'middle' });
                yield toast.present();
                yield this.loadAll();
            }), (error) => console.error(error));
        });
    }
    view(question) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/question/' + question.id + '/view');
        });
    }
};
QuestionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _globalService__WEBPACK_IMPORTED_MODULE_4__.GlobalService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
QuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'page-question',
        template: _question_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], QuestionPage);



/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* reexport safe */ _util_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)
/* harmony export */ });
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/request-util */ 9393);



/***/ }),

/***/ 9393:
/*!*********************************************!*\
  !*** ./src/app/shared/util/request-util.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* binding */ createRequestOption)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (req) {
        Object.keys(req).forEach((key) => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ 4538:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4984:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4538);

const Network = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Network', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_network_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5442)).then(m => new m.NetworkWeb()),
});




/***/ }),

/***/ 7201:
/*!*************************************************************************!*\
  !*** ./src/app/pages/entities/question/question-detail.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Question</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"fixed\">ID</ion-label>\n      <div item-content>\n        <span id=\"id-content\">{{question.id}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Intitule</ion-label>\n      <div item-content>\n        <span id=\"intitule-content\">{{question.intitule}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Image</ion-label>\n      <div item-content>\n        <span id=\"image-content\">{{question.image}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Date Creation</ion-label>\n      <div item-content>\n        <span id=\"dateCreation-content\">{{question.dateCreation | date:'mediumDate'}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Last Update</ion-label>\n      <div item-content>\n        <span id=\"lastUpdate-content\">{{question.lastUpdate | date:'mediumDate'}}</span>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"open(question)\">{{ 'EDIT_BUTTON' | translate }}</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"deleteModal(question)\">{{ 'DELETE_BUTTON' | translate }}</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 6822:
/*!******************************************************************!*\
  !*** ./src/app/pages/entities/question/question.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Questions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- todo: add elasticsearch support -->\n<ion-content class=\"ion-padding\">\n  <ion-refresher [disabled]=\"plt.is('desktop')\" slot=\"fixed\" (ionRefresh)=\"loadAll($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let question of questions; trackBy: trackId\" #slidingItem>\n      <ion-item (click)=\"view(question)\">\n        <ion-label text-wrap>\n          <p>{{question.id}}</p>\n          <p>{{question.intitule}}</p>\n          <p>{{question.image}}</p>\n          <p>{{question.dateCreation | date:'mediumDate'}}</p>\n          <p>{{question.lastUpdate | date:'mediumDate'}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"edit(slidingItem, question)\"> {{ 'EDIT_BUTTON' | translate }} </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(question)\"> {{ 'DELETE_BUTTON' | translate }} </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-item *ngIf=\"!questions?.length\">\n    <ion-label> No Questions found. </ion-label>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"new()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_entities_question_index_ts.js.map