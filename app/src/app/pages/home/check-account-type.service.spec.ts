import { TestBed } from '@angular/core/testing';

import { CheckAccountTypeService } from './check-account-type.service';

describe('CheckAccountTypeService', () => {
  let service: CheckAccountTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAccountTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
