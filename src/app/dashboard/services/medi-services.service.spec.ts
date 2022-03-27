import { TestBed } from '@angular/core/testing';

import { MediServicesService } from './medi-services.service';

describe('MediServicesService', () => {
  let service: MediServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
