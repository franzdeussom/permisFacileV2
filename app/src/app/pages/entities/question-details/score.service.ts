import { ToastController } from '@ionic/angular';
import { LocalSaveService } from './../local-save.service';
import { GlobalService } from './../question/globalService';
import { Score } from './Score.model';
import { Storage } from '@capacitor/storage';
import { Injectable } from '@angular/core';
import { Question } from '../question/question.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public countQustnDonne = 0;
   realScore = 0;
   tabIndex: Score[];
   questions: Question[];

  constructor(
      private gloabalService: GlobalService,
      private localSaveQuestion: LocalSaveService,
      private toast: ToastController
  ) { this.tabIndex = []; this.loadScore(); }

  countQuestionDonne(){
    this.countQustnDonne ++;
  }

  generateScore(): number{
    this.realScore = 0;
      this.tabIndex.forEach((elmt, index)=>{
         if(elmt.nbrTrouve > elmt.nbrRate && (elmt.nbrFoisJoue - elmt.nbrRate) >= 2 ){
          this.realScore++;
         }else if(elmt.nbrTrouve === 1 && elmt.nbrRate === 0){
          this.realScore++;
         }else if(elmt.nbrTrouve === 1 && elmt.nbrRate === 3 ){
          this.realScore = this.realScore + (1/3);
         }else if(elmt.nbrTrouve === 1 && elmt.nbrRate === 2 ){
          this.realScore = this.realScore + (1/2);
         }
      });
      let val = Math.round(this.realScore);

      this.saveScore();
      return val;
  }

  questionDone(indexQuizz: number, trouve?: boolean, rate?: boolean, ignore? : boolean){
    let i = 0;
    indexQuizz++;
      this.tabIndex.forEach((elmt)=>{
        if(elmt.indexQuestion === indexQuizz){
          if(rate){
            elmt.nbrRate++;
            elmt.nbrFoisJoue++;
          }
          if(trouve){
            elmt.nbrTrouve++;
            elmt.nbrFoisJoue++;
          }
          if(ignore){
            elmt.nbrFoisJoue++;
            elmt.nbrFoisIgnore++;
          }
          i++;
        }
      });
      if(i == 0 && trouve){
        this.tabIndex.push({
          indexQuestion: indexQuizz, 
          nbrTrouve: 1, 
          nbrRate: 0,
          nbrFoisJoue: 1,
          nbrFoisIgnore: 0
        });

      }else if(i == 0 && rate){
        this.tabIndex.push({
          indexQuestion: indexQuizz, 
          nbrTrouve: 0, 
          nbrRate: 1,
          nbrFoisJoue: 1,
          nbrFoisIgnore: 0
        });
      }else if(i == 0 && ignore){
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

    saveScore(){
      Storage.set({
      key : 'Score',
      value: JSON.stringify(this.tabIndex)
    });
  }

  async loadScore(){
    const { value } = await Storage.get({ key: 'Score' });
    if(!value || value.length === 0 || value === '[]' ){
      //no score save 
        const toast = await this.toast.create({message: 'Chargement...!', duration: 2000, position: 'top'});
        await toast.present();
    }else {
      this.tabIndex = JSON.parse(value);
      this.realScore = this.generateScore();

      this.saveScore();
    }
}

  renitialise(){
    this.questions = this.gloabalService.globalQuestion;
    this.questions.forEach((elemt)=>{
      if(elemt.rep1 != ''){
        elemt.rep1 = '';
      }
      if(elemt.rep2 != ''){
        elemt.rep2 = '';
      }
      if(elemt.rep3 != ''){
        elemt.rep3 = '';
      }
    });
    this.localSaveQuestion.localSave(this.questions);
    this.tabIndex.length = 0;
    this.realScore = 0;

    this.saveScore();
  }
  
}
