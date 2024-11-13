import { TestBed } from '@angular/core/testing';

import { QuestionariService } from './questionari.service';

describe('QuestionariService', () => {
  let service: QuestionariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
