import { TestBed } from '@angular/core/testing';

import { GlossariService } from './glossari.service';

describe('GlossariService', () => {
  let service: GlossariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlossariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
