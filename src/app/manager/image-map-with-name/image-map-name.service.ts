import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageMapNameManager {

  constructor() { }

  imagesMapWithGenreNames(list) {
    console.log(list)
    let genreCardData = new Array();
    list.forEach(element => {
      let card = {
        name: element,
        imageURL: this.getImageUrl(element)
      }
      genreCardData.push(card);
    });
    return genreCardData;
  };

  getImageUrl(item) {
    let baseUrl = './../../../assets/images/';
    switch(item) {
      case 'Pop':
        baseUrl = baseUrl + 'pop.jpg';
        break;

      case 'Rap/Hip-Hop':
        baseUrl = baseUrl + 'Rap-Hip-Hop.jfif';
        break;

      case 'Rock':
        baseUrl = baseUrl + 'Rock.jpg';
        break;

      case 'Electronic/Dance':
        baseUrl = baseUrl + 'Electronic-Dance.jpg';
        break;

      case 'Alternative/Indie':
        baseUrl = baseUrl + 'Alternative-Indie.jfif';
        break;

      case 'Hard Rock/Metal':
        baseUrl = baseUrl + 'Hard Rock Metal.jfif';
        break;

      case 'Jazz':
        baseUrl = baseUrl + 'Jazz.jpg';
        break;

      case 'Latin':
        baseUrl = baseUrl + 'Latin.png';
        break;

      case 'Country':
        baseUrl = baseUrl + 'Country.jfif';
        break;

      case 'Religious/Spiritual':
        baseUrl = baseUrl + 'Religious Spiritual.jpg';
        break;

      case 'Holiday':
        baseUrl = baseUrl + 'Holiday.jfif';
        break;

      case 'Folk/Americana':
        baseUrl = baseUrl + 'Folk-Americana.jpg';
        break;

      case 'Classical':
        baseUrl = baseUrl + 'Classical.jfif';
        break;

      case 'Regional Popular':
        baseUrl = baseUrl + 'Regional Popular.jfif';
        break;

      case 'Blues':
        baseUrl = baseUrl + 'Blues.jpg';
        break;

      case 'Soundtracks':
        baseUrl = baseUrl + 'Soundtracks.png';
        break;

      case 'World/Roots':
        baseUrl = baseUrl + 'roots.jpg';
        break;

      case 'Reggae':
        baseUrl = baseUrl + 'Reggae.png';
        break;
    }
    return baseUrl;
  }
}
