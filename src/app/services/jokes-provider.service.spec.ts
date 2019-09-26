import { TestBed } from '@angular/core/testing';

import { JokesProviderService } from './jokes-provider.service';

describe('JokesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokesProviderService = TestBed.get(JokesProviderService);
    expect(service).toBeTruthy();
  });
});
