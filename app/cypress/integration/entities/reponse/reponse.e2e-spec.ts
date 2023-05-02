import { USER_USERNAME, USER_PASSWORD } from '../../../support/config';
import {
  ReponseComponentsPage,
  ReponseDetailPage,
  ReponseUpdatePage
} from '../../../support/pages/entities/reponse/reponse.po';
import reponseSample from './reponse.json';

describe('Reponse entity', () => {
  const COMPONENT_TITLE = 'Reponses';
  const SUBCOMPONENT_TITLE = 'Reponse';

  const reponsePageUrl = '/tabs/entities/reponse';
  const reponseApiUrl = '/api/reponses';

  const reponseComponentsPage = new ReponseComponentsPage();
  const reponseUpdatePage = new ReponseUpdatePage();
  const reponseDetailPage = new ReponseDetailPage();

  let reponse: any;

  beforeEach(() => {
    reponse = undefined;
    cy.login(USER_USERNAME, USER_PASSWORD);
  });

  describe('navigation test', () => {
    it('should load Reponses page using menu and go back', () => {
      cy.visit('/tabs/home');
      // go to entity component page
      cy.get('ion-tab-button[tab="entities"]').click();
      cy.get('ion-item h2').contains(SUBCOMPONENT_TITLE).first().click();

      reponseComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE).should('be.visible');
      cy.url().should('include', reponsePageUrl);

      reponseComponentsPage.back();
      cy.url().should('include', '/tabs/entities');
    });

    it('should load create Reponse page and go back', () => {
      cy.visit(reponsePageUrl);
      reponseComponentsPage.clickOnCreateButton();

      reponseUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);

      reponseUpdatePage.back();
      cy.url().should('include', reponsePageUrl);
    });
  });

  describe('navigation test with items', () => {
    beforeEach(() => {
      cy.authenticatedRequest({
        method: 'POST',
        url: reponseApiUrl,
        body: reponseSample,
      }).then(({ body }) => {
        reponse = body;

        cy.intercept(
          {
            method: 'GET',
            url: `${reponseApiUrl}+(?*|)`,
            times: 1,
          },
          {
            statusCode: 200,
            body: [reponse],
          }
        ).as('entitiesRequestInternal');
      });
    });

    afterEach(() => {
      if (reponse) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${reponseApiUrl}/${reponse.id}`,
        }).then(() => {
          reponse = undefined;
        });
      }
    });

    it('should open Reponse view, open Reponse edit and go back', () => {
      cy.visit(reponsePageUrl);
      reponseComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      reponseDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      if (reponse.intitule !== undefined && reponse.intitule !== null) {
        reponseDetailPage.getIntituleContent().contains(reponse.intitule);
      }
      reponseDetailPage.edit();

      reponseUpdatePage.back();
      reponseDetailPage.back();
      cy.url().should('include', reponsePageUrl);
    });

    it('should open Reponse view, open Reponse edit and save', () => {
      cy.visit(reponsePageUrl);
      reponseComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      reponseDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      reponseDetailPage.edit();

      reponseUpdatePage.save();
      cy.url().should('include', reponsePageUrl);
    });

    it('should delete Reponse', () => {
      cy.visit(reponsePageUrl);
      reponseComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      reponseDetailPage.delete();
      cy.get('ion-alert button:not(.alert-button-role-cancel)').click();

      reponseComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE);
      reponse = undefined;
    });
  });

  describe('creation test', () => {
    beforeEach(() => {
      cy.intercept({
        method: 'POST',
        url: reponseApiUrl,
        times: 1,
      }).as('entitiesPost');
    });

    afterEach(() => {
      if (reponse) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${reponseApiUrl}/${reponse.id}`,
        }).then(() => {
          reponse = undefined;
        });
      }
    });

    it('should create Reponse', () => {
      cy.visit(reponsePageUrl + '/new');

      reponseUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);
      if (reponseSample.intitule !== undefined && reponseSample.intitule !== null) {
        reponseUpdatePage.setIntituleInput(reponseSample.intitule);
      }
      if (reponseSample.reponseUnique !== undefined && reponseSample.reponseUnique !== null) {
        reponseUpdatePage.setReponseUniqueInput(reponseSample.reponseUnique);
      }
      if (reponseSample.bonneReponse !== undefined && reponseSample.bonneReponse !== null) {
        reponseUpdatePage.setBonneReponseInput(reponseSample.bonneReponse);
      }
      reponseUpdatePage.save();

      cy.wait('@entitiesPost').then(({ response }) => {
        const { body } = response;
        reponse = body;
      });

      reponseComponentsPage.getPageTitle().contains(COMPONENT_TITLE);
    });
  });
});
