"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_entities_question-details_question-details_module_ts"],{

/***/ 6451:
/*!*****************************************************************!*\
  !*** ./src/app/pages/entities/question-details/EtatRep.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtatRep": () => (/* binding */ EtatRep)
/* harmony export */ });
var EtatRep;
(function (EtatRep) {
    EtatRep["TRUEANSWER"] = "TRUEANSWER";
    EtatRep["NEUTRALANSWER"] = "NEUTRALANSWER";
    EtatRep["FALSEANSWER"] = "FALSEANSWER";
})(EtatRep || (EtatRep = {}));


/***/ }),

/***/ 1050:
/*!*******************************************************************!*\
  !*** ./src/app/pages/entities/question-details/answer.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerService": () => (/* binding */ AnswerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let AnswerService = class AnswerService {
    constructor() { this.idReponse = []; }
};
AnswerService.ctorParameters = () => [];
AnswerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AnswerService);



/***/ }),

/***/ 1296:
/*!************************************************************************************!*\
  !*** ./src/app/pages/entities/question-details/question-details-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailsPageRoutingModule": () => (/* binding */ QuestionDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _question_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-details.page */ 880);




const routes = [
    {
        path: '',
        component: _question_details_page__WEBPACK_IMPORTED_MODULE_0__.QuestionDetailsPage
    }
];
let QuestionDetailsPageRoutingModule = class QuestionDetailsPageRoutingModule {
};
QuestionDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionDetailsPageRoutingModule);



/***/ }),

/***/ 5055:
/*!****************************************************************************!*\
  !*** ./src/app/pages/entities/question-details/question-details.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailsPageModule": () => (/* binding */ QuestionDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _question_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-details-routing.module */ 1296);
/* harmony import */ var _question_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-details.page */ 880);







let QuestionDetailsPageModule = class QuestionDetailsPageModule {
};
QuestionDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _question_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionDetailsPageRoutingModule
        ],
        declarations: [_question_details_page__WEBPACK_IMPORTED_MODULE_1__.QuestionDetailsPage]
    })
], QuestionDetailsPageModule);



/***/ }),

/***/ 880:
/*!**************************************************************************!*\
  !*** ./src/app/pages/entities/question-details/question-details.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailsPage": () => (/* binding */ QuestionDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _question_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-details.page.html?ngResource */ 8946);
/* harmony import */ var _question_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-details.page.scss?ngResource */ 7789);
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.service */ 6386);
/* harmony import */ var _local_save_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../local-save.service */ 6244);
/* harmony import */ var _EtatRep_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EtatRep.enum */ 6451);
/* harmony import */ var _answer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer.service */ 1050);
/* harmony import */ var _details_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../details-id.service */ 373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _question_globalService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question/globalService */ 5546);










