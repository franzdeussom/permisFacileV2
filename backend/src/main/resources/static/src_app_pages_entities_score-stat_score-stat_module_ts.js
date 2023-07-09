"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_score-stat_score-stat_module_ts"],{

/***/ 6386:
/*!******************************************************************!*\
  !*** ./src/app/pages/entities/question-details/score.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreService": () => (/* binding */ ScoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _local_save_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../local-save.service */ 6244);
/* harmony import */ var _question_globalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../question/globalService */ 5546);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






let ScoreService = class ScoreService {
    constructor(gloabalService, localSaveQuestion, toast) {
        this.gloabalService = gloabalService;
        this.localSaveQuestion = localSaveQuestion;
        this.toast = toast;
        this.countQustnDonne = 0;
        this.realScore = 0;
        this.tabIndex = [];
        this.loadScore();
    }
    countQuestionDonne() {
        this.countQustnDonne++;
    }
    generateScore() {
        this.realScore = 0;
        this.tabIndex.forEach((elmt, index) => {
            if (elmt.nbrTrouve > elmt.nbrRate && (elmt.nbrFoisJoue - elmt.nbrRate) >= 2) {
                this.realScore++;
            }
            else if (elmt.nbrTrouve === 1 && elmt.nbrRate === 0) {
                this.realScore++;
            }
            else if (elmt.nbrTrouve === 1 && elmt.nbrRate === 3) {
                this.realScore = this.realScore + (1 / 3);
            }
            else if (elmt.nbrTrouve === 1 && elmt.nbrRate === 2) {
                this.realScore = this.realScore + (1 / 2);
            }
        });
        let val = Math.round(this.realScore);
        this.saveScore();
        return val;
    }
    questionDone(indexQuizz, trouve, rate, ignore) {
        let i = 0;
        indexQuizz++;
        this.tabIndex.forEach((elmt) => {
            if (elmt.indexQuestion === indexQuizz) {
                if (rate) {
                    elmt.nbrRate++;
                    elmt.nbrFoisJoue++;
                }
                if (trouve) {
                    elmt.nbrTrouve++;
                    elmt.nbrFoisJoue++;
                }
                if (ignore) {
                    elmt.nbrFoisJoue++;
                    elmt.nbrFoisIgnore++;
                }
                i++;
            }
        });
        if (i == 0 && trouve) {
            this.tabIndex.push({
                indexQuestion: indexQuizz,
                nbrTrouve: 1,
                nbrRate: 0,
                nbrFoisJoue: 1,
                nbrFoisIgnore: 0
            });
        }
        else if (i == 0 && rate) {
            this.tabIndex.push({
                indexQuestion: indexQuizz,
                nbrTrouve: 0,
                nbrRate: 1,
                nbrFoisJoue: 1,
                nbrFoisIgnore: 0
            });
        }
        else if (i == 0 && ignore) {
            this.tabIndex.push({
                indexQuestion: indexQuizz,
                nbrTrouve: 0,
                nbrRate: 0,
                nbrFoisJoue: 1,
                nbrFoisIgnore: 1
            });
        }
        this.saveScore();
    }
    saveScore() {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Score',
            value: JSON.stringify(this.tabIndex)
        });
    }
    loadScore() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Score' });
            if (!value || value.length === 0 || value === '[]') {
                //no score save 
                const toast = yield this.toast.create({ message: 'Chargement...!', duration: 2000, position: 'top' });
                yield toast.present();
            }
            else {
                this.tabIndex = JSON.parse(value);
                this.realScore = this.generateScore();
                this.saveScore();
            }
        });
    }
    renitialise() {
        this.questions = this.gloabalService.globalQuestion;
        this.questions.forEach((elemt) => {
            if (elemt.rep1 != '') {
                elemt.rep1 = '';
            }
            if (elemt.rep2 != '') {
                elemt.rep2 = '';
            }
            if (elemt.rep3 != '') {
                elemt.rep3 = '';
            }
        });
        this.localSaveQuestion.localSave(this.questions);
        this.tabIndex.length = 0;
        this.realScore = 0;
        this.saveScore();
    }
};
ScoreService.ctorParameters = () => [
    { type: _question_globalService__WEBPACK_IMPORTED_MODULE_1__.GlobalService },
    { type: _local_save_service__WEBPACK_IMPORTED_MODULE_0__.LocalSaveService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
ScoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ScoreService);



/***/ }),

/***/ 1122:
/*!************************************************************************!*\
  !*** ./src/app/pages/entities/score-stat/score-stat-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreStatPageRoutingModule": () => (/* binding */ ScoreStatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _score_stat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-stat.page */ 7016);




const routes = [
    {
        path: '',
        component: _score_stat_page__WEBPACK_IMPORTED_MODULE_0__.ScoreStatPage
    }
];
let ScoreStatPageRoutingModule = class ScoreStatPageRoutingModule {
};
ScoreStatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScoreStatPageRoutingModule);



/***/ }),

/***/ 3841:
/*!****************************************************************!*\
  !*** ./src/app/pages/entities/score-stat/score-stat.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreStatPageModule": () => (/* binding */ ScoreStatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _score_stat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-stat-routing.module */ 1122);
