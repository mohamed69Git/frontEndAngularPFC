import { TestBed } from '@angular/core/testing';

import { ElementsConstitutifsService } from './elements-constitutifs.service';

describe('ElementsConstitutifsService', () => {
  let service: ElementsConstitutifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsConstitutifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
