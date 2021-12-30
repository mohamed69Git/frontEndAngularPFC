import { TestBed } from '@angular/core/testing';

import { UeueService } from './ueue.service';

describe('UeueService', () => {
  let service: UeueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UeueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
