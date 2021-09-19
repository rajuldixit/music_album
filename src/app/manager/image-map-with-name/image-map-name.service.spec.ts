import { TestBed } from '@angular/core/testing';

import { ImageMapNameManager } from './image-map-name.service';

describe('ImageMapNameManager', () => {
  let service: ImageMapNameManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageMapNameManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
