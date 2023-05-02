import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class UserDeviceComponentsPage extends EntityComponentsPage {
  pageSelector = 'page-user-device';
}

export class UserDeviceUpdatePage extends EntityUpdatePage{
  pageSelector = 'page-user-device-update';

  setDeviceIdInput(deviceId: string) {
    this.setInputValue('deviceId', deviceId);
  }

  setDateRegistrationInput(dateRegistration: string) {
    this.setDate('dateRegistration', dateRegistration);
  }

  setLastUpdateInput(lastUpdate: string) {
    this.setDate('lastUpdate', lastUpdate);
  }
}

export class UserDeviceDetailPage extends EntityDetailPage {
  pageSelector = 'page-user-device-detail';

  getDeviceIdContent() {
    return cy.get('#deviceId-content');
  }

  getDateRegistrationContent() {
    return cy.get('#dateRegistration-content');
  }

  getLastUpdateContent() {
    return cy.get('#lastUpdate-content');
  }
}
