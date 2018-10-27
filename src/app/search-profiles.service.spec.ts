iimport { TestBed, inject } from '@angular/core/testing';

import { SearchProfilesService } from './search-profiles.service';

describe('SearchProfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchProfilesService]
    });
  });

  it('should ...', inject([SearchProfilesService], (service: SearchProfilesService) => {
    expect(service).toBeTruthy();
  }));
});