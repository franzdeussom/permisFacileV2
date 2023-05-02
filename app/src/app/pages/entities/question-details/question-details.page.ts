import { ScoreService } from './score.service';
import { LocalSaveService } from './../local-save.service';
import { Router } from '@angular/router';
import { EtatRep } from './EtatRep.enum';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswerService } from './answer.service';
import { DetailsParamService } from './../details-id.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { GlobalService } from '../question/globalService';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.page.html',
  styleUrls: ['./question-details.page.scss'],
})
export class QuestionDetailsPage implements OnInit {
    idQuestion: number;
    tab : Array<any>;
    question: Array<Question>;
    checkAns: boolean | false;
    showBtnVld: boolean | true;
    hideNextBtn: boolean;
    trouve: boolean;
    etatRep : EtatRep;
    checked:  boolean;
    indexCheckbox: number = 0; 
    urlImg = './../../assets/img/questionsimages/';
    ext = '.JPG';
    countChecking: number;
    reponseUnique : { reponse: string, disableField: boolean } = { 
      reponse: '',  
      disableField: false 
    };

  constructor(private param : DetailsParamService,
              private gloablService: GlobalService,
              private Answer : AnswerService,
              private localSave: LocalSaveService,
              private score : ScoreService
              ) { this.question = []; this.tab = []}

  ngOnInit() {
    
    this.favTabOrAllQuestion();
    this.renit();
   this.showBtnVld = true;
   this.checked = false;
   this.trouve = false;
   this.countChecking = 0;

  }
  async favourite(idQuestion : number){
    if(this.question[idQuestion].favourite){
      this.question[idQuestion].favourite = false;
    }else{
      this.question[idQuestion].favourite = true;
    }

  await this.localSave.localSave(this.question, false);
}

