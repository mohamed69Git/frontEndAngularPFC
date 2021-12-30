import { TestBed } from '@angular/core/testing';

import { MaquetteService } from './maquette.service';

describe('MaquetteService', () => {
  let service: MaquetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
