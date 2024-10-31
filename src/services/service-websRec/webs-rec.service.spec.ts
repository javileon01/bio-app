import { TestBed } from '@angular/core/testing';

import { WebsRecService } from './webs-rec.service';

describe('WebsRecService', () => {
  let service: WebsRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
