import { Genres, Videos } from './data.interface';
import { DataService } from './../../services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManager {
  private genreList: Genres = {id:0, name: ''};
  private videos: Videos[] = new Array<Videos>();

  constructor(private dataService: DataService) { }

  retrieveData() {
   return new Promise((resolve, reject) => {
      this.dataService.fetch().then(response => {
          let videos = this.formatData(response.data);
          let data = {genres: response.data.genres, videos: videos}
          resolve(data);
        })
        .catch(err => {
          reject({ "error :": err });
        });
    });
  }

  formatData(responses) {
    let genres = this.generateGenresList(responses.genres);
    let videos = this.generateVideosList(responses.videos, genres);
    return videos;
  }

  generateGenresList(genres) {
    genres.forEach(element => {
      this.genreList[element.id] =
      {id: element.id,
        name: element.name
      };
    });
    return this.genreList;
  }

  generateVideosList(videos, genres) {
    videos.forEach(element => {
      let video: Videos = {
        id: element.id,
        artist: element.artist,
        title: element.title,
        releaseYear: element.release_year,
        imageUrl: element.image_url,
        genreName: '',
        genreId: element.genre_id
      }
      if(genres[element.genre_id]) {
        video.genreName = genres[element.genre_id].name
      } else {
        video.genreName = 'anonymous'
      }
      this.videos.push(video);
    });
    return this.videos;
  }
}
