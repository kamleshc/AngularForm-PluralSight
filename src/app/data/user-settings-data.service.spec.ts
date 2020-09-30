import { TestBed } from '@angular/core/testing';

import { UserSettingsDataService } from './user-settings-data.service';

describe('UserSettingsDataService', () => {
  let service: UserSettingsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
