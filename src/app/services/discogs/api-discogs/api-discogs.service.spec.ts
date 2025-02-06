import { TestBed } from '@angular/core/testing';

import { ApiDiscogsService } from './api-discogs.service';

describe('ApiDiscogsService', () => {
  let service: ApiDiscogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDiscogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
