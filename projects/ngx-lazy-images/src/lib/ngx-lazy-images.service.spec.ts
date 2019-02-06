import { TestBed } from '@angular/core/testing';

import { NgxLazyImagesService } from './ngx-lazy-images.service';

describe('NgxLazyImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLazyImagesService = TestBed.get(NgxLazyImagesService);
    expect(service).toBeTruthy();
  });
});
