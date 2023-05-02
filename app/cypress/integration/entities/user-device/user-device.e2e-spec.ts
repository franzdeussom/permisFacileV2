import { USER_USERNAME, USER_PASSWORD } from '../../../support/config';
import {
  UserDeviceComponentsPage,
  UserDeviceDetailPage,
  UserDeviceUpdatePage
} from '../../../support/pages/entities/user-device/user-device.po';
import userDeviceSample from './user-device.json';

describe('UserDevice entity', () => {
  const COMPONENT_TITLE = 'User Devices';
  const SUBCOMPONENT_TITLE = 'User Device';

  const userDevicePageUrl = '/tabs/entities/user-device';
  const userDeviceApiUrl = '/api/user-devices';

  const userDeviceComponentsPage = new UserDeviceComponentsPage();
  const userDeviceUpdatePage = new UserDeviceUpdatePage();
  const userDeviceDetailPage = new UserDeviceDetailPage();

  let userDevice: any;

  beforeEach(() => {
    userDevice = undefined;
    cy.login(USER_USERNAME, USER_PASSWORD);
  });

  describe('navigation test', () => {
    it('should load UserDevices page using menu and go back', () => {
      cy.visit('/tabs/home');
      // go to entity component page
      cy.get('ion-tab-button[tab="entities"]').click();
      cy.get('ion-item h2').contains(SUBCOMPONENT_TITLE).first().click();

      userDeviceComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE).should('be.visible');
      cy.url().should('include', userDevicePageUrl);

      userDeviceComponentsPage.back();
      cy.url().should('include', '/tabs/entities');
    });

    it('should load create UserDevice page and go back', () => {
      cy.visit(userDevicePageUrl);
      userDeviceComponentsPage.clickOnCreateButton();

      userDeviceUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);

      userDeviceUpdatePage.back();
      cy.url().should('include', userDevicePageUrl);
    });
  });

  describe('navigation test with items', () => {
    beforeEach(() => {
      cy.authenticatedRequest({
        method: 'POST',
        url: userDeviceApiUrl,
        body: userDeviceSample,
      }).then(({ body }) => {
        userDevice = body;

        cy.intercept(
          {
            method: 'GET',
            url: `${userDeviceApiUrl}+(?*|)`,
            times: 1,
          },
          {
            statusCode: 200,
            body: [userDevice],
          }
        ).as('entitiesRequestInternal');
      });
    });

    afterEach(() => {
      if (userDevice) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${userDeviceApiUrl}/${userDevice.id}`,
        }).then(() => {
          userDevice = undefined;
        });
      }
    });

    it('should open UserDevice view, open UserDevice edit and go back', () => {
      cy.visit(userDevicePageUrl);
      userDeviceComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      userDeviceDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      if (userDevice.deviceId !== undefined && userDevice.deviceId !== null) {
        userDeviceDetailPage.getDeviceIdContent().contains(userDevice.deviceId);
      }
      userDeviceDetailPage.edit();

      userDeviceUpdatePage.back();
      userDeviceDetailPage.back();
      cy.url().should('include', userDevicePageUrl);
    });

    it('should open UserDevice view, open UserDevice edit and save', () => {
      cy.visit(userDevicePageUrl);
      userDeviceComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      userDeviceDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      userDeviceDetailPage.edit();

      userDeviceUpdatePage.save();
      cy.url().should('include', userDevicePageUrl);
    });

    it('should delete UserDevice', () => {
      cy.visit(userDevicePageUrl);
      userDeviceComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      userDeviceDetailPage.delete();
      cy.get('ion-alert button:not(.alert-button-role-cancel)').click();

      userDeviceComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE);
      userDevice = undefined;
    });
  });

  describe('creation test', () => {
    beforeEach(() => {
      cy.intercept({
        method: 'POST',
        url: userDeviceApiUrl,
        times: 1,
      }).as('entitiesPost');
    });

    afterEach(() => {
      if (userDevice) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${userDeviceApiUrl}/${userDevice.id}`,
        }).then(() => {
          userDevice = undefined;
        });
      }
    });

    it('should create UserDevice', () => {
      cy.visit(userDevicePageUrl + '/new');

      userDeviceUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);
      if (userDeviceSample.deviceId !== undefined && userDeviceSample.deviceId !== null) {
        userDeviceUpdatePage.setDeviceIdInput(userDeviceSample.deviceId);
      }
      if (userDeviceSample.dateRegistration !== undefined && userDeviceSample.dateRegistration !== null) {
        userDeviceUpdatePage.setDateRegistrationInput(userDeviceSample.dateRegistration);
      }
      if (userDeviceSample.lastUpdate !== undefined && userDeviceSample.lastUpdate !== null) {
        userDeviceUpdatePage.setLastUpdateInput(userDeviceSample.lastUpdate);
      }
      userDeviceUpdatePage.save();

      cy.wait('@entitiesPost').then(({ response }) => {
        const { body } = response;
        userDevice = body;
      });

      userDeviceComponentsPage.getPageTitle().contains(COMPONENT_TITLE);
    });
  });
});
