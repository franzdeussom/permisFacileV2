import { TestBed } from '@angular/core/testing';

import { DetailsIdService } from './details-id.service';

describe('DetailsIdService', () => {
  let service: DetailsIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