/* harmony import */ var _score_stat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-stat.page */ 7016);







let ScoreStatPageModule = class ScoreStatPageModule {
};
ScoreStatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _score_stat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScoreStatPageRoutingModule
        ],
        declarations: [_score_stat_page__WEBPACK_IMPORTED_MODULE_1__.ScoreStatPage]
    })
], ScoreStatPageModule);



/***/ }),

/***/ 7016:
/*!**************************************************************!*\
  !*** ./src/app/pages/entities/score-stat/score-stat.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreStatPage": () => (/* binding */ ScoreStatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _score_stat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-stat.page.html?ngResource */ 4098);
/* harmony import */ var _score_stat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-stat.page.scss?ngResource */ 5088);
/* harmony import */ var _question_globalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../question/globalService */ 5546);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _question_details_score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../question-details/score.service */ 6386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 460);








let ScoreStatPage = class ScoreStatPage {
    constructor(scoreService, toast, listOfquestion) {
        this.scoreService = scoreService;
        this.toast = toast;
        this.listOfquestion = listOfquestion;
        this.score = 0;
        this.scoreStat = [];
        this.question = [];
    }
    ngOnInit() {
        this.loadScore();
        console.log(this.scoreService.tabIndex);
        this.question = this.listOfquestion.globalQuestion;
    }
    loadScore() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({ key: 'Score' });
            if (!value || value.length === 0 || value === '[]') {
                //no score save 
                const toast = yield this.toast.create({ message: 'Veuillez Repondre à au moins 5 quizz !', duration: 2000, position: 'top' });
                yield toast.present();
            }
            else {
                this.scoreStat = JSON.parse(value);
                this.score = this.scoreService.generateScore();
            }
        });
    }
    renit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.scoreService.renitialise();
            this.scoreStat.length = 0;
            this.score = 0;
            const toast = yield this.toast.create({ message: 'Score et statisque renitialise avec succes !', duration: 2000, position: 'top' });
            yield toast.present();
        });
    }
    renitFav() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.question.forEach((elemen, index) => {
                if (elemen.favourite) {
                    this.question[index].favourite = false;
                }
            });
            const toast = yield this.toast.create({ message: 'Favorites renitialise avec succes !', duration: 2000, position: 'top' });
            yield toast.present();
        });
    }
    refresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadScore();
            const toast = yield this.toast.create({ message: 'Actualiser avec succes !', duration: 2000, position: 'top' });
            yield toast.present();
        });
    }
    getScoreColor() {
        return this.score >= (this.scoreStat.length / 2) ? 'greenyellow' : 'red';
    }
};
ScoreStatPage.ctorParameters = () => [
    { type: _question_details_score_service__WEBPACK_IMPORTED_MODULE_3__.ScoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _question_globalService__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
ScoreStatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-score-stat',
        template: _score_stat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_score_stat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScoreStatPage);



/***/ }),

/***/ 5088:
/*!***************************************************************************!*\
  !*** ./src/app/pages/entities/score-stat/score-stat.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".nbrTrouve {\n  color: greenyellow;\n}\n\n.nbrRate {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLXN0YXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSiIsImZpbGUiOiJzY29yZS1zdGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYnJUcm91dmV7XG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuLm5iclJhdGV7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */";

/***/ }),

/***/ 4098:
/*!***************************************************************************!*\
  !*** ./src/app/pages/entities/score-stat/score-stat.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Score-Statistic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    \n      <ion-list>\n        <div *ngIf=\"scoreStat.length === 0\" class=\"ion-margin\">\n          <h4> <em>No Score yet...</em> </h4> \n        </div>\n          <div *ngFor=\"let element of scoreStat\" >\n              <ion-item>\n                <ion-label text-wrap> \n                  <p> <em> <strong> Quizz N°: {{ element.indexQuestion }} </strong> </em></p> <br>\n                  <p>Nombre de fois Jouées : <strong> {{ element.nbrFoisJoue }} </strong>  </p>\n                  <p>Nombre de fois Trouvées : <span class=\"nbrTrouve\"> {{ element.nbrTrouve }}  </span> </p>\n                  <p>Nombre de fois Ratées : <span class=\"nbrRate\"> {{ element.nbrRate }} </span>  </p>\n                  <p>Nombre de fois Ignorées : <span class=\"nbrIgnorer\"> {{ element.nbrFoisIgnore }} </span>  </p>\n\n                </ion-label>\n              </ion-item>\n          </div>\n       </ion-list>\n  </div>\n\n  <div class=\"ion-padding\">\n      <p><span>Score Total : </span> <span [ngStyle]=\"{color : getScoreColor()}\"> <em> {{  score }} </em>  </span> </p>\n      <ion-button expand=\"block\" type=\"submit\" color=\"danger\" (click)=\"renit()\"> Renitialise Tout </ion-button>\n      <p><ion-button expand=\"block\" type=\"submit\" color=\"danger\" (click)=\"renitFav()\"> Renitialise tous mes favorites </ion-button></p>\n      <p>  \n      <ion-button expand=\"block\" type=\"submit\" color=\"primary\" (click)=\"refresh()\"> Actualise </ion-button>\n      </p>\n  </div>\n       \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_score-stat_score-stat_module_ts.js.map