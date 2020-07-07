import { TestBed } from '@angular/core/testing';

import { AdvancesUserService } from './advances-user.service';

describe('AdvancesUserService', () => {
  let service: AdvancesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
