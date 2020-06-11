import { TestBed } from '@angular/core/testing';

import { BadgeUserService } from './badge-user.service';

describe('BadgeUserService', () => {
  let service: BadgeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
