import { TestBed } from '@angular/core/testing';

import { FilterAlbumManager } from './filter-album.service';

describe('FilterAlbumManager', () => {
  let service: FilterAlbumManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterAlbumManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
