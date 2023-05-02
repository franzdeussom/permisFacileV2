import { GlobalService } from './../question/globalService';
import { ToastController } from '@ionic/angular';
import { ScoreService } from './../question-details/score.service';
import { Score } from './../question-details/Score.model';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-score-stat',
  templateUrl: './score-stat.page.html',
  styleUrls: ['./score-stat.page.scss'],
})
export class ScoreStatPage implements OnInit {
  scoreStat : Score[];
  score = 0 ;
  question: any[];
  constructor(
        private scoreService : ScoreService,
        private toast: ToastController,
        private listOfquestion: GlobalService
  ) { this.scoreStat = [] ; this.question = []}

  ngOnInit() {
    this.loadScore();
    console.log(this.scoreService.tabIndex);
    this.question = this.listOfquestion.globalQuestion;
  }

 async loadScore(){
      const { value } = await Storage.get({ key: 'Score' });
      if(!value || value.length === 0 || value === '[]' ){
        //no score save 
          const toast = await this.toast.create({message: 'Veuillez Repondre à au moins 5 quizz !', duration: 2000, position: 'top'});
          await toast.present();
      }else {
        this.scoreStat = JSON.parse(value);
        this.score = this.scoreService.generateScore();
      }
  }

 async renit(){

    this.scoreService.renitialise();
    this.scoreStat.length = 0;
    this.score = 0;
    const toast = await this.toast.create({message: 'Score et statisque renitialise avec succes !', duration: 2000, position: 'top'});
    await toast.present();

  }
  async renitFav(){
    this.question.forEach((elemen, index) => {
        if(elemen.favourite){
          this.question[index].favourite = false; 
        }
    });
    const toast = await this.toast.create({message: 'Favorites renitialise avec succes !', duration: 2000, position: 'top'});
    await toast.present();
  }

  async refresh(){
    this.loadScore();
    const toast = await this.toast.create({message: 'Actualiser avec succes !', duration: 2000, position: 'top'});
    await toast.present();
  }

  getScoreColor(): string{
    return this.score >= (this.scoreStat.length/2) ? 'greenyellow': 'red'; 
  }
}
