import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class QuestionComponentsPage extends EntityComponentsPage {
  pageSelector = 'page-question';
}

export class QuestionUpdatePage extends EntityUpdatePage{
  pageSelector = 'page-question-update';

  setIntituleInput(intitule: string) {
    this.setInputValue('intitule', intitule);
  }

  setImageInput(image: string) {
    this.setInputValue('image', image);
  }

  setDateCreationInput(dateCreation: string) {
    this.setDate('dateCreation', dateCreation);
  }

  setLastUpdateInput(lastUpdate: string) {
    this.setDate('lastUpdate', lastUpdate);
  }
}

export class QuestionDetailPage extends EntityDetailPage {
  pageSelector = 'page-question-detail';

  getIntituleContent() {
    return cy.get('#intitule-content');
  }

  getImageContent() {
    return cy.get('#image-content');
  }

  getDateCreationContent() {
    return cy.get('#dateCreation-content');
  }

  getLastUpdateContent() {
    return cy.get('#lastUpdate-content');
  }
}
