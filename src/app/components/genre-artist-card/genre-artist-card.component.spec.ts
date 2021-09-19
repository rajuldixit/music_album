import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreArtistCardComponent } from './genre-artist-card.component';

describe('GenreArtistCardComponent', () => {
  let component: GenreArtistCardComponent;
  let fixture: ComponentFixture<GenreArtistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreArtistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
