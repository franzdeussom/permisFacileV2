import { TestBed } from '@angular/core/testing';

import { GenerateUserServiceService } from './generate-user-service.service';

describe('GenerateUserServiceService', () => {
  let service: GenerateUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