let QuestionDetailsPage = class QuestionDetailsPage {
    constructor(param, gloablService, Answer, localSave, score) {
        this.param = param;
        this.gloablService = gloablService;
        this.Answer = Answer;
        this.localSave = localSave;
        this.score = score;
        this.indexCheckbox = 0;
        this.urlImg = './../../assets/img/questionsimages/';
        this.ext = '.JPG';
        this.reponseUnique = {
            reponse: '',
            disableField: false
        };
        this.question = [];
        this.tab = [];
    }
    ngOnInit() {
        this.favTabOrAllQuestion();
        this.renit();
        this.showBtnVld = true;
        this.checked = false;
        this.trouve = false;
        this.countChecking = 0;
    }
    favourite(idQuestion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.question[idQuestion].favourite) {
                this.question[idQuestion].favourite = false;
            }
            else {
                this.question[idQuestion].favourite = true;
            }
            yield this.localSave.localSave(this.question, false);
        });
    }
    onCheck(idQuestion, itemRep) {
        this.checkIfShowOrHideWrongIcon(itemRep);
        if (this.question[idQuestion].reponses[itemRep].isChecked) {
            this.question[idQuestion].reponses[itemRep].isChecked = false;
            this.countChecking--;
            let count = 0;
            this.question[idQuestion].reponses.forEach((elmt, index) => {
                if (elmt.isChecked) {
                    count++;
                }
            });
            if (count > 0) {
                this.checked = true;
            }
            else {
                this.checked = false;
            }
            //console.log(this.checked);
            this.Answer.idQuestion = idQuestion;
            this.Answer.idReponse.splice(this.Answer.idReponse.indexOf(itemRep), 1);
        }
        else if (!this.question[idQuestion].reponses[itemRep].isChecked) {
            this.question[idQuestion].reponses[itemRep].isChecked = true;
            this.indexCheckbox = itemRep;
            this.countChecking++;
            this.checked = true;
            /*this.question[idQuestion].reponses.forEach((elmt)=>{
              if(elmt.isChecked){
                count++;
              }
            });
            console.log('nbre deja cocher:',count);
            if(count > 0){
              this.checked = true;
            }else{
              this.checked = false;
            }
            if(this.countChecking != 0 && this.checked){
              this.checked = true;
            }else{
              this.checked = false;
            }*/
            this.Answer.idQuestion = idQuestion;
            this.Answer.idReponse.push(itemRep);
        }
    }
    isUniqueAnswer(idQuestion) {
        let isUniqueAnswer = this.question[idQuestion - 1].reponses[0].reponseUnique;
        if (isUniqueAnswer) {
            let reponseV = this.question[idQuestion - 1].reponses[0].intitule;
            let val = Number.parseInt(reponseV);
            let repUser = Number.parseInt(this.reponseUnique.reponse);
            if (val == repUser) {
                this.trouve = true;
                this.checked = true;
                this.lastResults(1);
                this.score.questionDone(idQuestion - 1, true, false);
            }
            else {
                if (this.isEmpty()) {
                    this.lastResults(2);
                    this.score.questionDone(idQuestion - 1, false, false, true);
                }
                else {
                    this.lastResults(0);
                    this.score.questionDone(idQuestion - 1, false, true);
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    checkAnswer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.reponseUnique.disableField = true;
            this.checkAns = true;
            this.showBtnVld = false;
            const idQuizz = this.Answer.idQuestion;
            const nbrReponse = this.Answer.idReponse.length;
            //checking multi choice or unique 
            var i;
            var val = 0;
            if (!this.isUniqueAnswer(this.idQuestion)) {
                for (i = 0; i < nbrReponse; i++) {
                    if (this.question[idQuizz].reponses[this.Answer.idReponse[i]].bonneReponse) {
                        val++;
                    }
                }
                if (val == nbrReponse && this.checked) {
                    this.trouve = true;
                    this.lastResults(1);
                    this.score.questionDone(idQuizz, true, false);
                }
                else if (this.checked && val != nbrReponse) {
                    this.lastResults(0);
                    this.score.questionDone(idQuizz, false, true);
                }
                else {
                    this.lastResults(2);
                    this.score.questionDone(idQuizz, false, false, true);
                }
            }
            //save after modif
            if (this.question.length == this.gloablService.globalQuestion.length) {
                //is All question
                yield this.localSave.localSave(this.question);
            }
            else if (this.question.length < this.gloablService.globalQuestion.length) {
                // is favourite question
                yield this.localSave.localSave(this.question, true);
            }
        });
    }
    lastResults(decision) {
        if (decision == 1) {
            this.question[this.idQuestion - 1].rep3 = this.question[this.idQuestion - 1].rep2;
            this.question[this.idQuestion - 1].rep2 = this.question[this.idQuestion - 1].rep1;
            this.question[this.idQuestion - 1].rep1 = _EtatRep_enum__WEBPACK_IMPORTED_MODULE_4__.EtatRep.TRUEANSWER;
        }
        else if (decision == 0) {
            this.question[this.idQuestion - 1].rep3 = this.question[this.idQuestion - 1].rep2;
            this.question[this.idQuestion - 1].rep2 = this.question[this.idQuestion - 1].rep1;
            this.question[this.idQuestion - 1].rep1 = _EtatRep_enum__WEBPACK_IMPORTED_MODULE_4__.EtatRep.FALSEANSWER;
        }
        else if (decision == 2) {
            this.question[this.idQuestion - 1].rep3 = this.question[this.idQuestion - 1].rep2;
            this.question[this.idQuestion - 1].rep2 = this.question[this.idQuestion - 1].rep1;
            this.question[this.idQuestion - 1].rep1 = _EtatRep_enum__WEBPACK_IMPORTED_MODULE_4__.EtatRep.NEUTRALANSWER;
        }
    }
    //verify if the field of unique answer is empty
    isEmpty() {
        return this.reponseUnique.reponse === '';
    }
    renit() {
        this.checked = false;
        this.showBtnVld = true;
        this.checkAns = false;
        this.trouve = false;
        this.reponseUnique.reponse = '';
        this.reponseUnique.disableField = false;
        this.countChecking = 0;
        this.indexCheckbox = 0;
        this.tab.length = 0;
        //renitialisation tabAnswer
        this.Answer.idReponse.length = 0;
        //renit field checked 
        this.question.forEach((elemt, index) => {
            elemt.reponses.forEach((elemtRep, indexRep) => {
                if (elemtRep.isChecked) {
                    this.question[index].reponses[indexRep].isChecked = false;
                }
            });
        });
    }
    //showPrevious question
    prev() {
        this.renit();
        if (this.idQuestion > 1 && this.idQuestion <= this.question.length) {
            this.idQuestion--;
        }
        else if (this.idQuestion == 1) {
            this.idQuestion = this.question.length;
        }
    }
    //showNext question
    next() {
        this.renit();
        if (this.idQuestion >= 1 && this.idQuestion < this.question.length) {
            this.idQuestion++;
        }
        else if (this.idQuestion == this.question.length) {
            this.idQuestion = 1;
        }
    }
    getIndexFav() {
        var tab = [];
        var n = 0;
        for (var i = 0; i < this.question.length; i++) {
            if (this.question[i].favourite) {
                tab[n] = i;
                n++;
            }
        }
        console.log(tab);
    }
    favTabOrAllQuestion() {
        //check if favQuizz or all question
        if (this.param.isFavouriteTab) {
            this.question = this.param.getFavQuizz();
            this.idQuestion = this.param.getIdQuestion() + 1;
        }
        else {
            this.question = this.param.getQuizzQuestion();
            this.idQuestion = this.param.getIdQuestion() + 1;
        }
    }
    checkIfShowOrHideWrongIcon(itemRep) {
        let count = 0;
        if (this.tab.length > 0) {
            this.tab.forEach((val, index) => {
                if (val == itemRep) {
                    count++;
                    this.tab.splice(index, 1);
                    if (index == 0) {
                        this.indexCheckbox = this.tab[index];
                    }
                    else {
                        this.indexCheckbox = this.tab[index - 1];
                    }
                }
            });
            if (count == 0) {
                this.tab.push(itemRep);
                this.indexCheckbox = itemRep;
            }
        }
        else {
            this.indexCheckbox = itemRep;
            this.tab.push(itemRep);
        }
    }
};
QuestionDetailsPage.ctorParameters = () => [
    { type: _details_id_service__WEBPACK_IMPORTED_MODULE_6__.DetailsParamService },
    { type: _question_globalService__WEBPACK_IMPORTED_MODULE_7__.GlobalService },
    { type: _answer_service__WEBPACK_IMPORTED_MODULE_5__.AnswerService },
    { type: _local_save_service__WEBPACK_IMPORTED_MODULE_3__.LocalSaveService },
    { type: _score_service__WEBPACK_IMPORTED_MODULE_2__.ScoreService }
];
QuestionDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-question-details',
        template: _question_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionDetailsPage);



