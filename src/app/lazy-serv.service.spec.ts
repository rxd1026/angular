import { TestBed } from '@angular/core/testing';

import { LazyServService } from './lazy-serv.service';

describe('LazyServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyServService = TestBed.get(LazyServService);
    expect(service).toBeTruthy();
  });
});
