import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class ReponseComponentsPage extends EntityComponentsPage {
  pageSelector = 'page-reponse';
}

export class ReponseUpdatePage extends EntityUpdatePage{
  pageSelector = 'page-reponse-update';

  setIntituleInput(intitule: string) {
    this.setInputValue('intitule', intitule);
  }

  setReponseUniqueInput(reponseUnique: string) {
    this.setBoolean('reponseUnique', reponseUnique);
  }

  setBonneReponseInput(bonneReponse: string) {
    this.setBoolean('bonneReponse', bonneReponse);
  }
}

export class ReponseDetailPage extends EntityDetailPage {
  pageSelector = 'page-reponse-detail';

  getIntituleContent() {
    return cy.get('#intitule-content');
  }

  getReponseUniqueContent() {
    return cy.get('#reponseUnique-content');
  }

  getBonneReponseContent() {
    return cy.get('#bonneReponse-content');
  }
}
