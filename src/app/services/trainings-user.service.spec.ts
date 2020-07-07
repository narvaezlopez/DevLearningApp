import { TestBed } from '@angular/core/testing';

import { TrainingsUserService } from './trainings-user.service';

describe('TrainingsUserService', () => {
  let service: TrainingsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
