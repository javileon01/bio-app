import { TestBed } from '@angular/core/testing';

import { VideosQuizService } from './videos-quiz.service';

describe('VideosQuizService', () => {
  let service: VideosQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
