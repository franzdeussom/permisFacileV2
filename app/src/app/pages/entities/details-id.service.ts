import { Injectable } from '@angular/core';
import { Question } from './question';


@Injectable({
  providedIn: 'root'
})
export class DetailsParamService {
   id : number;
   quizz : Array<Question>;
   favQuizz : Array<Question>;
  public isFavouriteTab: boolean;
   
  constructor() { this.isFavouriteTab = false; }

  setIdQuestion(id : number, quizz: Array<Question>, isFavouriteTab?: boolean){
    this.id = id;
    this.quizz = quizz;
    this.isFavouriteTab = isFavouriteTab;
    if(this.isFavouriteTab){
      this.favQuizz = quizz;
    }else{
      this.quizz = quizz;
    }
  }
  getIdQuestion(): number{
    return this.id;
  }
  getQuizzQuestion(): Array<Question>{
    return this.quizz;
  }
  getFavQuizz(): Array<Question>{
    return this.favQuizz;
  }
}
