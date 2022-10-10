import { TestBed } from '@angular/core/testing';

import { HerbCartService } from './herb-cart.service';

describe('HerbCartService', () => {
  let service: HerbCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerbCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
