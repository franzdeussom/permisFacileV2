import { Question } from './question';
import { GlobalService } from './question/globalService';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalSaveService {

  defaultQuestionTab : Question[];
  constructor(
    private globalService : GlobalService
  ) { this.defaultQuestionTab = this.globalService.globalQuestion }

  async localSave(question: Question[], isFavouriteTab?: boolean){
    if(isFavouriteTab){
      var tab = [];
      var k = 0;
        for(var i = 0; i<question.length; i++){
          if(question[i].favourite){
            tab[k]= i;
            k++;
          }
        }
        for(var i=0; i < question.length; i++){
          if(i == tab[i]){
            this.defaultQuestionTab[i] = question[i]; 
          }
        }
        this.save(this.defaultQuestionTab);
    }else{
        this.save(question); 
    }
       
  }
  private save(QuestionTab: Question[]){
    this.globalService.globalQuestion = QuestionTab;
    Storage.set({
      key: 'questions',
      value: JSON.stringify(QuestionTab)
    }); 
  }
}
