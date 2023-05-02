import { LocalSaveService } from './../local-save.service';
import { DetailsParamService } from './../details-id.service';
import { Storage } from '@capacitor/storage';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Question } from '../question/question.model';
import { GlobalService } from '../question/globalService';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {
   questions: Array<Question>;
  constructor(private route: Router,
              private param: DetailsParamService,
              private globalService: GlobalService,
              private goToFavourite: Router,
              private localSave: LocalSaveService
              ) { this.questions = [] }

  ngOnInit() { 
    //loading questions from globalService
      this.questions = this.globalService.globalQuestion;
     
  }

  async favourite(idQuestion : number){
        if(this.questions[idQuestion].favourite){
          this.questions[idQuestion].favourite = false;
        }else{
          this.questions[idQuestion].favourite = true;
        }
    
      await this.localSave.localSave(this.questions);
   }
   goDetail(id: number, quizz: Array<Question>){
    this.param.setIdQuestion(id, quizz, false);
    this.route.navigateByUrl('question-details');
   }
   goToFavouriteList(){
    this.goToFavourite.navigateByUrl('favourite-list');
 }
}
