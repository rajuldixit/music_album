import { TestBed } from '@angular/core/testing';
import { DataManager } from './data-manager.service';

describe('DataManager', () => {
  let service: DataManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should format data', () => {
    const response = {
      genres: [
        { "id": 5, "name": "Pop" }
      ],
      videos: [
        {
          "id": 501437,
          "artist": "Pants Velour",
          "title": "All In",
          "release_year": 2014,
          "genre_id": 14,
          "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
        }
      ]
    };
    spyOn((service as any), 'generateGenresList');
    spyOn((service as any), 'generateVideosList');
    (service as any).formatData(response);
    expect((service as any).generateGenresList).toHaveBeenCalledWith(response.genres);
  });

  fit('should generate genres object', () => {
    const  genres = [
      { "id": 5, "name": "Pop" }
    ];
    const genreObj = {
      5: {id: 5, name: 'Pop'}
    };
    (service as any).generateGenresList(genres);
    expect((service as any).genreList).toEqual(genreObj);
  });

  fit('should generate videos array with known genre id', () => {
    const videos = [
      {
        "id": 501437,
        "artist": "Pants Velour",
        "title": "All In",
        "release_year": 2014,
        "genre_id": 14,
        "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
      }
    ];
    const genreObj = {
      14: {id: 14, name: 'Rap/Hip-Hop'}
    };

    const videosList = [
      {
        artist: "Pants Velour",
        genreId: 14,
        genreName: "Rap/Hip-Hop",
        id: 501437,
        imageUrl: "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg",
        releaseYear: 2014,
        title: "All In"
      }
    ];

    (service as any).generateVideosList(videos, genreObj);
    expect((service as any).videos).toEqual(videosList);
  });

});
