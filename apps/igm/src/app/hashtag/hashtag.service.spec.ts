import { TestBed } from '@angular/core/testing';

import { HashtagService } from './hashtag.service';

describe('HashtagsService', () => {
  let service: HashtagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HashtagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