/***/ }),

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

/***/ 7789:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/entities/question-details/question-details.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  margin-right: 30%;\n  margin-left: 35%;\n}\n.center #favv {\n  font-size: 35px;\n}\n.center .favourite {\n  color: yellow;\n}\n.lastAnswer {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-right: 5%;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n.lastAnswer .valid {\n  color: #45c445;\n  font-size: 20px;\n}\n.lastAnswer .failed {\n  color: red;\n  font-size: 20px;\n}\n.lastAnswer .neutral {\n  color: gray;\n  font-size: 20px;\n}\n.reponseF {\n  color: red;\n  font-size: 25px;\n}\n.reponseV {\n  color: #45c445;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7QUFDUjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQ1I7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoicXVlc3Rpb24tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICAjZmF2dntcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbiAgICAuZmF2b3VyaXRle1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbn1cblxuLmxhc3RBbnN3ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgLnZhbGlke1xuICAgICAgICBjb2xvcjogcmdiKDY5LCAxOTYsIDY5KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuZmFpbGVke1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5uZXV0cmFse1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cbi5yZXBvbnNlRntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5yZXBvbnNlVntcbiAgICBjb2xvcjogcmdiKDY5LCAxOTYsIDY5KTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 8946:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/entities/question-details/question-details.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-back-button slot=\"start\"></ion-back-button>\n      <ion-title>Question {{ idQuestion }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n        <span>{{idQuestion}} / {{question.length}}</span>\n\n        <div class=\"center\">\n          <span (click)=\"favourite(idQuestion-1)\" id=\"favv\" [ngClass]=\"{'favourite': question[idQuestion-1].favourite } \" text-center>\n            <ion-icon name='star' slot=\"end\"></ion-icon>\n          </span>\n        </div>\n\n        <div class=\"lastAnswer\">\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep1 == 'TRUEANSWER'\" class=\"valid\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span>\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep1 == 'FALSEANSWER'\" class=\"failed\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep1 == 'NEUTRALANSWER'\" class=\"neutral\"><ion-icon name=\"remove-circle-outline\"></ion-icon></span>\n\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep2 == 'TRUEANSWER'\" class=\"valid\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span>\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep2 == 'FALSEANSWER'\" class=\"failed\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep2 == 'NEUTRALANSWER'\" class=\"neutral\"><ion-icon name=\"remove-circle-outline\"></ion-icon></span>\n\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep3 == 'TRUEANSWER'\" class=\"valid\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span>\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep3 == 'FALSEANSWER'\" class=\"failed\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n            <span slot=\"end\" *ngIf=\"question[idQuestion-1].rep3 == 'NEUTRALANSWER'\" class=\"neutral\"><ion-icon name=\"remove-circle-outline\"></ion-icon></span>\n        </div>\n  </ion-item>\n      <div class=\"ion-margin\">\n        {{ question[idQuestion-1].intitule }}\n      </div>\n      <div class=\"card\">\n         <ion-card>\n           <form>\n              <span *ngIf=\"question[idQuestion-1].image != null \" >\n                <ion-img src={{urlImg}}{{question[idQuestion-1].image}}{{ext}}></ion-img>\n              </span>\n              <!--<span *ngIf=\"question[idQuestion-1].image == null \" >\n                <ion-img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFPh1uq0tNSHGzCHs3ygthFo83ixQ_VVVwQ&usqp=CAU\"></ion-img>\n              </span>-->\n              <br>\n              <span *ngIf=\"checkAns\"><strong><em>Reponse: <span style=\"margin-left: 2%; color: rgb(49, 209, 49); font-size: 18px;\" *ngIf=\"question[idQuestion-1].reponses[0].reponseUnique && reponseUnique.disableField\"> {{ question[idQuestion-1].reponses[0].intitule }} </span></em></strong></span>\n\n              <div *ngIf=\"question[idQuestion-1].reponses[0].reponseUnique\" >\n                <ion-item>\n                  <ion-label position=\"floating\"> <h4> <em>Votre Reponse ici...</em> </h4> </ion-label>\n                  <ion-input type=\"text\"  name=\"reponse\" [disabled]=\"reponseUnique.disableField\" [(ngModel)]=\"reponseUnique.reponse\"></ion-input>\n                  <span class=\"reponseV\" slot=\"end\" *ngIf=\"question[idQuestion-1].reponses[0].intitule == reponseUnique.reponse && reponseUnique.disableField\"><ion-icon name=\"checkmark-outline\"></ion-icon> </span>\n                  <span class=\"reponseF\" slot=\"end\" *ngIf=\"question[idQuestion-1].reponses[0].intitule != reponseUnique.reponse && reponseUnique.disableField\"><ion-icon name=\"close-outline\"></ion-icon> </span>\n                </ion-item>\n              </div>\n\n              <div *ngIf=\"!question[idQuestion-1].reponses[0].reponseUnique\" >\n                <ion-list *ngFor=\"let itemRep of question[idQuestion-1].reponses; let index = index \">\n\n                      <ion-item>\n\n                          <ion-checkbox slot=\"start\" disabled [checked]=\"question[idQuestion-1].reponses[index].bonneReponse\" color=\"success\" *ngIf=\"checkAns\" ></ion-checkbox>\n                          <ion-checkbox slot=\"start\" [disabled]=\"checkAns\" (click)=\"onCheck(idQuestion-1, index)\"></ion-checkbox>\n\n                          <ion-label text-wrap> {{ itemRep.intitule }} </ion-label>\n\n                          <span class=\"reponseV\" *ngIf=\"question[idQuestion-1].reponses[index].bonneReponse && checkAns && trouve && checked\"><ion-icon name=\"checkmark-outline\"></ion-icon></span>\n                          <span class=\"reponseF\" *ngIf=\"!question[idQuestion-1].reponses[index].bonneReponse && checkAns && indexCheckbox == index\"><ion-icon name=\"close-outline\"></ion-icon></span>\n\n                        </ion-item>\n                  </ion-list>\n              </div>\n\n                <div class=\"ion-padding\" style=\"text-align: center;\">\n                    <div style=\"float: left;\">\n                      <ion-button *ngIf=\"checkAns\" (click)=\"prev()\">\n                        <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n                        precedent\n                      </ion-button>\n                    </div>\n\n                    <span *ngIf=\"showBtnVld\">\n                      <ion-button type=\"button\" (click)=\"checkAnswer()\">\n                        Valider\n                      </ion-button>\n                    </span>\n\n                   <div style=\"float: right;\">\n                      <ion-button class=\"BtnEnd\" *ngIf=\"checkAns && !hideNextBtn\" (click)=\"next()\">\n                        suivant\n                        <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </div>\n\n             </form>\n          </ion-card>\n      </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_entities_question-details_question-details_module_ts.js.map