  onCheck(idQuestion: number, itemRep: number): void{
      this.checkIfShowOrHideWrongIcon(itemRep);

    if(this.question[idQuestion].reponses[itemRep].isChecked){
      this.question[idQuestion].reponses[itemRep].isChecked = false;
      this.countChecking--;
      let count = 0;
      this.question[idQuestion].reponses.forEach((elmt, index)=>{
        if(elmt.isChecked){
          count++;
        }
      });
      if(count > 0){
        this.checked = true;
      }else{
        this.checked = false;

      }

      //console.log(this.checked);
      this.Answer.idQuestion = idQuestion;
      this.Answer.idReponse.splice(this.Answer.idReponse.indexOf(itemRep), 1);
  
    }else if(!this.question[idQuestion].reponses[itemRep].isChecked) {
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

  isUniqueAnswer(idQuestion: number): boolean {
      let isUniqueAnswer = this.question[idQuestion-1].reponses[0].reponseUnique;
     
      if(isUniqueAnswer){

        let reponseV = this.question[idQuestion-1].reponses[0].intitule;

        let val = Number.parseInt(reponseV);
        let repUser = Number.parseInt(this.reponseUnique.reponse);

        if(val == repUser){
          this.trouve = true;
          this.checked = true;
          this.lastResults(1);
          this.score.questionDone(idQuestion-1, true, false);
        }else{
          if(this.isEmpty()){
            this.lastResults(2);
            this.score.questionDone(idQuestion-1, false, false, true);

          }else{
            this.lastResults(0);
            this.score.questionDone(idQuestion-1, false, true);
          }
        }
        return true;
      }else{
        return false;
      }
      
  }
   async checkAnswer(){
    this.reponseUnique.disableField = true;
    this.checkAns = true;
    this.showBtnVld = false;
    
    const idQuizz = this.Answer.idQuestion;
    const nbrReponse = this.Answer.idReponse.length;

    //checking multi choice or unique 
    var i;
    var val=0;
    if(!this.isUniqueAnswer(this.idQuestion)){
      for(i = 0; i < nbrReponse; i++){
        if(this.question[idQuizz].reponses[this.Answer.idReponse[i]].bonneReponse){
          val++;
        }
      }
      if(val == nbrReponse && this.checked){
        this.trouve = true;
        this.lastResults(1);
        this.score.questionDone(idQuizz, true, false);

      }else if(this.checked && val != nbrReponse){
        this.lastResults(0);
        this.score.questionDone(idQuizz, false, true);

      }else{
        this.lastResults(2);
        this.score.questionDone(idQuizz, false, false, true);
      }
    }

    //save after modif
    if(this.question.length == this.gloablService.globalQuestion.length){
        //is All question
        await this.localSave.localSave(this.question);

    }else if(this.question.length < this.gloablService.globalQuestion.length){
         // is favourite question
        await this.localSave.localSave(this.question, true);

    }
    
   }

   lastResults(decision : number): void{

       if(decision == 1){
        
          this.question[this.idQuestion-1].rep3 = this.question[this.idQuestion-1].rep2;
          this.question[this.idQuestion-1].rep2 = this.question[this.idQuestion-1].rep1;
          this.question[this.idQuestion-1].rep1 = EtatRep.TRUEANSWER;
         
       }else if(decision == 0){

          this.question[this.idQuestion-1].rep3 = this.question[this.idQuestion-1].rep2;
          this.question[this.idQuestion-1].rep2 = this.question[this.idQuestion-1].rep1;
          this.question[this.idQuestion-1].rep1 = EtatRep.FALSEANSWER;

       }else if(decision == 2){

        this.question[this.idQuestion-1].rep3 = this.question[this.idQuestion-1].rep2;
        this.question[this.idQuestion-1].rep2 = this.question[this.idQuestion-1].rep1;
        this.question[this.idQuestion-1].rep1 = EtatRep.NEUTRALANSWER;
       }

   }

   //verify if the field of unique answer is empty
   isEmpty(): boolean {
      return this.reponseUnique.reponse === '';
   }
   
   renit(){
    this.checked = false;
    this.showBtnVld = true;
    this.checkAns = false;
    this.trouve = false;
    this.reponseUnique.reponse = '';
    this.reponseUnique.disableField = false;
    this.countChecking = 0;
    this.indexCheckbox = 0;
    this.tab.length = 0

    //renitialisation tabAnswer
    this.Answer.idReponse.length = 0;

    //renit field checked 
    this.question.forEach((elemt, index)=>{
        elemt.reponses.forEach((elemtRep, indexRep)=>{
          if(elemtRep.isChecked){
            this.question[index].reponses[indexRep].isChecked = false;
          }
        })
    });

   } 

   //showPrevious question
   prev(){
    this.renit();

    if(this.idQuestion > 1 && this.idQuestion <= this.question.length){
      this.idQuestion--;
    }else if(this.idQuestion == 1) {
      this.idQuestion = this.question.length;
    }
   }

   //showNext question
   next(){
    this.renit();
    if(this.idQuestion >= 1 && this.idQuestion < this.question.length){
      
      this.idQuestion++;
    }else if(this.idQuestion == this.question.length) {
        this.idQuestion = 1;
    }
   }
   getIndexFav(){
    var tab = [];
    var n = 0;
      for(var i = 0; i<this.question.length; i++){
        if(this.question[i].favourite){
          tab[n]= i;
          n++;
        }
      }
      console.log(tab);
   }
   favTabOrAllQuestion(){
    //check if favQuizz or all question

      if(this.param.isFavouriteTab){
        this.question = this.param.getFavQuizz();
        this.idQuestion = this.param.getIdQuestion()+1;

      }else{
        this.question = this.param.getQuizzQuestion();
        this.idQuestion = this.param.getIdQuestion()+1;
      }
   }

   checkIfShowOrHideWrongIcon(itemRep: number){
    let count = 0 ;
    if(this.tab.length > 0){
      this.tab.forEach((val, index)=>{
        if(val == itemRep){
          count++;  
          this.tab.splice(index, 1);
          if(index == 0){
            this.indexCheckbox = this.tab[index];
          }else{
            this.indexCheckbox = this.tab[index-1];
          }
          
        }
      })
      if(count == 0){
        this.tab.push(itemRep);
        this.indexCheckbox = itemRep;
      }
    }else{
      this.indexCheckbox = itemRep;
      this.tab.push(itemRep);
    }
   }
}
