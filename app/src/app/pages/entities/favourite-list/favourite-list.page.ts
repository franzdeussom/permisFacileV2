import { DetailsParamService } from './../details-id.service';
import { LocalSaveService } from './../local-save.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../question/globalService';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.page.html',
  styleUrls: ['./favourite-list.page.scss'],
})
export class FavouriteListPage implements OnInit {
  question: Question[];
  nbrFav = 0;
  favTab: Question[];
  constructor(
          private getQuestion : GlobalService,
          private localSave : LocalSaveService,
          private goDetail : Router,
          private detailParam: DetailsParamService
  ) { this.question = []; this.favTab = [] }

  ngOnInit() {
    this.question = this.getQuestion.globalQuestion;
    this.countNbrFav();
    this.createFavTab();
  }
   async unsetFavourite(idQuestion: number){
      this.question[idQuestion].favourite = false;
      this.nbrFav--;
      //save after modify property
      await this.localSave.localSave(this.question);
   }
   goToDetails(idQuestion: number, question: Question[]){
      this.detailParam.setIdQuestion(idQuestion, question, true);
      this.goDetail.navigateByUrl('question-details');
   }

   countNbrFav(){
      for(var i=0; i<this.question.length; i++){
          if(this.question[i].favourite){
                this.nbrFav++;
          }
      }
   }
   createFavTab(){
      let k = 0 ;
      for(var i=0; i<this.question.length; i++){
         if(this.question[i].favourite){
             this.favTab[k] = this.question[i];
             k++;
         }
     }
     console.log(this.favTab);
   }
}
