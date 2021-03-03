import { TestBed } from '@angular/core/testing';

import { LupuloService } from './lupulo.service';

describe('LupuloService', () => {
  let service: LupuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LupuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
