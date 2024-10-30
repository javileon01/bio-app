import { TestBed } from '@angular/core/testing';

import { InformacioService } from './informacio.service';

describe('InformacioService', () => {
  let service: InformacioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
