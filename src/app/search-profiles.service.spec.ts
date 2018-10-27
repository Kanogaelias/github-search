import { TestBed } from '@angular/core/testing';

import { SearchProfilesService } from './search-profiles.service';

describe('SearchProfilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchProfilesService = TestBed.get(SearchProfilesService);
    expect(service).toBeTruthy();
  });
});
