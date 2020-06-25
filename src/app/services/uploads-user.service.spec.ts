import { TestBed } from '@angular/core/testing';

import { UploadsUserService } from './uploads-user.service';

describe('UploadsUserService', () => {
  let service: UploadsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
