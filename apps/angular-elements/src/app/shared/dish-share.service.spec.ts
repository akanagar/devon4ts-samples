import { TestBed } from '@angular/core/testing';

import { DishShareService } from './dish-share.service';

describe('DishShareService', () => {
  let service: DishShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
