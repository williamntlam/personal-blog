import { TestBed } from '@angular/core/testing';

import { BlogData } from './blog-data';

describe('BlogData', () => {
  let service: BlogData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
