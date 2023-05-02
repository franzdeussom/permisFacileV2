import { CheckAccountTypeService } from './check-account-type.service';
import { EtatRep } from './../entities/question-details/EtatRep.enum';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Account } from 'src/model/account.model';
import { AccountService } from '../../services/auth/account.service';
import { LoginService } from '../../services/login/login.service';
import { Question } from '../entities/question/question.model';
import { GlobalService } from '../entities/question/globalService';
import { LocalSaveService } from './..//entities/local-save.service';
import { DetailsParamService } from '../entities/details-id.service';
import { QuestionService } from '../entities/question';
import { HttpResponse } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { filter, map } from 'rxjs/operators';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  account: Account;
  questions: Question[];
  etatRep: EtatRep;
  constructor(public navController: NavController, private accountService: AccountService, private loginService: LoginService,
                    private param: DetailsParamService,
                    private globalService: GlobalService,
                    private localSave: LocalSaveService,
                    private questionService: QuestionService,
                    private toastCtrl: ToastController,
                    private typeAccount : CheckAccountTypeService

                    ) { this.questions = [] }

  ngOnInit() {
    this.accountService.identity().then((account) => {
      if (account === null) {
        this.goBackToHomePage();
      } else {
        this.account = account;
      }
    });
      //loading questions from globalService
      this.init();

      this.typeAccount.isAdmin();
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  async init() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
    const { value } = await Storage.get({ key: 'questions' });
    if(!status.connected) {
        if(!value || value.length === 0 || value === "[]") {
            // no question and no connection
            const toast = await this.toastCtrl.create({message: 'Besoin d internet pour le chargement!', duration: 2000, position: 'middle'});
            await toast.present();
        }else {
            this.questions = JSON.parse(value);
            this.globalService.globalQuestion = this.questions;
        }
    }
    if(status.connected){
        if(!value || value.length === 0 || value === "[]") {
            this.questionService.query().pipe(
                filter((res: HttpResponse<Question[]>) => res.ok),
                map((res: HttpResponse<Question[]>) => res.body)
            )
            .subscribe(
                (response: Question[]) => {
                    this.questions = response;
                    this.globalService.globalQuestion = this.questions;
                    Storage.set({
                        key: 'questions',
                        value: JSON.stringify(this.questions)
                    });                     
                });       
        }else{
            this.questions = JSON.parse(value);

            this.questionService.queryFromIndex(this.questions.length).pipe(
                filter((res: HttpResponse<Question[]>) => res.ok),
                map((res: HttpResponse<Question[]>) => res.body)
            )
            .subscribe(
                (response: Question[]) => {
                    this.questions.concat(response);
                    //set singleton and save
                    this.globalService.globalQuestion = this.questions;
                    Storage.set({
                        key: 'questions',
                        value: JSON.stringify(this.questions)
                    });
                },
            );   
        }
    }
    

}

  logout() {
    this.loginService.logout();
    this.typeAccount.isAdministrator = false;
    this.goBackToHomePage();
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
    this.navController.navigateForward('/question-details');
   }

  private goBackToHomePage(): void {
    this.navController.navigateRoot('login');
  }
  countNbrPlay(){
    let count = 0;
    console.log('nbr of questions done :', count);
    alert(count);
  }
  
  
}
