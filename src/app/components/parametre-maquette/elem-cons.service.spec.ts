import { TestBed } from '@angular/core/testing';

import { ElemConsService } from './elem-cons.service';

describe('ElemConsService', () => {
  let service: ElemConsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElemConsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
