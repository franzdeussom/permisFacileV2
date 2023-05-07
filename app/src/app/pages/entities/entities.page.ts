import { CheckAccountTypeService } from './../home/check-account-type.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entities',
  templateUrl: 'entities.page.html',
  styleUrls: ['entities.page.scss'],
})
export class EntitiesPage implements OnInit{
  entities: Array<any> = [
    { name: 'Question', component: 'QuestionPage', route: 'question' },
    { name: 'Reponse', component: 'ReponsePage', route: 'reponse' },
    { name: 'User Device', component: 'UserDevicePage', route: 'user-device' },
    { name: 'Mes Favoris', component: 'QuestionFavouriteListPage', route: 'favourite-list' },
    { name: 'Score && Statistiques', component: 'QuestionScoreStat', route: 'score-stat' },
    { name: 'Generate Users', component: 'GenerateUsers', route: 'generate-users' }

    /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
  ];

  entitiesUser: Array<any> = [
    { name: 'Mes Favoris', component: 'QuestionFavouriteListPage', route: 'favourite-list' },
    { name: 'Score && Statistiques', component: 'QuestionScoreStat', route: 'score-stat' },
  ];

  showAllEntities : boolean;

  constructor(public navController: NavController, private checkAccount: CheckAccountTypeService ) {}

  ngOnInit(): void {
    this.showAllEntities = false;
    this.isAdmin();
  }

  openPage(page) {
    this.navController.navigateForward('/tabs/entities/' + page.route);
  }
  
   isAdmin(){
      if(this.checkAccount.isAdministrator){
        this.showAllEntities = true;
      }else{
        this.showAllEntities = false;
      }
   }
}
