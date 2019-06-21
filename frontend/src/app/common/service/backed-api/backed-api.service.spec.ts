import { TestBed } from '@angular/core/testing';

import { BackedApiService } from './backed-api.service';

describe('BackedApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackedApiService = TestBed.get(BackedApiService);
    expect(service).toBeTruthy();
  });
});
