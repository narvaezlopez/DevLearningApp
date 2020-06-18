import { TestBed } from '@angular/core/testing';

import { ChallengesUserService } from './challenges-user.service';

describe('ChallengesUserService', () => {
  let service: ChallengesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
